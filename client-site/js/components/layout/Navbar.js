/**
 * Navbar Component
 * Renders the main site header navigation bar dynamically.
 */

window.renderNavbar = function(options = {}) {
  const config = window.SITE_CONFIG || {};
  const logo = config.logo || { src: 'images/Group1.svg', alt: 'Logo', height: '40px', marginTop: '10px' };
  const navItems = config.navigation || [];
  const activeRoute = options.active || 'index.html';
  const headerClass = options.headerClass || 'transparent header-light scroll-light';
  const linkStyleAttr = options.textColor ? ` style="color: ${options.textColor}"` : '';

  // Determine Action Button (Login vs Register)
  let actionBtn = config.actionButton.login;
  if (options.action === 'register' || activeRoute === 'login.html') {
    actionBtn = config.actionButton.register;
  }

  const navLinksHtml = navItems.map(item => {
    const isActive = (item.id === activeRoute || item.url === activeRoute) ? ' class="active"' : '';
    return `<li><a href="${item.url}"${isActive}${linkStyleAttr}>${item.label}<span></span></a></li>`;
  }).join('\n                    ');

  return `
      <!-- header begin -->
      <header class="${headerClass}">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <div class="de-flex-col">
                    <!-- logo begin -->
                    <div id="logo">
                      <a href="index.html">
                        <img
                          src="${logo.src}"
                          alt="${logo.alt}"
                          style="height: ${logo.height}; margin-top: ${logo.marginTop}"
                        />
                      </a>
                    </div>
                    <!-- logo close -->
                  </div>
                  <div class="de-flex-col"></div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <!-- mainmenu begin -->
                  <ul id="mainmenu">
                    ${navLinksHtml}
                  </ul>
                </div>
                <div class="de-flex-col">
                  <div class="menu_side_area">
                    <a
                      href="${actionBtn.url}"
                      class="btn-main"
                      style="background-color: #1da599; border-color: #1da599; padding: 8px 30px; letter-spacing: 0;"
                      ><span>${actionBtn.label}</span></a
                    >
                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- header close -->
  `;
};
