/**
 * VIOSPACE - CardGrid Component
 * Renders general card items (.de-card) used in Legal & Service sections
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.CardGrid = function (props = {}) {
    const cards = props.items || window.VIOSPACE_SECTIONS?.legalCards || [];

    const cardsHtml = cards.map((card, idx) => `
        <div class="col-md-4 mb-sm-30 wow fadeInUp" data-wow-delay="${card.wowDelay || (0.2 * (idx + 1)) + 's'}">
            <div class="de-card" style="border: 1px solid #eee; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease;">
                <img src="${card.image}" class="img-fluid" alt="${card.title}" style="width: 100%; height: 200px; object-fit: cover" />
                <div style="padding: 25px">
                    <h4 style="font-size: 18px; font-weight: bold">${card.title}</h4>
                    <p style="font-size: 14px; margin-bottom: 0; color: #666">${card.desc}</p>
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
