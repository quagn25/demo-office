/**
 * Footer Component
 * Renders the main public footer with links, newsletter subscription, and subfooter copyright & social icons.
 */

window.renderFooter = function(options = {}) {
  const config = (window.SITE_CONFIG && window.SITE_CONFIG.footer) ? window.SITE_CONFIG.footer : {};
  const logoSrc = (window.SITE_CONFIG && window.SITE_CONFIG.logo && window.SITE_CONFIG.logo.src) || 'images/Group1.svg';

  const servicesHtml = (config.services || []).map(item =>
    `<li><a href="${item.url}">${item.label}</a></li>`
  ).join('\n                  ');

  const aboutHtml = (config.about || []).map(item =>
    `<li><a href="${item.url}">${item.label}</a></li>`
  ).join('\n                  ');

  const legalHtml = (config.legal || []).map(item =>
    `<li><a href="${item.url}">${item.label}</a></li>`
  ).join('\n                  ');

  const socialsHtml = (config.socials || []).map(item =>
    `<a href="${item.url}"><i class="${item.iconClass}"></i></a>`
  ).join('\n                      ');

  return `
      <!-- footer begin -->
      <footer class="footer-light" style="border-top: 1px solid #eee">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>${config.servicesTitle || 'Dịch vụ của chúng tôi'}</h5>
                <ul>
                  ${servicesHtml}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>${config.aboutTitle || 'Về Viospace'}</h5>
                <ul>
                  ${aboutHtml}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>${config.legalTitle || 'Hệ thống pháp lý'}</h5>
                <ul>
                  ${legalHtml}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>${config.subscribeTitle || 'Đăng ký nhận tin'}</h5>
                <p>
                  ${config.subscribeDesc || 'Đăng ký email để nhận những thông tin ưu đãi mới nhất từ chúng tôi.'}
                </p>
                <form
                  action="#"
                  class="row form-dark"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div class="col text-center" style="display: flex">
                    <input
                      class="form-control"
                      id="txt_subscribe"
                      name="txt_subscribe"
                      placeholder="Nhập email của bạn"
                      type="text"
                      style="border-radius: 4px 0 0 4px; border-right: none"
                    />
                    <button
                      type="submit"
                      style="
                        background-color: #1da599;
                        border: none;
                        color: white;
                        padding: 0 15px;
                        border-radius: 0 4px 4px 0;
                      "
                    >
                      <i class="fa fa-envelope"></i>
                    </button>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex">
                  <div class="de-flex-col">
                    <a href="index.html">
                      <img
                        src="${logoSrc}"
                        alt="Logo"
                        style="height: 40px; margin-bottom: 20px"
                      />
                      <span class="copy">${config.copyright || '&copy; Copyright 2026 - VIOSPACE'}</span>
                    </a>
                  </div>
                  <div class="de-flex-col">
                    <div class="social-icons">
                      ${socialsHtml}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- footer close -->
  `;
};
