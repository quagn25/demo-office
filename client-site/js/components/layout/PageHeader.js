/**
 * PageHeader Component
 * Renders subpage banner subheader section with title, subtitle description, and background image.
 */

window.renderPageHeader = function(options = {}) {
  const title = options.title || 'VIOSPACE';
  const subtitle = options.subtitle || '';
  const bgImage = options.bgImage || 'images/background/subheader.jpg';

  const subtitleHtml = subtitle ? `<p>${subtitle}</p>` : '';

  return `
    <!-- subheader begin -->
    <section id="subheader" class="text-light" data-bgimage="url(${bgImage}) top" data-stellar-background-ratio=".5">
      <div class="overlay-gradient t50">
        <div class="center-y relative">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center wow fadeIn">
                <h2>${title}</h2>
                ${subtitleHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- subheader close -->
  `;
};
