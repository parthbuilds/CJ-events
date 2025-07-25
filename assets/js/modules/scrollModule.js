let scroll;

export function initSmoothScroll(container) {
    // Lenis: https://github.com/studio-freight/lenis
    scroll = new Lenis({
        lerp: 0.08,
        duration: 1.3,
    });
    //scroll.on('scroll', ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //     scroll.raf(time * 1000);
    // });
    function raf(time) {
        scroll.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    gsap.ticker.lagSmoothing(0);
    
    //ScrollTrigger.refresh();

    

    // const scroll = new Lenis({
    //     lerp: 0.08,
    //     wheelMultiplier: 0.8, 
    //     smooth: true,
    //     duration: 1.3,
    //     direction: "vertical",
    //     smoothTouch: false,
    // })
    
    // function raf(time) {
    //     scroll.raf(time)
    //     requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)


    // Check Scroll Direction
    const viewportHeight = window.innerHeight;
    const thresholdPercentage = viewportHeight * 0.1;
    
    var lastScrollTop = 0
    var threshold = thresholdPercentage;
    var thresholdTop = thresholdPercentage;

    function startCheckScroll() {
        scroll.on('scroll', (e) => {
            var nowScrollTop = e.targetScroll;
            if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
                // Check Scroll Direction
                if (nowScrollTop > lastScrollTop) {
                    $("[data-scrolling-direction]").attr('data-scrolling-direction', 'down');
                } else {
                    $("[data-scrolling-direction]").attr('data-scrolling-direction', 'up');
                }
                lastScrollTop = nowScrollTop;
                // Check if Scroll Started
                if (nowScrollTop > thresholdTop) {
                    $("[data-scrolling-started]").attr('data-scrolling-started', 'true');
                } else {
                    $("[data-scrolling-started]").attr('data-scrolling-started', 'false');
                }
            }
        });
    }
    startCheckScroll();
    // Reset instance
    barba.hooks.after(() => {
        startCheckScroll();
    });
    barba.hooks.beforeLeave(() => {
        $('[data-scrolling-direction]').attr('data-scrolling-direction', 'down');
        $('[data-scrolling-started]').attr('data-scrolling-started', 'false');
    });

    // Scroll to Anchor
    $("[data-anchor-target]").click(function () {
        let targetScrollToAnchorLenis = $(this).attr('data-anchor-target');
        scroll.scrollTo(targetScrollToAnchorLenis, {
            offset: 0,
            duration: 1.47,
            easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
        });
    });

    // Scroll down on spacebar
    // function scrollDownSpacebar() {
    //     const viewportHeight = window.innerHeight;
    //     const scrollAmount = viewportHeight * 0.8;
    //     const currentScroll = window.scrollY;
    //     scroll.scrollTo(currentScroll + scrollAmount, {
    //         offset: 0,
    //         duration: 1.47,
    //         easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    //     })
    // }
    // // document.addEventListener('keydown', (event) => {
    //     if (event.code === 'Space') {
    //         event.preventDefault();
    //         scrollDownSpacebar();
    //     }
    // });

}

export const scrollControl = {
    start: function () {
        scroll.start();
    },
    stop: function () {
        scroll.stop();
    },
    destroy: function () {
        scroll.destroy();
    },
    down: function () {
        function scrollToBottom() {
            const targetScroll = document.body.scrollHeight; // Get the total height of the page
            scroll.scrollTo(targetScroll, {
                offset: 0,
                duration: 0.6,
                easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
            });
        }
        scrollToBottom();
    },
    downsmall: function () {
        function scrollToBottom2() {
            const currentScroll = window.scrollY || window.pageYOffset; // Get current scroll position
            const targetScroll = currentScroll + 20; // Scroll 10px down from the current position
        
            scroll.scrollTo(targetScroll, {
                offset: 0,
                duration: 0.8,
                easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
            });
        }
        scrollToBottom2();
    }
};