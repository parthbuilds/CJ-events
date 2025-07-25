import { scrollControl } from './scrollModule.js';

// Custom eases here
CustomEase.create("primary-ease", "0.4, 0.05, 0.01, 0.99");
CustomEase.create("primary-ease-out", ".34, 1.56, 0.64, 1");
CustomEase.create("primary-expo", "0.87, 0, 0.13, 1");
CustomEase.create("elastic-css", ".5, 1.5, .5 ,1");
CustomEase.create("ease-in-css", ".25, 1, .1 ,1");


export function initLoaderShort() { 
    let transitionOffset = 0;

    var tl = gsap.timeline();
    tl.call(function() {
        $('.logoMoveOnLoad .logoActive').remove();
    });

    // Set cursor to wait innitially
    tl.set("html", {
        cursor: "wait",
        pointerEvents:"none"
    });

    // Logo swipe reveal variables
    var clipFrom =  "polygon(0% 101%, 101% 101%, 101% 201%, 0% 101%)";
    var clipTo =    "polygon(0% 101%, 101% 101%, 101% 0%, 0% -10%)";


    // Set the opacity to 0 for these elements
    tl.set(".loader-screen, .logo-letters path", {
        opacity:0,
    });

    // Innitially set the split words position ready for da reveal
    if(document.querySelector('.split-words.animate-transition')) {
        tl.set(".split-words.animate-transition .single-word-inner", { 
        //    yPercent: 110,
        //    rotate: 6,
           scaleY:0,
        });
    }

    // Animate the clipped white logo to reveal
    tl.to(".logoMove", {
        duration: 0,
        clipPath: clipTo,
        ease: "primary-ease"
    }, transitionOffset);

    // Animate the masked 360 video to move up.
    tl.to(".mask-holder .mask", {
        maskPosition: '0 50%',
        stagger: 0.1,
        duration:0,
        ease: Expo.easeInOut
    }, 0);

    // Dergrees logo icon animate
    // tl.to(".loader-degrees", {
    //     opacity: 1,
    //     y:0,
    //     delay:0.6,
    //     duration:1.5,
    //     ease: Expo.easeInOut
    // }, 0);

    // Remove the masked 360 video before the white logo moves in
    tl.set(".mask, .loader-degrees", {
        opacity: 0,
    }, transitionOffset);

    // Move the logo into its position using Gsap flip plugin
    const state = Flip.getState(".loader-mask");
    document.querySelector(".logo .logoMoveOnLoad").appendChild(document.querySelector(".loader-mask"));
    tl.add(Flip.from(state, {
        duration: 0,
        ease: Expo.easeInOut
    }), transitionOffset + 5);

    // Animate the production house paths in the logo to fade in staggered
    tl.to(".logo-letters path", {
        opacity: 1,
        stagger: 0.03,
        duration:0,
    }, transitionOffset);


    // Loader done - bring set cursor back to auto + pointer events
    tl.set("html", {
        cursor: "auto",
        pointerEvents:"auto"
    }, transitionOffset);
    // Call the pageTransitionEnter to animate in
    tl.call(function() {
        pageTransitionEnter();
    }, null, transitionOffset);
}

export function initLoader() {
    let transitionOffset = 3;

    var tl = gsap.timeline();
    tl.call(function() {
        // Start page at the top on refresh
        setTimeout(() => {
            //window.scrollTo(0, 0);
        }, 200);
        scrollControl.stop();

        // Remove the logo only on first page load
        $('.logoMoveOnLoad .logoActive').remove();
    });

    // Set cursor to wait innitially
    tl.set("html", {
        cursor: "wait",
        pointerEvents:"none"
    });

    // Logo swipe reveal variables
    var clipFrom =  "polygon(0% 101%, 101% 101%, 101% 201%, 0% 101%)";
    var clipTo =    "polygon(0% 101%, 101% 101%, 101% 0%, 0% -10%)";

    // Set white logo to be completely clipped
    tl.set(".logoMove", {
        clipPath: clipFrom,
    });

    tl.set(".animate-fade-in", {
        y: "20px",
        opacity: 0,
    });

    // Set the opacity to 0 for these elements
    tl.set(".navIn, .loader-screen, .logo-letters path", {
        opacity:0,
    });

    // Innitially set the split words position ready for da reveal
    if(document.querySelector('.split-words.animate-transition')) {
        tl.set(".split-words.animate-transition .single-word-inner", { 
        //    yPercent: 110,
        //    rotate: 6,
           scaleY:0,
        });
    }

    // Animate the clipped white logo to reveal
    tl.to(".logoMove", {
        duration: 1.5,
        clipPath: clipTo,
        ease: "primary-ease"
    }, transitionOffset - 1.8);

    // Animate the masked 360 video to move up.
    tl.to(".mask-holder .mask", {
        maskPosition: '0 50%',
        stagger: 0.1,
        duration:1.5,
        ease: Expo.easeInOut
    }, 0);

    tl.to(".mask-mobile .mask", {
        maskPosition: '0 50%',
        stagger: 0.1,
        duration:1.5,
        ease: Expo.easeInOut
    }, 0);


    // Move the logo into its position using Gsap flip plugin
    const state = Flip.getState(".loader-mask");
    document.querySelector(".logo .logoMoveOnLoad").appendChild(document.querySelector(".loader-mask"));
    tl.add(Flip.from(state, {
        duration: 0.7,
        ease: Expo.easeInOut
    }), transitionOffset - 0.6);

    // Animate logo path fill to white
    tl.to(".logoMove path", {
        duration: 1.5,
        fill: "currentColor",
        stroke: "transparent",
        ease: "primary-ease"
    }, transitionOffset - 0.1);

    // Animate the production house paths in the logo to fade in staggered
    tl.to(".logo-letters path", {
        opacity: 1,
        stagger: 0.03,
        duration:0.8,
    }, transitionOffset - 0.1);

    // Bring in the nav or other elements here.
    tl.to(".navIn", {
        opacity: 1,
        duration:0.8,
    }, transitionOffset);


    // Loader done - bring set cursor back to auto + pointer events
    tl.set("html", {
        cursor: "auto",
        pointerEvents:"auto"
    }, transitionOffset - 0.6);
    // Call the pageTransitionEnter to animate in
    tl.call(function() {
        ScrollTrigger.refresh();
        pageTransitionEnter();
        //alert('done');
        // fade out and remove .loader-mask video jqury
        $('.loader-mask video').fadeOut(1000, function() {
            $(this).remove();
        });

    }, null, transitionOffset - 0.6);
}

export function pageTransitionLeave(data) {
    $('main').removeClass('pageTransitionEnter');
    $('main').addClass('pageTransitionLeave');
    
    let transitionOffset = 1;
    var tl = gsap.timeline();

    // tl.to(".split-words.animate-transition .single-word-inner", { 
    //     yPercent: -110,
    //     opacity:0,
    //     rotate: 0.001,
    //     stagger: 0.01,
    //     duration: 0.6,
    //     ease: "primary-expo",
    //     delay: 0,
    //  });

    //  if(document.querySelector('.animate-fade-in')) {
    //     tl.to(".animate-fade-in", {
    //        y: "-80px",
    //        opacity: 0,
    //        rotate: 0.001,
    //        stagger: 0.05,
    //        duration: 0.6,
    //        delay: 0,
    //        ease: "primary-expo",
    //     }, '<');
    // }


    // tl.to(".animateBackground", {
    //     scale: 1.5,
    //     duration:1,
    //     delay:0.1,
    //     ease: "primary-ease-out",
    // }, 0);



    tl.call(function() {
        scrollControl.stop();
    });
}

export function pageTransitionEnter(data) {
    // Use jQuery to remove and add classes
    $('main').addClass('pageTransitionEnter');

    var tl = gsap.timeline();

    tl.call(function() {
        scrollControl.stop();
    });

        

    if(document.querySelector('.split-words.animate-transition')) {
        tl.set(".split-words.animate-transition .single-word-inner", { 
            // yPercent: 110,
            // rotate: 6,
            scaleY:0,
        });
    }
    if(document.querySelector('.animate-fade-in')) {
        tl.set(".animate-fade-in", {
            y: "20px",
            opacity: 0,
        });
    }
  
    if(document.querySelector('.split-words.animate-transition')) {
        tl.to(".split-words.animate-transition .single-word-inner", { 
           //yPercent: 0,
           scaleY:1,
           rotate: 0.001,
           stagger: 0.03,
           duration: 0.4,
           ease: "elastic-css",
           delay: 0.6,
           //clearProps: "all"
        });
    }


    if(document.querySelector('.animate-fade-in')) {
        document.querySelectorAll('.animate-fade-in').forEach(function(element) {
            const delay = parseFloat($(element).attr("data-delay")) || 0;
            gsap.to(element, {
                y: "0px",
                opacity: 1,
                rotate: 0.001,
                //stagger: 0.05,
                duration: 0.6,
                delay: delay + 0.6,
                ease: "elastic-css",
                clearProps: "all"
            });
        });
    }

    tl.from(".animateBackground video, .animateBackground img", {
        scale: 1.8,
        duration:1.1,
        ease: "primary-ease",
    }, 0);

   

    tl.call(function() {
        scrollControl.start();
        ScrollTrigger.refresh();
    }, null, 0.8);
    
}