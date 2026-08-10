/**
 * VIOSPACE - StatsCounter Component
 * Renders statistical count items (.de_count) with animation delay support
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.StatsCounter = function (props = {}) {
    const items = props.items || window.VIOSPACE_SECTIONS?.statsCounters || [];
    const colClass = props.colClass || 'col-4';

    const itemsHtml = items.map(item => `
        <div class="${colClass} wow fadeInRight mb30" data-wow-delay="${item.wowDelay || '1s'}">
            <div class="de_count text-left">
                <h3 style="color: ${item.color || '#1da599'}"><span>${item.value}</span>${item.suffix || ''}</h3>
                <h5 class="id-color">${item.label}</h5>
            </div>
        </div>
    `).join('');

    return `
        <div class="row">
            ${itemsHtml}
        </div>
    `;
};
