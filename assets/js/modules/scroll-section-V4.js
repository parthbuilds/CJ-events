export default function scrollSection() {
    var tl = gsap.timeline({
        defaults: { 
            ease: 'sine.inOut',
        },
        scrollTrigger: {
            trigger: '.scrollStart',
            endTrigger: '.scrollContainer',
            //markers: {startColor: "teal", endColor: "yellow", fontSize: "22px", fontWeight: "bold", indent: 150},
            start: 'top 90%', 
            end: '115% bottom',
            scrub: true,
        }
    });

    // Add a label at 90% of the timeline's progress
    tl.add('startScrollInner', '0');
    
        
    //******** LANE 1 ********//
    tl.from('.lane-1', {
        yPercent: -60,
        duration: 1,
        
    }, 'startScrollInner')

    tl.to('.lane-1', {
        xPercent: -100,
        duration: 1.5,
        
    }, 'startScrollInner+=0.5')

    tl.from('.lane-1 .scrollElem1', {
        yPercent: -800,
        duration: 1,
        
    }, 'startScrollInner')



    tl.from('.lane-1 .scrollElem2', {
        yPercent: -600,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-1 .scrollElem3', {
        yPercent: -400,
        duration: 1,
        
    }, 'startScrollInner')



    tl.from('.lane-1 .scrollElem4', {
        yPercent: -200,
        duration: 1,
        
    }, 'startScrollInner')


    //******** LANE 2 ********//
    tl.from('.lane-2', {
        yPercent: 60,
        duration: 1,
        
    }, 'startScrollInner')

    tl.from('.lane-2 .scrollElem1', {
        yPercent: 200,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-2 .scrollElem2', {
        yPercent: 400,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-2 .scrollElem3', {
        yPercent: 600,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-2 .scrollElem4', {
        yPercent: 800,
        duration: 1,
        
    }, 'startScrollInner')



    //******** LANE 3 ********//
    tl.from('.lane-3', {
        yPercent: -60,
        duration: 1,
        
    }, 'startScrollInner')

    tl.to('.lane-3', {
        xPercent: 100,
        duration: 1.5,
        
    }, 'startScrollInner+=0.5')

    tl.from('.lane-3 .scrollElem1', {
        yPercent: -800,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-3 .scrollElem2', {
        yPercent: -600,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-3 .scrollElem3', {
        yPercent: -400,
        duration: 1,
        
    }, 'startScrollInner')


    tl.from('.lane-3 .scrollElem4', {
        yPercent: -200,
        duration: 1,
        
    }, 'startScrollInner')


    //******** WIDTH 1 ********//
    .to('.scrollInner', {
        width: '150%',
        duration: 1,
        
    }, 'startScrollInner+=0.5')


    // Space it
    .to('.spaceIt', {
        height: '100vh',
        duration: 1,
        
    }, 'startScrollInner+=1')
    .to('.spaceIt2', {
        height: '150vh',
        duration: 1,
        
    }, 'startScrollInner+=1')





    if(document.querySelector('.split-chars.anim-da-lets')) {
        gsap.set(".split-chars.anim-da-lets .single-word-inner .single-char", { 
           scaleY:0,
           transformOrigin: "center center"
        });
    }
    if(document.querySelector('.split-chars.anim-da-lets')) {
        gsap.to(".split-chars.anim-da-lets .single-word-inner .single-char", { 
            scaleY:1,
            rotate: 0.001,
            stagger: 0.05,
            ease: "none",
            delay: 0,
            scrollTrigger: {
                trigger: '.scrollContainer',
                markers: false,
                start: '65% center',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
                scrub: 1.5,
            }
        });
        gsap.from(".split-chars.anim-da-lets", { 
            height: 0,
            ease: "none",
            delay: 0,
            scrollTrigger: {
                trigger: '.scrollContainer',
                markers: false,
                start: '50% center',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
                scrub: true,
            }
        });
        gsap.to(".buttonITRev", { 
            duration:0.6,
            opacity: 1,
            scale: 1,
            delay: 0,
            ease: "elastic-css",
           
            scrollTrigger: {
                trigger: '.scrollContainer',
                markers: false,
                start: 'bottom bottom',
                toggleActions: 'play none none reverse',
            }
        });
    }

    if (document.querySelector('.animCont')) {
        gsap.to(".animCont", { 
            yPercent: -30,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.scrollContainer',
                markers: false,
                start: 'center center',
                toggleActions: 'play none none reverse',
                scrub: true
            }
        });
    }
    if (document.querySelector('.anim-da-letsh')) {
        gsap.from(".anim-da-letsh", { 
            yPercent: 100,
            ease: 'sine.inOut',
          
            scrollTrigger: {
                trigger: '.scrollContainer',
                markers: false,
                start: 'top center',
                end: 'top top',
                scrub: true
            }
        });
    }
}