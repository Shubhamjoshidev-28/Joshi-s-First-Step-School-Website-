/**
 * OAE (Object Analysis Engine) Responsive Algorithm
 * Designed for Joshi's First Step School Project
 */
const ResponsiveEngine = (() => {
    const DESIGN_WIDTH = 1920;

    const init = () => {
        applyFluidScaling();
        injectMobileMenuLogic();
        window.addEventListener('resize', applyFluidScaling);
    };

    const applyFluidScaling = () => {
        const allElements = document.querySelectorAll('section, div, .card, .contact-card');
        
        allElements.forEach(el => {
            const style = window.getComputedStyle(el);
            const width = parseFloat(style.width);
            
            // Algorithm: Convert fixed PX to dynamic Clamped VW
            if (width > 300 && !el.classList.contains('no-oae')) {
                const fluidVal = (width / DESIGN_WIDTH) * 100;
                el.style.width = `clamp(320px, ${fluidVal}vw, ${width}px)`;
                el.style.maxWidth = "100%";
                el.style.height = "auto"; // Prevent cropping
            }
        });
    };

    const injectMobileMenuLogic = () => {
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        
        if (toggle && menu) {
            toggle.onclick = () => {
                menu.classList.toggle('active');
                toggle.classList.toggle('active');
            };
        }
    };

    return { start: init };
})();

document.addEventListener('DOMContentLoaded', ResponsiveEngine.start);