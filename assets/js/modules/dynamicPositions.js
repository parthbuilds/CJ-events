export function dynamicPositions() {
    // Function to update top right distance for elements
    function updateTopRightDistance() {
        const updateDistanceForClass = (className, cssVariable) => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const distance = rect.top;
                document.documentElement.style.setProperty(cssVariable, `${distance}px`);
            });
        };

        updateDistanceForClass('pixel', '--top-distance-1');
        updateDistanceForClass('pixel2', '--top-distance-2');
    }

    // Initial update
    updateTopRightDistance();

    // Update the distances on window resize
    // window.addEventListener('resize', () => {
    //     updateTopRightDistance();
    // });
}