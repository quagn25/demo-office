/**
 * VIOSPACE - LocationGrid Component
 * Renders city location cards (.de-card-location) with background images & overlay
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.LocationGrid = function (props = {}) {
    const locations = props.items || window.VIOSPACE_SECTIONS?.locations || [];

    const cardsHtml = locations.map((loc, idx) => `
        <div class="col-md-4 mb-sm-30 wow fadeInUp" data-wow-delay="${loc.wowDelay || (0.2 * (idx + 1)) + 's'}">
            <div class="de-card-location" style="position: relative; overflow: hidden; border-radius: 10px; height: 500px;">
                <img src="${loc.image}" alt="${loc.name}" style="width: 100%; height: 100%; object-fit: cover" />
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%);"></div>
                <div style="position: absolute; top: 30px; left: 30px; right: 30px;">
                    <h3 style="color: #1da599; font-weight: bold">${loc.name}</h3>
                    <p style="color: #fff; font-size: 15px; margin-top: 10px; line-height: 1.6;">${loc.desc}</p>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="row">
            ${cardsHtml}
        </div>
    `;
};
