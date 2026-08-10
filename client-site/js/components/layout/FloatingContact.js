/**
 * FloatingContact Component
 * Renders the sticky floating contact button stack (Zalo, Messenger, Hotline).
 */

window.renderFloatingContact = function(options = {}) {
  const config = (window.SITE_CONFIG && window.SITE_CONFIG.contactWidget) ? window.SITE_CONFIG.contactWidget : {};
  const zalo = config.zalo || { url: '#', img: 'images/ui/zalo.jpg', title: 'Zalo' };
  const messenger = config.messenger || { url: '#', img: 'images/ui/messenger.jpg', title: 'Messenger' };
  const phone = config.phone || { url: '#', number: '1900 xxxx', tooltip: 'Hãy liên hệ với chúng tôi' };

  return `
    <!-- Floating Contact Icons -->
    <style>
      .contact-icon-btn {
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .contact-icon-btn:hover {
        transform: scale(1.1);
      }

      .contact-tooltip {
        position: absolute;
        right: 65px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 6px 15px;
        border-radius: 20px;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        font-family: sans-serif;
        pointer-events: none;
      }

      .contact-tooltip::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translateY(-50%);
        border-width: 6px 0 6px 6px;
        border-style: solid;
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
      }

      .contact-icon-btn:hover .contact-tooltip {
        opacity: 1;
        visibility: visible;
      }
    </style>
    <div
      style="
        position: fixed;
        right: 20px;
        bottom: 100px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 15px;
      "
    >
      <!-- Zalo -->
      <a
        href="${zalo.url}"
        class="contact-icon-btn"
        style="background: transparent; box-shadow: none"
        title="${zalo.title}"
      >
        <img
          src="${zalo.img}"
          alt="${zalo.title}"
          style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          "
        />
      </a>
      <!-- Messenger -->
      <a
        href="${messenger.url}"
        class="contact-icon-btn"
        style="background: transparent; box-shadow: none"
        title="${messenger.title}"
      >
        <img
          src="${messenger.img}"
          alt="${messenger.title}"
          style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          "
        />
      </a>
      <!-- Phone -->
      <a href="${phone.url}" class="contact-icon-btn" style="background: #1da599">
        <i class="fa fa-phone" style="color: white; font-size: 24px"></i>
        <span class="contact-tooltip">${phone.tooltip}</span>
      </a>
    </div>
  `;
};
