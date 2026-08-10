/**
 * VIOSPACE - SectionHeader Component
 * Standardized title, subtitle, and colored border line for page sections
 */
window.VIOSPACE_COMPONENTS = window.VIOSPACE_COMPONENTS || {};

window.VIOSPACE_COMPONENTS.SectionHeader = function (props = {}) {
    const title = props.title || '';
    const subtitle = props.subtitle || '';
    const align = props.align || 'center';
    const borderColor = props.borderColor || '#1da599';
    const uppercase = props.uppercase !== false;

    const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    const borderAlignStyle = align === 'center' ? 'margin: 0 auto;' : align === 'right' ? 'margin-left: auto;' : 'margin-right: auto;';
    const titleStyle = uppercase ? 'font-weight: bold; text-transform: uppercase;' : 'font-weight: bold;';

    const subtitleHtml = subtitle
        ? `<p style="color: #666; font-size: 16px; margin-top: 5px">${subtitle}</p>`
        : '';

    return `
        <div class="row">
            <div class="col-md-12 ${alignClass}">
                <h2 style="${titleStyle}">${title}</h2>
                ${subtitleHtml}
                <div class="small-border" style="background-color: ${borderColor}; ${borderAlignStyle}"></div>
            </div>
        </div>
    `;
};
