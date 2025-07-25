export function dynamicSizes() {
    // Function to update max height for elements
    function updateMaxHeight() {
        const updateHeightForClass = (className, cssVariable) => {
            const elements = document.querySelectorAll(`.${className}`);
            let maxHeight = 0;
            elements.forEach(element => {
                const height = element.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            document.documentElement.style.setProperty(cssVariable, `${maxHeight}px`);
        };

        updateHeightForClass('circleHeight', '--use-circle-height');
        updateHeightForClass('setStatHeight', '--use-stat-height');
        updateHeightForClass('setCtaHeight', '--use-cta-height');
        updateHeightForClass('setStickyHeight', '--use-sticky-height');

    }

    

    // Function to update max width for elements
    function updateMaxWidth() {
        const updateWidthForClass = (className, cssVariable) => {
            const elements = document.querySelectorAll(`.${className}`);
            let maxWidth = 0;
            elements.forEach(element => {
                const width = element.offsetWidth;
                if (width > maxWidth) {
                    maxWidth = width;
                }
            });
            document.documentElement.style.setProperty(cssVariable, `${maxWidth}px`);
        };

        updateWidthForClass('setTextWidth', '--use-text-width');
        //updateWidthForClass('setCtaWidth', '--use-cta-width');
        // updateWidthForClass('box-width-2', '--box-width-2');
    }

    updateMaxHeight();
    updateMaxWidth();

    // $(window).on('resize', () => {
    //     updateMaxHeight();
    //     updateMaxWidth();
    // });
}