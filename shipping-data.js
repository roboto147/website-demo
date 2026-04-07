// ============================================================
// VIETNAM PROVINCES / DISTRICTS + SHIPPING FEE DATA
// Lit Corner ships from TP. Hồ Chí Minh
// ============================================================

const SHIPPING_DATA = {
    "TP. Hồ Chí Minh": {
        fee: 15000,
        districts: [
            "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
            "Quận 10", "Quận 11", "Quận 12",
            "Quận Bình Tân", "Quận Bình Thạnh", "Quận Gò Vấp",
            "Quận Phú Nhuận", "Quận Tân Bình", "Quận Tân Phú",
            "TP. Thủ Đức",
            "Huyện Bình Chánh", "Huyện Cần Giờ", "Huyện Củ Chi",
            "Huyện Hóc Môn", "Huyện Nhà Bè"
        ],
        districtFees: {
            "Huyện Cần Giờ": 30000,
            "Huyện Củ Chi": 25000,
            "Huyện Hóc Môn": 20000,
            "Huyện Bình Chánh": 20000,
            "Huyện Nhà Bè": 20000
        }
    },
    "Hà Nội": {
        fee: 30000,
        districts: [
            "Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Hai Bà Trưng",
            "Quận Đống Đa", "Quận Tây Hồ", "Quận Cầu Giấy",
            "Quận Thanh Xuân", "Quận Hoàng Mai", "Quận Long Biên",
            "Quận Nam Từ Liêm", "Quận Bắc Từ Liêm", "Quận Hà Đông",
            "Thị xã Sơn Tây",
            "Huyện Ba Vì", "Huyện Chương Mỹ", "Huyện Đan Phượng",
            "Huyện Đông Anh", "Huyện Gia Lâm", "Huyện Hoài Đức",
            "Huyện Mê Linh", "Huyện Mỹ Đức", "Huyện Phú Xuyên",
            "Huyện Phúc Thọ", "Huyện Quốc Oai", "Huyện Sóc Sơn",
            "Huyện Thạch Thất", "Huyện Thanh Oai", "Huyện Thanh Trì",
            "Huyện Thường Tín", "Huyện Ứng Hòa"
        ],
        districtFees: {}
    },
    "Đà Nẵng": {
        fee: 25000,
        districts: [
            "Quận Hải Châu", "Quận Thanh Khê", "Quận Sơn Trà",
            "Quận Ngũ Hành Sơn", "Quận Liên Chiểu", "Quận Cẩm Lệ",
            "Huyện Hòa Vang", "Huyện Hoàng Sa"
        ],
        districtFees: {}
    },
    "Bình Dương": {
        fee: 20000,
        districts: [
            "TP. Thủ Dầu Một", "TP. Dĩ An", "TP. Thuận An",
            "TP. Tân Uyên", "TP. Bến Cát",
            "Huyện Bàu Bàng", "Huyện Bắc Tân Uyên",
            "Huyện Dầu Tiếng", "Huyện Phú Giáo"
        ],
        districtFees: {
            "Huyện Dầu Tiếng": 30000,
            "Huyện Phú Giáo": 30000
        }
    },
    "Đồng Nai": {
        fee: 20000,
        districts: [
            "TP. Biên Hòa", "TP. Long Khánh",
            "Huyện Cẩm Mỹ", "Huyện Định Quán", "Huyện Long Thành",
            "Huyện Nhơn Trạch", "Huyện Tân Phú", "Huyện Thống Nhất",
            "Huyện Trảng Bom", "Huyện Vĩnh Cửu", "Huyện Xuân Lộc"
        ],
        districtFees: {
            "Huyện Định Quán": 30000,
            "Huyện Tân Phú": 30000
        }
    },
    "Long An": {
        fee: 25000,
        districts: [
            "TP. Tân An", "TX. Kiến Tường",
            "Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc",
            "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ",
            "Huyện Mộc Hóa", "Huyện Tân Hưng", "Huyện Tân Thạnh",
            "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Huyện Thủ Thừa",
            "Huyện Vĩnh Hưng"
        ],
        districtFees: {}
    },
    "Bà Rịa - Vũng Tàu": {
        fee: 25000,
        districts: [
            "TP. Vũng Tàu", "TP. Bà Rịa",
            "TX. Phú Mỹ",
            "Huyện Châu Đức", "Huyện Côn Đảo",
            "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Xuyên Mộc"
        ],
        districtFees: {
            "Huyện Côn Đảo": 60000
        }
    },
    "Tây Ninh": {
        fee: 25000,
        districts: [
            "TP. Tây Ninh",
            "Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu",
            "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên",
            "Huyện Tân Châu", "Huyện Trảng Bàng"
        ],
        districtFees: {}
    },
    "Bình Phước": {
        fee: 30000,
        districts: [
            "TP. Đồng Xoài", "TX. Bình Long", "TX. Phước Long",
            "TX. Chơn Thành",
            "Huyện Bù Đăng", "Huyện Bù Đốp", "Huyện Bù Gia Mập",
            "Huyện Đồng Phú", "Huyện Hớn Quản", "Huyện Lộc Ninh",
            "Huyện Phú Riềng"
        ],
        districtFees: {}
    },
    "Cần Thơ": {
        fee: 30000,
        districts: [
            "Quận Ninh Kiều", "Quận Bình Thủy", "Quận Cái Răng",
            "Quận Ô Môn", "Quận Thốt Nốt",
            "Huyện Cờ Đỏ", "Huyện Phong Điền", "Huyện Thới Lai",
            "Huyện Vĩnh Thạnh"
        ],
        districtFees: {}
    },
    "Hải Phòng": {
        fee: 35000,
        districts: [
            "Quận Hồng Bàng", "Quận Lê Chân", "Quận Ngô Quyền",
            "Quận Kiến An", "Quận Hải An", "Quận Đồ Sơn",
            "Quận Dương Kinh",
            "Huyện An Dương", "Huyện An Lão", "Huyện Bạch Long Vĩ",
            "Huyện Cát Hải", "Huyện Kiến Thụy", "Huyện Thủy Nguyên",
            "Huyện Tiên Lãng", "Huyện Vĩnh Bảo"
        ],
        districtFees: {
            "Huyện Bạch Long Vĩ": 80000,
            "Huyện Cát Hải": 50000
        }
    },
    "Thừa Thiên Huế": {
        fee: 30000,
        districts: [
            "TP. Huế",
            "TX. Hương Thủy", "TX. Hương Trà",
            "Huyện A Lưới", "Huyện Nam Đông", "Huyện Phong Điền",
            "Huyện Phú Lộc", "Huyện Phú Vang", "Huyện Quảng Điền"
        ],
        districtFees: {
            "Huyện A Lưới": 45000
        }
    },
    "Khánh Hòa": {
        fee: 30000,
        districts: [
            "TP. Nha Trang", "TP. Cam Ranh",
            "TX. Ninh Hòa",
            "Huyện Cam Lâm", "Huyện Diên Khánh", "Huyện Khánh Sơn",
            "Huyện Khánh Vĩnh", "Huyện Trường Sa", "Huyện Vạn Ninh"
        ],
        districtFees: {
            "Huyện Trường Sa": 100000
        }
    },
    "Lâm Đồng": {
        fee: 30000,
        districts: [
            "TP. Đà Lạt", "TP. Bảo Lộc",
            "Huyện Bảo Lâm", "Huyện Cát Tiên", "Huyện Đạ Huoai",
            "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh",
            "Huyện Đơn Dương", "Huyện Đức Trọng", "Huyện Lạc Dương",
            "Huyện Lâm Hà"
        ],
        districtFees: {}
    },
    "Bình Thuận": {
        fee: 30000,
        districts: [
            "TP. Phan Thiết", "TX. La Gi",
            "Huyện Bắc Bình", "Huyện Đức Linh", "Huyện Hàm Tân",
            "Huyện Hàm Thuận Bắc", "Huyện Hàm Thuận Nam",
            "Huyện Phú Quý", "Huyện Tánh Linh", "Huyện Tuy Phong"
        ],
        districtFees: {
            "Huyện Phú Quý": 60000
        }
    },
    "An Giang": {
        fee: 35000,
        districts: [
            "TP. Long Xuyên", "TP. Châu Đốc",
            "TX. Tân Châu",
            "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành",
            "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn",
            "Huyện Tịnh Biên", "Huyện Tri Tôn"
        ],
        districtFees: {}
    },
    "Tiền Giang": {
        fee: 25000,
        districts: [
            "TP. Mỹ Tho", "TX. Cai Lậy", "TX. Gò Công",
            "Huyện Cai Lậy", "Huyện Châu Thành", "Huyện Chợ Gạo",
            "Huyện Gò Công Đông", "Huyện Gò Công Tây",
            "Huyện Tân Phú Đông", "Huyện Tân Phước"
        ],
        districtFees: {}
    },
    "Bến Tre": {
        fee: 30000,
        districts: [
            "TP. Bến Tre",
            "Huyện Ba Tri", "Huyện Bình Đại", "Huyện Châu Thành",
            "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Mỏ Cày Bắc",
            "Huyện Mỏ Cày Nam", "Huyện Thạnh Phú"
        ],
        districtFees: {}
    },
    "Vĩnh Long": {
        fee: 30000,
        districts: [
            "TP. Vĩnh Long", "TX. Bình Minh",
            "Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít",
            "Huyện Tam Bình", "Huyện Trà Ôn", "Huyện Vũng Liêm"
        ],
        districtFees: {}
    },
    "Đồng Tháp": {
        fee: 30000,
        districts: [
            "TP. Cao Lãnh", "TP. Sa Đéc", "TX. Hồng Ngự",
            "Huyện Cao Lãnh", "Huyện Châu Thành", "Huyện Hồng Ngự",
            "Huyện Lai Vung", "Huyện Lấp Vò", "Huyện Tam Nông",
            "Huyện Tân Hồng", "Huyện Thanh Bình", "Huyện Tháp Mười"
        ],
        districtFees: {}
    },
    "Kiên Giang": {
        fee: 35000,
        districts: [
            "TP. Rạch Giá", "TP. Hà Tiên", "TP. Phú Quốc",
            "Huyện An Biên", "Huyện An Minh", "Huyện Châu Thành",
            "Huyện Giang Thành", "Huyện Giồng Riềng", "Huyện Gò Quao",
            "Huyện Hòn Đất", "Huyện Kiên Hải", "Huyện Kiên Lương",
            "Huyện Tân Hiệp", "Huyện U Minh Thượng", "Huyện Vĩnh Thuận"
        ],
        districtFees: {
            "TP. Phú Quốc": 50000,
            "Huyện Kiên Hải": 60000
        }
    },
    "Sóc Trăng": {
        fee: 35000,
        districts: [
            "TP. Sóc Trăng", "TX. Ngã Năm", "TX. Vĩnh Châu",
            "Huyện Châu Thành", "Huyện Cù Lao Dung", "Huyện Kế Sách",
            "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Mỹ Xuyên",
            "Huyện Thạnh Trị", "Huyện Trần Đề"
        ],
        districtFees: {}
    },
    "Bạc Liêu": {
        fee: 35000,
        districts: [
            "TP. Bạc Liêu",
            "TX. Giá Rai",
            "Huyện Đông Hải", "Huyện Hòa Bình", "Huyện Hồng Dân",
            "Huyện Phước Long", "Huyện Vĩnh Lợi"
        ],
        districtFees: {}
    },
    "Cà Mau": {
        fee: 40000,
        districts: [
            "TP. Cà Mau",
            "Huyện Cái Nước", "Huyện Đầm Dơi", "Huyện Năm Căn",
            "Huyện Ngọc Hiển", "Huyện Phú Tân", "Huyện Thới Bình",
            "Huyện Trần Văn Thời", "Huyện U Minh"
        ],
        districtFees: {}
    },
    "Hậu Giang": {
        fee: 35000,
        districts: [
            "TP. Vị Thanh", "TX. Long Mỹ", "TX. Ngã Bảy",
            "Huyện Châu Thành", "Huyện Châu Thành A", "Huyện Long Mỹ",
            "Huyện Phụng Hiệp", "Huyện Vị Thủy"
        ],
        districtFees: {}
    },
    "Trà Vinh": {
        fee: 35000,
        districts: [
            "TP. Trà Vinh", "TX. Duyên Hải",
            "Huyện Càng Long", "Huyện Cầu Kè", "Huyện Cầu Ngang",
            "Huyện Châu Thành", "Huyện Duyên Hải", "Huyện Tiểu Cần",
            "Huyện Trà Cú"
        ],
        districtFees: {}
    },
    "Ninh Thuận": {
        fee: 30000,
        districts: [
            "TP. Phan Rang - Tháp Chàm",
            "Huyện Bác Ái", "Huyện Ninh Hải", "Huyện Ninh Phước",
            "Huyện Ninh Sơn", "Huyện Thuận Bắc", "Huyện Thuận Nam"
        ],
        districtFees: {}
    },
    "Quảng Nam": {
        fee: 30000,
        districts: [
            "TP. Tam Kỳ", "TP. Hội An",
            "TX. Điện Bàn",
            "Huyện Bắc Trà My", "Huyện Đại Lộc", "Huyện Đông Giang",
            "Huyện Duy Xuyên", "Huyện Hiệp Đức", "Huyện Nam Giang",
            "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành",
            "Huyện Phú Ninh", "Huyện Phước Sơn", "Huyện Quế Sơn",
            "Huyện Tây Giang", "Huyện Thăng Bình", "Huyện Tiên Phước"
        ],
        districtFees: {}
    },
    "Quảng Ngãi": {
        fee: 30000,
        districts: [
            "TP. Quảng Ngãi",
            "TX. Đức Phổ",
            "Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Lý Sơn",
            "Huyện Minh Long", "Huyện Mộ Đức", "Huyện Nghĩa Hành",
            "Huyện Sơn Hà", "Huyện Sơn Tây", "Huyện Sơn Tịnh",
            "Huyện Tư Nghĩa", "Huyện Trà Bồng"
        ],
        districtFees: {
            "Huyện Lý Sơn": 50000
        }
    },
    "Bình Định": {
        fee: 30000,
        districts: [
            "TP. Quy Nhơn",
            "TX. An Nhơn", "TX. Hoài Nhơn",
            "Huyện An Lão", "Huyện Hoài Ân", "Huyện Phù Cát",
            "Huyện Phù Mỹ", "Huyện Tây Sơn", "Huyện Tuy Phước",
            "Huyện Vân Canh", "Huyện Vĩnh Thạnh"
        ],
        districtFees: {}
    },
    "Phú Yên": {
        fee: 30000,
        districts: [
            "TP. Tuy Hòa", "TX. Sông Cầu",
            "Huyện Đông Hòa", "Huyện Đồng Xuân", "Huyện Phú Hòa",
            "Huyện Sơn Hòa", "Huyện Sông Hinh", "Huyện Tây Hòa",
            "Huyện Tuy An"
        ],
        districtFees: {}
    },
    "Gia Lai": {
        fee: 35000,
        districts: [
            "TP. Pleiku", "TX. An Khê", "TX. Ayun Pa",
            "Huyện Chư Păh", "Huyện Chư Prông", "Huyện Chư Pưh",
            "Huyện Chư Sê", "Huyện Đak Đoa", "Huyện Đak Pơ",
            "Huyện Đức Cơ", "Huyện Ia Grai", "Huyện Ia Pa",
            "Huyện KBang", "Huyện Kông Chro", "Huyện Krông Pa",
            "Huyện Mang Yang", "Huyện Phú Thiện"
        ],
        districtFees: {}
    },
    "Đắk Lắk": {
        fee: 35000,
        districts: [
            "TP. Buôn Ma Thuột", "TX. Buôn Hồ",
            "Huyện Buôn Đôn", "Huyện Cư Kuin", "Huyện Cư M'gar",
            "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp",
            "Huyện Krông Ana", "Huyện Krông Bông", "Huyện Krông Búk",
            "Huyện Krông Năng", "Huyện Krông Pắk", "Huyện Lắk",
            "Huyện M'Đrắk"
        ],
        districtFees: {}
    },
    "Đắk Nông": {
        fee: 35000,
        districts: [
            "TP. Gia Nghĩa",
            "Huyện Cư Jút", "Huyện Đắk Glong", "Huyện Đắk Mil",
            "Huyện Đắk R'Lấp", "Huyện Đắk Song", "Huyện Krông Nô",
            "Huyện Tuy Đức"
        ],
        districtFees: {}
    },
    "Kon Tum": {
        fee: 40000,
        districts: [
            "TP. Kon Tum",
            "Huyện Đắk Glei", "Huyện Đắk Hà", "Huyện Đắk Tô",
            "Huyện Ia H'Drai", "Huyện Kon Plông", "Huyện Kon Rẫy",
            "Huyện Ngọc Hồi", "Huyện Sa Thầy", "Huyện Tu Mơ Rông"
        ],
        districtFees: {}
    },
    "Quảng Bình": {
        fee: 35000,
        districts: [
            "TP. Đồng Hới",
            "TX. Ba Đồn",
            "Huyện Bố Trạch", "Huyện Lệ Thủy", "Huyện Minh Hóa",
            "Huyện Quảng Ninh", "Huyện Quảng Trạch", "Huyện Tuyên Hóa"
        ],
        districtFees: {}
    },
    "Quảng Trị": {
        fee: 35000,
        districts: [
            "TP. Đông Hà", "TX. Quảng Trị",
            "Huyện Cam Lộ", "Huyện Cồn Cỏ", "Huyện Đa Krông",
            "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hóa",
            "Huyện Triệu Phong", "Huyện Vĩnh Linh"
        ],
        districtFees: {}
    },
    "Hà Tĩnh": {
        fee: 35000,
        districts: [
            "TP. Hà Tĩnh", "TX. Hồng Lĩnh", "TX. Kỳ Anh",
            "Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ",
            "Huyện Hương Khê", "Huyện Hương Sơn", "Huyện Kỳ Anh",
            "Huyện Lộc Hà", "Huyện Nghi Xuân", "Huyện Thạch Hà",
            "Huyện Vũ Quang"
        ],
        districtFees: {}
    },
    "Nghệ An": {
        fee: 35000,
        districts: [
            "TP. Vinh", "TX. Cửa Lò", "TX. Hoàng Mai", "TX. Thái Hòa",
            "Huyện Anh Sơn", "Huyện Con Cuông", "Huyện Diễn Châu",
            "Huyện Đô Lương", "Huyện Hưng Nguyên", "Huyện Kỳ Sơn",
            "Huyện Nam Đàn", "Huyện Nghi Lộc", "Huyện Nghĩa Đàn",
            "Huyện Quế Phong", "Huyện Quỳ Châu", "Huyện Quỳ Hợp",
            "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Huyện Thanh Chương",
            "Huyện Tương Dương", "Huyện Yên Thành"
        ],
        districtFees: {}
    },
    "Thanh Hóa": {
        fee: 35000,
        districts: [
            "TP. Thanh Hóa", "TP. Sầm Sơn",
            "TX. Bỉm Sơn", "TX. Nghi Sơn",
            "Huyện Bá Thước", "Huyện Cẩm Thủy", "Huyện Đông Sơn",
            "Huyện Hà Trung", "Huyện Hậu Lộc", "Huyện Hoằng Hóa",
            "Huyện Lang Chánh", "Huyện Mường Lát", "Huyện Nga Sơn",
            "Huyện Ngọc Lặc", "Huyện Như Thanh", "Huyện Như Xuân",
            "Huyện Nông Cống", "Huyện Quan Hóa", "Huyện Quan Sơn",
            "Huyện Quảng Xương", "Huyện Thạch Thành", "Huyện Thiệu Hóa",
            "Huyện Thọ Xuân", "Huyện Thường Xuân", "Huyện Triệu Sơn",
            "Huyện Vĩnh Lộc", "Huyện Yên Định"
        ],
        districtFees: {}
    },
    "Ninh Bình": {
        fee: 35000,
        districts: [
            "TP. Ninh Bình", "TP. Tam Điệp",
            "Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn",
            "Huyện Nho Quan", "Huyện Yên Khánh", "Huyện Yên Mô"
        ],
        districtFees: {}
    },
    "Nam Định": {
        fee: 35000,
        districts: [
            "TP. Nam Định",
            "Huyện Giao Thủy", "Huyện Hải Hậu", "Huyện Mỹ Lộc",
            "Huyện Nam Trực", "Huyện Nghĩa Hưng", "Huyện Trực Ninh",
            "Huyện Vụ Bản", "Huyện Xuân Trường", "Huyện Ý Yên"
        ],
        districtFees: {}
    },
    "Thái Bình": {
        fee: 35000,
        districts: [
            "TP. Thái Bình",
            "Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Kiến Xương",
            "Huyện Quỳnh Phụ", "Huyện Thái Thụy", "Huyện Tiền Hải",
            "Huyện Vũ Thư"
        ],
        districtFees: {}
    },
    "Hà Nam": {
        fee: 35000,
        districts: [
            "TP. Phủ Lý", "TX. Duy Tiên",
            "Huyện Bình Lục", "Huyện Kim Bảng", "Huyện Lý Nhân",
            "Huyện Thanh Liêm"
        ],
        districtFees: {}
    },
    "Hưng Yên": {
        fee: 35000,
        districts: [
            "TP. Hưng Yên",
            "TX. Mỹ Hào",
            "Huyện Ân Thi", "Huyện Khoái Châu", "Huyện Kim Động",
            "Huyện Phù Cừ", "Huyện Tiên Lữ", "Huyện Văn Giang",
            "Huyện Văn Lâm", "Huyện Yên Mỹ"
        ],
        districtFees: {}
    },
    "Hải Dương": {
        fee: 35000,
        districts: [
            "TP. Hải Dương", "TP. Chí Linh",
            "Huyện Bình Giang", "Huyện Cẩm Giàng", "Huyện Gia Lộc",
            "Huyện Kim Thành", "Huyện Kinh Môn", "Huyện Nam Sách",
            "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Thanh Miện",
            "Huyện Tứ Kỳ"
        ],
        districtFees: {}
    },
    "Bắc Ninh": {
        fee: 35000,
        districts: [
            "TP. Bắc Ninh", "TX. Từ Sơn",
            "Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ",
            "Huyện Thuận Thành", "Huyện Tiên Du", "Huyện Yên Phong"
        ],
        districtFees: {}
    },
    "Bắc Giang": {
        fee: 40000,
        districts: [
            "TP. Bắc Giang",
            "Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Lục Nam",
            "Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Tân Yên",
            "Huyện Việt Yên", "Huyện Yên Dũng", "Huyện Yên Thế"
        ],
        districtFees: {}
    },
    "Vĩnh Phúc": {
        fee: 35000,
        districts: [
            "TP. Vĩnh Yên", "TP. Phúc Yên",
            "Huyện Bình Xuyên", "Huyện Lập Thạch", "Huyện Sông Lô",
            "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Vĩnh Tường",
            "Huyện Yên Lạc"
        ],
        districtFees: {}
    },
    "Phú Thọ": {
        fee: 40000,
        districts: [
            "TP. Việt Trì", "TX. Phú Thọ",
            "Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hòa",
            "Huyện Lâm Thao", "Huyện Phù Ninh", "Huyện Tam Nông",
            "Huyện Tân Sơn", "Huyện Thanh Ba", "Huyện Thanh Sơn",
            "Huyện Thanh Thủy", "Huyện Yên Lập"
        ],
        districtFees: {}
    },
    "Thái Nguyên": {
        fee: 40000,
        districts: [
            "TP. Thái Nguyên", "TP. Sông Công",
            "TX. Phổ Yên",
            "Huyện Đại Từ", "Huyện Định Hóa", "Huyện Đồng Hỷ",
            "Huyện Phú Bình", "Huyện Phú Lương", "Huyện Võ Nhai"
        ],
        districtFees: {}
    },
    "Quảng Ninh": {
        fee: 40000,
        districts: [
            "TP. Hạ Long", "TP. Cẩm Phả", "TP. Uông Bí", "TP. Móng Cái",
            "TX. Đông Triều", "TX. Quảng Yên",
            "Huyện Ba Chẽ", "Huyện Bình Liêu", "Huyện Cô Tô",
            "Huyện Đầm Hà", "Huyện Hải Hà", "Huyện Hoành Bồ",
            "Huyện Tiên Yên", "Huyện Vân Đồn"
        ],
        districtFees: {
            "Huyện Cô Tô": 60000
        }
    },
    "Lạng Sơn": {
        fee: 45000,
        districts: [
            "TP. Lạng Sơn",
            "Huyện Bắc Sơn", "Huyện Bình Gia", "Huyện Cao Lộc",
            "Huyện Chi Lăng", "Huyện Đình Lập", "Huyện Hữu Lũng",
            "Huyện Lộc Bình", "Huyện Tràng Định", "Huyện Văn Lãng",
            "Huyện Văn Quan"
        ],
        districtFees: {}
    },
    "Tuyên Quang": {
        fee: 45000,
        districts: [
            "TP. Tuyên Quang",
            "Huyện Chiêm Hóa", "Huyện Hàm Yên", "Huyện Lâm Bình",
            "Huyện Na Hang", "Huyện Sơn Dương", "Huyện Yên Sơn"
        ],
        districtFees: {}
    },
    "Yên Bái": {
        fee: 45000,
        districts: [
            "TP. Yên Bái", "TX. Nghĩa Lộ",
            "Huyện Lục Yên", "Huyện Mù Cang Chải", "Huyện Trạm Tấu",
            "Huyện Trấn Yên", "Huyện Văn Chấn", "Huyện Văn Yên",
            "Huyện Yên Bình"
        ],
        districtFees: {}
    },
    "Lào Cai": {
        fee: 50000,
        districts: [
            "TP. Lào Cai", "TX. Sa Pa",
            "Huyện Bắc Hà", "Huyện Bảo Thắng", "Huyện Bảo Yên",
            "Huyện Bát Xát", "Huyện Mường Khương", "Huyện Si Ma Cai",
            "Huyện Văn Bàn"
        ],
        districtFees: {}
    },
    "Hà Giang": {
        fee: 55000,
        districts: [
            "TP. Hà Giang",
            "Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Đồng Văn",
            "Huyện Hoàng Su Phì", "Huyện Mèo Vạc", "Huyện Quản Bạ",
            "Huyện Quang Bình", "Huyện Vị Xuyên", "Huyện Xín Mần",
            "Huyện Yên Minh"
        ],
        districtFees: {}
    },
    "Cao Bằng": {
        fee: 55000,
        districts: [
            "TP. Cao Bằng",
            "Huyện Bảo Lạc", "Huyện Bảo Lâm", "Huyện Hà Quảng",
            "Huyện Hạ Lang", "Huyện Hòa An", "Huyện Nguyên Bình",
            "Huyện Phục Hòa", "Huyện Quảng Hòa", "Huyện Trùng Khánh"
        ],
        districtFees: {}
    },
    "Bắc Kạn": {
        fee: 50000,
        districts: [
            "TP. Bắc Kạn",
            "Huyện Ba Bể", "Huyện Bạch Thông", "Huyện Chợ Đồn",
            "Huyện Chợ Mới", "Huyện Na Rì", "Huyện Ngân Sơn",
            "Huyện Pác Nặm"
        ],
        districtFees: {}
    },
    "Lai Châu": {
        fee: 55000,
        districts: [
            "TP. Lai Châu",
            "Huyện Mường Tè", "Huyện Nậm Nhùn", "Huyện Phong Thổ",
            "Huyện Sìn Hồ", "Huyện Tam Đường", "Huyện Tân Uyên",
            "Huyện Than Uyên"
        ],
        districtFees: {}
    },
    "Điện Biên": {
        fee: 55000,
        districts: [
            "TP. Điện Biên Phủ", "TX. Mường Lay",
            "Huyện Điện Biên", "Huyện Điện Biên Đông", "Huyện Mường Ảng",
            "Huyện Mường Chà", "Huyện Mường Nhé", "Huyện Nậm Pồ",
            "Huyện Tủa Chùa", "Huyện Tuần Giáo"
        ],
        districtFees: {}
    },
    "Sơn La": {
        fee: 50000,
        districts: [
            "TP. Sơn La",
            "Huyện Bắc Yên", "Huyện Mai Sơn", "Huyện Mộc Châu",
            "Huyện Mường La", "Huyện Phù Yên", "Huyện Quỳnh Nhai",
            "Huyện Sông Mã", "Huyện Sốp Cộp", "Huyện Thuận Châu",
            "Huyện Vân Hồ", "Huyện Yên Châu"
        ],
        districtFees: {}
    },
    "Hòa Bình": {
        fee: 40000,
        districts: [
            "TP. Hòa Bình",
            "Huyện Cao Phong", "Huyện Đà Bắc", "Huyện Kim Bôi",
            "Huyện Lạc Sơn", "Huyện Lạc Thủy", "Huyện Lương Sơn",
            "Huyện Mai Châu", "Huyện Tân Lạc", "Huyện Yên Thủy"
        ],
        districtFees: {}
    }
};

// Helper: get shipping fee for a specific province + district
function getShippingFee(province, district) {
    const prov = SHIPPING_DATA[province];
    if (!prov) return null;
    // Check if district has a special fee
    if (prov.districtFees && prov.districtFees[district] !== undefined) {
        return prov.districtFees[district];
    }
    return prov.fee;
}
