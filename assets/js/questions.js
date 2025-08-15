/**
 * Ngân hàng câu hỏi cho Quiz Trắc Nghiệm
 * 
 * Cấu trúc mỗi câu hỏi:
 * {
 *   question: "Nội dung câu hỏi",
 *   options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
 *   correct: số_thứ_tự_đáp_án_đúng (bắt đầu từ 0)
 * }
 */
const questionBank = [
    {
        "question": "Kinh tế chính trị Mác – Lênin ra đời ở thế kỷ nào?",
        "options": ["Thế kỷ XX", "Thế kỷ XVII", "Thế kỷ XIX", "Thế kỷ XVIII"],
        "correct": 2
    },
    {
        "question": "Kinh tế chính trị Mác – Lênin do ai sáng lập?",
        "options": ["V.I.Lênin", "C.Mác", "Ph.Ăngghen", "Đ.Ricácđô"],
        "correct": 1
    },
    {
        "question": "Khoa học kinh tế chính trị trở thành hệ thống lý luận kinh tế chính trị từ khi nào?",
        "options": ["Từ thế kỷ XVII", "Từ thế kỷ XIX", "Từ thế kỷ XVI", "Từ thế kỷ XVIII"],
        "correct": 3
    },
    {
        "question": "Phương pháp nghiên cứu nào thuộc chuyên ngành kinh tế chính trị Mác - Lênin?",
        "options": ["Phương pháp chứng thực", "Phương pháp đối sánh", "Phương pháp văn bản học", "Phương pháp thống kê"],
        "correct": 3
    },
    {
        "question": "Chủ nghĩa Mác - Lênin gồm những bộ phận nào hợp thành?",
        "options": ["Triết học, Kinh tế học và Chủ nghĩa xã hội khoa học", "Triết học Mác, Kinh tế chính trị và Chủ nghĩa xã hội khoa học", "Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội không tưởng", "Triết học Mác - Lênin, Kinh tế chính trị Mác - Lênin và Chủ nghĩa xã hội khoa học"],
        "correct": 3
    },
    {
        "question": "Kinh tế chính trị Mác - Lênin gồm mấy chức năng cơ bản?",
        "options": ["2", "1", "4", "3"],
        "correct": 2
    },
    {
        "question": "Giá trị lịch sử to lớn của \"Học thuyết giá trị thặng dư\" trong hệ thống lý luận Kinh tế chính trị Mác - Lênin là gì?",
        "options": ["Luận chứng về sự suy tàn của phương thức sản xuất tư bản chủ nghĩa", "Là nền tảng tư tưởng cho giai cấp công nhân và nhân dân lao động", "Tìm ra các quy luật kinh tế cơ bản trong nền kinh tế thị trường tư bản chủ nghĩa", "Chỉ ra những đặc điểm kinh tế của chủ nghĩa tư bản độc quyền"],
        "correct": 1
    },
    {
        "question": "Nêu chính xác những chức năng cơ bản của kinh tế chính trị Mác - Lênin?",
        "options": ["Gồm 4 chức năng cơ bản là: nhận thức, thực tiễn, tổng hợp, phương pháp luận", "Gồm 4 chức năng cơ bản là: nhận thức, thực tiễn, vận dụng, phương pháp luận", "Gồm 4 chức năng cơ bản là: giải thích, thực tiễn, tư tưởng, cải tạo xã hội", "Gồm 4 chức năng cơ bản là: nhận thức, thực tiễn, tư tưởng, phương pháp luận"],
        "correct": 3
    },
    {
        "question": "Đóng góp khoa học lớn nhất của kinh tế chính trị cổ điển Anh vào lĩnh vực lý luận kinh tế chính trị của nhân loại là gì?",
        "options": ["Kinh tế chính trị cổ điển Anh đã rút ra được giá trị là do hao phí lao động tạo ra, giá trị khác với của cải", "Kinh tế chính trị cổ điển Anh tìm ra các quy luật chi phối sự vận động của các hiện tượng và quá trình hoạt động kinh tế", "Kinh tế chính trị cổ điển Anh nghiên cứu các quan hệ kinh tế trong quá trình tái sản xuất, trình bày một cách hệ thống", "Kinh tế chính trị cổ điển Anh nghiên cứu các các phạm trù kinh tế chính trị để rút ra các quy luật kinh tế"],
        "correct": 0
    },
    {
        "question": "Chỉ ra hạn chế lớn nhất trong lý luận kinh tế chính trị của chủ nghĩa trọng nông là gì và cần được thay thế bởi lý luận kinh tế chính trị cổ điển Anh?",
        "options": ["Chủ nghĩa trọng nông luận giải về nhiều phạm trù kinh tế", "Chủ nghĩa trọng nông lý giải những đặc điểm của lĩnh vực lưu thông", "Chủ nghĩa trọng nông lý giải những đặc trưng sản xuất của lĩnh vực nông nghiệp", "Chủ nghĩa trọng nông cho rằng chỉ có nông nghiệp mới là sản xuất"],
        "correct": 3
    },
    {
        "question": "Kinh tế chính trị Mác - Lênin sử dụng chủ yếu phương pháp nghiên cứu nào?",
        "options": ["Phương pháp trừu tượng hóa khoa học", "Phương pháp so sánh, thống kê", "Phương pháp logic kết hợp với lịch sử", "Phương pháp khảo sát, tổng kết thực tiễn"],
        "correct": 0
    },
    {
        "question": "Chức năng nhận thức của kinh tế chính trị Mác - Lênin có vai trò quan trọng như thế nào đối với con người trong xã hội?",
        "options": ["Góp phần làm phong phú tri thức, tư duy lý luận của người lao động và toàn xã hội", "Góp phần làm tăng thêm sự hiểu biết về các quan hệ kinh tế của mỗi con người trong xã hội", "Góp phần giúp con người hiểu sâu hơn về các quy luật kinh tế trong xã hội", "Góp phần làm phong phú tri thức và tư duy lý luận của tất cả những con người trong xã hội"],
        "correct": 0
    },
    {
        "question": "Muốn nhận thức được hiện thực kinh tế khách quan, cần sử dụng phương pháp thích hợp nào của kinh tế chính trị Mác - Lênin?",
        "options": ["Cần sử dụng phương pháp luận biện chứng một cách thích hợp như: quy nap diễn dịch, hệ thống hóa, mô hình hóa", "Cần sử dụng nhiều phương pháp nghiên cứu chuyên ngành thích hợp như: thống kê, so sánh, phân tích tổng hợp", "Cần sử dụng nhiều phương pháp nghiên cứu thích hợp như: trừu tượng hóa khoa học, logic kết hợp với lịch sử", "Cần sử dụng phương pháp luận triết học một cách thích hợp như: khảo sát, tổng kết thực tiễn"],
        "correct": 2
    },
    {
        "question": "Muốn sử dụng tốt phương pháp trừu tượng hóa khoa học của kinh tế chính trị Mác - Lênin cần làm như thế nào?",
        "options": ["Cần loại bỏ yếu tố phản ánh trực tiếp bản chất của đối tượng nghiên cứu", "Cần gạt bỏ yếu tố lợi ích ra khỏi quá trình nghiên cứu các quan hệ kinh tế", "Cần có kỹ năng khoa học xác định đúng giới hạn của sự trừu tượng hóa", "Cần xác định giới hạn của sự trừu tượng hóa phụ thuộc vào đối tượng nghiên cứu"],
        "correct": 2
    },
    {
        "question": "Chức năng thực tiễn của kinh tế chính trị Mác - Lênin có vai trò quan trọng như thế nào đối với sinh viên?",
        "options": ["Giúp sinh viên hiểu sâu hơn về các quy luật kinh tế trong lao động xã hội", "Làm phong phú tri thức, tư duy lý luận của sinh viên trong quá trình lao động", "Là cơ sở khoa học lý luận để sinh viên nhận diện định vị vai trò, trách nhiệm sáng tạo cao cả của mình", "Giúp sinh viên cải tạo được thực tiễn trong quá trình học tập của mình"],
        "correct": 2
    },
    {
        "question": "Chức năng phương pháp luận của kinh tế chính trị Mác - Lênin có vai trò như thế nào đối với sinh viên?",
        "options": ["Là nền tảng lý luận khoa học để sinh viên nhận diện sâu hơn nội hàm của các khái niệm, phạm trù của các khoa học kinh tế", "Là cơ sở khoa học lý luận giúp sinh viên hiểu sâu hơn về các quy luật kinh tế trong lao động xã hội", "Là cơ sở khoa học lý luận làm phong phú tri thức, tư duy lý luận của sinh viên trong quá trình lao động", "Là cơ sở khoa học lý luận để sinh viên nhận diện định vị vai trò, trách nhiệm sáng tạo cao cả của mình"],
        "correct": 0
    },
    {
        "question": "Lý luận kinh tế chính trị của chủ nghĩa trọng nông hướng vào nghiên cứu chủ yếu lĩnh vực nào?",
        "options": ["Lĩnh vực lưu thông trong nền sản xuất tư bản chủ nghĩa", "Lĩnh vực lưu thông trong quá trình tái sản xuất tư bản chủ nghĩa", "Lĩnh vực sản xuất trong nền sản xuất tư bản chủ nghĩa", "Lĩnh vực sản xuất trong nền kinh tế tư bản chủ nghĩa"],
        "correct": 2
    },
    {
        "question": "Chỉ ra những nhà tư tưởng tiêu biểu của kinh tế chính trị tư sản cổ điển Anh (cuối thế kỷ XVIII - đầu thế kỷ thứ XIX)?",
        "options": ["Gi.B.Xay, A.Xmít, A.Mông Crêchiên", "U.Pétti, A.Xmít, Đ.Ricácđô", "A.Xmít, Mantuýt, A.Mông Crêchiên", "A.Mông Crêchiên, U.Pétti, Ph.Kênê"],
        "correct": 1
    },
    {
        "question": "Lý luận kinh tế chính trị của chủ nghĩa trọng thương đặt trọng tâm vào nghiên cứu lĩnh vực nào?",
        "options": ["Lĩnh vực sản xuất trong nền kinh tế hàng hóa", "Lĩnh vực lưu thông trong nền sản xuất tư bản chủ nghĩa", "Lĩnh vực lưu thông trong quá trình tái sản xuất tư bản chủ nghĩa", "Lĩnh vực sản xuất trong nền kinh tế tư bản chủ nghĩa"],
        "correct": 1
    },
    {
        "question": "Xét ở cấp độ cao nhất, mục đích nghiên cứu của kinh tế chính trị Mác - Lênin là gì?",
        "options": ["Nhằm xây dựng đường lối, chính sách phát triển kinh tế - xã hội của một quốc gia", "Nhằm giải quyết mối quan hệ lợi ích trong sự phát triển của mỗi quốc gia", "Nhằm phát hiện ra các quy luật chi phối các quan hệ giữa người với người trong sản xuất và trao đổi", "Nhằm phát hiện ra những nguyên lý và quy luật kinh tế trong sản xuất và trao đổi"],
        "correct": 2
    },
    {
        "question": "Kinh tế chính trị cổ điển Anh tập trung nghiên cứu vấn đề gì trong nền kinh tế tư bản chủ nghĩa?",
        "options": ["Nghiên cứu lĩnh vực sản xuất trong nền sản xuất tư bản chủ nghĩa", "Nghiên cứu các quy luật kinh tế trong nền kinh tế tư bản chủ nghĩa", "Nghiên cứu lĩnh vực lưu thông trong nền sản xuất tư bản chủ nghĩa", "Nghiên cứu các quan hệ kinh tế trong quá trình tái sản xuất và các phạm trù kinh tế chính trị"],
        "correct": 3
    },
    {
        "question": "\"Kinh tế chính trị Mácxít\" có nghĩa là gì?",
        "options": ["Quan điểm của những nhà kinh tế chính trị tiếp cận theo quan điểm kinh tế chính trị của V.I.Lênin", "Quan điểm của những nhà kinh tế chính trị tiếp cận theo quan điểm kinh tế chính trị của C.Mác", "Quan điểm của những nhà kinh tế chính trị tiếp cận theo quan điểm kinh tế chính trị của chủ nghĩa Mác - Lênin", "Quan điểm của những nhà kinh tế chính trị tiếp cận theo quan điểm kinh tế chính trị của Ph.Ăngghen"],
        "correct": 1
    },
    {
        "question": "Thế nào là năng suất lao động?",
        "options": ["Là số lượng sản phẩm sản xuất ra trong một đơn vị thời gian", "Là hiệu quả của lao động trừu tượng", "Là khái niệm gắn liền với hoạt động lao động cụ thể", "Là hiệu quả của lao động cụ thể"],
        "correct": 0
    },
    {
        "question": "Chỉ ra hai thuộc tính của hàng hóa?",
        "options": ["Giá trị sử dụng và giá trị", "Giá trị và giá trị trao đổi", "Giá trị sử dụng và giá trị cá biệt", "Giá trị sử dụng và giá trị trao đổi"],
        "correct": 0
    },
    {
        "question": "Thế nào là lao động cụ thể?",
        "options": ["Là những lao động có thể quan sát được, nhìn thấy được", "Là những lao động ngành nghề riêng biệt", "Là những lao động ngành nghề cụ thể, có mục đích, đối tượng, thao tác và kết quả riêng", "Là hoạt động riêng biệt và có mục đích riêng của con người"],
        "correct": 2
    },
    {
        "question": "Yếu tố nào quyết định đến giá cả hàng hóa?",
        "options": ["Giá trị của hàng hóa", "Quan hệ cung cầu về hàng hóa", "Giá trị sử dụng của hàng hóa", "Mốt thời trang của hàng hóa"],
        "correct": 0
    },
    {
        "question": "Hàng hóa là gì?",
        "options": ["Là những vật phẩm có giá trị cao nhằm thỏa mãn nhu cầu của người sản xuất", "Là sản phẩm của lao động có thể thỏa mãn nhu cầu tiêu dùng của con người", "Là những vật phẩm trên thị trường luôn khan hiếm", "Là sản phẩm của lao động thỏa mãn được nhu cầu tiêu dùng của con người thông qua trao đổi mua, bán"],
        "correct": 3
    },
    {
        "question": "Thế nào là sự phân công lao động xã hội?",
        "options": ["Là sự phân công về lao động diễn ra trong đơn vị sản xuất", "Là sự phân công về lao động, hình thành những ngành, nghề sản xuất khác nhau", "Là chia nhỏ quá trình sản xuất, hình thành những ngành sản xuất khác nhau", "Là sự phân công về lao động đảm bảo quá trình sản xuất đều gắn với thị trường"],
        "correct": 1
    },
    {
        "question": "Quy luật giá trị là gì?",
        "options": ["Là quy luật kinh tế chung của mọi xã hội", "Là quy luật kinh tế cơ bản của sản xuất hàng hóa", "Là quy luật riêng của chủ nghĩa tư bản", "Là quy luật kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội"],
        "correct": 1
    },
    {
        "question": "Giá trị sử dụng của hàng hóa là gì?",
        "options": ["Là hàng hóa có tính hữu ích và mang thuộc tính tự nhiên", "Là công dụng của hàng hóa, mang tính hữu ích cho con người", "Là vật phẩm mang tính hữu ích cho con người khi sử dụng", "Công dụng của hàng hóa, có tính hữu ích và mang thuộc tính tự nhiên"],
        "correct": 3
    },
    {
        "question": "Tiền tệ có mấy chức năng?",
        "options": ["Bốn chức năng", "Năm chức năng", "Ba chức năng", "Một chức năng"],
        "correct": 1
    },
    {
        "question": "Sản xuất hàng hóa là kiểu tổ chức sản xuất ra sản phẩm nhằm mục đích gì?",
        "options": ["Để đưa vào tiêu dùng trong xã hội", "Để trao đổi, mua bán trên thị trường", "Để cho, biếu, tặng mọi người", "Để người sản xuất sử dụng"],
        "correct": 1
    },
    {
        "question": "Điều kiện ra đời và tồn tại của sản xuất hàng hóa là gì?",
        "options": ["Sự tách biệt tương đối về kinh tế giữa các chủ thể trong quá trình sản xuất", "Phân công lao động xã hội và sự tách biệt về kinh tế giữa các chủ thể sản xuất", "Sự phân công lao động trong xã hội và trong các gia đình xuất hiện", "Có sự xuất hiện giai cấp thống trị và chế độ tư hữu về tư liệu sản xuất"],
        "correct": 1
    },
    {
        "question": "Thế nào là nền sản xuất tự cung, tự cấp?",
        "options": ["Là một kiểu tổ chức kinh tế trong đó những sản phẩm được sản xuất ra nhằm mục đích thỏa mãn nhu cầu tiêu dùng của xã hội", "Là một kiểu tổ chức kinh tế trong đó những sản phẩm được sản xuất ra nhằm mục đích thỏa mãn nhu cầu của con người", "Là một kiểu tổ chức kinh tế mà quá trình tái sản xuất gồm ba khâu: sản xuất - trao đổi - tiêu dùng", "Là một kiểu tổ chức kinh tế mà quá trình tái sản xuất chỉ gồm hai khâu: sản xuất - tiêu dùng"],
        "correct": 3
    },
    {
        "question": "Số lượng giá trị sử dụng của hàng hóa phụ thuộc vào những yếu tố nào?",
        "options": ["Trình độ phát triển của khoa học công nghệ", "Chuyên môn hóa sản xuất", "Những điều kiện tự nhiên", "Mong muốn của người tiêu dùng"],
        "correct": 0
    },
    {
        "question": "Bản chất của tiền tệ là gì?",
        "options": ["Tiền tệ là một loại hàng hoá đóng vai trò làm vật ngang giá cho các hàng hoá khác", "Tiền tệ phản ánh quan hệ kinh tế giữa người sản xuất hàng hoá với người tiêu dùng", "Tiền tệ là một loại hàng hoá đặc biệt, được tách khỏi thế giới hàng hoá thông thường, đóng vai trò làm vật ngang giá cho các hàng hoá khác", "Tiền tệ một loại hàng hoá thể hiện lao động xã hội kết tinh trong hàng hoá"],
        "correct": 2
    },
    {
        "question": "Tiền tệ có nguồn gốc từ đâu?",
        "options": ["Sự phân công lao động xã hội", "Các ngân hàng trung ương", "Các điều kiện tự nhiên", "Sự phát triển lâu dài của sản xuất và trao đổi hàng hóa"],
        "correct": 3
    },
    {
        "question": "Chỉ ra phương án trả lời KHÔNG đúng về điều kiện ra đời và tồn tại của sản xuất hàng hóa?",
        "options": ["Có sự tách biệt về kinh tế giữa các chủ thể sản xuất", "Có sự xuất hiện giai cấp thống trị và giai cấp bị trị", "Chế độ tư hữu về tư liệu sản xuất xuất hiện", "Có sự phân công lao động xã hội"],
        "correct": 1
    },
    {
        "question": "Quan hệ giữa giá cả và giá trị như thế nào?",
        "options": ["Giá cả là cơ sở của giá trị", "Giá cả hàng hoá phụ thuộc vào giá trị của vàng, bạc", "Giá trị là yếu tố chủ yếu quy định giá cả", "Giá cả là hình thức biểu hiện bằng tiền của giá trị"],
        "correct": 3
    },
    {
        "question": "Lượng giá trị xã hội của hàng hóa được đo bởi yếu tố nào?",
        "options": ["Hao phí lao động cần thiết của người sản xuất hang hóa", "Hao phí lao động sống của người sản xuất hàng hóa", "Thời gian lao động xã hội cần thiết", "Hao phí vật tư kỹ thuật"],
        "correct": 2
    },
    {
        "question": "Chỉ ra các chủ thể cơ bản trong nền kinh tế thị trường?",
        "options": ["Người sản xuất, người tiêu dùng, nhà nước và người mua", "Người sản xuất, người tiêu dùng, chủ thể trung gian và nhà nước", "Người sản xuất, người tiêu dùng, người mua và người bán", "Người sản xuất, người tiêu dùng, nhà nước và thị trường"],
        "correct": 1
    },
    {
        "question": "Theo nguyên tắc ngang giá, khi nào hai hàng hóa có thể trao đổi được với nhau?",
        "options": ["Có lượng lao động xã hội hao phí để sản xuất ra như nhau", "Có giá trị sử dụng giống nhau", "Cùng do lao động của con người tạo ra", "Cùng hao phí máy móc trang thiết bị"],
        "correct": 0
    },
    {
        "question": "Quy luật căn bản của sản xuất và lưu thông hàng hoá là quy luật nào?",
        "options": ["Quy luật cạnh tranh", "Quy luật cung - cầu", "Quy luật giá trị", "Quy luật lưu thông tiền tệ"],
        "correct": 2
    },
    {
        "question": "Quan hệ tỷ lệ về lượng trong trao đổi giữa các hàng hóa với nhau do cái gì quy định?",
        "options": ["Do quan hệ cung - cầu", "Do tính hữu ích của hàng hóa", "Do ngẫu nhiên", "Do giá trị nội tại của hàng hóa"],
        "correct": 3
    },
    {
        "question": "Lao động trừu tượng là nguồn gốc của cái gì?",
        "options": ["Giá trị trao đổi", "Giá trị hàng hóa", "Giá trị sử dụng", "Của cải"],
        "correct": 1
    },
    {
        "question": "Kết quả của lao động cụ thể là cái gì?",
        "options": ["Là giá trị sử dụng của hàng hóa", "Là giá trị của vật phẩm", "Là giá trị của hàng hóa", "Là giá trị trao đổi của hàng hóa"],
        "correct": 0
    },
    {
        "question": "Quy luật lưu thông tiền tệ phản ánh điều gì?",
        "options": ["Phản ánh mối quan hệ giữa người sản xuất và người tiêu dùng", "Phản ánh số lượng tiền cần cho lưu thông trong mỗi thời kỳ nhất định", "Phản ánh mối quan hệ giữa người mua và người bán", "Phản ánh mối quan hệ giữa cung và cầu"],
        "correct": 1
    },
    {
        "question": "Tính chất hai mặt của lao động sản xuất hàng hóa là gì?",
        "options": ["Lao động cụ thể và lao động trừu tượng", "Lao động quá khứ và lao động sống", "Lao động tư nhân và lao động xã hội", "Lao động giản đơn và lao động phức tạp"],
        "correct": 0
    },
    {
        "question": "Yêu cầu của quy luật giá trị là gì?",
        "options": ["Lưu thông hàng hoá phải tuân thủ nguyên tắc ngang giá và phù hợp với giá trị của hàng hóa", "Quá trình sản xuất và lưu thông hàng hoá phải tiến hành trên cơ sở những hao phí lao động xã hội cần thiết", "Mức hao phí lao động cá biệt của các chủ thể sản xuất phải lớn hơn mức hao phí lao động xã hội cần thiết", "Quá trình sản xuất và lưu thông hàng hoá phải tiến hành trên cơ sở những hao phí lao động cá biệt"],
        "correct": 1
    },
    {
        "question": "Thế nào là thời gian lao động xã hội cần thiết?",
        "options": ["Là khoảng thời gian sản xuất ra vàng, bạc", "Là khoảng thời gian do người có trình độ chuyên môn cao quyết định", "Là khoảng thời gian sản xuất của tuyệt đại bộ phận hàng hoá", "Là khoảng thời gian để sản xuất ra một loại hàng hoá trong điều kiện trình độ kỹ thuật và cường độ lao động trung bình"],
        "correct": 3
    },
    {
        "question": "Điểm giống nhau giữa tăng năng suất lao động và tăng cường độ lao động là gì?",
        "options": ["Đều làm giảm giá trị của một đơn vị hàng hoá", "Đều làm tăng lượng lao động hao phí trong một đơn vị thời gian", "Đều gắn với tiến bộ kỹ thuật - công nghệ", "Đều làm tăng thêm lượng sản phẩm được sản xuất ra trong một đơn vị thời gian"],
        "correct": 3
    },
    {
        "question": "Những chức năng nào của tiền tệ đòi hỏi phải có tiền vàng?",
        "options": ["Chỉ có chức năng thước đo giá trị", "Tất cả 5 chức năng của tiền tệ", "Chức năng thước đo giá trị; chức năng tích luỹ, cất trữ và chức năng tiền tệ thế giới", "Chức năng thước đo giá trị; chức năng tích luỹ, cất trữ"],
        "correct": 2
    },
    {
        "question": "Mâu thuẫn cơ bản của sản xuất hàng hoá là gì?",
        "options": ["Là mâu thuẫn giữa giá trị sử dụng và giá trị", "Là mâu thuẫn giữa lao động tư nhân và lao động xã hội", "Là mâu thuẫn giữa lao động cụ thể và lao động trừu tượng", "Là mâu thuẫn giữa giá trị và giá cả của hàng hoá"],
        "correct": 2
    },
    {
        "question": "Trong những trường hợp sau đây của hao phí lao động cá biệt, trường hợp nào KHÔNG đáp ứng yêu cầu của quy luật giá trị?",
        "options": ["Hao phí lao động cá biệt nhỏ hơn hao phí lao động xã hội cần thiết", "Hao phí lao động cá biệt nhỏ hơn hoặc bằng hao phí lao động xã hội cần thiết", "Hao phí lao động cá biệt lớn hơn hao phí lao động xã hội cần thiết", "Hao phí lao động cá biệt bằng hao phí lao động xã hội cần thiết"],
        "correct": 2
    },
    {
        "question": "Chỉ rõ sự tác động chủ yếu của quy luật giá trị trong nền sản xuất hàng hóa?",
        "options": ["Phân hoá người sản xuất thành người giàu, người nghèo", "Tự phát điều tiết sản xuất và lưu thông hàng hoá", "Kích thích sự phát triển của lực lượng sản xuất", "Làm cho xã hội giàu lên nhanh chóng"],
        "correct": 1
    },
    {
        "question": "Tác dụng điều tiết sản xuất và lưu thông hàng hoá của quy luật giá trị có nghĩa là thế nào?",
        "options": ["Nếu cung lớn hơn cầu thì giá cả sẽ cao hơn giá trị, lợi nhuận sẽ tăng, lao động xã hội được mở rộng", "Nếu cung nhỏ hơn cầu thì giá cả sẽ cao hơn giá trị, lợi nhuận thu được sẽ nhiều, lao động xã hội được thu hút, quy mô sản xuất được mở rộng", "Hàng hoá được lưu chuyển từ thị trường có giá cả cao đến thị trường có giá cả thấp", "Nếu cung nhỏ hơn cầu thì giá cả sẽ thấp hơn giá trị, lợi nhuận thu được sẽ nhiều, lao động xã hội được thu hút, quy mô sản xuất được mở rộng"],
        "correct": 1
    },
    {
        "question": "\"Lao động là cha, còn đất là mẹ của mọi của cải\". Khái niệm lao động trong câu nói này là lao động nào?",
        "options": ["Lao động cụ thể", "Lao động giản đơn", "Lao động trừu tượng", "Lao động phức tạp"],
        "correct": 0
    },
    {
        "question": "Chất của giá trị (thực thể giá trị) hàng hóa là gì?",
        "options": ["Là giá trị được tạo ra thông qua trao đổi hàng hóa", "Là lao động xã hội của người sản xuất hàng hóa kết tinh trong hàng hóa", "Là lao động cụ thê kết tinh trong hàng hóa", "Là giá trị phản ánh quan hệ giữ người sản xuất với người tiêu dùng"],
        "correct": 1
    },
    {
        "question": "Phương hướng cơ bản và lâu dài để tăng sản phẩm cho xã hội là gì?",
        "options": ["Mở rộng quy mô sản xuất và nâng cao trình độ khoa học công nghệ", "Tăng cường độ lao động", "Kéo dài thời gian lao động", "Tăng năng suất lao động"],
        "correct": 3
    },
    {
        "question": "Sức lao động là gì?",
        "options": ["Toàn bộ sức trí lực tồn tại trong mỗi con người", "Toàn bộ sức thể lực tồn tại trong mỗi con người", "Toàn bộ sức thể lực và trí lực tồn tại không có khả năng đem ra sử dụng", "Toàn bộ sức thể lực và trí lực tồn tại trong mỗi con người"],
        "correct": 3
    },
    {
        "question": "Địa tô chênh lệch I là gì?",
        "options": ["Là địa tô thu được trên những loại ruộng đất có điều kiện tự nhiên không thuận lợi", "Là địa tô thu được trên những loại ruộng đất có điều kiện tự nhiên thuận lợi", "Là địa tô thu được trên những loại ruộng đất có vị trí thuận lợi", "Là địa tô thu được trên những loại ruộng đất do thâm canh làm tăng năng suất"],
        "correct": 1
    },
    {
        "question": "Công thức nào chỉ sự vận động của tư bản cho vay?",
        "options": ["T-T'", "H-H'", "H-T'", "T-T"],
        "correct": 0
    },
    {
        "question": "Thị trường chứng khoán là gì?",
        "options": ["Thị trường mua bán các loại chứng khoán", "Thị trường mua bán các loại chứng khoán chưa niêm yết trên sàn", "Thị trường mua bán các loại hàng hóa", "Thị trường mua bán các loại công trái"],
        "correct": 0
    },
    {
        "question": "Công ty cổ phần là gì?",
        "options": ["Một doanh nghiệp được hình thành do sự góp vốn của nhiều người thông qua phát hành cổ phiếu", "Một doanh nghiệp được hình thành do sự góp vốn của một người thông qua phát hành cổ phiếu", "Một doanh nghiệp được hình thành do sự góp vốn của nhiều người thông qua phát hành công trái", "Một doanh nghiệp được hình thành do sự góp vốn của một số người thông qua phát hành trái phiếu"],
        "correct": 0
    },
    {
        "question": "Tiền công danh nghĩa được biểu hiện như thế nào?",
        "options": ["Biểu hiện ở chất lượng tiền tệ mà người công nhân nhận được sau một thời gian làm việc", "Biểu hiện ở số lượng hàng hóa mà người công nhân nhận được sau một thời gian làm việc", "Biểu hiện ở số lượng tiền tệ mà người công nhân nhận được sau một thời gian làm việc", "Biểu hiện ở số lượng hàng tiêu dùng mà người công nhân nhận được sau một thời gian làm việc"],
        "correct": 2
    },
    {
        "question": "Nguồn gốc của tập trung tư bản là gì?",
        "options": ["Các tư bản cá biệt có sẵn trong xã hội", "Các tư bản thương nghiệp và công nghiệp trong xã hội", "Tư bản cá biệt của các nước", "Các tư bản công nghiệp trong xã hội"],
        "correct": 0
    },
    {
        "question": "Công thức chung của tư bản phản ánh những gì?",
        "options": ["Mục đích của sản xuất, lưu thông tư bản là giá trị sử dụng và giá trị thặng dư", "Mục đích của sản xuất, lưu thông là giá trị và giá trị thặng dư", "Phương tiện của lưu thông tư bản là giá trị và giá trị thặng dư", "Mục đích của sản xuất, lưu thông tư bản là giá trị và giá trị thặng dư"],
        "correct": 3
    },
    {
        "question": "Tích tụ tư bản là gì?",
        "options": ["Quá trình tăng quy mô của tư bản xã hội bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình tăng giảm quy mô của tư bản cá biệt bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình tăng quy mô của tư bản cá biệt bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình giảm quy mô của tư bản xã hội bằng cách tư bản hóa một phần giá trị thặng dư"],
        "correct": 2
    },
    {
        "question": "Giá trị thặng dư tương đối được tạo ra bởi những yếu tố nào?",
        "options": ["Tăng năng suất lao động, làm rút ngắn thời gian lao động cá biệt", "Tăng sản lượng, làm rút ngắn thời gian lao động cần thiết", "Tăng năng suất lao động, làm rút ngắn thời gian lao động cần thiết", "Tăng cường độ lao động, làm rút ngắn thời gian lao động cần thiết"],
        "correct": 2
    },
    {
        "question": "Quy luật kinh tế cơ bản của chủ nghĩa tư bản là quy luật nào?",
        "options": ["Quy luật giá trị", "Quy luật giá trị lợi nhuận bình quân", "Quy luật giá trị thặng dư", "Quy luật giá trị cạnh tranh"],
        "correct": 2
    },
    {
        "question": "Điều kiện biến sức lao động thành hàng hóa là gì?",
        "options": ["Người lao động phải được tự do; người lao động không có tư liệu sản xuất", "Người lao động phải được tự do; người lao động có tư liệu sản xuất", "Người lao động không được tự do; người lao động không có tư liệu sản xuất", "Người lao động phải được tự do; người lao động không có tư liệu tiêu dùng"],
        "correct": 0
    },
    {
        "question": "Chỉ rõ điểm giống nhau giữa địa tô chênh lệch và địa tô tuyệt đối?",
        "options": ["Có nguồn gốc từ giá trị thặng dư", "Có nguồn gốc từ giá trị", "Tư bản bất biến", "Có nguồn gốc từ giá trị trao đổi"],
        "correct": 0
    },
    {
        "question": "Động cơ chủ yếu của tích lũy tư bản là gì?",
        "options": ["Quy luật giá cả sản xuất", "Quy luật giá trị thặng dư", "Quy luật giá trị", "Quy luật cung cầu"],
        "correct": 1
    },
    {
        "question": "Tỷ suất lợi tức (z') được xác định như thế nào?",
        "options": ["Tỷ lệ phần trăm giữa giá trị thặng dư và tổng số tư bản cho vay", "Tỷ lệ phần trăm giữa lợi nhuận và tổng số tư bản cho vay", "Tỷ lệ phần trăm giữa tỷ suất lợi nhuận và tổng số tư bản cho vay", "Tỷ lệ phần trăm giữa lợi tức và tổng số tư bản cho vay"],
        "correct": 3
    },
    {
        "question": "Chủ nghĩa tư bản độc quyền xuất hiện vào thời kỳ lịch sử nào?",
        "options": ["Giữa thế kỷ XX", "Thế kỷ XVIII - XIX", "Cuối thế kỷ XIX - đầu thế kỷ XX", "Thế kỷ XVI - XVII"],
        "correct": 2
    },
    {
        "question": "Xuất khẩu hàng hoá là gì?",
        "options": ["Xuất khẩu nguyên nhiên, vật liệu ra nước ngoài", "Xuất khẩu máy móc ra nước ngoài", "Xuất khẩu giá trị ra nước ngoài", "Xuất khẩu hàng hoá ra nước ngoài để thực hiện giá trị"],
        "correct": 3
    },
    {
        "question": "Sự hình thành các tổ chức độc quyền dựa trên cơ sở nào?",
        "options": ["Sự hoàn thiện quan hệ sản xuất tư bản chủ nghĩa", "Sản xuất nhỏ phân tán", "Tích tụ và tập trung sản xuất", "Phát triển khoa học - kỹ thuật"],
        "correct": 2
    },
    {
        "question": "Xuất khẩu tư bản nhà nước thường hướng vào những ngành kinh tế nào?",
        "options": ["Ngành có tốc độ chu chuyển vốn nhanh", "Ngành thu được lợi nhuận cao", "Ngành thuộc kết cấu hạ tầng", "Ngành công nghệ mới"],
        "correct": 2
    },
    {
        "question": "Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người khái quát về nguyên nhân ra đời của chủ nghĩa tư bản độc quyền bằng câu: \"Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định, lại dẫn tới độc quyền\"?",
        "options": ["V.I.Lênin", "Ph.Ăngghen", "C.Mác và Ph.Ăngghen", "C.Mác"],
        "correct": 0
    },
    {
        "question": "Trong giai đoạn chủ nghĩa tư bản độc quyền, quy luật giá trị biểu hiện thành quy luật nào?",
        "options": ["Quy luật giá cả độc quyền", "Quy luật lợi nhuận bình quân", "Quy luật giá cả sản xuất", "Quy luật tỷ suất lợi nhuận bình quân"],
        "correct": 0
    },
    {
        "question": "Sự ra đời chủ nghĩa tư bản độc quyền nhà nước nhằm mục đích gì?",
        "options": ["Phục vụ lợi ích của nhà nước tư sản và duy trì chủ nghĩa tư bản", "Phục vụ lợi ích của tổ chức độc quyền tư nhân và cứu nguy cho chủ nghĩa tư bản", "Phục vụ lợi ích của nhân dân lao động và phát triển chủ nghĩa tư bản", "Phục vụ lợi ích của tổ chức độc quyền tư nhân và tiếp tục duy trì, phát triển chủ nghĩa tư bản"],
        "correct": 3
    },
    {
        "question": "Biện pháp cạnh tranh mà tổ chức độc quyền áp dụng đối với các xí nghiệp ngoài độc quyền là biện pháp nào?",
        "options": ["Chia nguồn nguyên liệu, nhân công… theo tỷ lệ nhất định", "Thương lượng", "Áp dụng vũ lực", "Độc chiếm nguồn nguyên liệu, nhân công, v.v."],
        "correct": 3
    },
    {
        "question": "Xuất khẩu tư bản là đặc điểm của nền kinh tế giai đoạn nào?",
        "options": ["Phương thức sản xuất tư bản chủ nghĩa", "Chủ nghĩa tư bản giai đoạn độc quyền", "Chủ nghĩa tư bản giai đoạn tự do cạnh tranh", "Phương thức sản xuất phong kiến"],
        "correct": 1
    },
    {
        "question": "Mục đích cạnh tranh giữa các nhà tư bản trong nội bộ tổ chức độc quyền là gì?",
        "options": ["Giành tỷ lệ cao hơn trong quá trình sản xuất hàng hóa để thu được giá trị cao hơn", "Giành những điều kiện thuận lợi trong sản xuất và tiêu thụ hàng hóa để thu được lợi nhuận cao hơn", "Giành thị trường để tiêu thụ hàng hóa nhằm thu được lợi nhuận cao hơn", "Thôn tính lẫn nhau để tranh giành thị trường tiêu thụ hàng hóa"],
        "correct": 1
    },
    {
        "question": "Ngày nay, sự can thiệp của nhà nước tư sản thể hiện như thế nào?",
        "options": ["Vào khâu sản xuất - tiêu dùng", "Vào khâu sản xuất", "Sản xuất - phân phối - trao đổi - tiêu dùng", "Vào khâu phân phối - trao đổi"],
        "correct": 2
    },
    {
        "question": "Quy luật giá trị thặng dư biểu hiện như thế nào trong giai đoạn chủ nghĩa tư bản độc quyền?",
        "options": ["Biểu hiện thành quy luật giá cả độc quyền cao", "Biểu hiện thành quy luật tỷ suất lợi nhuận bình quân", "Biểu hiện thành quy luật lợi nhuận độc quyền cao", "Biểu hiện thành quy luật giá cả sản xuất"],
        "correct": 2
    },
    {
        "question": "Các hình thức độc quyền phát triển từ thấp đến cao, từ lưu thông đến sản xuất và tái sản xuất. Hãy xác định trình tự phát triển của các hình thức độc quyền đó?",
        "options": ["Cácten - Xanhđica - Torớt - Côngxoócxiom - Cônggôlômêrát", "Xanhđica - Cácten - Tơrớt - Công xoóc xiom - Cônggolômêrát", "Cácten - Tơrớt - Côngxoócxiom - Xanhđica", "Tơrớt - Cácten - Xanhđica - Côngxoócxiom"],
        "correct": 0
    },
    {
        "question": "Chỉ rõ vai trò của tư bản khả biến?",
        "options": ["Bộ phận trực tiếp tạo ra giá trị sử dụng", "Bộ phận trực tiếp tạo ra giá trị thặng dư", "Bộ phận trực tiếp tạo ra sản phẩm", "Bộ phận gián tiếp tạo ra giá trị thặng dư"],
        "correct": 1
    },
    {
        "question": "Địa tô tư bản là gì?",
        "options": ["Phần giá trị thặng dư ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần tỷ suất giá trị thặng dư ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần lợi nhuận ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần giá trị thặng dư ngoài lợi nhuận mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất"],
        "correct": 0
    },
    {
        "question": "Chỉ rõ mâu thuẫn công thức chung của tư bản?",
        "options": ["T'=T", "T'>H'", "T'>T", "T'<T"],
        "correct": 2
    },
    {
        "question": "Khối lượng giá trị thặng dư (M) được tính bằng công thức nào?",
        "options": ["M = mxV", "M = m'xV", "M = m'xK", "M = m'xC"],
        "correct": 1
    },
    {
        "question": "Tiền công (tiền lương) tính theo thời gian là gì?",
        "options": ["Tiền lương được trả căn cứ vào hiệu quả làm việc của người công nhân", "Tiền lương được trả căn cứ vào thời gian làm việc của người công nhân", "Tiền lương được trả căn cứ vào cường độ làm việc của người công nhân", "Tiền lương được trả căn cứ vào năng suất làm việc của người công nhân"],
        "correct": 1
    },
    {
        "question": "Giá trị sức lao động được đo lường gián tiếp bằng yếu tố nào?",
        "options": ["Giá trị những tư liệu tiêu dùng để nuôi sống nhà tư bản", "Giá trị những tư liệu sản xuất để nuôi sống người lao động", "Giá trị những tư liệu tiêu dùng để nuôi sống người lao động", "Giá trị sử dụng những tư liệu tiêu dùng để nuôi sống người lao động"],
        "correct": 2
    },
    {
        "question": "Bản chất của tích lũy tư bản được thể hiện như thế nào?",
        "options": ["Là tăng giá trị của hàng hóa sức lao động", "Là chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm", "Là quá trình điều chỉnh giá trị trao đổi của nhà tư bản", "Là quá trình tăng liên tục lợi nhuận bình quân"],
        "correct": 1
    },
    {
        "question": "Giá trị thặng dư siêu ngạch còn được gọi là gì?",
        "options": ["Hình thức biến tướng của giá trị thặng dư tương đối", "Hình thức biến tướng của giá trị thặng dư tuyệt đối", "Hình thức biến tướng của giá trị tương đối", "Hình thức biểu hiện của giá trị thặng dư tương đối"],
        "correct": 0
    },
    {
        "question": "Chỉ rõ thực chất của địa tô tuyệt đối?",
        "options": ["Nhà tư bản đi thuê đất phải trả cho chủ đất, khi thuê mướn ruộng đất xấu", "Nhà tư bản đi thuê đất phải trả cho chủ đất, dù thuê mướn bất kỳ loại ruộng đất nào", "Nhà tư bản đi thuê đất phải trả cho chủ đất, khi thuê mướn ruộng đất tốt", "Nhà tư bản đi thuê đất không phải trả cho chủ đất, dù thuê mướn bất kỳ loại ruộng đất nào"],
        "correct": 1
    },
    {
        "question": "Chủ nghĩa tư bản độc quyền nhà nước là gì?",
        "options": ["Một kiểu tổ chức kinh tế - xã hội", "Một phương thức sản xuất mới", "Một giai đoạn của phương thức sản xuất tư bản chủ nghĩa", "Giai đoạn đầu của phương thức sản xuất sau Công nguyên"],
        "correct": 2
    },
    {
        "question": "Kết quả cạnh tranh nội bộ ngành như thế nào?",
        "options": ["Hình thành tỷ suất lợi nhuận bình quân", "Hình thành giá trị xã hội (giá trị thị trường)", "Hình thành giá cả sản xuất", "Hình thành giá cả độc quyền"],
        "correct": 1
    },
    {
        "question": "Mục đích của xuất khẩu tư bản là gì?",
        "options": ["Tạo điều kiện phát triển cho các nước khác", "Chiếm đoạt giá trị và các nguồn lợi ở các nước nhập khẩu tư bản", "Tạo mối quan hệ tốt đẹp với các nước khác", "Chiếm đoạt giá trị thặng dư và các nguồn lợi ở các nước nhập khẩu tư bản"],
        "correct": 3
    },
    {
        "question": "Chỉ rõ công thức chung của tư bản?",
        "options": ["H-T-H", "H-T-H'", "T-H-T'", "T-SX-T'"],
        "correct": 2
    },
    {
        "question": "Giá trị sử dụng của hàng hóa sức lao động được khẳng định như thế nào?",
        "options": ["Chìa khóa để giải quyết mâu thuẫn công thức chung của tư bản", "Chìa khóa để giải quyết mâu thuẫn giữa tư bản và tư bản", "Chìa khóa để giải quyết mâu thuẫn của lưu thông hàng hóa", "Chìa khóa để giải quyết mâu thuẫn giữa tư bản và lao động"],
        "correct": 0
    },
    {
        "question": "Giá trị sử dụng của hàng hóa sức lao động, khi sử dụng sẽ tạo ra cái gì?",
        "options": ["Giá trị sử dụng mới lớn hơn giá trị sử dụng bản thân nó", "Giá trị mới bằng giá trị bản thân nó", "Giá trị mới lớn hơn giá trị bản thân nó", "Giá trị mới nhỏ hơn giá trị bản thân nó"],
        "correct": 2
    },
    {
        "question": "Chủ nghĩa tư bản độc quyền là gì?",
        "options": ["Một hình thái kinh tế - xã hội", "Thời kỳ quá độ lên chủ nghĩa xã hội", "Giai đoạn phát triển của phương thức sản xuất tư bản chủ nghĩa", "Một phương thức sản xuất"],
        "correct": 2
    },
    {
        "question": "Sự kết hợp về nhân sự giữa tổ chức độc quyền và nhà nước thể hiện như thế nào?",
        "options": ["Liên minh giữa tổ chức độc quyền ngân hàng với chính phủ", "Liên minh giữa cá nhân tổ chức độc quyền ngân hàng với tổ chức độc quyền công nghiệp", "Liên minh giữa tổ chức độc quyền ngân hàng, tổ chức độc quyền công nghiệp và chính phủ", "Liên minh giữa tổ chức độc quyền công nghiệp với chính phủ"],
        "correct": 2
    },
    {
        "question": "Xuất khẩu tư bản là gì?",
        "options": ["Đầu tư tư bản sang các nước phát triển", "Đầu tư tư bản sang các nước kém phát triển và đang phát triển", "Đầu tư tư bản ra nước ngoài nhằm bóc lột giá trị tiêu dùng ở nước nhập khẩu", "Mang hàng hoá ra nước ngoài để thực hiện giá trị"],
        "correct": 2
    },
    {
        "question": "V.I. Lênin đã phân tích chủ nghĩa tư bản độc quyền bằng các đặc điểm kinh tế cơ bản nào?",
        "options": ["Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính", "Tích tụ và tập trung tư bản; sự chi phối của hệ thống tài phiệt; xuất khẩu tư bản; phân chia thị trường thế giới; sự phân định lãnh thổ giữa các cường quốc đế quốc", "Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản", "Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản; phân chia thế giới về kinh tế giữa các tổ chức độc quyền"],
        "correct": 1
    },
    {
        "question": "Khi chủ nghĩa tư bản độc quyền ra đời đã có những tác động gì đến nền kinh tế?",
        "options": ["Làm cho các quy luật kinh tế của nền sản xuất hàng hoá và của chủ nghĩa tư bản có biểu hiện mới", "Phủ định các quy luật của nền sản xuất hàng hoá", "Phủ định các quy luật trong giai đoạn chủ nghĩa tư bản tự do cạnh tranh", "Không làm thay đổi các quy luật của nền sản xuất hàng hoá và của chủ nghĩa tư bản"],
        "correct": 0
    },
    {
        "question": "V.I. Lênin đưa ra luận điểm: \"Hôm nay là bộ trưởng, ngày mai là chủ ngân hàng; hôm nay là chủ ngân hàng, ngày mai là bộ trưởng\" là muốn nhấn mạnh về điều gì?",
        "options": ["Liên minh giữa cá nhân tổ chức độc quyền ngân hàng với tổ chức độc quyền công nghiệp", "Liên minh giữa tổ chức độc quyền ngân hàng, tổ chức độc quyền công nghiệp và chính phủ", "Liên minh giữa tổ chức độc quyền ngân hàng với chính phủ", "Liên minh giữa tổ chức độc quyền công nghiệp với chính phủ"],
        "correct": 1
    },
    {
        "question": "Mối quan hệ giữa cạnh tranh và độc quyền được thể hiện như thế nào?",
        "options": ["Độc quyền sinh ra từ cạnh tranh, nó không đối lập với cạnh tranh và làm cạnh tranh đa dạng và gay gắt hơn", "Độc quyền sinh ra từ cạnh tranh, nó đối lập với cạnh tranh nhưng không thủ tiêu cạnh tranh và làm cạnh tranh đa dạng và gay gắt hơn", "Độc quyền sinh ra từ cạnh tranh, nó đối lập với cạnh tranh và thủ tiêu cạnh tranh", "Độc quyền đối lập với cạnh tranh, không thủ tiêu cạnh tranh và làm cạnh tranh đa dạng và gay gắt hơn"],
        "correct": 1
    },
    {
        "question": "Giá trị cổ phiếu khi phát hành lần đầu gọi là gì?",
        "options": ["Mệnh giá", "Mệnh giá trái phiếu", "Thị giá", "Giá thị trường"],
        "correct": 0
    },
    {
        "question": "Chỉ rõ hai hình thức tiền công cơ bản?",
        "options": ["Tiền công theo thời gian và tiền công theo sản phẩm", "Tiền công theo tháng và tiền công theo sản phẩm", "Tiền công theo giờ và tiền công theo sản phẩm", "Tiền công theo thời gian và tiền công theo lao động"],
        "correct": 0
    },
    {
        "question": "Bản chất của tiền công trong chủ nghĩa tư bản là gì?",
        "options": ["Giá cả của lao động", "Giá cả của hàng hóa lao động", "Giá cả của hàng hóa sức lao động", "Giá cả của hàng hóa"],
        "correct": 2
    },
    {
        "question": "Cấu tạo giá trị phản ánh điều gì?",
        "options": ["Mối quan hệ tỷ lệ giữa giá trị tư bản bất biến và giá trị tư bản cố định", "Mối quan hệ tỷ lệ giữa giá trị tư bản cố định và giá trị tư bản khả biến", "Mối quan hệ tỷ lệ giữa giá trị tư bản cố định và giá trị tư bản lưu động", "Mối quan hệ tỷ lệ giữa giá trị tư bản bất biến và giá trị tư bản khả biến"],
        "correct": 3
    },
    {
        "question": "Các cuộc xâm chiếm thuộc địa của các nước đế quốc diễn ra mạnh mẽ vào thời gian nào?",
        "options": ["Thế kỷ XVII", "Cuối thế kỷ XVIII - đầu thế kỷ XIX", "Cuối thế kỷ XIX - đầu thế kỷ XX", "Thế kỷ XVIII"],
        "correct": 2
    },
    {
        "question": "Sự phát triển của trình độ xã hội hoá lực lượng sản xuất đòi hỏi điều gì?",
        "options": ["Nhà nước chỉ can thiệp với vai trò \"người gác cổng\"", "Nhà nước không nên can thiệp vào kinh tế", "Nhà nước can thiệp vào kinh tế với vai trò quản lý chung", "Nhà nước can thiệp vào kinh tế ở cấp độ vi mô"],
        "correct": 2
    },
    {
        "question": "Các tổ chức độc quyền của các quốc gia cạnh tranh với nhau trên thị trường quốc tế sẽ dẫn đến hiện tượng gì?",
        "options": ["Thoả hiệp với nhau hình thành các tổ chức độc quyền quốc tế", "Đấu tranh không khoan nhượng", "Các tổ chức độc quyền sẽ thôn tính nhau", "Sẽ có tổ chức độc quyền bị phá sản, còn lại những tổ chức độc quyền mạnh"],
        "correct": 0
    },
    {
        "question": "Cấu tạo hữu cơ của tư bản là gì?",
        "options": ["Cấu tạo giá trị của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo giá trị sử dụng của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo giá trị thặng dư của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo sản xuất của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật"],
        "correct": 0
    },
    {
        "question": "Chế độ tham dự của tư bản tài chính được thiết lập thông qua yếu tố nào?",
        "options": ["Số cổ phiếu khống chế để nắm công ty mẹ, con, cháu…", "Quyết định hành chính của nhà nước", "Yêu cầu hành chính của các tổ chức độc quyền công nghiệp", "Yêu cầu hành chính của các ngân hàng"],
        "correct": 0
    },
    {
        "question": "Cần phải có điều kiện nào để tiền biến thành tư bản?",
        "options": ["Phải tích lũy được một lượng tiền lớn; tiền phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư", "Phải tích lũy được một lượng hàng hóa lớn; hàng hóa phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư", "Phải tích lũy được một lượng máy móc lớn; máy móc phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư", "Phải tích lũy được một lượng tiền lớn; tiền không được đưa vào kinh doanh với mục đích thu giá trị thặng dư"],
        "correct": 0
    },
    {
        "question": "Vai trò mới của ngân hàng trong giai đoạn chủ nghĩa tư bản độc quyền là gì?",
        "options": ["Đầu tư tư bản trong nền kinh tế tư bản chủ nghĩa", "Trung gian thanh toán trong nền kinh tế tư bản chủ nghĩa", "Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa", "Trung gian tín dụng trong nền kinh tế tư bản chủ nghĩa"],
        "correct": 2
    },
    {
        "question": "Chỉ rõ các hình thức cơ bản của địa tô tư bản chủ nghĩa?",
        "options": ["Địa tô chênh lệch; địa tô tuyệt đối", "Địa tô chênh lệch; địa tô độc quyền", "Địa tô chênh lệch I; địa tô chênh lệch II", "Địa tô tuyệt đối; địa tô độc quyền"],
        "correct": 0
    },
    {
        "question": "Về bản chất lợi nhuận và giá trị thặng dư giống nhau ở điểm nào?",
        "options": ["Lao động cụ thể của công nhân", "Lao động không công của công nhân", "Lao động phức tạp của công nhân", "Lao động trừu tượng của công nhân"],
        "correct": 1
    },
    {
        "question": "Xuất khẩu hàng hoá là một trong các đặc điểm của giai đoạn sản xuất nào?",
        "options": ["Sản xuất hàng hoá giản đơn", "Giai đoạn chủ nghĩa tư bản tự do cạnh tranh", "Giai đoạn chủ nghĩa tư bản độc quyền", "Phương thức sản xuất tư bản chủ nghĩa"],
        "correct": 1
    },
    {
        "question": "Mục đích của xuất khẩu tư bản nhà nước là gì?",
        "options": ["Quân sự", "Kinh tế", "Kinh tế - Chính trị", "Kinh tế - Chính trị - Quân sự"],
        "correct": 3
    },
    {
        "question": "Chủ nghĩa tư bản độc quyền nhà nước thuộc tổ chức nào?",
        "options": ["Một cơ chế điều tiết của Nhà nước tư sản", "Một quan hệ kinh tế, chính trị, xã hội", "Một chính sách trong giai đoạn độc quyền", "Một kiểu tổ chức kinh tế - xã hội"],
        "correct": 1
    },
    {
        "question": "Giá trị thặng dư siêu ngạch được tạo ra bởi những yếu tố nào?",
        "options": ["Giá trị xã hội của hàng hóa thấp hơn giá trị cá biệt", "Giá trị cá biệt của hàng hóa bằng giá trị xã hội", "Giá cả cá biệt của hàng hóa thấp hơn giá trị xã hội", "Giá trị cá biệt của hàng hóa thấp hơn giá trị xã hội"],
        "correct": 3
    },
    {
        "question": "Địa tô tư bản chủ nghĩa là gì?",
        "options": ["Phần giá trị cá biệt ngoài lợi nhuận bình quân của nhà tư bản", "Phần lợi nhuận ngoài lợi nhuận bình quân của nhà tư bản", "Phần giá trị ngoài lợi nhuận bình quân của nhà tư bản", "Phần giá trị thặng dư ngoài lợi nhuận bình quân của nhà tư bản"],
        "correct": 3
    },
    {
        "question": "Lần đầu tiên khái niệm \"tập đoàn kinh tế tư nhân\" xuất hiện trong Văn kiện Đại hội lần thứ mấy của Đảng?",
        "options": [
            "Đại hội XII.",
            "Đại hội XI.",
            "Đại hội X.",
            "Đại hội XIII."
        ],
        "correct": 0
    },
    {
        "question": "Quan hệ nào có vai trò quyết định đến phân phối?",
        "options": [
            "Quan hệ sở hữu tư liệu sản xuất.",
            "Tất cả những quan hệ trên.",
            "Quan hệ xã hội, đạo đức.",
            "Quan hệ tổ chức quản lý."
        ],
        "correct": 0
    },
    {
        "question": "Lý do nào KHÔNG phải là tất yếu trong phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam?",
        "options": [
            "Phù hợp với nhiều hình thức sở hữu, nhiều thành phần kinh tế của Việt Nam.",
            "Phù hợp với nguyện vọng của người dân Việt Nam.",
            "Phù hợp với xu hướng phát triển khách quan của Việt Nam.",
            "Mang tính ưu việt, thúc đẩy phát triển đối với Việt Nam."
        ],
        "correct": 0
    },
    {
        "question": "Hoàn thiện thể chế về giá, cạnh tranh và kiểm soát độc quyền trong kinh doanh phù hợp với nội dung nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường.",
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường."
        ],
        "correct": 0
    },
    {
        "question": "Vì sao trong thành phần kinh tế dựa trên sở hữu công cộng phải thực hiện phân phối theo lao động?",
        "options": [
            "Tất cả những lý do trên đều đúng.",
            "Vì lực lượng sản xuất phát triển chưa cao.",
            "Vì còn phân biệt các loại lao động.",
            "Vì mọi người bình đẳng đối với lực lượng sản xuất."
        ],
        "correct": 0
    },
    {
        "question": "\"Quy định cụ thể về quyền của chủ sở hữu và những người liên quan đối với các loại tài sản\" là nội dung phù hợp với chủ trương nào?",
        "options": [
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường."
        ],
        "correct": 0
    },
    {
        "question": "Việc ban hành pháp luật về quyền sở hữu đối với các tài sản mới như trí tuệ, cổ phiếu, tài nguyên nước,… là phù hợp với nội dung nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường.",
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa."
        ],
        "correct": 0
    },
    {
        "question": "Biện pháp \"Mở rộng các lĩnh vực độc quyền nhà nước\" là trái với nội dung nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường."
        ],
        "correct": 0
    },
    {
        "question": "Biện pháp \"Đổi mới cơ chế quản lý khoa học và công nghệ\" phù hợp với nội dung nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường.",
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường."
        ],
        "correct": 0
    },
    {
        "question": "Khái niệm \"Kinh tế thị trường định hướng xã hội chủ nghĩa\" bắt đầu sử dụng trong Văn kiện Đại hội lần thứ mấy của Đảng?",
        "options": [
            "Đại hội IX.",
            "Đại hội VIII.",
            "Đại hội VI.",
            "Đại hội VII."
        ],
        "correct": 0
    },
    {
        "question": "Biện pháp \"Xử lý triệt để những điểm ô nhiễm môi trường nghiêm trọng và ngăn chặn để không phát sinh thêm\" phù hợp với chủ trương nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường.",
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường."
        ],
        "correct": 0
    },
    {
        "question": "Kinh tế tư nhân là một thành phần kinh tế trên cơ sở hợp nhất hai thành phần kinh tế: cá thể, tiểu chủ và tư bản tư nhân, chính thức được xác nhận trong Văn kiện Đại hội lần thứ mấy của Đảng?",
        "options": [
            "Đại hội X.",
            "Đại hội VIII.",
            "Đại hội XI.",
            "Đại hội IX."
        ],
        "correct": 0
    },
    {
        "question": "Yếu tố nào trong các yếu tố sau đây không thuộc thể chế kinh tế thị trường?",
        "options": [
            "Các quy luật kinh tế tác động trong nền kinh tế thị trường.",
            "Các thị trường - nơi hàng hoá được giao dịch, trao đổi trên cơ sở yêu cầu, quy định của luật lệ.",
            "Cách thực hiện các quy tắc nhằm đạt mục tiêu hay kết quả mà các bên tham gia thị trường mong muốn.",
            "Các quy tắc về hành vi kinh tế diễn ra trên thị trường các bên tham gia thị trường với tư cách là các chủ thể thị trường."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm: \"Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, đồng thời bảo đảm định hướng xã hội chủ nghĩa phù hợp với từng giai đoạn phát triển của đất nước. Đó là nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo, nhằm mục tiêu \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"\", được Đảng ta khẳng định trong Đại hội lần thứ mấy?",
        "options": [
            "Đại hội XII.",
            "Đại hội X.",
            "Đại hội XI.",
            "Đại hội XIII."
        ],
        "correct": 0
    },
    {
        "question": "Bắt đầu từ Đại hội nào Đảng ta khẳng định: \"Việt Nam là bạn, đối tác tin cậy của các nước trong cộng đồng quốc tế, tham gia tích cực vào tiến trình hợp tác quốc tế và khu vực\"?",
        "options": [
            "Đại hội X.",
            "Đại hội VIII.",
            "Đại hội IX.",
            "Đại hội VII."
        ],
        "correct": 0
    },
    {
        "question": "Bắt đầu từ Đại hội nào Đảng ta khẳng định: \"Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế, phấn đấu vì hoà bình, độc lập và phát triển\"?",
        "options": [
            "Đại hội IX.",
            "Đại hội VIII.",
            "Đại hội X.",
            "Đại hội VII."
        ],
        "correct": 0
    },
    {
        "question": "Việt Nam tham gia sáng lập Diễn đàn hợp tác Á - Âu (ASEM) vào năm nào?",
        "options": [
            "Năm 1996.",
            "Năm 1995.",
            "Năm 1993.",
            "Năm 1994."
        ],
        "correct": 0
    },
    {
        "question": "Một thực tế không thể đảo ngược của toàn cầu hóa là gì?",
        "options": [
            "Những mối liên hệ phụ thuộc lẫn nhau.",
            "Xu thế đối thoại.",
            "Xu thế chủ quan.",
            "Xu thế khách quan."
        ],
        "correct": 0
    },
    {
        "question": "Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?",
        "options": [
            "Năm 1995.",
            "Năm 1993.",
            "Năm 1996.",
            "Năm 1994."
        ],
        "correct": 0
    },
    {
        "question": "Nhận thức về công nghiệp hóa ở Việt Nam đã trải qua nhiều mốc phát triển kể từ Đại hội III của Đảng (năm 1960) đến nay. Mốc nhận thức nào dưới đây đã được xuất hiện tại Đại hội X của Đảng (năm 2006)?",
        "options": [
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức trong thể chế kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập kinh tế quốc tế\".",
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa từng bước gắn với phát triển kinh tế tri thức\".",
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa\".",
            "Giai đoạn chuẩn bị các tiền đề công nghiệp hóa đất nước đã cơ bản hoàn thành, cho phép nước ta chuyển sang giai đoạn đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước."
        ],
        "correct": 0
    },
    {
        "question": "Thách thức lớn nhất mà Việt Nam phải đối mặt với toàn cầu hóa là gì?",
        "options": [
            "Sự chênh lệch về trình độ khi tham gia hội nhập.",
            "Sử dụng chưa hiệu quả các nguồn vốn từ bên ngoài.",
            "Sự cạnh tranh quyết liệt từ thị trường thế giới.",
            "Sự bất bình đẳng trong quan hệ quốc tế."
        ],
        "correct": 0
    },
    {
        "question": "Sai lầm nào sau đây chứng tỏ tư tưởng chỉ đạo chủ quan, nóng vội trong công nghiệp hóa của Đảng thời kỳ trước đổi mới (12/1986)?",
        "options": [
            "Đã chủ trương đẩy mạnh công nghiệp hóa trong khi chưa có đủ các tiền đề cần thiết.",
            "Chúng ta đã xác định đúng mục tiêu và bước đi về xây dựng cơ sở vật chất - kỹ thuật.",
            "Trong việc bố trí cơ cấu kinh tế thường chỉ xuất phát từ lòng mong muốn đi nhanh.",
            "Không tập trung giải quyết vấn đề cơ bản là lương thực, thực phẩm, hàng tiêu dùng và hàng xuất khẩu."
        ],
        "correct": 0
    },
    {
        "question": "Trong các chuyển dịch mạnh cơ cấu nông nghiệp và phát triển kinh tế nông thôn, chuyển dịch nào dưới đây nhằm đưa nông thôn thoát nghèo trở thành khá giả?",
        "options": [
            "Tạo ra giá trị gia tăng ngày càng cao.",
            "Gắn với công nghiệp chế biến và thị trường.",
            "Đẩy nhanh tiến bộ khoa học - kỹ thuật và công nghệ sinh học vào sản xuất nông nghiệp.",
            "Nâng cao năng suất, chất lượng và sức cạnh tranh của nông sản hàng hóa, phù hợp đặc điểm từng vùng, từng địa phương."
        ],
        "correct": 0
    },
    {
        "question": "Trong các chuyển dịch mạnh cơ cấu nông nghiệp và phát triển kinh tế nông thôn, chuyển dịch nào dưới đây giải quyết tốt đầu ra cho nông nghiệp?",
        "options": [
            "Gắn với công nghiệp chế biến và thị trường.",
            "Tạo ra giá trị gia tăng ngày càng cao.",
            "Nâng cao năng suất, chất lượng của nông sản hàng hóa.",
            "Ứng dụng công nghệ sinh học vào sản xuất nông nghiệp."
        ],
        "correct": 0
    },
    {
        "question": "Ở thời kỳ trước đổi mới (12/1986), sai lầm nào sau đây chứng tỏ bệnh chủ quan, duy ý chí trong bố trí cơ cấu kinh tế?",
        "options": [
            "Trong việc bố trí cơ cấu kinh tế thường chỉ xuất phát từ lòng mong muốn đi nhanh.",
            "Đã chủ trương đẩy mạnh công nghiệp hóa trong khi chưa có đủ các tiền đề cần thiết.",
            "Chúng ta đã xác định đúng mục tiêu và bước đi về xây dựng cơ sở vật chất - kỹ thuật.",
            "Không tập trung giải quyết vấn đề cơ bản là lương thực, thực phẩm, hàng tiêu dùng và hàng xuất khẩu."
        ],
        "correct": 0
    },
    {
        "question": "Nội dung nào KHÔNG đúng với chủ trương: \"Sản phẩm nghiên cứu khoa học của cơ quan và cá nhân do Nhà nước đặt hàng và Nhà nước nghiệm thu\"?",
        "options": [
            "Hệ thống thị trường phát triển hoàn hảo.",
            "Có hệ thống pháp quy kiện toàn.",
            "Các chủ thể kinh tế phải có tính độc lập.",
            "Giá cả cơ bản do cung - cầu điều tiết."
        ],
        "correct": 0
    },
    {
        "question": "Tìm câu trả lời chính xác nhất cho câu hỏi về cơ chế thị trường là gì?",
        "options": [
            "Là cơ chế điều tiết nền kinh tế theo các quy luật của kinh tế thị trường.",
            "Là cơ chế điều tiết nền kinh tế theo các quy luật kinh tế.",
            "Là cơ chế thị trường do \"bàn tay vô hình\" chi phối.",
            "Là cơ chế điều tiết nền kinh tế tự phát."
        ],
        "correct": 0
    },
    {
        "question": "Yếu tố nào quy định tính lịch sử của quan hệ phân phối?",
        "options": [
            "Quan hệ sản xuất.",
            "Kiến trúc thượng tầng.",
            "Phương thức sản xuất.",
            "Lực lượng sản xuất."
        ],
        "correct": 0
    },
    {
        "question": "Chính sách \"Thực hiện một mặt bằng pháp lý kinh doanh, không phân biệt hình thức sở hữu, thành phần kinh tế\" là phù hợp với nội dung nào dưới đây?",
        "options": [
            "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
            "Hoàn thiện thể chế bảo đảm đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường.",
            "Thống nhất nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội và bảo vệ môi trường."
        ],
        "correct": 0
    },
    {
        "question": "Trong những đặc điểm chủ yếu sau đây của kinh tế thị trường, đặc điểm nào trái với chủ trương \"Giá sản phẩm của doanh nghiệp phải trình Chính phủ phê duyệt\"?",
        "options": [
            "Giá cả cơ bản do cung - cầu điều tiết.",
            "Hệ thống thị trường phát triển hoàn hảo.",
            "Các chủ thể kinh tế phải có tính độc lập.",
            "Có hệ thống pháp quy kiện toàn."
        ],
        "correct": 0
    },
    {
        "question": "Đại hội IX của Đảng xác định nền kinh tế nước ta có mấy thành phần?",
        "options": [
            "Có 6 thành phần.",
            "Có 5 thành phần.",
            "Có 3 thành phần.",
            "Có 4 thành phần."
        ],
        "correct": 0
    },
    {
        "question": "Hiện nay ở nước ta đang phát triển mấy thành phần kinh tế?",
        "options": [
            "Năm thành phần.",
            "Ba thành phần.",
            "Bốn thành phần.",
            "Sáu thành phần."
        ],
        "correct": 0
    },
    {
        "question": "Về cơ chế quản lý kinh tế, đặc điểm nào sau đây làm cho các chủ thể kinh tế không có tính độc lập trong thị trường?",
        "options": [
            "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định.",
            "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát – giao nộp\" và cơ chế \"xin - cho\".",
            "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu.",
            "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới."
        ],
        "correct": 0
    },
    {
        "question": "Kinh tế thị trường không phải là cái riêng có của chủ nghĩa tư bản, mà nó còn tồn tại trong thời kỳ quá độ lên chủ nghĩa xã hội. Lập luận nào dưới đây là minh chứng chắc chắn nhất cho nhận thức về kinh tế thị trường thời kỳ đổi mới ở Việt Nam?",
        "options": [
            "Kinh tế thị trường đã hình thành trong xã hội phong kiến.",
            "Kinh tế thị trường đã có mầm mống từ trong xã hội nô lệ.",
            "Kinh tế thị trường vừa có thể liên hệ với chế độ tư hữu, vừa có thể liên hệ với chế độ công hữu và phục vụ cho chế độ ấy.",
            "Kinh tế thị trường có biểu hiện rõ rệt nhất trong chủ nghĩa tư bản, chi phối toàn bộ cuộc sống con người trong xã hội đó."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm: \"Kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội. Đó là nền kinh tế thị trường hiện đại, hội nhập quốc tế, vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, có sự quản lý của Nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo; bảo đảm định hướng xã hội chủ nghĩa vì mục tiêu \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\" phù hợp với từng giai đoạn phát triển của đất nước \", được Đảng ta khẳng định trong Đại hội lần thứ mấy?",
        "options": [
            "Đại hội XIII.",
            "Đại hội XI.",
            "Đại hội X.",
            "Đại hội XII."
        ],
        "correct": 0
    },
    {
        "question": "Việt Nam tham gia Diễn đàn Hợp tác Kinh tế châu Á – Thái Bình Dương (APEC) vào năm nào?",
        "options": [
            "Năm 1998.",
            "Năm 1995.",
            "Năm 2001.",
            "Năm 1996."
        ],
        "correct": 0
    },
    {
        "question": "Đặc điểm khác nhau căn bản giữa cuộc cách mạng khoa học kỹ thuật ngày nay với cuộc cách mạng công nghiệp thế kỷ XVIII, IX là gì?",
        "options": [
            "Mọi phát minh kỹ thuật dựa trên các nghiên cứu khoa học.",
            "Mọi phát minh kỹ thuật đều bắt nguồn từ đòi hỏi của cuộc sống.",
            "Mọi phát minh kỹ thuật dựa trên ngành khoa học cơ bản.",
            "Mọi phát minh kỹ thuật đều bắt nguồn từ thực tiễn kinh nghiệm."
        ],
        "correct": 0
    },
    {
        "question": "Tổ chức nào không phải là biểu hiện của xu thế toàn cầu hóa?",
        "options": [
            "Hiệp ước thương mại tự do Bắc Mỹ (NAFTA).",
            "Diễn đàn hợp tác Á – Âu (ASEM).",
            "Tổ chức hiệp ước Bắc Đại Tây Dương (NATO).",
            "Hiệp định thương mại tự do (ASEAN)."
        ],
        "correct": 0
    },
    {
        "question": "Vì sao cuộc cách mạng khoa học kỹ thuật giai đoạn thứ hai có thể gọi là cuộc cách mạng khoa học công nghệ?",
        "options": [
            "Vì cách mạng công nghiệp trở thành cốt lõi của cách mạng khoa học kỹ thuật.",
            "Vì phát hiện ra những nguồn năng lượng mới và công nghệ sinh học.",
            "Vì gần với sự ra đời của máy tính điện tử.",
            "Vì đã tìm ra nhiều vật liệu mới."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội, Đảng ta cho rằng: \"Hội nhập quốc tế chưa được triển khai đồng đều, hiệu quả tổng hợp chưa cao\". Nhận định đó thuộc nội dung nào dưới đây?",
        "options": [
            "Về quốc phòng, an ninh và đối ngoại.",
            "Về hiệu lực quản lý nhà nước.",
            "Về cơ cấu lại nền kinh tế.",
            "Về thực hiện các đột phá chiến lược."
        ],
        "correct": 0
    },
    {
        "question": "Trong các chuyển dịch mạnh cơ cấu nông nghiệp và phát triển kinh tế nông thôn, chuyển dịch nào dưới đây nói lên thực chất của công nghiệp hóa, hiện đại hóa nông nghiệp và kinh tế nông thôn?",
        "options": [
            "Đẩy nhanh tiến bộ khoa học kỹ thuật và công nghệ sinh học vào sản xuất nông nghiệp.",
            "Công nghiệp hóa, hiện đại hóa nông nghiệp, tạo ra giá trị gia tăng ngày càng cao.",
            "Công nghiệp hóa, hiện đại hóa nông nghiệp, gắn với công nghiệp chế biến và thị trường.",
            "Nâng cao năng suất, chất lượng và sức cạnh tranh của nông sản hàng hóa, phù hợp đặc điểm từng vùng, từng địa phương."
        ],
        "correct": 0
    },
    {
        "question": "Một trong những nội dung cơ bản của công nghiệp hóa, hiện đại hóa ở nước ta là gì?",
        "options": [
            "Phát triển mạnh mẽ lực lượng sản xuất.",
            "Phát triển mạnh mẽ khoa học kỹ thuật.",
            "Phát triển mạnh mẽ ngành công nghiệp cơ khí.",
            "Phát triển mạnh mẽ công nghệ thông tin."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm phát triển kinh tế - xã hội là: \"Đẩy mạnh cơ cấu lại công nghiệp, tạo nền tảng cho công nghiệp hóa, hiện đại hóa\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XII.",
            "Văn kiện Đại hội XIII.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội X."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm phát triển kinh tế - xã hội là: \"Phát triển nhanh, bền vững, phấn đấu sớm đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XII.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội X.",
            "Văn kiện Đại hội XIII."
        ],
        "correct": 0
    },
    {
        "question": "Nhận thức về công nghiệp hóa ở Việt Nam rằng: \"Công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức trong thể chế kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập kinh tế quốc tế\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Đại hội X.",
            "Đại hội IX.",
            "Đại hội XII.",
            "Đại hội XI."
        ],
        "correct": 0
    },
    {
        "question": "Nội dung nào không thuộc nội hàm của khái niệm \"kinh tế thị trường định hướng xã hội chủ nghĩa\" theo quan điểm của Đảng Cộng sản Việt Nam?",
        "options": [
            "Là nền kinh tế có những đặc trưng phản ánh điều kiện lịch sử, chính trị, kinh tế xã hội.",
            "Là nền kinh tế có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.",
            "Là nền kinh tế vận hành theo các quy luật của thị trường.",
            "Là nền kinh tế hướng tới xác lập một xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
        ],
        "correct": 0
    },
    {
        "question": "Phân phối theo lao động căn cứ vào số lượng, chất lượng lao động làm cơ sở. Chất lượng lao động biểu hiện ở đâu?",
        "options": [
            "Năng suất lao động.",
            "Cường độ lao động.",
            "Tất cả những yếu tố trên.",
            "Thời gian lao động."
        ],
        "correct": 0
    },
    {
        "question": "Đại hội Đảng toàn quốc lần thứ IX đã xác định, ở nước ta có những thành phần kinh tế nào sau đây?",
        "options": [
            "Nhà nước, tập thể, tư bản nhà nước, tư bản tư nhân, cá thể tiểu chủ, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, tư nhân, tư bản nhà nước, tư bản tư nhân, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, ngoài nhà nước, tư bản tư nhân, tư bản nhà nước, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, tư nhân, cá thể tiểu chủ, tư bản tư nhân, có vốn đầu tư nước ngoài."
        ],
        "correct": 0
    },
    {
        "question": "Việt Nam tham gia Khu vực thương mại tự do ASEAN (AFTA) vào năm nào?",
        "options": [
            "Năm 1996.",
            "Năm 1994.",
            "Năm 1995.",
            "Năm 1993."
        ],
        "correct": 0
    },
    {
        "question": "Chủ trương chủ động và tích cực hội nhập kinh tế quốc tế là trực tiếp xuất phát từ cơ sở nào?",
        "options": [
            "Toàn cầu hóa kinh tế là một xu thế khách quan, lôi cuốn ngày càng nhiều nước tham gia để tránh khỏi nguy cơ bị biệt lập, tụt hậu, kém phát triển.",
            "Nhu cầu chống tụt hậu về kinh tế, tranh thủ các nguồn lực bên ngoài đặt ra gay gắt với Việt Nam.",
            "Vấn đề giải tỏa tình trạng đối đầu, thù địch, phá thế bị bao vây, cấm vận, tạo môi trường quốc tế thuận lợi để tập trung xây dựng kinh tế là nhu cầu cấp bách đối với nước ta.",
            "Các nước, nhất là những nước đang phát triển đã đổi mới tư duy đối ngoại, thực hiện chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế."
        ],
        "correct": 0
    },
    {
        "question": "Điểm nào dưới đây là tác động tiêu cực của xu thế toàn cầu hóa đối với Việt Nam?",
        "options": [
            "Góp phần chuyển biến cơ cấu kinh tế - xã hội.",
            "Sự phát triển và tác động to lớn của các công ty xuyên quốc gia.",
            "Sự sáp nhập và hợp nhất của các công ty thành những tập đoàn lớn.",
            "Làm trầm trọng thêm sự bất công trong xã hội, phân hóa giàu nghèo trong một nước và giữa các nước."
        ],
        "correct": 0
    },
    {
        "question": "Trong các đặc trưng chủ yếu của công nghiệp hóa thời kỳ trước đổi mới, đặc trưng nào sau đây khiến cho chủ lực thực hiện công nghiệp hóa chỉ là Nhà nước?",
        "options": [
            "Tiến hành công nghiệp hóa thông qua cơ chế kế hoạch hóa tập trung quan liêu, bao cấp.",
            "Công nghiệp hóa chủ yếu dựa vào lợi thế về lao động, tài nguyên, đất đai và nguồn viện trợ của các nước xã hội chủ nghĩa.",
            "Ham làm nhanh, làm lớn, không quan tâm đến hiệu quả kinh tế - xã hội.",
            "Công nghiệp hóa thiên về phát triển công nghiệp nặng."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội: \"Cơ cấu công nghiệp dịch chuyển đúng hướng và tích cực,… phù hợp với mục tiêu phát triển bền vững\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XIII.",
            "Văn kiện Đại hội X.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội XII."
        ],
        "correct": 0
    },
    {
        "question": "Về cơ chế quản lý kinh tế, đặc điểm nào sau đây sinh ra nhiều yếu kém, khuyết điểm trong bộ máy quản lý?",
        "options": [
            "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu.",
            "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát - giao nộp\" và cơ chế \"xin - cho\".",
            "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định.",
            "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới."
        ],
        "correct": 0
    },
    {
        "question": "Ở nước ta hiện nay thực hiện theo nguyên tắc phân phối chủ yếu nào?",
        "options": [
            "Phân phối theo lao động.",
            "Phân phối theo vốn hay tài sản.",
            "Phân phối theo kết quả sản xuất kinh doanh.",
            "Phân phối theo giái trị sức lao động."
        ],
        "correct": 0
    },
    {
        "question": "Về tác dụng của việc đổi mới cơ chế quản lý kinh tế, phương án nào KHÔNG đúng?",
        "options": [
            "Sinh ra nhiều hiện tượng tiêu cực trong xã hội.",
            "Thúc đẩy lực lượng sản xuất phát triển.",
            "Tăng năng suất, chất lượng, hiệu quả.",
            "Tạo được động lực phát triển."
        ],
        "correct": 0
    },
    {
        "question": "Trong những đặc điểm chủ yếu sau đây của kinh tế thị trường, đặc điểm nào trái với chủ trương \"Sản phẩm nghiên cứu khoa học của cơ quan và cá nhân do Nhà nước đặt hàng và Nhà nước nghiệm thu\"?",
        "options": [
            "Hệ thống thị trường phát triển hoàn hảo.",
            "Các chủ thể kinh tế phải có tính độc lập.",
            "Giá cả cơ bản do cung - cầu điều tiết.",
            "Có hệ thống pháp quy kiện toàn."
        ],
        "correct": 0
    },
    {
        "question": "Đại hội nào của Đảng đề ra chủ trương \"Chủ động và tích cực hội nhập kinh tế quốc tế\"?",
        "options": [
            "Đại hội X.",
            "Đại hội VIII.",
            "Đại hội IX.",
            "Đại hội VII."
        ],
        "correct": 0
    },
    {
        "question": "Mặt hạn chế trong quá trình diễn ra cuộc cách mạng khoa học công nghệ là gì?",
        "options": [
            "Chế tạo ra vũ khí hiện đại có sức công phá lớn.",
            "Làm thay đổi chất lượng nguồn nhân lực.",
            "Làm thay đổi cơ cấu dân cư.",
            "Sự hình thành một thị trường thế giới với xu thế toàn cầu hóa."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm phát triển kinh tế - xã hội là: \"Nâng cao hiệu quả hoạt động đối ngoại, chủ động hội nhập quốc tế, giữ vững môi trường hòa bình và tạo điều kiện thuận lợi để phát triển đất nước\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XII.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội X.",
            "Văn kiện Đại hội XIII."
        ],
        "correct": 0
    },
    {
        "question": "Trong các đặc trưng chủ yếu của công nghiệp hóa thời kỳ trước đổi mới, đặc trưng nào sau đây nhìn chung là xuất phát từ nguồn lực sẵn có của Việt Nam?",
        "options": [
            "Công nghiệp hóa chủ yếu dựa vào lợi thế về lao động, tài nguyên, đất đai và nguồn viện trợ của các nước xã hội chủ nghĩa.",
            "Tiến hành công nghiệp hóa thông qua cơ chế kế hoạch hóa tập trung quan liêu, bao cấp.",
            "Công nghiệp hóa thiên về phát triển công nghiệp nặng.",
            "Ham làm nhanh, làm lớn, không quan tâm đến hiệu quả kinh tế - xã hội."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm phát triển kinh tế - xã hội là: \"Phát huy cao nhất các nguồn lực trong nước, đồng thời chủ động hội nhập quốc tế, huy động và sử dụng có hiệu quả các nguồn lực bên ngoài để phát triển nhanh, bền vững\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XII.",
            "Văn kiện Đại hội XIII.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội X."
        ],
        "correct": 0
    },
    {
        "question": "Đại hội Đảng toàn quốc lần thứ X đã xác định, ở nước ta có những thành phần kinh tế nào sau đây?",
        "options": [
            "Nhà nước, tập thể, tư nhân, tư bản nhà nước, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, cá thể tiểu chủ, tư bản nhà nước, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, tư bản tư nhân, tư bản nhà nước, có vốn đầu tư nước ngoài.",
            "Nhà nước, tập thể, cá thể tiểu chủ, tư bản tư nhân, có vốn đầu tư nước ngoài."
        ],
        "correct": 0
    },
    {
        "question": "Tác hại nào rất khó đẩy lùi và vẫn còn kéo dài đến nay, do cơ chế quản lý tập trung quan liêu, bao cấp thực hiện trong giai đoạn trước đổi mới đã gây ra?",
        "options": [
            "Làm giảm năng suất, chất lượng, hiệu quả.",
            "Không thúc đẩy sản xuất.",
            "Sinh ra nhiều hiện tượng tiêu cực trong xã hội.",
            "Không tạo được động lực phát triển."
        ],
        "correct": 0
    },
    {
        "question": "Kinh tế tư nhân, với tư cách là một thành phần kinh tế, đã được nâng lên một tầm mới trong Văn kiện Đại hội lần thứ mấy của Đảng?",
        "options": [
            "Đại hội XIII.",
            "Đại hội XI.",
            "Đại hội VI.",
            "Đại hội IX."
        ],
        "correct": 0
    },
    {
        "question": "Lập luận nào dưới đây chưa rõ ràng về kinh tế thị trường?",
        "options": [
            "Kinh tế thị trường vừa có thể liên hệ với chế độ tư hữu, vừa có thể liên hệ với chế độ công hữu và phục vụ cho chế độ ấy.",
            "Kinh tế thị trường đã có mầm mống từ trong xã hội nô lệ.",
            "Kinh tế thị trường có biểu hiện rõ rệt nhất trong chủ nghĩa tư bản, chi phối toàn bộ cuộc sống con người trong xã hội đó.",
            "Kinh tế thị trường đã hình thành trong xã hội phong kiến."
        ],
        "correct": 0
    },
    {
        "question": "Nội dung nào chưa chính xác khi đánh giá về nhận thức và chủ trương công nghiệp hóa thời kỳ trước đổi mới (12/1986)?",
        "options": [
            "Chúng ta đã xác định đúng mục tiêu và bước đi về xây dựng cơ sở vật chất - kỹ thuật.",
            "Trong việc bố trí cơ cấu kinh tế thường chỉ xuất phát từ lòng mong muốn đi nhanh.",
            "Đã chủ trương đẩy mạnh công nghiệp hóa trong khi chưa có đủ các tiền đề cần thiết.",
            "Kinh tế thị trường đã hình thành trong xã hội phong kiến."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội: \"Kinh tế tăng trưởng từng bước vững chắc và ngày càng được cải thiện, quy mô kinh tế ngày càng mở rộng, các cân đối lớn của nền kinh tế được bảo đảm\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam?",
        "options": [
            "Văn kiện Đại hội XIII.",
            "Văn kiện Đại hội X.",
            "Văn kiện Đại hội XI.",
            "Văn kiện Đại hội XII."
        ],
        "correct": 0
    },
    {
        "question": "Cơ chế quản lý tập trung quan liêu, bao cấp thực hiện trong giai đoạn trước đổi mới đã gây ra nhiều tác hại. Tác hại nào làm cho đất nước nghèo đi, kinh tế khủng hoảng?",
        "options": [
            "Làm giảm năng suất, chất lượng, hiệu quả.",
            "Không tạo được động lực phát triển.",
            "Không thúc đẩy sản xuất.",
            "Sinh ra nhiều hiện tượng tiêu cực trong xã hội."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội, Đảng ta cho rằng: \"Phát triển nông nghiệp vẫn còn những yếu tố thiếu bền vững, tăng trưởng chưa vững chắc\". Nhận định đó thuộc nội dung nào dưới đây?",
        "options": [
            "Về cơ cấu lại nền kinh tế.",
            "Về quốc phòng, an ninh và đối ngoại.",
            "Về thực hiện các đột phá chiến lược.",
            "Về hiệu lực quản lý nhà nước."
        ],
        "correct": 0
    },
    {
        "question": "Trong các đặc trưng chủ yếu của công nghiệp hóa thời kỳ trước đổi mới, đặc trưng nào sau đây chứng tỏ bệnh chủ quan, duy ý chí trong công nghiệp hóa?",
        "options": [
            "Ham làm nhanh, làm lớn, không quan tâm đến hiệu quả kinh tế - xã hội.",
            "Công nghiệp hóa chủ yếu dựa vào lợi thế về lao động, tài nguyên, đất đai và nguồn viện trợ của các nước xã hội chủ nghĩa.",
            "Công nghiệp hóa thiên về phát triển công nghiệp nặng.",
            "Tiến hành công nghiệp hóa thông qua cơ chế kế hoạch hóa tập trung quan liêu, bao cấp."
        ],
        "correct": 0
    },
    {
        "question": "Sự quản lý của nhà nước trong kinh tế thị trường định hướng xã hội chủ nghĩa và kinh tế thị trường tư bản chủ nghĩa khác nhau chủ yếu ở những lý do nào?",
        "options": [
            "Khác nhau ở mục tiêu, bản chất và công cụ quản lý.",
            "Khác nhau ở bản chất, công cụ quản lý của nhà nước.",
            "Khác nhau ở mục tiêu phát triển kinh tế - xã hội.",
            "Khác nhau ở mục tiêu, các công cụ quản lý vĩ mô."
        ],
        "correct": 0
    },
    {
        "question": "Về cơ chế quản lý kinh tế, đặc điểm nào sau đây tạo ra tâm lý ỷ lại, thụ động, tiêu cực trong hoạt động kinh tế?",
        "options": [
            "Nhà nước quản lý kinh tế thông qua chế độ \"cấp phát - giao nộp\" và cơ chế \"xin - cho\".",
            "Nhà nước quản lý nền kinh tế chủ yếu bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới.",
            "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu.",
            "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh. Giá cả do Nhà nước quy định."
        ],
        "correct": 0
    },
    {
        "question": "Lập luận nào dưới đây chưa rõ ràng về kinh tế thị trường?",
        "options": [
            "Kinh tế thị trường vừa có thể liên hệ với chế độ tư hữu, vừa có thể liên hệ với chế độ công hữu và phục vụ cho chế độ ấy.",
            "Kinh tế thị trường có biểu hiện rõ rệt nhất trong chủ nghĩa tư bản, chi phối toàn bộ cuộc sống con người trong xã hội đó.",
            "Kinh tế thị trường đã hình thành trong xã hội phong kiến.",
            "Kinh tế thị trường đã có mầm mống từ trong xã hội nô lệ."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội, Đảng ta cho rằng: \"Phát triển công nghiệp chưa đáp ứng được yêu cầu công nghiệp hóa, hiện đại hóa, thiếu tính bền vững\". Nhận định đó thuộc nội dung nào dưới đây?",
        "options": [
            "Về cơ cấu lại nền kinh tế.",
            "Về hiệu lực quản lý nhà nước.",
            "Về thực hiện các đột phá chiến lược.",
            "Về quốc phòng, an ninh và đối ngoại."
        ],
        "correct": 0
    },
    {
        "question": "Quan điểm: \"Kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta\" được trình bày trong Văn kiện Đại hội lần thứ mấy của Đảng?",
        "options": [
            "Đại hội VI.",
            "Đại hội VIII.",
            "Đại hội IX.",
            "Đại hội VII."
        ],
        "correct": 0
    },
    {
        "question": "Nhận thức về công nghiệp hóa ở Việt Nam đã trải qua nhiều mốc phát triển kể từ Đại hội III của Đảng (năm 1960) đến nay. Mốc nhận thức nào dưới đây là đầy đủ nhất?",
        "options": [
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức trong thể chế kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập quốc tế\".",
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa\".",
            "Giai đoạn chuẩn bị các tiền đề công nghiệp hóa đất nước đã cơ bản hoàn thành, cho phép nước ta chuyển sang giai đoạn đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.",
            "Công nghiệp hóa được nhận thức là \"công nghiệp hóa, hiện đại hóa từng bước gắn với phát triển kinh tế tri thức\"."
        ],
        "correct": 0
    },
    {
        "question": "Việt Nam chính thức trở thành thành viên của Tổ chức thương mại thế giới (WTO) vào năm nào?",
        "options": [
            "Năm 2007.",
            "Năm 2005.",
            "Năm 2006.",
            "Năm 2008."
        ],
        "correct": 0
    },
    {
        "question": "Tìm phương án trả lời đúng về nội dung đảm bảo hài hòa các lợi ích kinh tế trong phát triển kinh tế ở nước ta?",
        "options": [
            "Cả A, B, C đều đúng.",
            "Tạo điều kiện gia tăng thu nhập cho các chủ thể.",
            "Hạn chế mâu thuẫn về lợi ích kinh tế giữa các chủ thể.",
            "Xử lý xung đột do mâu thuẫn giữa các lợi ích kinh tế."
        ],
        "correct": 0
    },
    {
        "question": "Đặc điểm lớn nhất của cuộc cách mạng khoa học kỹ thuật ngày nay là gì?",
        "options": [
            "Khoa học trở thành lực lượng sản xuất trực tiếp.",
            "Đạt được nhiều thành tựu rực rỡ trên nhiều lĩnh vực.",
            "Đưa loài người bước vào nền văn minh hậu công nghiệp.",
            "Đưa loài người bước vào nền văn minh trí tuệ."
        ],
        "correct": 0
    },
    {
        "question": "Công nghiệp hóa, hiện đại hóa có tác dụng gì?",
        "options": [
            "Tạo điều kiện để phát triển lực lượng sản xuất và tăng năng suất lao động xã hội.",
            "Đưa nước ta ra khỏi tình trạng kém phát triển.",
            "Tạo điều kiện để nước ta hội nhập kinh tế quốc tế.",
            "Nâng cao uy tín của nước ta trên trường quốc tế."
        ],
        "correct": 0
    },
    {
        "question": "Cuộc cách mạng khoa học kỹ thuật hiện đại diễn ra từ những năm 40 của thế kỷ XX và khởi đầu từ nước nào?",
        "options": [
            "Anh.",
            "Đức.",
            "Mỹ.",
            "Pháp."
        ],
        "correct": 0
    },
    {
        "question": "Đi đôi với chuyển dịch cơ cấu kinh tế phải chuyển dịch cơ cấu lao động theo hướng công nghiệp hóa, hiện đại hóa gắn với phát triển yếu tố nào sau đây?",
        "options": [
            "Kinh tế tri thức.",
            "Kinh tế thị trường.",
            "Kinh tế hiện đại.",
            "Kinh tế nông nghiệp."
        ],
        "correct": 0
    },
    {
        "question": "Đánh giá về kết quả thực hiện nhiệm vụ phát triển kinh tế - xã hội, Đảng ta cho rằng: \"Một bộ phận sinh viên sau tốt nghiệp khó tìm được việc làm, tỷ lệ lao động khu vực phi chính thức còn lớn\". Nhận định đó thuộc nội dung nào sau đây?",
        "options": [
            "Về các vấn đề xã hội, môi trường.",
            "Về cơ cấu lại nền kinh tế.",
            "Về thực hiện các đột phá chiến lược.",
            "Về quốc phòng an ninh và đối ngoại."
        ],
        "correct": 0
    }
];

// Export để sử dụng trong môi trường Node.js (nếu cần)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
