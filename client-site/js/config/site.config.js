/**
 * VIOSPACE Site Configuration
 * Centralized configuration for public navigation, footer, and floating contact widgets.
 */

window.SITE_CONFIG = {
  logo: {
    src: 'images/Group1.svg',
    alt: 'VIOSPACE Logo',
    height: '40px',
    marginTop: '10px'
  },
  navigation: [
    { id: 'index.html', label: 'Trang chủ', url: 'index.html' },
    { id: 'news.html', label: 'Tin tức', url: 'news.html' },
    { id: 'contact.html', label: 'Liên hệ', url: 'contact.html' }
  ],
  actionButton: {
    login: { label: 'Đăng nhập', url: 'login.html' },
    register: { label: 'Đăng ký', url: 'register.html' }
  },
  footer: {
    servicesTitle: 'Dịch vụ của chúng tôi',
    services: [
      { label: 'Văn phòng ảo', url: 'index.html#section-pricing' },
      { label: 'Văn phòng chia sẻ', url: 'index.html#section-pricing' },
      { label: 'Phòng họp', url: 'index.html#section-pricing' },
      { label: 'Thành lập doanh nghiệp', url: 'index.html#section-legal' },
      { label: 'Kế toán thuế', url: 'index.html#section-legal' }
    ],
    aboutTitle: 'Về Viospace',
    about: [
      { label: 'Giới thiệu', url: 'about-us.html' },
      { label: 'Cơ sở hạ tầng', url: 'locations.html' },
      { label: 'Tin tức', url: 'news.html' },
      { label: 'Khuyến mãi', url: 'index.html#section-pricing' },
      { label: 'Liên hệ', url: 'contact.html' }
    ],
    legalTitle: 'Hệ thống pháp lý',
    legal: [
      { label: 'Chính sách bảo mật', url: '#' },
      { label: 'Điều khoản sử dụng', url: '#' },
      { label: 'Quy định thanh toán', url: '#' },
      { label: 'Giải quyết khiếu nại', url: '#' }
    ],
    subscribeTitle: 'Đăng ký nhận tin',
    subscribeDesc: 'Đăng ký email để nhận những thông tin ưu đãi mới nhất từ chúng tôi.',
    copyright: '&copy; Copyright 2026 - VIOSPACE',
    socials: [
      { iconClass: 'fa fa-facebook fa-lg', url: '#' },
      { iconClass: 'fa fa-twitter fa-lg', url: '#' },
      { iconClass: 'fa fa-linkedin fa-lg', url: '#' },
      { iconClass: 'fa fa-youtube fa-lg', url: '#' }
    ]
  },
  contactWidget: {
    zalo: { url: '#', img: 'images/ui/zalo.jpg', title: 'Zalo' },
    messenger: { url: '#', img: 'images/ui/messenger.jpg', title: 'Messenger' },
    phone: { url: '#', number: '1900 xxxx', tooltip: 'Hãy liên hệ với chúng tôi' }
  }
};
