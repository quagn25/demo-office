/**
 * VIOSPACE - NewsGrid Component
 * Renders news/blog cards (.bloglist.item)
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.NewsGrid = function (props = {}) {
    const items = props.items || window.VIOSPACE_SECTIONS?.newsItems || [];
    const colClass = props.colClass || 'col-lg-4 col-md-6 mb30';

    const itemsHtml = items.map(item => `
        <div class="${colClass}">
            <div class="bloglist item">
                <div class="post-content">
                    <div class="post-image">
                        <img alt="${item.title}" src="${item.image}" class="lazy" />
                    </div>
                    <div class="post-text">
                        <span class="p-tagline">${item.category || 'Tips & Tricks'}</span>
                        <span class="p-date">${item.date}</span>
                        <h4>
                            <a href="${item.link || 'news-single.html'}">${item.title}<span></span></a>
                        </h4>
                        <p>${item.excerpt}</p>
                        <a class="btn-main" href="${item.link || 'news-single.html'}">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="row">
            ${itemsHtml}
        </div>
    `;
};
