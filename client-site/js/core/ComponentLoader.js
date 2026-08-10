/**
 * VIOSPACE ComponentLoader Engine
 * Automatically locates placeholders with `data-component` attributes and replaces/renders components.
 */

(function() {
  const componentRegistry = {
    'Navbar': window.renderNavbar,
    'Footer': window.renderFooter,
    'FloatingContact': window.renderFloatingContact,
    'PageHeader': window.renderPageHeader,
    'DashboardHeader': window.renderDashboardHeader,
    'DashboardSidebar': window.renderDashboardSidebar
  };

  function loadComponents() {
    const placeholders = document.querySelectorAll('[data-component]');
    placeholders.forEach(el => {
      const name = el.getAttribute('data-component');
      const renderFn = (window.VIOSPACE_COMPONENTS && window.VIOSPACE_COMPONENTS[name]) ||
                       componentRegistry[name] ||
                       window[`render${name}`];
      if (typeof renderFn === 'function') {
        const options = {};
        // Convert all dataset attributes to options object
        for (const key in el.dataset) {
          if (key !== 'component') {
            options[key] = el.dataset[key];
          }
        }
        const html = renderFn(options);
        // Replace placeholder with rendered HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html.trim();
        const fragment = document.createDocumentFragment();
        while (tempContainer.firstChild) {
          fragment.appendChild(tempContainer.firstChild);
        }
        el.parentNode.replaceChild(fragment, el);
      }
    });
  }

  // Load components immediately if DOM is ready, or on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
  } else {
    loadComponents();
  }

  window.loadComponents = loadComponents;
})();
