export default function hero() {

    if(document.querySelector('.split-chars.animate-transition-2')) {
        gsap.set(".split-chars.animate-transition-2 .single-word-inner .single-char", { 
            scaleY:0,
            transformOrigin: "top center"
        });
    }
    if(document.querySelector('.split-chars.animate-transition-2')) {
        gsap.to(".split-chars.animate-transition-2 .single-word-inner .single-char", { 
            scaleY:1,
            rotate: 0.001,
            stagger: 0.05,
            ease: "elastic-css",
            delay: 0,
            scrollTrigger: {
                trigger: '.animate-transition-2',
                markers: false,
                start: 'center bottom', 
                end: 'center center',
                toggleActions: 'play none none reverse',
                scrub: 1,
            }
        });
    }
    // ScrollTrigger.matchMedia({
    //     "(min-width: 768px)": function() {
    //     }
    // });
    

}
