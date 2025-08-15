/**
 * Quiz Application - Part-based Version with Answer Randomization
 */
class QuizApp {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.markedQuestions = [];
        this.score = 0;
        this.timeStart = null;
        this.timeEnd = null;
        this.showDetailedResults = false;
        this.sidebarVisible = true;
        this.questionsPerPart = 10;
        this.parts = [];
        this.currentPart = 0;
        this.randomizeAnswers = true;
        this.questionAnswerMaps = []; // Lưu mapping câu trả lời đã random
        
        this.init();
    }

    init() {
        this.updateTotalQuestions();
        this.showScreen('setup');
        this.setupEvents();
    }

    setupEvents() {
        // Event cho input enter
        const numQuestionsInput = document.getElementById('numQuestions');
        if (numQuestionsInput) {
            numQuestionsInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('quizScreen') && document.getElementById('quizScreen').style.display === 'block') {
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.previousQuestion();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextQuestion();
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        e.preventDefault();
                        this.selectOption(parseInt(e.key) - 1);
                        break;
                    case 'Escape':
                        e.preventDefault();
                        this.toggleSidebar();
                        break;
                }
            }
        });
    }

    showScreen(screenName) {
        const screens = {
            'setup': 'setupScreen',
            'quiz': 'quizScreen', 
            'results': 'resultsScreen'
        };
        
        Object.values(screens).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none';
            }
        });
        
        const activeScreen = document.getElementById(screens[screenName]);
        if (activeScreen) {
            activeScreen.style.display = 'block';
        }
    }

    updateTotalQuestions() {
        const totalElement = document.getElementById('totalQuestions');
        if (totalElement && typeof questionBank !== 'undefined') {
            totalElement.textContent = questionBank.length;
            const numQuestionsInput = document.getElementById('numQuestions');
            if (numQuestionsInput) {
                numQuestionsInput.max = questionBank.length;
            }
        }
    }

    startQuiz() {
        const numQuestionsInput = document.getElementById('numQuestions');
        const questionsPerPartSelect = document.getElementById('questionsPerPart');
        const randomizeAnswersCheckbox = document.getElementById('randomizeAnswers');
        
        if (!numQuestionsInput || !questionsPerPartSelect) return;
        
        const numQuestions = parseInt(numQuestionsInput.value);
        this.questionsPerPart = parseInt(questionsPerPartSelect.value);
        this.randomizeAnswers = randomizeAnswersCheckbox ? randomizeAnswersCheckbox.checked : true;
        
        if (!this.validateInput(numQuestions)) {
            return;
        }
        
        this.initializeQuiz(numQuestions);
        this.showScreen('quiz');
        this.timeStart = new Date();
        this.setupQuizButtons();
        this.setupParts();
        this.setupQuestionList();
        this.displayQuestion();
    }

    validateInput(numQuestions) {
        if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > questionBank.length) {
            alert(`Vui lòng nhập số từ 1 đến ${questionBank.length}`);
            return false;
        }
        return true;
    }

    initializeQuiz(numQuestions) {
        this.currentQuestions = this.getRandomQuestions(questionBank, numQuestions);
        this.processQuestionsWithRandomization();
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        this.markedQuestions = new Array(this.currentQuestions.length).fill(false);
        this.score = 0;
        this.showDetailedResults = false;
        this.sidebarVisible = true;
        this.currentPart = 0;
        this.createParts();
    }

    getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    // Xử lý random đáp án cho tất cả câu hỏi
    processQuestionsWithRandomization() {
        this.questionAnswerMaps = [];
        
        this.currentQuestions = this.currentQuestions.map((question, questionIndex) => {
            if (this.randomizeAnswers) {
                const { randomizedQuestion, answerMap } = this.randomizeQuestionAnswers(question);
                this.questionAnswerMaps[questionIndex] = answerMap;
                return randomizedQuestion;
            } else {
                // Nếu không random, tạo map tuần tự
                this.questionAnswerMaps[questionIndex] = [0, 1, 2, 3];
                return { ...question };
            }
        });
    }

    // Random thứ tự đáp án cho một câu hỏi
    randomizeQuestionAnswers(question) {
        const originalOptions = [...question.options];
        const originalCorrect = question.correct;
        
        // Tạo array chứa index và shuffle
        const indices = [0, 1, 2, 3];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Sắp xếp lại options theo thứ tự mới
        const randomizedOptions = indices.map(index => originalOptions[index]);
        
        // Tìm vị trí mới của đáp án đúng
        const newCorrectIndex = indices.indexOf(originalCorrect);
        
        return {
            randomizedQuestion: {
                ...question,
                options: randomizedOptions,
                correct: newCorrectIndex
            },
            answerMap: indices // Map từ vị trí mới về vị trí cũ
        };
    }

    createParts() {
        this.parts = [];
        const totalQuestions = this.currentQuestions.length;
        
        // Đảm bảo ít nhất 1 part
        if (totalQuestions === 0) return;
        
        for (let i = 0; i < totalQuestions; i += this.questionsPerPart) {
            const endIndex = Math.min(i + this.questionsPerPart, totalQuestions);
            this.parts.push({
                startIndex: i,
                endIndex: endIndex,
                questions: this.currentQuestions.slice(i, endIndex)
            });
        }
    }

    setupQuizButtons() {
        // Nút trang chủ
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.goHome();
            };
        }

        // Nút toggle sidebar
        const panelBtn = document.getElementById('questionPanelBtn');
        if (panelBtn) {
            panelBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleSidebar();
            };
        }

        // Nút đánh dấu
        const markBtn = document.getElementById('markLaterBtn');
        if (markBtn) {
            markBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMarkForLater();
            };
        }
    }

    setupParts() {
        const partsGrid = document.getElementById('partsGrid');
        if (!partsGrid) return;

        partsGrid.innerHTML = '';

        this.parts.forEach((part, index) => {
            const btn = document.createElement('button');
            btn.className = 'part-btn';
            btn.textContent = `Phần ${index + 1}`;
            btn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.switchToPart(index);
            };
            partsGrid.appendChild(btn);
        });

        this.updatePartsDisplay();
    }

    updatePartsDisplay() {
        const buttons = document.querySelectorAll('.part-btn');
        buttons.forEach((btn, index) => {
            btn.classList.remove('active');
            if (index === this.currentPart) {
                btn.classList.add('active');
            }
        });
    }

    switchToPart(partIndex) {
        if (partIndex >= 0 && partIndex < this.parts.length) {
            this.currentPart = partIndex;
            this.updatePartsDisplay();
            this.setupQuestionList();
            
            // Chuyển đến câu đầu tiên của phần này
            this.currentQuestionIndex = this.parts[partIndex].startIndex;
            this.displayQuestion();
        }
    }

    setupQuestionList() {
        const questionList = document.getElementById('questionList');
        const currentPartTitle = document.getElementById('currentPartTitle');
        
        if (!questionList || !currentPartTitle) return;

        const currentPartData = this.parts[this.currentPart];
        currentPartTitle.textContent = `Phần ${this.currentPart + 1}`;
        
        questionList.innerHTML = '';

        for (let i = currentPartData.startIndex; i < currentPartData.endIndex; i++) {
            const item = document.createElement('div');
            item.className = 'question-item';
            item.textContent = i + 1;
            item.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.goToQuestion(i);
            };
            questionList.appendChild(item);
        }

        this.updateQuestionList();
    }

    updateQuestionList() {
        const items = document.querySelectorAll('.question-item');
        const currentPartData = this.parts[this.currentPart];
        
        items.forEach((item, localIndex) => {
            const globalIndex = currentPartData.startIndex + localIndex;
            item.className = 'question-item';
            
            if (globalIndex === this.currentQuestionIndex) {
                item.classList.add('current');
            }
            
            if (this.userAnswers[globalIndex] !== null) {
                item.classList.add('answered');
            }
            
            if (this.markedQuestions[globalIndex]) {
                item.classList.add('marked');
            }
        });
    }

    goToQuestion(questionIndex) {
        if (questionIndex >= 0 && questionIndex < this.currentQuestions.length) {
            this.currentQuestionIndex = questionIndex;
            
            // Tự động chuyển part nếu cần
            const newPart = Math.floor(questionIndex / this.questionsPerPart);
            if (newPart !== this.currentPart) {
                this.currentPart = newPart;
                this.updatePartsDisplay();
                this.setupQuestionList();
            }
            
            this.displayQuestion();
        }
    }

    toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
        const sidebar = document.getElementById('quizSidebar');
        const btn = document.getElementById('questionPanelBtn');
        
        if (sidebar && btn) {
            if (this.sidebarVisible) {
                sidebar.classList.remove('hidden');
                btn.textContent = '✖️ Ẩn Sidebar';
            } else {
                sidebar.classList.add('hidden');
                btn.textContent = '📋 Hiện Sidebar';
            }
        }
    }

    goHome() {
        if (confirm('Bạn có chắc chắn muốn về trang chủ? Tiến trình làm bài sẽ bị mất.')) {
            this.showScreen('setup');
            const numQuestionsInput = document.getElementById('numQuestions');
            if (numQuestionsInput) {
                numQuestionsInput.value = 5;
            }
        }
    }

    toggleMarkForLater() {
        this.markedQuestions[this.currentQuestionIndex] = !this.markedQuestions[this.currentQuestionIndex];
        this.updateMarkButton();
        this.updateQuestionList();
    }

    updateMarkButton() {
        const btn = document.getElementById('markLaterBtn');
        if (btn) {
            if (this.markedQuestions[this.currentQuestionIndex]) {
                btn.textContent = '🔖 Đã đánh dấu';
                btn.classList.add('marked');
            } else {
                btn.textContent = '🔖 Đánh dấu làm sau';
                btn.classList.remove('marked');
            }
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        this.updateQuestionInfo();
        this.updateProgressBar();
        this.renderQuestion(question);
        this.updateNavigation();
        this.updateMarkButton();
        this.updateQuestionList();
    }

    updateQuestionInfo() {
        const questionNumberEl = document.getElementById('questionNumber');
        if (questionNumberEl) {
            questionNumberEl.textContent = 
                `Câu ${this.currentQuestionIndex + 1}/${this.currentQuestions.length}`;
        }
    }

    updateProgressBar() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    renderQuestion(question) {
        const questionTextEl = document.getElementById('questionText');
        if (questionTextEl) {
            questionTextEl.textContent = question.question;
        }

        const optionsList = document.getElementById('optionsList');
        if (optionsList) {
            optionsList.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const li = this.createOptionElement(option, index);
                optionsList.appendChild(li);
            });
        }
    }

    createOptionElement(option, index) {
        const li = document.createElement('li');
        li.className = 'option';
        li.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}.</span> ${option}`;
        li.onclick = () => this.selectOption(index);
        
        if (this.userAnswers[this.currentQuestionIndex] === index) {
            li.classList.add('selected');
        }
        
        return li;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex === 0 ? 'none' : 'inline-block';
        }
        
        if (nextBtn) {
            nextBtn.textContent = this.currentQuestionIndex === this.currentQuestions.length - 1 
                ? 'Hoàn Thành' : 'Câu Tiếp';
        }
    }

    selectOption(optionIndex) {
        if (optionIndex < 0 || optionIndex >= this.currentQuestions[this.currentQuestionIndex].options.length) {
            return;
        }
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        this.updateOptionSelection(optionIndex);
        this.updateQuestionList();
    }

    updateOptionSelection(selectedIndex) {
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === selectedIndex) {
                option.classList.add('selected');
            }
        });
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            
            // Tự động chuyển part nếu cần
            const newPart = Math.floor(this.currentQuestionIndex / this.questionsPerPart);
            if (newPart !== this.currentPart) {
                this.currentPart = newPart;
                this.updatePartsDisplay();
                this.setupQuestionList();
            }
            
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            
            // Tự động chuyển part nếu cần
            const newPart = Math.floor(this.currentQuestionIndex / this.questionsPerPart);
            if (newPart !== this.currentPart) {
                this.currentPart = newPart;
                this.updatePartsDisplay();
                this.setupQuestionList();
            }
            
            this.displayQuestion();
        }
    }

    finishQuiz() {
        // Chỉ kiểm tra câu thực sự chưa làm (chưa chọn đáp án)
        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;
        
        if (unansweredCount > 0) {
            if (!confirm(`Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?`)) {
                return;
            }
        }
        
        this.completeQuiz();
    }

    completeQuiz() {
        this.timeEnd = new Date();
        this.calculateScore();
        this.showResults();
        this.showScreen('results');
    }

    calculateScore() {
        this.score = 0;
        for (let i = 0; i < this.currentQuestions.length; i++) {
            if (this.userAnswers[i] === this.currentQuestions[i].correct) {
                this.score++;
            }
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        const timeTaken = Math.round((this.timeEnd - this.timeStart) / 1000);
        
        this.updateResultsDisplay(percentage, timeTaken);
        this.showResultMessage(percentage);
        this.renderDetailedResults();
    }

    updateResultsDisplay(percentage, timeTaken) {
        const elements = {
            scoreDisplay: `${this.score}/${this.currentQuestions.length}`,
            correctCount: this.score,
            incorrectCount: this.currentQuestions.length - this.score,
            accuracyRate: percentage + '%'
        };
        
        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elements[id];
            }
        });
    }

    showResultMessage(percentage) {
        const messageEl = document.getElementById('scoreMessage');
        if (!messageEl) return;
        
        let message = '';
        if (percentage >= 90) {
            message = '🏆 Xuất sắc! Bạn thật tuyệt vời!';
        } else if (percentage >= 70) {
            message = '👏 Tốt lắm! Bạn đã làm rất tốt!';
        } else if (percentage >= 50) {
            message = '👍 Không tệ! Cố gắng hơn nữa nhé!';
        } else {
            message = '💪 Đừng nản lòng! Hãy thử lại!';
        }
        messageEl.textContent = message;
    }

    renderDetailedResults() {
        const detailsContainer = document.getElementById('detailedResults');
        if (!detailsContainer) return;

        let correctHTML = '<div class="correct-answers"><h3>✅ Câu trả lời đúng:</h3>';
        let incorrectHTML = '<div class="incorrect-answers"><h3>❌ Câu trả lời sai:</h3>';
        
        let hasCorrect = false;
        let hasIncorrect = false;

        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correct;
            const isCorrect = userAnswer === correctAnswer;

            if (isCorrect) {
                hasCorrect = true;
                correctHTML += `
                    <div class="result-item correct">
                        <div class="question-text">${index + 1}. ${question.question}</div>
                        <div class="answer-text">
                            <strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}
                        </div>
                    </div>
                `;
            } else {
                hasIncorrect = true;
                incorrectHTML += `
                    <div class="result-item incorrect">
                        <div class="question-text">${index + 1}. ${question.question}</div>
                        <div class="answer-text">
                            <strong>Bạn chọn:</strong> ${userAnswer !== null ? String.fromCharCode(65 + userAnswer) + '. ' + question.options[userAnswer] : 'Không chọn'}<br>
                            <strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}
                        </div>
                    </div>
                `;
            }
        });

        correctHTML += '</div>';
        incorrectHTML += '</div>';

        let finalHTML = '';
        if (hasIncorrect) {
            finalHTML += incorrectHTML;
        }
        if (hasCorrect) {
            finalHTML += correctHTML;
        }

        detailsContainer.innerHTML = finalHTML;
    }

    toggleDetailedResults() {
        this.showDetailedResults = !this.showDetailedResults;
        const detailsContainer = document.getElementById('detailedResults');
        const toggleBtn = document.getElementById('toggleDetailsBtn');
        
        if (detailsContainer && toggleBtn) {
            if (this.showDetailedResults) {
                detailsContainer.style.display = 'block';
                toggleBtn.textContent = 'Ẩn Chi Tiết';
            } else {
                detailsContainer.style.display = 'none';
                toggleBtn.textContent = 'Xem Chi Tiết';
            }
        }
    }

    restartQuiz() {
        this.showScreen('setup');
        const numQuestionsInput = document.getElementById('numQuestions');
        if (numQuestionsInput) {
            numQuestionsInput.value = 5;
        }
        this.showDetailedResults = false;
    }
}

// Khởi tạo ứng dụng
let quizApp;

document.addEventListener('DOMContentLoaded', function() {
    quizApp = new QuizApp();
    
    // Setup question count change handler
    setTimeout(() => {
        setupQuestionInputHandlers();
    }, 100);
});

// Function xử lý thay đổi số câu hỏi
function handleQuestionCountChange() {
    const select = document.getElementById('numQuestionsSelect');
    const input = document.getElementById('numQuestions');
    
    if (select.value && select.value !== 'custom') {
        input.value = select.value;
        input.disabled = true;
    } else if (select.value === 'custom') {
        input.disabled = false;
        input.focus();
        input.value = '';
    } else {
        input.disabled = false;
    }
}

// Setup input handlers
function setupQuestionInputHandlers() {
    const input = document.getElementById('numQuestions');
    const select = document.getElementById('numQuestionsSelect');
    
    if (input && select) {
        input.addEventListener('input', function() {
            if (this.value) {
                select.value = '';
            }
        });
        
        // Khởi tạo trạng thái ban đầu
        handleQuestionCountChange();
    }
}

// Functions for HTML compatibility
function startQuiz() {
    if (quizApp) {
        quizApp.startQuiz();
    }
}

function nextQuestion() {
    if (quizApp) {
        quizApp.nextQuestion();
    }
}

function previousQuestion() {
    if (quizApp) {
        quizApp.previousQuestion();
    }
}

function selectOption(index) {
    if (quizApp) {
        quizApp.selectOption(index);
    }
}

function restartQuiz() {
    if (quizApp) {
        quizApp.restartQuiz();
    }
}

function toggleDetailedResults() {
    if (quizApp) {
        quizApp.toggleDetailedResults();
    }
}
