/**
 * VIOSPACE - PricingGrid Component
 * Renders 3-column pricing plans grid (.pricing-s1)
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.PricingGrid = function (props = {}) {
    const plans = props.plans || window.VIOSPACE_SECTIONS?.pricingPlans || [];
    const showSwitch = props.showSwitch !== false;

    const switchHtml = showSwitch ? `
        <div class="row">
            <div class="col text-center">
                <div class="switch-set">
                    <div>Daily</div>
                    <div><input id="sw-1" class="switch" type="checkbox" /></div>
                    <div>Monthly</div>
                    <div class="spacer-20"></div>
                </div>
            </div>
        </div>
    ` : '';

    const cardsHtml = plans.map(plan => {
        const featuresHtml = plan.features.map(f => `<li><i class="fa fa-check"></i>${f}</li>`).join('');

        return `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="pricing-s1 mb30">
                    <div class="top">
                        <h2>${plan.title}</h2>
                        <p class="plan-tagline">${plan.tagline}</p>
                    </div>
                    <div class="mid bg-color-secondary text-light">
                        <p class="price">
                            <span class="currency">${plan.currency || '$'}</span>
                            <span class="m opt-1">${plan.priceDaily}</span>
                            <span class="y opt-2">${plan.priceMonthly}</span>
                            <span class="month">${plan.period || 'p/day'}</span>
                        </p>
                    </div>
                    <div class="bottom">
                        <ul>
                            ${featuresHtml}
                        </ul>
                    </div>
                    <div class="action">
                        <a href="${plan.buttonUrl || 'register.html'}" class="btn-main">${plan.buttonText || 'Đăng ký ngay'}</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        ${switchHtml}
        <div class="item pricing">
            <div class="container">
                <div class="row">
                    ${cardsHtml}
                </div>
            </div>
        </div>
    `;
};
