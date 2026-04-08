// --- PRODUCT DATABASE (Dữ liệu sản phẩm) ---
const productData = [
    {
        id: 'ly-nen',
        name: 'Ly Nến Cầu Vồng',
        price: '150.000đ',
        image: 'Assets/Image/ly-nen-cong-vong.webp',
        imageHover: 'Assets/Image/hover_ly-nen.png',
        category: 'nen-thap',
        description: 'Thiết kế ly thủy tinh hiệu ứng cầu vồng bắt mắt, mang lại vẻ đẹp lung linh huyền ảo khi thắp sáng. Phù hợp cho không gian thư giãn buổi tối.',
        details: [
            'Chất liệu: Thủy tinh Iridescent cao cấp.',
            'Sáp: Đậu nành thiên nhiên 100%.',
            'Hương thơm: Lavender & Vanilla thư giãn.',
            'Thời gian cháy: 35 giờ.'
        ]
    },
    {
        id: 'nen-thoi-gian',
        name: 'Bộ Nến Thời Gian',
        price: '180.000đ',
        image: 'Assets/Image/nen-thoi-gian-sap-ong.webp',
        imageHover: 'Assets/Image/hover_nen-thoi-gian.png',
        category: 'nen-thap',
        description: 'Bộ sưu tập nến giúp bạn quản lý thời gian làm việc (Pomodoro) một cách tự nhiên. Mỗi cây nến tương ứng with một khoảng thời gian tập trung sâu.',
        details: [
            'Số lượng: 3 cây / bộ.',
            'Thời gian: 25 phút / 45 phút / 60 phút.',
            'Mùi hương: Bạc hà & Chanh sả.',
            'Tính năng: Tự tắt an toàn khi cháy hết.'
        ]
    },
    {
        id: 'nen-tealight',
        name: 'Nến Tealight (Set 4)',
        price: '45.000đ',
        image: 'Assets/Image/nen-tea-light.webp',
        imageHover: 'Assets/Image/hover_nen-tealight.png',
        category: 'nen-thap',
        description: 'Bộ nến nhỏ gọn phù hợp cho việc xông tinh dầu hoặc tạo điểm nhấn ánh sáng tinh tế cho bàn tiệc, bàn làm việc.',
        details: [
            'Số lượng: 4 nến / bộ.',
            'Chất liệu: Sáp cọ trắng sạch.',
            'Thời gian cháy: 4 giờ / nến.',
            'Không khói, không mùi, an toàn.'
        ]
    },
    {
        id: 'nen-du-lich',
        name: 'Nến Du Lịch Hộp Thiếc',
        price: '90.000đ',
        image: 'Assets/Image/nen-du-lich-hop-thiec-vuong.webp',
        imageHover: 'Assets/Image/hover_nen-du-lich.png',
        category: 'nen-thap',
        description: 'Người bạn đồng hành lý tưởng cho những chuyến đi. Thiết kế hộp thiếc vuông chắc chắn, dễ dàng mang theo bất cứ đâu.',
        details: [
            'Trọng lượng: 100g.',
            'Hộp: Thiếc cao cấp có nắp đậy.',
            'Hương: Gỗ thông rừng & Cam ngọt.',
            'Thời gian cháy: 20 giờ.'
        ]
    },
    {
        id: 'nen-tru-soc',
        name: 'Nến Trụ Sọc (Size L)',
        price: '150.000đ',
        image: 'Assets/Image/tru-soc-tron-size_L.webp',
        imageHover: 'Assets/Image/hover_nen-tru-soc.png',
        category: 'nen-decor',
        description: 'Dòng nến decor với họa tiết sọc dọc tinh tế, mang phong cách kiến trúc Hy Lạp cổ điển. Tạo điểm nhấn sang trọng cho kệ sách.',
        details: [
            'Kích thước: Cao 15cm.',
            'Màu sắc: Kem trắng / Nâu đất.',
            'Chất liệu: Sáp ong mix sáp đậu nành.',
            'Dùng trang trí hoặc làm quà tặng.'
        ]
    },
    {
        id: 'nen-cay-thong',
        name: 'Nến Cây Thông Lớn',
        price: '120.000đ',
        image: 'Assets/Image/nen-cay-thong-lon.webp',
        imageHover: 'Assets/Image/hover_nen-cay-thong.png',
        category: 'nen-decor',
        description: 'Thiết kế tạo hình cây thông Noel tinh xảo, mang không khí ấm áp của mùa lễ hội vào không gian của bạn.',
        details: [
            'Kích thước: 15cm x 8cm.',
            'Màu sắc: Xanh thông rừng.',
            'Hương thơm: Gỗ thông ấm nồng.',
            'Chế tác thủ công tỉ mỉ.'
        ]
    },
    {
        id: 'hoa-tam',
        name: 'Bộ Hoa Tâm Thanh Sơn',
        price: '350.000đ',
        image: 'Assets/Image/hoa-tam-thanh-son.webp',
        imageHover: 'Assets/Image/hover_hoa-tam.png',
        category: 'nen-thap',
        description: 'Sản phẩm signature của Lit Corner. Sự kết hợp giữa sáp ong và tinh dầu đặc biệt giúp thanh lọc tâm trí hiệu quả.',
        details: [
            'Thành phần: Sáp ong rừng nguyên chất.',
            'Bấc nến: Gỗ phong tự nhiên.',
            'Thời gian cháy: 50 giờ.',
            'Tặng kèm đế gốm tối giản.'
        ]
    },
    {
        id: 'de-knot',
        name: 'Đế Nến Knot',
        price: '85.000đ',
        image: 'Assets/Image/de-knot.webp',
        imageHover: 'Assets/Image/hover_de-knot.png',
        category: 'phu-kien',
        description: 'Phụ kiện decor với hình thắt nút hiện đại. Phù hợp để kê các dòng nến trụ hoặc nến tealight.',
        details: [
            'Chất liệu: Xi măng composite mịn.',
            'Màu sắc: Xám bê tông / Đen nhám.',
            'Kích thước: 8cm x 8cm.',
            'Phong cách: Industrial / Modern.'
        ]
    },
    {
        id: 'khay-oval',
        name: 'Khay Oval (Size L)',
        price: '110.000đ',
        image: 'Assets/Image/khay-oval-size_L.webp',
        imageHover: 'Assets/Image/hover_khay-oval.png',
        category: 'phu-kien',
        description: 'Khay đựng đa năng giúp sắp xếp nến và phụ kiện tinh tế. Chất liệu bền bỉ, dễ dàng vệ sinh.',
        details: [
            'Hình dáng: Oval sang trọng.',
            'Kích thước: 25cm x 15cm.',
            'Chất liệu: Terrazzo handmade.',
            'Công dụng: Khay nến / Khay trang sức.'
        ]
    },
    {
        id: 'khay-luc-giac',
        name: 'Khay Lục Giác',
        price: '90.000đ',
        image: 'Assets/Image/khay-luc-giac.webp',
        imageHover: 'Assets/Image/hover_khay-luc-giac.png',
        category: 'phu-kien',
        description: 'Thiết kế hình học mạnh mẽ, mang lại nét hiện đại cho bàn làm việc. Giúp bảo vệ bề mặt bàn khỏi sáp nến.',
        details: [
            'Chất liệu: Gốm sứ tráng men.',
            'Màu sắc: Trắng marble.',
            'Kích thước: 12cm cạnh.',
            'Chất lượng xuất khẩu.'
        ]
    },
    {
        id: 'de-vintage',
        name: 'Đế Nến Vintage',
        price: '75.000đ',
        image: 'Assets/Image/de-vintage.webp',
        imageHover: 'Assets/Image/hover_de-vintage.png',
        category: 'phu-kien',
        description: 'Đế nến phong cách cổ điển. Thiết kế tối giản giúp tôn vinh vẻ đẹp của nến và bảo vệ bề mặt bàn.',
        details: [
            'Chất liệu: Gốm thủ công nhám.',
            'Màu sắc: Kem trắng / Xám.',
            'Đường kính: 10cm.',
            'Phong cách: Minimalist.'
        ]
    },
    {
        id: 'tra-o-long',
        name: 'Trà Ô Long Sữa Thanh Sơn',
        price: '95.000đ',
        image: 'Assets/Image/tra-o-long-sua-thanh-son.webp',
        imageHover: 'Assets/Image/hover_tra-o-long.png',
        category: 'tra',
        description: 'Vị trà ngọt thanh, hương sữa nhẹ nhàng tự nhiên. Người bạn đồng hành hoàn hảo cho những buổi làm việc tập trung.',
        details: [
            'Trọng lượng: 100g tinh khiết.',
            'Lá trà: Tuyển chọn loại 1.',
            'Cách pha: 90 độ C, ủ 3-5 phút.',
            'Công dụng: Giúp tỉnh táo, thư giãn.'
        ]
    },
    {
        id: 'vong-nguyet-que',
        name: 'Sáp Vòng Nguyệt Quế',
        price: '130.000đ',
        image: 'Assets/Image/sap-thom-vong-nguyet-que.webp',
        imageHover: 'Assets/Image/hover_vong-nguyet-que.png',
        category: 'nen-decor',
        description: 'Sáp thơm treo tường với thiết kế vòng nguyệt quế thảo mộc. Mang hương thơm bền lâu cho tủ quần áo hoặc xe hơi.',
        details: [
            'Chất liệu: Sáp đậu nành & Hoa khô.',
            'Hương thơm: Thảo mộc tự nhiên.',
            'Thời gian lưu hương: 2-3 tháng.',
            'Trang trí: Handmade độc bản.'
        ]
    },
    {
        id: 'set-toa-huong',
        name: 'Set Góc Tỏa Hương',
        price: '350.000đ',
        image: 'Assets/Image/Giang_sinh-goc-toa-huong.webp',
        imageHover: 'Assets/Image/hover_set-toa-huong.png',
        category: 'gift',
        description: 'Bộ quà tặng cơ bản tinh tế, phù hợp để bắt đầu hành trình thưởng nến. Thay lời chúc an lành tới người nhận.',
        details: [
            '1 Nến thơm thiên nhiên tùy chọn hương.',
            '1 Đế nến decor xi măng tối giản.',
            'Hộp quà thắt nơ ruy băng thủ công.',
            'Tặng kèm thiệp viết tay theo yêu cầu.'
        ]
    },
    {
        id: 'set-sang-trong',
        name: 'Set Góc Sang Trọng',
        price: '450.000đ',
        image: 'Assets/Image/Giang_sinh-goc-sang-trong.webp',
        imageHover: 'Assets/Image/hover_set-sang-trong.png',
        category: 'gift',
        description: 'Bộ sưu tập quà tặng cao cấp nhất tại Lit Corner. Kết hợp tinh tế giữa nến sáp ong độc bản, trà thượng hạng và khay decor mỹ thuật.',
        details: [
            '1 Bộ Nến Thời Gian (3 cây).',
            '1 Khay Oval lớn chất liệu Terrazzo.',
            '1 Hũ Trà Ô Long Sữa Thanh Sơn (40g).',
            'Gói quà Premium & thiệp sáp đóng dấu.'
        ]
    },
    {
        id: 'set-khoang-rieng',
        name: 'Set Góc Khoảng Riêng',
        price: '250.000đ',
        image: 'Assets/Image/Giang_sinh-goc-khoang-rieng.webp',
        imageHover: 'Assets/Image/hover_set-khoang-rieng.png',
        category: 'gift',
        description: 'Món quà tối giản cho những tâm hồn yêu sự riêng tư. Hương thơm nhẹ nhàng giúp lấp đầy không gian nhỏ.',
        details: [
            '1 Ly nến thơm Cầu Vòng (size nhỏ).',
            '1 Sáp thơm Vòng Nguyệt Quế.',
            'Hộp quà Kraft thắt nơ thừng mộc mạc.',
            'Thiệp mini viết tay xinh xắn.'
        ]
    },
    {
        id: 'de-taper-3-tang',
        name: 'Đế Nến Taper 3 Tầng',
        price: '85.000đ',
        image: 'Assets/Image/de-taper-3-tang.webp',
        imageHover: 'Assets/Image/hover_de-taper-3-tang.png',
        category: 'phu-kien',
        description: 'Thiết kế ba tầng độc đáo, tôn vinh vẻ đẹp của nến Taper. Chất liệu bền bỉ và hiện đại.',
        details: [
            'Chất liệu: Xi măng composite.',
            'Thiết kế: 3 tầng hiện đại.',
            'Màu sắc: Kem nhám.',
            'Công dụng: Kê nến taper / decor.'
        ]
    },
    {
        id: 'de-taper-co-ban',
        name: 'Đế Nến Taper Cơ Bản',
        price: '45.000đ',
        image: 'Assets/Image/de-taper-co-ban.webp',
        category: 'phu-kien',
        description: 'Đế nến Taper tối giản, phù hợp cho mọi không gian từ bàn ăn đến kệ sách.',
        details: [
            'Dành cho nến đường kính 2.2cm.',
            'Chất liệu: Gốm thủ công.',
            'Phong cách: Minimalist.',
            'Dễ dàng vệ sinh.'
        ]
    },
    {
        id: 'de-tea-light-don',
        name: 'Đế Nến Tealight Đơn',
        price: '35.000đ',
        image: 'Assets/Image/de-tea-light-don.webp',
        category: 'phu-kien',
        description: 'Đế đựng nến tealight nhỏ gọn, giúp tạo điểm nhấn ánh sáng tinh tế.',
        details: [
            'Phù hợp cho nến tealight tiêu chuẩn.',
            'Chất liệu: Xi măng composite mịn.',
            'Đường kính: 5cm.',
            'An toàn, cách nhiệt tốt.'
        ]
    },
    {
        id: 'khay-oval-size_M',
        name: 'Khay Oval (Size M)',
        price: '85.000đ',
        image: 'Assets/Image/khay-oval-size_M.webp',
        category: 'phu-kien',
        description: 'Khay Oval kích thước vừa vặn cho bộ nến đơn và một ít phụ kiện decor.',
        details: [
            'Chất liệu: Terrazzo handmade.',
            'Kích thước: 18cm x 10cm.',
            'Chất liệu: Chống thấm, chống trầy.',
            'Ứng dụng: Khay nến / Khay trang sức.'
        ]
    },
    {
        id: 'khay-tron',
        name: 'Khay Tròn Decor',
        price: '75.000đ',
        image: 'Assets/Image/khay-tron.webp',
        category: 'phu-kien',
        description: 'Thiết kế khay tròn mềm mại, giúp gom gọn các góc decor của bạn.',
        details: [
            'Đường kính: 15cm.',
            'Chất liệu: Gốm nhám cao cấp.',
            'Màu sắc: Kem / Xám.',
            'Decor phong cách tối giản.'
        ]
    },
    {
        id: 'nen-cay-thong-nho',
        name: 'Nến Cây Thông Nhỏ',
        price: '55.000đ',
        image: 'Assets/Image/nen-cay-thong-nho.webp',
        category: 'nen-decor',
        description: 'Phiên bản nhỏ gọn của nến cây thông, lý tưởng cho các góc nhỏ hoặc phối bộ.',
        details: [
            'Kích thước: 8cm x 5cm.',
            'Chất liệu: Sáp cọ thiên nhiên.',
            'Hương thơm: Gỗ lạnh.',
            'Thủ công 100%.'
        ]
    },
    {
        id: 'tru-soc-tron-size_M',
        name: 'Nến Trụ Sọc (Size M)',
        price: '95.000đ',
        image: 'Assets/Image/tru-soc-tron-size_M.webp',
        category: 'nen-decor',
        description: 'Trụ nến sọc dọc tinh tế phiên bản Size M. Dễ dàng kết hợp tạo hiệu ứng decor theo cụm.',
        details: [
            'Kích thước: Cao 10cm.',
            'Họa tiết: Sọc dọc kiến trúc.',
            'Màu sắc: Kem / Nâu đất.',
            'Thời gian cháy: 25 giờ.'
        ]
    }
];

// --- BLOG DATABASE (Dữ liệu bài viết) ---
const blogData = [
    {
        id: 'khong-gian-thu-gian',
        title: 'Cách 30 Phút Tạo Nên Không Gian Thư Giãn Tuyệt Đối',
        excerpt: 'Trong một thế giới luôn hối hả, chỉ cần 30 phút và một ngọn nến thơm là bạn có thể thiết lập lại tâm trí và tạo ra góc tĩnh lặng riêng mình.',
        image: 'Assets/Image/blog_relax_v2.png',
        category: 'loi-song',
        categoryLabel: 'Lối Sống',
        date: 'Tháng 11, 2024',
        readTime: '5 phút đọc',
        author: 'Lit Corner Team',
        content: `
            <p>Trong một thế giới luôn hối hả và chuyển động không ngừng, việc tìm kiếm một góc nhỏ bình yên trong chính ngôi nhà của mình là điều thiết yếu. Không cần những nghi thức rườm rà, đôi khi chỉ một ngọn nến thơm cũng đủ để thiết lập lại tâm trí.</p>
            <h2>1. Liệu pháp "30 Phút Chuyển Giao"</h2>
            <p>Sau khi kết thúc công việc, não bộ chúng ta thường vẫn trong trạng thái gồng mình và căng thẳng. Một thói quen "chuyển giao" đơn giản có thể báo hiệu cho cơ thể biết rằng: <em>"Đã đến lúc được nghỉ ngơi"</em>.</p>
            <p>Hãy thử tắt bớt đèn tuýp sáng chói, thắp lên một hũ nến sáp ong tự nhiên của Lit Corner, và để ánh lửa bập bùng thay thế sự xao nhãng của màn hình điện thoại.</p>
            <h2>2. Bí quyết kết hợp Tầm nhìn và Khứu giác</h2>
            <p>Theo tâm lý học không gian, sự kết hợp giữa ánh sáng yếu (ambient light) và một mùi hương mộc mạc sẽ nhanh chóng làm dịu lại hệ thần kinh trung ương.</p>
            <blockquote>"Nến thủ công không chỉ để ngửi. Nó là một điểm mỏ neo thị giác, giúp bạn neo đậu lại với những phút giây hiện tại."</blockquote>
            <h2>3. Thiết lập góc mộc mạc cá nhân</h2>
            <p>Đặt nến trên một chiếc khay xi măng thủ công để đảm bảo an toàn và thẩm mỹ. Thưởng thức cùng một ly Trà Ô Long Sữa nóng và một bản nhạc Lofi nhẹ nhàng.</p>
        `
    },
    {
        id: 'cach-chon-nen-thom',
        title: 'Hướng Dẫn Chọn Nến Thơm Phù Hợp Với Từng Không Gian',
        excerpt: 'Mỗi căn phòng có một "tính cách" riêng – phòng ngủ cần sự tĩnh lặng, phòng làm việc cần sự tập trung. Cùng khám phá cách chọn hương nến hoàn hảo.',
        image: 'Assets/Image/blog_choose.png',
        category: 'huong-dan',
        categoryLabel: 'Hướng Dẫn',
        date: 'Tháng 12, 2024',
        readTime: '4 phút đọc',
        author: 'Nguyễn Minh Châu',
        content: `
            <p>Không phải ngẫu nhiên mà các khách sạn 5 sao luôn có mùi hương đặc trưng riêng – đó là nghệ thuật thiết kế mùi hương cho không gian. Bạn cũng có thể làm điều tương tự tại nhà.</p>
            <h2>1. Phòng Ngủ – Hương Thư Giãn</h2>
            <p>Phòng ngủ là nơi cần sự bình yên tuyệt đối. Hãy chọn những dòng hương nhẹ nhàng như Lavender (oải hương), Vanilla hoặc Chamomile. Tránh các hương có tính kích thích mạnh.</p>
            <h2>2. Phòng Làm Việc – Hương Kích Thích Tư Duy</h2>
            <p>Đây là không gian cần sự tập trung. Hương Bạc Hà (Mint) và Chanh sả sẽ giúp kích thích não bộ hoạt động hiệu quả hơn, là lựa chọn lý tưởng cho "Bộ Nến Thời Gian" của chúng tôi.</p>
            <h2>3. Phòng Khách – Hương Chào Đón</h2>
            <p>Gây ấn tượng tốt với khách bằng những hương ấm áp như Gỗ Đàn Hương (Sandalwood) hoặc Quế Hoa Cam. Đây là những hương mang lại cảm giác sang trọng và hiếu khách.</p>
            <blockquote>"Mùi hương là thứ duy nhất có thể chạm đến ký ức và cảm xúc của chúng ta ngay lập tức, không qua bộ lọc của lý trí."</blockquote>
        `
    },
    {
        id: 'an-toan-khi-dung-nen',
        title: '7 Lưu Ý An Toàn Khi Thắp Nến Bạn Nhất Định Phải Biết',
        excerpt: 'Nến thơm mang lại vẻ đẹp và sự thư giãn, nhưng nếu sử dụng không đúng cách có thể gây nguy hiểm. Hãy xem 7 nguyên tắc vàng giúp bạn thưởng nến an toàn.',
        image: 'Assets/Image/blog_safety.png',
        category: 'kien-thuc',
        categoryLabel: 'Kiến Thức',
        date: 'Tháng 1, 2025',
        readTime: '3 phút đọc',
        author: 'Lit Corner Team',
        content: `
            <p>An toàn luôn là ưu tiên hàng đầu khi thưởng thức nến. Dù sản phẩm của chúng tôi được làm từ sáp thiên nhiên an toàn, dưới đây là 7 nguyên tắc vàng bạn cần ghi nhớ.</p>
            <h2>7 Nguyên Tắc Vàng</h2>
            <ul>
                <li><strong>Không bao giờ để nến đang cháy khi không có người:</strong> Đây là nguyên tắc số 1 và quan trọng nhất.</li>
                <li><strong>Cắt bấc trước mỗi lần thắp:</strong> Nên cắt xuống còn khoảng 5mm để ngọn lửa ổn định và không tạo khói đen.</li>
                <li><strong>Tránh xa gió lùa:</strong> Đặt nến ở nơi tránh xa quạt, điều hòa để ánh lửa không bị rung lắc gây khói.</li>
                <li><strong>Dùng đế nến phù hợp:</strong> Luôn đặt nến trên bề mặt phẳng, cứng và chịu nhiệt.</li>
                <li><strong>Không đốt quá 4 tiếng liên tục:</strong> Sau 4 giờ, hãy tắt nến và để nguội ít nhất 2 giờ trước khi thắp lại.</li>
                <li><strong>Giữ xa tầm tay trẻ em và thú cưng:</strong> Đảm bảo nến được đặt ở nơi an toàn.</li>
                <li><strong>Tắt nến đúng cách:</strong> Dùng nắp đậy hoặc que dập lửa chuyên dụng, tránh thổi bằng miệng sẽ gây khói và bắn sáp.</li>
            </ul>
            <blockquote>"Một ngọn nến được thắp đúng cách có thể mang đến hàng trăm giờ thưởng thức an toàn và thú vị."</blockquote>
        `
    },
    {
        id: 'loi-ich-sap-dau-nanh',
        title: 'Tại Sao Sáp Đậu Nành Là Lựa Chọn Tốt Hơn Sáp Paraffin?',
        excerpt: 'Hiểu rõ sự khác biệt giữa sáp đậu nành tự nhiên và sáp paraffin tổng hợp để lựa chọn nến thơm thực sự tốt cho sức khỏe và môi trường.',
        image: 'Assets/Image/blog_soy_wax.png',
        category: 'kien-thuc',
        categoryLabel: 'Kiến Thức',
        date: 'Tháng 2, 2025',
        readTime: '6 phút đọc',
        author: 'Nguyễn Minh Châu',
        content: `
            <p>Khi mua nến thơm, nhiều người chỉ quan tâm đến mùi hương mà bỏ qua một yếu tố quan trọng không kém: chất liệu sáp. Sự khác biệt giữa sáp đậu nành và sáp paraffin là đáng kể.</p>
            <h2>Sáp Paraffin – Những Điều Bạn Chưa Biết</h2>
            <p>Sáp paraffin là sản phẩm phụ của quá trình lọc dầu mỏ. Khi đốt cháy, nó có thể thải ra các chất như benzene và toluene – những chất có hại cho đường hô hấp nếu tiếp xúc lâu dài trong phòng kín.</p>
            <h2>Sáp Đậu Nành – Lựa Chọn Tự Nhiên</h2>
            <p>Sáp đậu nành (Soy Wax) được chiết xuất từ đậu tương, là nguồn nguyên liệu hoàn toàn tái tạo và thân thiện với môi trường. Khi cháy, nó tạo ra ít khói hơn đáng kể và không chứa độc tố.</p>
            <ul>
                <li><strong>Cháy lâu hơn:</strong> Sáp đậu nành cháy chậm hơn 30-50% so với paraffin.</li>
                <li><strong>Lưu hương tốt hơn:</strong> Nhiệt độ cháy thấp hơn giúp tinh dầu tỏa hương từ từ và bền lâu.</li>
                <li><strong>Dễ vệ sinh:</strong> Nếu sáp bị đổ, chỉ cần dùng nước nóng và xà phòng là sạch.</li>
                <li><strong>Thân thiện môi trường:</strong> Phân hủy sinh học tự nhiên.</li>
            </ul>
            <p>Tại Lit Corner, 100% sản phẩm nến của chúng tôi đều sử dụng sáp đậu nành hoặc sáp ong nguyên chất, không pha trộn paraffin.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- DARK MODE THEME TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- MOBILE HAMBURGER MENU ---
    (function initMobileMenu() {
        // Only create mobile menu if hamburger button exists
        const hamburgerBtn = document.getElementById('mobile-menu-btn');
        if (!hamburgerBtn) return;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'mobile-menu-overlay';
        document.body.appendChild(overlay);

        // Create drawer
        const drawer = document.createElement('div');
        drawer.id = 'mobile-menu-drawer';

        // Detect current page for active state
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        function linkClass(page) {
            return currentPage === page ? 'mobile-nav-link active-link' : 'mobile-nav-link';
        }

        drawer.innerHTML = `
            <div style="padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.08);">
                <a href="index.html" style="display: block; width: 80px;">
                    <img src="Assets/Image/logo.webp" alt="Lit Corner" style="width: 100%; object-fit: contain;">
                </a>
                <button id="mobile-menu-close" style="width: 36px; height: 36px; border-radius: 50%; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; font-size: 18px; color: #666;">
                    <i class="ph-bold ph-x"></i>
                </button>
            </div>
            <nav style="padding: 8px 0;">
                <a href="shop.html" class="${linkClass('shop.html')}">
                    <i class="ph-fill ph-storefront"></i> Sản phẩm
                </a>
                <a href="gift.html" class="${linkClass('gift.html')}">
                    <i class="ph-fill ph-gift"></i> Quà tặng
                </a>
                <a href="about.html" class="${linkClass('about.html')}">
                    <i class="ph-fill ph-info"></i> Câu chuyện
                </a>
                <a href="blog.html" class="${linkClass('blog.html')}">
                    <i class="ph-fill ph-book-open-text"></i> Cảm hứng
                </a>
                <a href="orders.html" class="${linkClass('orders.html')}">
                    <i class="ph-fill ph-receipt"></i> Đơn mua
                </a>
            </nav>
            <div style="padding: 16px 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; opacity: 0.4; margin-bottom: 12px;">Danh mục sản phẩm</p>
                <a href="shop.html?filter=nen-thap" class="mobile-nav-link" style="padding: 10px 24px; font-size: 13px; opacity: 0.7;">
                    Nến Thắp & Thư giãn
                </a>
                <a href="shop.html?filter=nen-decor" class="mobile-nav-link" style="padding: 10px 24px; font-size: 13px; opacity: 0.7;">
                    Nến Trang Trí
                </a>
                <a href="shop.html?filter=phu-kien" class="mobile-nav-link" style="padding: 10px 24px; font-size: 13px; opacity: 0.7;">
                    Phụ Kiện Trang Trí
                </a>
                <a href="shop.html?filter=tra" class="mobile-nav-link" style="padding: 10px 24px; font-size: 13px; opacity: 0.7;">
                    Trà Thanh Lọc
                </a>
            </div>
            <div style="padding: 16px 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <a href="login.html" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #2C3E35; color: white; padding: 12px 20px; border-radius: 12px; font-weight: 700; font-size: 14px; text-decoration: none; transition: background 0.3s;">
                    <i class="ph ph-user-circle" style="font-size: 20px;"></i> Đăng nhập
                </a>
            </div>
        `;
        document.body.appendChild(drawer);

        function openMenu() {
            overlay.classList.add('active');
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            overlay.classList.remove('active');
            drawer.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburgerBtn.addEventListener('click', openMenu);
        overlay.addEventListener('click', closeMenu);
        const closeBtn = document.getElementById('mobile-menu-close');
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    })();

    // 1. Khởi tạo Giỏ hàng (Cart Init)
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        const countEl = document.getElementById('cart-count');
        if(countEl) {
            if (count > 0) {
                countEl.innerText = count;
                countEl.style.display = 'flex';
                countEl.style.opacity = '1';
            } else {
                countEl.style.display = 'none';
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(cart));
    }
    updateCartCount();

    // 2. Hiệu ứng Navbar khi cuộn
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        }
    });

    // 3. Khởi tạo thanh trượt (Swiper Carousel) nếu tồn tại trên trang
    if (document.querySelector('.feature-swiper')) {
        new Swiper('.feature-swiper', {
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 600,
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            },
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
            keyboard: {
                enabled: true
            }
        });
    }

    // Hero Swiper (Homepage Banner)
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.hero-pagination',
                clickable: true,
            },
            speed: 1000
        });
    }

    // --- GLOBAL SEARCH OVERLAY LOGIC ---
    const searchOverlay = document.createElement('div');
    searchOverlay.id = 'search-overlay';
    searchOverlay.className = 'fixed inset-0 bg-[#F9F9F7]/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center opacity-0 pointer-events-none smooth-transition';
    searchOverlay.innerHTML = `
        <button id="close-search" class="absolute top-8 right-8 text-[#1A1A1A] dark:text-white hover:text-amber-700 smooth-transition hover:scale-110">
            <i class="ph-bold ph-x text-3xl"></i>
        </button>
        <div class="w-full max-w-2xl px-6">
            <h2 class="text-3xl font-extrabold mb-6 text-center text-[#1A1A1A] dark:text-white">Bạn đang tìm gì?</h2>
            <div class="relative mt-8">
                <input type="text" id="search-input" placeholder="Ví dụ: Nến trà, Hoa Tâm..." class="w-full bg-white dark:bg-[#2A2A2A] border-b-2 border-[#2C3E35] dark:border-amber-700 focus:border-amber-700 dark:text-white px-6 py-4 text-xl outline-none shadow-2xl rounded-2xl smooth-transition">
                <button id="submit-search" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#2C3E35] dark:text-white hover:text-amber-700 smooth-transition">
                    <i class="ph-bold ph-magnifying-glass text-2xl"></i>
                </button>
            </div>
            <p class="text-center mt-6 text-sm opacity-60 dark:text-gray-400 mb-3">Gợi ý tìm kiếm nhanh:</p>
            <div class="flex flex-wrap justify-center gap-3">
                <a href="shop.html?q=Hoa%20T%C3%A2m" class="px-4 py-2 bg-white dark:bg-[#2A2A2A] dark:text-white rounded-full text-sm font-bold shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-700 hover:text-amber-700 smooth-transition flex items-center gap-2"><i class="ph-fill ph-fire text-amber-500"></i> Bộ Hoa Tâm</a>
                <a href="shop.html?q=Tr%C3%A0" class="px-4 py-2 bg-white dark:bg-[#2A2A2A] dark:text-white rounded-full text-sm font-bold shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-700 hover:text-amber-700 smooth-transition flex items-center gap-2"><i class="ph-fill ph-plant text-green-600"></i> Trà Ô Long</a>
                <a href="shop.html?q=Th%E1%BB%9Di%20gian" class="px-4 py-2 bg-white dark:bg-[#2A2A2A] dark:text-white rounded-full text-sm font-bold shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-700 hover:text-amber-700 smooth-transition flex items-center gap-2"><i class="ph-fill ph-hourglass-high text-amber-800"></i> Nến Thời Gian</a>
                <a href="shop.html?q=Vintage" class="px-4 py-2 bg-white dark:bg-[#2A2A2A] dark:text-white rounded-full text-sm font-bold shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-700 hover:text-amber-700 smooth-transition flex items-center gap-2"><i class="ph-fill ph-sparkle text-yellow-500"></i> Đế Nến Vintage</a>
            </div>
        </div>
    `;
    document.body.appendChild(searchOverlay);

    const closeBtn = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const submitBtn = document.getElementById('submit-search');

    function openSearch() {
        searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
        searchOverlay.classList.add('opacity-100');
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
        searchOverlay.classList.remove('opacity-100');
        searchOverlay.classList.add('opacity-0', 'pointer-events-none');
        searchInput.value = '';
    }

    function executeSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
        }
    }

    const searchIcons = document.querySelectorAll('.ph-magnifying-glass');
    searchIcons.forEach(icon => {
        const btn = icon.closest('button');
        if (btn && btn.id !== 'submit-search') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openSearch();
            });
        }
    });

    const desktopSearchInputs = document.querySelectorAll('nav input[placeholder="Tìm kiếm..."]');
    desktopSearchInputs.forEach(input => {
        const container = input.closest('div');
        if (!container) return;

        // Create dropdown container
        const dropdown = document.createElement('div');
        dropdown.className = 'absolute top-full left-0 mt-2 w-[320px] bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl max-h-[350px] overflow-y-auto z-[150] opacity-0 pointer-events-none transition-all duration-200 translate-y-2';
        container.appendChild(dropdown);

        // Input event for instant search
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query) {
                dropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                dropdown.innerHTML = '';
                return;
            }

            // Search by product name
            const productMatches = productData.filter(p => p.name.toLowerCase().includes(query));
            const blogMatches = blogData.filter(b => b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query) || b.categoryLabel.toLowerCase().includes(query));
            
            if (productMatches.length > 0 || blogMatches.length > 0) {
                let html = '';

                if (productMatches.length > 0) {
                    html += `<p class="px-3 pt-2.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Sản phẩm</p>`;
                    html += productMatches.slice(0, 3).map(p => `
                        <a href="product-detail.html?id=${p.id}" class="flex items-center gap-3 p-3 border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800 smooth-transition last:border-0 group">
                            <div class="w-12 h-12 bg-[#F9F9F7] rounded flex items-center justify-center flex-shrink-0">
                                <img src="${p.image}" class="max-w-full max-h-full object-contain mix-blend-multiply">
                            </div>
                            <div class="overflow-hidden">
                                <p class="text-[13px] font-bold text-[#1a1a1a] dark:text-white truncate group-hover:text-amber-700 smooth-transition">${p.name}</p>
                                <p class="text-[11px] font-semibold text-amber-700">${p.price}</p>
                            </div>
                        </a>
                    `).join('');
                }

                if (blogMatches.length > 0) {
                    html += `<p class="px-3 pt-2.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700">Bài viết</p>`;
                    html += blogMatches.slice(0, 2).map(b => `
                        <a href="blog-detail.html?id=${b.id}" class="flex items-center gap-3 p-3 border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800 smooth-transition last:border-0 group">
                            <div class="w-12 h-12 bg-amber-50 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                                <img src="${b.image}" class="w-full h-full object-cover" onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\'ph-fill ph-article text-2xl text-amber-500\'></i>'">
                            </div>
                            <div class="overflow-hidden">
                                <p class="text-[13px] font-bold text-[#1a1a1a] dark:text-white truncate group-hover:text-amber-700 smooth-transition">${b.title}</p>
                                <p class="text-[11px] text-gray-400">${b.categoryLabel} · ${b.readTime}</p>
                            </div>
                        </a>
                    `).join('');
                }

                html += `
                    <a href="shop.html?q=${encodeURIComponent(query)}" class="block p-3 text-center text-[13px] font-bold text-[#0068FF] bg-gray-50/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800 smooth-transition border-t border-gray-100 dark:border-gray-700">
                        Xem tất cả kết quả cho "${e.target.value.trim()}"
                    </a>
                `;
                dropdown.innerHTML = html;
            } else {
                dropdown.innerHTML = `<div class="p-5 text-center text-[13px] text-gray-500 font-medium">Không tìm thấy kết quả.</div>`;
            }

            dropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                dropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
            }
        });
        
        // Show dropdown again when focusing if it has value
        input.addEventListener('focus', () => {
            if (input.value.trim()) {
                dropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
        
        // Make the magnifying glass icon clickable on desktop
        const icon = container.querySelector('.ph-magnifying-glass');
        if (icon) {
            icon.style.cursor = 'pointer';
            icon.addEventListener('click', () => {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
                } else {
                    openSearch(); // Open full overlay if empty
                }
            });
        }
    });

    if(closeBtn) closeBtn.addEventListener('click', closeSearch);
    
    if(searchInput) searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') executeSearch();
    });
    
    if(submitBtn) submitBtn.addEventListener('click', executeSearch);

    // --- CART ACTIONS ---
    window.addToCart = function(event, id = null) {
        if (event) event.stopPropagation();
        
        // Try to get id from button data attribute if not passed
        let productId = id;
        if (!productId && event && event.currentTarget) {
            productId = event.currentTarget.getAttribute('data-product-id');
        }
        if (!productId) return; // No id found, do nothing
        
        const product = productData.find(p => p.id === productId);
        
        if (product) {
            const existing = cart.find(item => item.id === productId);
            if (existing) existing.qty += 1;
            else cart.push({ ...product, qty: 1 });
            updateCartCount();
        }

        const btn = document.getElementById('cart-btn');
        if(btn) {
            btn.classList.add('scale-110', 'bg-amber-700');
            setTimeout(() => btn.classList.remove('scale-110', 'bg-amber-700'), 200);
        }
        if (navigator.vibrate) navigator.vibrate(200);
    };

    // --- SHOP PAGE LOGIC (DYNAMIC RENDERING) ---
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const countEl = document.getElementById('product-count');
    const emptyState = document.getElementById('empty-state');

    window.renderShopProducts = function(filter = 'all', sortBy = 'new', query = '') {
        if (!productGrid) return;
        
        let filtered = [...productData];

        if (filter !== 'all') {
            filtered = filtered.filter(p => p.category === filter);
        }

        if (query) {
            const q = query.toLowerCase();
            filtered = filtered.filter(p => p.name.toLowerCase().includes(q));
        }

        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        }

        productGrid.innerHTML = filtered.map(p => `
            <div class="product-item bg-white p-4 rounded-2xl soft-shadow group cursor-pointer hover:-translate-y-2 hover:shadow-2xl smooth-transition"
                data-category="${p.category}" onclick="window.location.href='product-detail.html?id=${p.id}'">
                <div class="product-image-container rounded-xl mb-4 bg-[#F9F9F7]">
                    <img src="${p.image}" class="product-image-main mix-blend-multiply">
                    <img src="${p.imageHover || p.image}" class="product-image-hover mix-blend-multiply">
                    <button class="absolute bottom-2 right-2 bg-white/90 z-10 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 smooth-transition hover:bg-amber-700 hover:text-white"
                        onclick="addToCart(event, '${p.id}')">
                        <i class="ph-bold ph-plus"></i>
                    </button>
                </div>
                <p class="font-bold text-sm mb-1 group-hover:text-amber-700 smooth-transition">${p.name}</p>
                <p class="text-xs opacity-60">${p.price}</p>
            </div>
        `).join('');

        if (countEl) countEl.innerText = filtered.length;
        if (emptyState) {
            if (filtered.length === 0) emptyState.classList.remove('hidden');
            else emptyState.classList.add('hidden');
        }
    };

    if (filterBtns.length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q') || '';
        const urlFilter = urlParams.get('filter') || 'all';
        let currentFilter = urlFilter;
        let currentSort = 'new';

        // Activate the matching sidebar button
        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === currentFilter) {
                filterBtns.forEach(b => b.classList.remove('active', 'bg-[#2C3E35]', 'text-white', 'border-[#2C3E35]'));
                btn.classList.add('bg-[#2C3E35]', 'text-white', 'border-[#2C3E35]');
            }
        });

        renderShopProducts(currentFilter, currentSort, searchQuery);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('bg-[#2C3E35]', 'text-white', 'border-[#2C3E35]'));
                btn.classList.add('bg-[#2C3E35]', 'text-white', 'border-[#2C3E35]');
                currentFilter = btn.getAttribute('data-filter');
                renderShopProducts(currentFilter, currentSort);
            });
        });

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderShopProducts(currentFilter, currentSort);
            });
        }
    }

    // --- PRODUCT DETAIL PAGE LOGIC ---
    window.updateQty = function(change) {
        const qtyInput = document.getElementById('qty');
        if (!qtyInput) return;
        let val = parseInt(qtyInput.value) + change;
        if (val < 1) val = 1;
        qtyInput.value = val;
    };

    window.addToCartDetailed = function() {
        const urlParamsDetail = new URLSearchParams(window.location.search);
        const productId = urlParamsDetail.get('id');
        const qtyInput = document.getElementById('qty');
        const qty = qtyInput ? parseInt(qtyInput.value) : 1;
        
        const product = productData.find(p => p.id === productId);
        if (product) {
            const existing = cart.find(item => item.id === productId);
            if (existing) existing.qty += qty;
            else cart.push({ ...product, qty: qty });
            updateCartCount();
        }

        const btn = document.querySelector('button[onclick="addToCartDetailed()"]');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph-bold ph-check"></i> ĐÃ THÊM';
            btn.classList.add('bg-amber-700');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-amber-700');
            }, 1000);
        }
    };

    window.buyNow = function() {
        window.addToCartDetailed();
        window.location.href = 'cart.html';
    };

    function renderRelatedProducts(category, currentId) {
        const grid = document.getElementById('related-products-grid');
        if (!grid) return;
        let related = productData.filter(p => p.category === category && p.id !== currentId);
        if (related.length < 4) {
            const others = productData.filter(p => !related.find(r => r.id === p.id) && p.id !== currentId);
            related = [...related, ...others].slice(0, 8);
        }
        grid.innerHTML = related.map(p => `
            <div class="swiper-slide h-auto">
                <div class="product-item bg-white p-4 rounded-2xl soft-shadow group cursor-pointer hover:-translate-y-2 smooth-transition h-full flex flex-col" 
                    onclick="window.location.href='product-detail.html?id=${p.id}'">
                    <div class="product-image-container rounded-xl mb-4 bg-[#F9F9F7] aspect-square">
                        <img src="${p.image}" class="product-image-main mix-blend-multiply">
                        <img src="${p.imageHover || p.image}" class="product-image-hover mix-blend-multiply">
                    </div>
                    <div class="flex-1">
                        <p class="font-bold text-sm mb-1 group-hover:text-amber-700 smooth-transition">${p.name}</p>
                        <p class="text-xs opacity-60">${p.price}</p>
                    </div>
                </div>
            </div>
        `).join('');
        new Swiper('.related-swiper', {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: { nextEl: '.rel-next', prevEl: '.rel-prev' },
            breakpoints: {
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
            }
        });
    }

    window.changeMainImage = function(thumb, src) {
        const mainImg = document.getElementById('product-img');
        if (mainImg) {
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = src;
                mainImg.style.opacity = '1';
            }, 200);
        }
        
        // Update active state
        document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
        if (thumb) thumb.classList.add('active');
    };

    function initProductDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (!productId || !document.getElementById('product-name')) return;
        const product = productData.find(p => p.id === productId);
        if (product) {
            document.title = `${product.name} | Lit Corner`;
            const breadcrumb = document.getElementById('breadcrumb-current');
            if(breadcrumb) breadcrumb.innerText = product.name;
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-price').innerText = product.price;
            const descEl = document.getElementById('product-desc');
            if(descEl) descEl.innerText = product.description;
            
            const imgEl = document.getElementById('product-img');
            if(imgEl) { 
                imgEl.src = product.image; 
                imgEl.alt = product.name;
                imgEl.style.transition = 'opacity 0.3s ease';
            }

            // Gallery Thumbnails
            const thumbnailGrid = document.getElementById('product-thumbnails');
            if (thumbnailGrid) {
                const galleryImages = [product.image];
                if (product.imageHover) galleryImages.push(product.imageHover);
                
                if (galleryImages.length > 1) {
                    thumbnailGrid.innerHTML = galleryImages.map((img, index) => `
                        <div class="product-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">
                            <img src="${img}" alt="${product.name} thumbnail ${index + 1}">
                        </div>
                    `).join('');
                } else {
                    thumbnailGrid.innerHTML = '';
                }
            }

            const catEl = document.getElementById('product-cat');
            if(catEl) {
                const categoryNames = { 'nen-thap': 'Nến Thắp', 'nen-decor': 'Nến Decor', 'phu-kien': 'Phụ Kiện', 'tra': 'Trà', 'gift': 'Quà Tặng' };
                catEl.innerText = categoryNames[product.category] || 'Sản phẩm';
            }
            const detailsList = document.getElementById('product-details-list');
            if(detailsList) {
                detailsList.innerHTML = product.details.map(d => `<li class="flex items-start gap-3 opacity-70"><i class="ph-bold ph-check-circle text-amber-700 mt-1"></i> <span>${d}</span></li>`).join('');
            }
            renderRelatedProducts(product.category, product.id);
        }
    }

    initProductDetail();

    // --- CART & CHECKOUT RENDERING ---
    function formatPrice(num) {
        return new Intl.NumberFormat('vi-VN').format(num) + 'đ';
    }

    window.renderCartPage = function() {
        const cartContainer = document.getElementById('cart-items-container');
        if (!cartContainer) return;

        // Clear existing static items (except the "Continue Shopping" link)
        const items = cartContainer.querySelectorAll('.flex-col.sm\\:flex-row.items-center.gap-6.pb-6');
        items.forEach(el => el.remove());

        const subtotal = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/\D/g, '')) * item.qty), 0);
        const shipping = subtotal > 0 ? 30000 : 0;
        const total = subtotal + shipping;

        if (cart.length > 0) {
            cart.forEach(item => {
                const itemHtml = `
                    <div class="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100 animate-fade-in group">
                        <img src="${item.image}" class="w-24 h-24 object-cover rounded-xl bg-[#F9F9F7] mix-blend-multiply">
                        <div class="flex-1 text-center sm:text-left">
                            <h3 class="font-bold text-lg text-[#2C3E35] dark:text-white">${item.name}</h3>
                            <p class="text-sm opacity-60 dark:text-gray-400 font-medium">${item.category}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center border border-gray-200 dark:border-gray-600 rounded-full">
                                <button onclick="changeQty('${item.id}', -1)" class="w-8 h-8 flex items-center justify-center hover:text-amber-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full smooth-transition"><i class="ph-bold ph-minus text-xs"></i></button>
                                <span class="w-8 text-center text-sm font-bold dark:text-white">${item.qty}</span>
                                <button onclick="changeQty('${item.id}', 1)" class="w-8 h-8 flex items-center justify-center hover:text-amber-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full smooth-transition"><i class="ph-bold ph-plus text-xs"></i></button>
                            </div>
                            <p class="font-bold text-lg w-28 text-right text-amber-700 font-mono">${formatPrice(parseInt(item.price.replace(/\D/g, '')) * item.qty)}</p>
                            <button onclick="removeFromStorage('${item.id}')" class="text-gray-400 hover:text-red-500 smooth-transition ml-2">
                                <i class="ph-bold ph-trash text-xl"></i>
                            </button>
                        </div>
                    </div>
                `;
                const continueLink = cartContainer.querySelector('a[href="shop.html"]');
                if (continueLink) continueLink.insertAdjacentHTML('beforebegin', itemHtml);
                else cartContainer.insertAdjacentHTML('beforeend', itemHtml);
            });
        } else {
            cartContainer.insertAdjacentHTML('afterbegin', `
                <div class="text-center py-12 animate-fade-in">
                    <i class="ph-bold ph-shopping-cart text-6xl text-gray-200 mb-4"></i>
                    <h3 class="text-xl font-bold text-[#2C3E35] dark:text-white mb-2">Giỏ hàng của bạn đang trống</h3>
                    <p class="text-sm opacity-60 dark:text-gray-400 mb-6 font-medium">Hãy lấp đầy giỏ hàng bằng những món quà ý nghĩa từ Lit Corner nhé!</p>
                    <a href="shop.html" class="inline-block bg-[#2C3E35] text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 smooth-transition">Khám phá ngay</a>
                </div>
            `);
        }

        // Update Summary Sidebar in Cart
        const subtotalPctEl = document.getElementById('subtotal-text');
        const subtotalValEl = document.getElementById('subtotal-price');
        const shippingValEl = document.getElementById('shipping-price');
        const totalValEl = document.getElementById('total-price');

        if (subtotalPctEl) subtotalPctEl.innerText = `Tạm tính (${cart.length} sản phẩm)`;
        if (subtotalValEl) subtotalValEl.innerText = formatPrice(subtotal);
        if (shippingValEl) shippingValEl.innerText = formatPrice(shipping);
        if (totalValEl) totalValEl.innerText = formatPrice(total);
    };

    window.renderCheckoutPage = function() {
        const checkoutItemsContainer = document.getElementById('checkout-items');
        if (!checkoutItemsContainer) return;

        checkoutItemsContainer.innerHTML = '';
        const subtotal = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/\D/g, '')) * item.qty), 0);
        const shipping = subtotal > 0 ? 30000 : 0;
        const total = subtotal + shipping;

        if (cart.length === 0 && !window.location.pathname.includes('order-success.html')) {
            window.location.href = 'cart.html';
            return;
        }

        cart.forEach(item => {
            const itemHtml = `
                <div class="flex items-center gap-4 animate-fade-in">
                    <div class="relative">
                        <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover bg-[#F9F9F7] mix-blend-multiply border border-gray-200 dark:border-gray-600">
                        <span class="absolute -top-2 -right-2 w-5 h-5 bg-[#2C3E35] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#2A2A2A]">${item.qty}</span>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-bold text-sm leading-tight mb-1 dark:text-white">${item.name}</h4>
                        <p class="text-[10px] opacity-60 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 w-fit px-2 rounded-md font-bold uppercase tracking-wider">${item.category}</p>
                    </div>
                    <span class="font-bold text-amber-700 text-sm font-mono">${formatPrice(parseInt(item.price.replace(/\D/g, '')) * item.qty)}</span>
                </div>
            `;
            checkoutItemsContainer.insertAdjacentHTML('beforeend', itemHtml);
        });

        const subtotalEl = document.getElementById('checkout-subtotal');
        const shippingEl = document.getElementById('checkout-shipping');
        const totalEl = document.getElementById('checkout-total');

        if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
        if (shippingEl) shippingEl.innerText = formatPrice(shipping);
        if (totalEl) totalEl.innerText = formatPrice(total);
    };

    window.changeQty = function(id, delta) {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty < 1) {
                cart = cart.filter(i => i.id !== id);
            }
            updateCartCount();
            if (window.location.pathname.includes('cart.html')) renderCartPage();
            if (window.location.pathname.includes('checkout.html')) renderCheckoutPage();
        }
    };

    window.removeFromStorage = function(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) renderCartPage();
        if (window.location.pathname.includes('checkout.html')) renderCheckoutPage();
    };

    if (window.location.pathname.includes('cart.html')) renderCartPage();
    if (window.location.pathname.includes('checkout.html')) renderCheckoutPage();

    // --- HOME PAGE SOCIAL PROOF (PURCHASE NOTIFICATIONS) ---
    function initSocialProof() {
        const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname === '/LitCorner_Web/';
        if (!isHomePage) return;

        const names = ["Khánh Chi", "Thế Anh", "Hoài Nam", "Thanh Trúc", "Bảo Ngọc", "Minh Nhật", "Anh Thư", "Phúc Thịnh", "Chị Lan", "Anh Tú"];
        const times = ["1 phút trước", "3 phút trước", "Vài giây trước", "10 phút trước", "2 phút trước"];
        
        const toast = document.createElement('div');
        toast.id = 'purchase-toast';
        toast.className = 'fixed bottom-6 left-6 z-[90] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-gray-100/50 translate-x-[-120%] opacity-0 smooth-transition max-w-[320px] pointer-events-none sm:pointer-events-auto';
        document.body.appendChild(toast);

        function showNotification() {
            if (productData.length === 0) return;
            const product = productData[Math.floor(Math.random() * productData.length)];
            const name = names[Math.floor(Math.random() * names.length)];
            const time = times[Math.floor(Math.random() * times.length)];

            toast.innerHTML = `
                <img src="${product.image}" class="w-14 h-14 object-cover rounded-xl bg-[#F9F9F7]">
                <div class="flex-1">
                    <p class="text-[13px] font-bold text-[#2C3E35] mb-0.5">${name} vừa mua</p>
                    <p class="text-[12px] font-medium opacity-80 leading-tight mb-1 text-amber-800 line-clamp-1">${product.name}</p>
                    <p class="text-[10px] opacity-40 italic">${time}</p>
                </div>
                <button onclick="this.parentElement.classList.add('translate-x-[-120%]', 'opacity-0')" class="text-gray-400 hover:text-[#1A1A1A] smooth-transition ml-1">
                    <i class="ph-bold ph-x text-xs"></i>
                </button>
            `;

            toast.classList.remove('translate-x-[-120%]', 'opacity-0');
            toast.classList.add('translate-x-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.add('translate-x-[-120%]', 'opacity-0');
                toast.classList.remove('translate-x-0', 'opacity-100');
            }, 6000);
        }

        function scheduleNext() {
            const nextTime = Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000;
            setTimeout(() => {
                showNotification();
                scheduleNext();
            }, nextTime);
        }
        
        setTimeout(() => {
            showNotification();
            scheduleNext();
        }, 8000);
    }

    // --- FEEDBACK CAROUSEL ---
    function initFeedbackCarousel() {
        if (!document.querySelector('.feedback-swiper')) return;
        new Swiper('.feedback-swiper', {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: true,
            grabCursor: true,
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            },
            navigation: {
                nextEl: '.feedback-next',
                prevEl: '.feedback-prev',
            },
            pagination: {
                el: '.feedback-pagination',
                clickable: true,
            }
        });
    }

    // --- GLOBAL LIGHTBOX (Image Zoom) ---
    function initLightbox() {
        if (document.getElementById('global-lightbox')) return;
        const lightbox = document.createElement('div');
        lightbox.id = 'global-lightbox';
        lightbox.className = 'fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center opacity-0 pointer-events-none smooth-transition cursor-zoom-out';
        lightbox.innerHTML = `
            <button class="absolute top-8 right-8 text-white hover:text-amber-500 smooth-transition">
                <i class="ph-bold ph-x text-3xl"></i>
            </button>
            <img src="" class="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl scale-95 transition-transform duration-500 ease-out">
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');

        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.classList.remove('opacity-0', 'pointer-events-none');
            lightbox.classList.add('opacity-100');
            setTimeout(() => lightboxImg.classList.replace('scale-95', 'scale-100'), 10);
        }

        function closeLightbox() {
            lightboxImg.classList.replace('scale-100', 'scale-95');
            lightbox.classList.remove('opacity-100');
            lightbox.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => lightboxImg.src = '', 500);
        }

        document.addEventListener('click', (e) => {
            const zoomTrigger = e.target.closest('[data-zoom]');
            if (zoomTrigger) {
                openLightbox(zoomTrigger.src);
            } else if (lightbox.classList.contains('opacity-100')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('opacity-100')) {
                closeLightbox();
            }
        });
    }

    // --- PROMO POPUP LOGIC ---
    function initPromoPopup() {
        const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.includes('LitCorner_Web');
        if (!isHomePage) return;

        const popup = document.getElementById('promo-popup');
        const closeBtn = document.getElementById('close-promo');
        const form = document.getElementById('promo-form');
        const successContent = document.getElementById('promo-success');
        const closeSuccessBtn = document.getElementById('close-promo-success');
        
        if (!popup) return;

        // Check if user already saw or closed the popup this session
        const hasSeenPromo = sessionStorage.getItem('seenPromo');
        
        if (!hasSeenPromo) {
            // Show popup after 2.5 seconds
            setTimeout(() => {
                popup.classList.remove('opacity-0', 'pointer-events-none');
                popup.classList.add('opacity-100');
                popup.querySelector('.bg-white').classList.replace('scale-95', 'scale-100');
            }, 2500);
        }

        function dismissPopup() {
            popup.querySelector('.bg-white').classList.replace('scale-100', 'scale-95');
            popup.classList.remove('opacity-100');
            popup.classList.add('opacity-0', 'pointer-events-none');
            sessionStorage.setItem('seenPromo', 'true');
        }

        closeBtn.addEventListener('click', dismissPopup);
        if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', dismissPopup);
        
        // Close on clicking outside the modal box
        popup.addEventListener('click', (e) => {
            if (e.target === popup) dismissPopup();
        });

        window.submitPromo = function() {
            // Simulate form submisson success
            const email = document.getElementById('promo-email').value;
            const phone = document.getElementById('promo-phone').value;
            if (email && phone) {
                form.classList.add('hidden');
                successContent.classList.remove('hidden');
                successContent.classList.add('flex');
                
                // Optional: Copy code to clipboard automatically
                navigator.clipboard.writeText('LITNEW15').catch(err => console.log('Clipboard err:', err));
            }
        };
    }

    initFeedbackCarousel();
    initLightbox();
    initSocialProof();
    initPromoPopup();
});
