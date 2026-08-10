/**
 * DashboardHeader Component
 * Renders customer portal topbar header and mobile sidebar toggle backdrop overlay.
 */

window.renderDashboardHeader = function(options = {}) {
  const config = (window.DASHBOARD_CONFIG && window.DASHBOARD_CONFIG.user) ? window.DASHBOARD_CONFIG.user : {};
  const userName = options.userName || config.name || 'Nguyễn Văn A';
  const greeting = config.greeting || 'Xin chào';
  const logoSrc = (window.SITE_CONFIG && window.SITE_CONFIG.logo && window.SITE_CONFIG.logo.src) || 'images/Group1.svg';

  // Attach event listener after injection for mobile toggle
  setTimeout(() => {
    const toggleBtn = document.getElementById('toggleSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebar = document.querySelector('.dashboard-sidebar');

    if (toggleBtn && sidebar && overlay) {
      toggleBtn.onclick = function() {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
      };
      overlay.onclick = function() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
      };
    }
  }, 0);

  return `
    <!-- TOPBAR HEADER -->
    <header class="topbar-header d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
            <button class="mobile-sidebar-toggle me-2" id="toggleSidebar" aria-label="Menu Toggle">
                <i class="fa fa-bars"></i>
            </button>
            <a href="index.html">
                <img src="${logoSrc}" alt="VIOSPACE Logo" style="height: 34px;">
            </a>
            <div class="user-greeting ms-2">
                <span class="user-greeting-text">${greeting} </span>${userName}
            </div>
        </div>

        <div class="topbar-actions">
            <div class="icon-btn-bell" title="Thông báo">
                <i class="fa fa-bell-o"></i>
                <span class="notification-dot"></span>
            </div>
            <a href="${config.changePasswordUrl || '#'}" class="btn-change-password">[Đổi mật khẩu]</a>
            <div class="user-avatar-btn" title="Tài khoản cá nhân">
                <i class="${config.avatarIcon || 'fa fa-user'}"></i>
            </div>
        </div>
    </header>

    <!-- BACKDROP OVERLAY FOR MOBILE SIDEBAR -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
  `;
};
