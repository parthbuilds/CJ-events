export default function stickySections() {
    ScrollTrigger.matchMedia({
        "(min-width: 1025px)": function() {
            
            const contentElements = [...document.querySelectorAll('.contentSticky')];
            const totalContentElements = contentElements.length;
            contentElements.forEach((el, position) => {
                const isLast = position === totalContentElements-1;

                const snapToElement = isLast ? '+=100%' : el.nextElementSibling; // Use the next element for snapping if it's not the last one

                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: 'bottom bottom',
                        end: '+=90%',
                        scrub: true,
                        markers:false,
                        // snap: {
                        //     snapTo: snapToElement, // snap to the closest label in the timeline
                        //     duration: { min: 0.2, max: 0.6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                        //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                        //     ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                        // },
                    }
                })
                
                .to(el.querySelector('.full-bg'), {
                    ease: 'none',
                    opacity:  '0',
                }, 0)

                .to(el.querySelector('.contentStickyMover'), {
                    ease: 'none',
                    opacity:  '0',
                    rotate:6,
                    y: "-100px",
                }, 0)

                .to(el.querySelector('video'), {
                    ease: 'none',
                    opacity:  '0',
                }, 0);

                // gsap.to(el.querySelector('.contentStickyMover'), {
                //     ease: 'none',
                //     opacity: '0',
                //     rotate: 6,
                //     y: '-100px',
                //     duration: 1, // Adjust duration for a smooth animation
                //     delay: 0.5 // Optional delay if needed
                // });


                //Animate the content inner image
                // .to(el.querySelector('.kak'), {
                //     ease: 'power1.in',
                //     //yPercent: -40,
                //     yPercent: -150,
                //     opacity:0
                // }, 0);

            });

        }
    });


    let allScrollDivs = gsap.utils.toArray('.contentSticky');
    allScrollDivs.forEach((item, i) => {
        const topDistance1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--top-distance-1'));
        const calculatedValue = topDistance1;
        gsap.set(item, { clipPath: `polygon(0 0, 0 100%, 100% 100%, 100% ${calculatedValue}px)` });
        

            
        ScrollTrigger.matchMedia({
            "(min-width: 1025px)": function() {
                gsap.fromTo(item, 
                    { 
                        clipPath: `polygon(0 0, 0 100%, 100% 100%, 100% ${calculatedValue}px)`
                    }, 
                    { 
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0px)',
                        scrollTrigger: {
                            trigger: item,
                            markers: false,
                            start: 'top 50%',
                            end: 'top top',
                            scrub: 0.5,
                        }
                    }
                );
            }
        });
        
        
        
        let scrubImage = item.querySelector('.full-bg img, .full-bg video');
        gsap.fromTo(scrubImage, 
            { 
                scale: 1.3,
            }, { 
            scale: 1,
            scrollTrigger: {
                trigger: item,
                markers: false,
                start: 'top bottom',
                scrub: true,
            }
        });
        


        let revealContent = item.querySelector('.opacityIt');
        gsap.from(revealContent, { 
            opacity: 0,
            rotate:-6,
            transformOrigin: 'bottom right',
            //scaleY: 1.2,
            duration:0.8,
            ease: "elastic-css",
            scrollTrigger: {
                trigger: item,
                markers: false,
                start: 'top 20%',
                toggleActions: 'play none none reverse',
                //scrub: true,
            }
        });
    
    });


    
    gsap.to(".contentSticky2", { 
        //yPercent: 50,
        //opacity: 0,
        // rotate: 0.001,
        // stagger: 0.05,
        ease: "none",
        delay: 0,
        scrollTrigger: {
            trigger: '.contentSticky2',
            //markers: true,
            start: 'top top',
            end: '+=100%',
            scrub: true,
        }
        //clearProps: "all"
    });
    

     ScrollTrigger.matchMedia({
            "(min-width: 1025px)": function() {
            gsap.to(".spinnerHolder", { 
                yPercent: 100,
                ease: "none",
                delay: 0,
                scrollTrigger: {
                    //markers: true,
                    start: 'top top',
                    end: '+=100%',
                    scrub: true,
                }
            });
          
        }
    });
    



}