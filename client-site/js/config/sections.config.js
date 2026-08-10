/**
 * VIOSPACE - Section Content Configuration Data
 * Centralized data source for repeated section components
 */
window.VIOSPACE_SECTIONS = {
    // Stats / Counters Data
    statsCounters: [
        { value: "15", suffix: "+", label: "Tiện ích miễn phí", color: "#1da599", wowDelay: "1.1s" },
        { value: "48", suffix: "k+", label: "Khách hàng", color: "#1da599", wowDelay: "1.4s" },
        { value: "15", suffix: "+", label: "Năm kinh nghiệm", color: "#1da599", wowDelay: "1.7s" }
    ],

    // Core Strengths (Thế mạnh cốt lõi)
    coreStrengths: [
        {
            num: "1",
            title: "Chi phí linh hoạt theo từng khu vực",
            desc: "Tối ưu chi phí cho doanh nghiệp của bạn với các gói linh hoạt tại nhiều địa điểm đa dạng, đáp ứng mọi nhu cầu không gian.",
            wowDelay: ".2s"
        },
        {
            num: "2",
            title: "Địa điểm phủ sóng toàn quốc",
            desc: "Mạng lưới văn phòng rộng lớn khắp các thành phố lớn tại Việt Nam, mang đến tiện lợi tối đa cho khách hàng.",
            wowDelay: ".4s"
        },
        {
            num: "3",
            title: "Pháp lý chuẩn đầy đủ",
            desc: "Hoàn toàn an tâm với các thủ tục pháp lý minh bạch, rõ ràng, hỗ trợ toàn diện pháp lý doanh nghiệp.",
            wowDelay: ".6s"
        },
        {
            num: "4",
            title: "Quy trình thủ tục nhanh chóng",
            desc: "Đơn giản hóa quy trình đăng ký, giúp bạn tiết kiệm thời gian và có thể bắt đầu làm việc ngay lập tức.",
            wowDelay: ".8s"
        }
    ],

    // Pricing Plans (Chọn gói giải pháp)
    pricingPlans: [
        {
            title: "Startup mới thành lập",
            tagline: "Best for personal",
            priceDaily: "39",
            priceMonthly: "19",
            currency: "$",
            period: "p/day",
            features: [
                "24/7 Access",
                "Website Design",
                "Customer Polls",
                "Question & Comment",
                "Backlink Checker",
                "Key Words Analyser"
            ],
            buttonText: "Đăng ký ngay",
            buttonUrl: "register.html"
        },
        {
            title: "Coworking Space",
            tagline: "Best for small group",
            priceDaily: "169",
            priceMonthly: "89",
            currency: "$",
            period: "p/day",
            features: [
                "24/7 Access",
                "Website Design",
                "Customer Polls",
                "Question & Comment",
                "Backlink Checker",
                "Key Words Analyser"
            ],
            buttonText: "Đăng ký ngay",
            buttonUrl: "register.html"
        },
        {
            title: "Virtual Office",
            tagline: "Best for organization",
            priceDaily: "329",
            priceMonthly: "164",
            currency: "$",
            period: "p/day",
            features: [
                "24/7 Access",
                "Website Design",
                "Customer Polls",
                "Question & Comment",
                "Backlink Checker",
                "Key Words Analyser"
            ],
            buttonText: "Đăng ký ngay",
            buttonUrl: "register.html"
        }
    ],

    // Locations (Mạng lưới phủ sóng 3 miền)
    locations: [
        {
            id: "hanoi",
            name: "HÀ NỘI",
            image: "images/background/hanoi.jpg",
            desc: "Trung tâm kinh tế, chính trị của cả nước, tập trung nhiều doanh nghiệp lớn, lý tưởng để phát triển thương hiệu.",
            wowDelay: ".2s"
        },
        {
            id: "danang",
            name: "ĐÀ NẴNG",
            image: "images/background/danang.webp",
            desc: "Thành phố đáng sống, môi trường kinh doanh năng động, nhiều tiềm năng phát triển về công nghệ và du lịch.",
            wowDelay: ".4s"
        },
        {
            id: "hcm",
            name: "HỒ CHÍ MINH",
            image: "images/background/hcm.jpg",
            desc: "Đầu tàu kinh tế sôi động nhất Việt Nam, nơi thu hút nhiều vốn đầu tư, cửa ngõ giao thương quốc tế quan trọng.",
            wowDelay: ".6s"
        }
    ],

    // Legal & Service Cards (Pháp Lý Chuẩn - Vững Vàng Khởi Nghiệp)
    legalCards: [
        {
            title: "Doanh Nghiệp Tiêu Chuẩn",
            desc: "Mô hình kinh doanh phù hợp với các quy định cơ bản, đảm bảo hoạt động hợp pháp và minh bạch.",
            image: "images/misc/is-1.jpg",
            wowDelay: ".2s"
        },
        {
            title: "Văn Phòng Công Ty Luật",
            desc: "Không gian làm việc chuyên nghiệp, đáp ứng các tiêu chuẩn khắt khe cho ngành luật và dịch vụ tư vấn.",
            image: "images/misc/is-2.jpg",
            wowDelay: ".4s"
        },
        {
            title: "Doanh Nghiệp FDI & Đầu Tư Nước Ngoài",
            desc: "Hỗ trợ tối đa cho các công ty có vốn nước ngoài với quy trình thủ tục pháp lý chuẩn quốc tế.",
            image: "images/misc/is-3.jpg",
            wowDelay: ".6s"
        }
    ],

    // News Items
    newsItems: [
        {
            id: 1,
            title: "Xu Hướng Văn Phòng Ảo 2025 Cho Doanh Nghiệp Khởi Nghiệp",
            date: "10 Tháng 8, 2025",
            category: "Tin Tức",
            image: "images/news/news-1.jpg",
            excerpt: "Văn phòng ảo đang trở thành lựa chọn hàng đầu của hàng ngàn startup Việt Nam nhờ tối ưu hóa chi phí vận hành và tăng uy tín thương hiệu.",
            author: "VIOSPACE Editorial",
            link: "news.html"
        },
        {
            id: 2,
            title: "Giải Pháp Đăng Ký GPKD Nhanh Chóng Trong 24H",
            date: "05 Tháng 8, 2025",
            category: "Pháp Lý",
            image: "images/news/news-2.jpg",
            excerpt: "Hướng dẫn chi tiết quy trình pháp lý chuẩn giúp doanh nghiệp mới thành lập dễ dàng sở hữu giấy phép kinh doanh hợp lệ.",
            author: "VIOSPACE Legal Team",
            link: "news.html"
        },
        {
            id: 3,
            title: "Mở Rộng Chi Nhánh Tại Hà Nội & Hồ Chí Minh Tối Ưu Chi Phí",
            date: "01 Tháng 8, 2025",
            category: "Mở Rộng Doanh Nghiệp",
            image: "images/news/news-3.jpg",
            excerpt: "Cách các doanh nghiệp vừa và nhỏ địa phương đặt chân vào 2 thị trường lớn nhất nước mà không tốn chi phí thuê văn phòng đắt đỏ.",
            author: "VIOSPACE Advisory",
            link: "news.html"
        }
    ]
};
