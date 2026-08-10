/**
 * VIOSPACE Dashboard Configuration
 * Centralized configuration for customer portal topbar and sidebar navigation.
 */

window.DASHBOARD_CONFIG = {
  user: {
    name: 'Nguyễn Văn A',
    greeting: 'Xin chào',
    avatarIcon: 'fa fa-user',
    changePasswordUrl: '#',
    hasNotification: true
  },
  menu: [
    { id: 'dashboard', label: 'Tổng quan', icon: 'fa fa-th-large', url: 'customer-dashboard.html' },
    { id: 'contracts', label: 'Hợp đồng', icon: 'fa fa-file-text-o', url: 'customer-contracts.html' },
    { id: 'requests', label: 'Yêu cầu', icon: 'fa fa-paper-plane-o', url: 'customer-requests.html' },
    { id: 'upload', label: 'Tải lên hồ sơ', icon: 'fa fa-cloud-upload', url: 'customer-upload.html' },
    { id: 'billing', label: 'Thanh toán', icon: 'fa fa-credit-card', url: 'customer-billing.html' }
  ]
};
