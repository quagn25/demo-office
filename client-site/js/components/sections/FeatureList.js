/**
 * VIOSPACE - FeatureList Component
 * Renders numbered strength/advantage feature blocks
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.FeatureList = function (props = {}) {
    const items = props.items || window.VIOSPACE_SECTIONS?.coreStrengths || [];

    const itemsHtml = items.map(item => `
        <div class="col-12 mb-4 wow fadeInRight" data-wow-delay="${item.wowDelay || '.2s'}">
            <h4 style="font-weight: bold">${item.num ? item.num + '. ' : ''}${item.title}</h4>
            <p>${item.desc}</p>
        </div>
    `).join('');

    return `
        <div class="row">
            ${itemsHtml}
        </div>
    `;
};
