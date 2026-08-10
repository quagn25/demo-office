/**
 * DashboardSidebar Component
 * Renders customer portal sidebar navigation menu.
 */

window.renderDashboardSidebar = function(options = {}) {
  const menuItems = (window.DASHBOARD_CONFIG && window.DASHBOARD_CONFIG.menu) ? window.DASHBOARD_CONFIG.menu : [];
  const activeRoute = options.active || 'dashboard';

  const menuHtml = menuItems.map(item => {
    const isActive = (item.id === activeRoute || item.url === activeRoute) ? ' class="active"' : '';
    return `
                <li${isActive}>
                    <a href="${item.url}">
                        <i class="${item.icon}"></i>
                        <span>${item.label}</span>
                    </a>
                </li>`;
  }).join('');

  return `
        <!-- SIDEBAR MENU -->
        <aside class="dashboard-sidebar">
            <ul class="sidebar-menu">${menuHtml}
            </ul>
        </aside>
  `;
};
