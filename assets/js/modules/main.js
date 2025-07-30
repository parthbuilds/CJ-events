import { lazyload } from './modules/lazyload.js?v=76';
import { dynamicPositions } from './modules/dynamicPositions.js?v=76';
import { dynamicSizes } from './modules/dynamicSizes.js?v=76';
import { onPageJs } from './modules/onPageJs.js?v=76';
import { initLoader,initLoaderShort , pageTransitionLeave, pageTransitionEnter } from './modules/pageTransitionModule.js?v=76';
import { initSmoothScroll, scrollControl } from './modules/scrollModule.js';

// Register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, Flip);

// Global variables
let transitionOffset = 1100;
let stackedIndex = 2;

// GSAP Custom Eases
// CustomEase.create("ease-in-css", ".25, 1, 0.1 ,1");
// CustomEase.create("elastic-css", ".2, 1.33, .25 ,1");

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function initCheckWindowHeight() {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh-in-px', `${vh}px`);
}

function initSplitText() {
    var splitWords = new SplitText(".split-words", {type: "words", wordsClass: "single-word"});
    $('.split-words .single-word').wrapInner('<div class="single-word-inner">');

    var splitChars = new SplitText(".split-chars", {type: "words, chars", wordsClass: "single-word", charsClass: "single-char"});
    $('.split-chars .single-word').wrapInner('<div class="single-word-inner">');
}

function initNav() {
    // Toggle Navigation
    $('.navToggle').click(function() {
        
        if ($('main').hasClass('nav-closed')) {
            $('main').removeClass('nav-closed').addClass('nav-open');
            scrollControl.stop();
            $('main').attr('data-lenis-prevent', ''); // add data-lenis-prevent
        } else {
            $('main').removeClass('nav-open').addClass('nav-closed').addClass('nav-closing');
            setTimeout(() => {
                $('main').removeClass('nav-closing');
            }, 600);
            scrollControl.start();
            $('main').removeAttr('data-lenis-prevent'); // remove data-lenis-prevent
        }
    });

    // Close Navigation
    $('.navClose').click(function() {
        $('main').removeClass('nav-open').addClass('nav-closed');
        scrollControl.start();
    });

    // Key ESC - Close Navigation
    $(document).keydown(function(e){
        if(e.keyCode == 27) {
            if ($('main').hasClass('nav-open')) {
                $('main').removeClass('nav-open').addClass('nav-closed');
                scrollControl.start();
            } 
        }
    });

    // Stacked Navigation Cards
    if ($('html').hasClass('no-touchevents')) {
        $('[data-nav-stacked-images-init]').each(function(){
             $('[data-stacked-image-id][data-link-status="active"]').attr('data-stacked-image-status', 'active');
             let dataNavIDPrev = $('[data-stacked-image-status="active"]').attr('data-stacked-image-id');
     
             gsap.set($('[data-stacked-image-status="not-active"]'), {
                 //yPercent: -100,
                 scale: 1,
                 opacity:0,
                 rotate: 0.001
             });
     
     
            $('[data-nav-id]').on('mouseenter click', function () {
             
                let dataNavID = $(this).attr('data-nav-id');
                $(this).parent().parent().attr('data-links-hover', 'true');
                if ($('[data-stacked-image-id="' + dataNavID + '"]').attr('data-stacked-image-status') != 'active') {
                    stackedIndex = stackedIndex + 1;
     
                    $('[data-stacked-image-id="' + dataNavID + '"]').attr('data-stacked-image-status', 'active').siblings().attr('data-stacked-image-status', 'not-active');
                    $('[data-stacked-image-id="' + dataNavID + '"]').css('z-index', stackedIndex);
     
                    gsap.fromTo($('[data-stacked-image-id="' + dataNavID + '"]'), {
                        //yPercent: 100,
                        scale: 1.2,
                        opacity:0,
                        rotate: 0.001,
                        transformOrigin: "center center"
                    }, {
                        //yPercent: 0,
                        scale: 1,
                        opacity:1,
                        rotate: 0.001,
                        duration: 1,
                        ease: "ease-in-css",
                    });
     
                    gsap.fromTo($('[data-stacked-image-id="' + dataNavIDPrev + '"]'), {
                        //scale: 1,
                        opacity: 1,
                        rotate: 0.001,
                        transformOrigin: "center center"
                    }, {
                         //scale: 1,
                         opacity: 0,
                         rotate: 0.001,
                         duration: 1,
                        ease: "ease-in-css"
                    });
                }
            });
     
            $('[data-nav-id]').on('mouseleave', function () {
                dataNavIDPrev = $(this).attr('data-nav-id');
                $(this).parent().attr('data-links-hover', 'false');
            });
        });
    }
}

function playVideoInview() {
    let allVideoDivs = gsap.utils.toArray('.playpauze');
    allVideoDivs.forEach((videoDiv, i) => {
        let videoElem = videoDiv.querySelector('video');
        ScrollTrigger.create({
            trigger: videoDiv,
            //markers: {startColor: "red", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
            start: '0% 100%',
            end: '100% 0%',
            onEnter: () => {
                videoElem && videoElem.play();
            },
            onEnterBack: () => {
                videoElem && videoElem.play()
            },
            onLeave: () => {
                videoElem && videoElem.pause()
            },
            onLeaveBack: () => {
                videoElem && videoElem.pause()
            }
        });
    });
}

function parallaxScroll() {
     ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
           if(document.querySelector('[data-parallax-strength]')) {
             $('[data-parallax-strength]').each(function () {
                
                let tl;
                let triggerElement = $(this);
                let targetElement = $(this).find('[data-parallax-target]');
                let triggerElementID = $(this).attr('data-parallax-trigger');
                let targetElementParallax = ($(this).attr('data-parallax-strength') * 20);
                let heightElementParallax = ($(this).attr('data-parallax-height') * 20);
                let startValue = $(this).attr('data-parallax-start') || "0% 100%";
                let endValue = $(this).attr('data-parallax-end') || "100% 0%";
                let yPercentValue = parseFloat($(this).attr('data-parallax-ypercent')) || -0.5;

                $(this).css("--parallax-strength", " " + targetElementParallax + "%");
                $(this).css("--parallax-height", " " + heightElementParallax + "%");
                
                // Check if [data-parallax-trigger="#header"] exists
                if ($(triggerElementID).length !== 0) {
                   triggerElement = $(document).find(triggerElementID);
                }
                
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: startValue,
                        end: endValue,
                        scrub: true,
                        //markers: true
                    }
                });
                tl.set(targetElement, {
                   rotate: 0.001,
                });
                tl.fromTo(targetElement, {
                   yPercent: (targetElementParallax * yPercentValue)
                }, {
                   yPercent: (targetElementParallax * 0.5),
                   ease: "none"
                });
             });
          }
          
        }
    });
}

function cursorMover() {
    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
            // Sticky Cursor with delay
            // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
            var cursorImage = $(".mouse-pos-list-image")
            var cursorBtn = $(".mouse-pos-list-btn");
            var cursorSpan = $(".mouse-pos-list-span");

            var posXImage = 0
            var posYImage = 0
            var posXBtn = 0
            var posYBtn = 0
            var posXSpan = 0
            var posYSpan = 0
            var mouseX = 0
            var mouseY = 0

            if (document.querySelector(".mouse-pos-list-image, .mouse-pos-list-btn, .mouse-post-list-span")) {
                gsap.to({}, 0.0083333333, {
                    repeat: -1,
                    onRepeat: function () {

                        if (document.querySelector(".mouse-pos-list-image")) {
                            posXImage += (mouseX - posXImage) / 8;
                            posYImage += (mouseY - posYImage) / 8;
                            gsap.set(cursorImage, {
                                css: {
                                    left: posXImage,
                                    top: posYImage
                                }
                            });
                        }
                        if (document.querySelector(".mouse-pos-list-btn")) {
                            posXBtn += (mouseX - posXBtn) / 7;
                            posYBtn += (mouseY - posYBtn) / 7;
                            gsap.set(cursorBtn, {
                                css: {
                                    left: posXBtn,
                                    top: posYBtn
                                }
                            });
                        }
                        if (document.querySelector(".mouse-pos-list-span")) {
                            posXSpan += (mouseX - posXSpan) / 6;
                            posYSpan += (mouseY - posYSpan) / 6;
                            gsap.set(cursorSpan, {
                                css: {
                                    left: posXSpan,
                                    top: posYSpan
                                }
                            });
                        }
                    }
                });
            }

            $(document).on("mousemove", function (e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Animated Section Assortiment Single Floating Image
            // Source: http://jsfiddle.net/639Jj/1/ 

            $('.mouse-pos-list-image-wrap a').on('mouseenter', function () {
                $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
            });
            $('.mouse-pos-list-image-wrap a').on('mouseleave', function () {
                $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
            });
            $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseenter', function () {
                $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
            });
            $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseleave', function () {
                $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
            });
            $('main').on('mousedown', function () {
                $(".mouse-pos-list-btn, .mouse-pos-list-span").addClass('pressed');
            });
            $('main').on('mouseup', function () {
                $(".mouse-pos-list-btn, .mouse-pos-list-span").removeClass('pressed');
            });

            $('.mouse-pos-list-image-wrap .visible').on('mouseenter', function () {
                const $elements = $(".work-items.mouse-pos-list-image-wrap .visible");
                const index = $elements.index($(this));
                const $currentImage = $(".mouse-pos-list-image-inner.visible").eq(index);
                const $prevImage = $(".mouse-pos-list-image-inner.visible").not($currentImage);
                
                // Create GSAP timeline for smoother animation
                const timeline = gsap.timeline({
                    defaults: { duration: 1, ease: "ease-in-css" },
                });
            
                // Animate outgoing (previous) image
                timeline
                    .to($prevImage, {
                        scale: 1,
                        opacity: 0,
                        zIndex: 0,
                    })
                    // Animate incoming (current) image
                    .fromTo(
                        $currentImage,
                        {
                            scale: 1.4,
                            opacity: 0,
                            zIndex: 1, // Bring to the front immediately
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            zIndex: 1, // Ensure it's visible on top
                        },
                        "<" // Start at the same time as the previous animation
                    );
            
                // Bounce animation for the active image
                $(".mouse-pos-list-image-bounce")
                    .addClass("active")
                    .delay(400)
                    .queue(function (next) {
                        $(this).removeClass("active");
                        next();
                    });
            
                // Play the video of the hovered item (if available)
                const $video = $currentImage.find("video");
                if ($video.length) {
                    $video.get(0).play();
                }
            });
            

            $('.work-items.mouse-pos-list-image-wrap .visible').on('mouseleave', function () {
                var $elements = $(".work-items.mouse-pos-list-image-wrap .visible");
                var index = $elements.index($(this));
                var $currentImage = $(".mouse-pos-list-image-inner.visible").eq(index);

                // Pause the video when the mouse leaves the item
                var $video = $currentImage.find('video');
                if ($video.length) {
                    
                    $video.get(0).pause();
                }
            });

            $('.archive-work-grid li').on('mouseenter', function () {
                $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function (next) {
                    $(this).removeClass("hover");
                    next();
                });
            });
        }
    });
}

function textAnimations() {
    function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
        });
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 80%",
            //markers:true,
            onEnter: () => {
                timeline.play();
            }
        });
    }

    function createScrollTrigger2(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "1050px center",
            onLeaveBack: () => {
                //timeline.progress(0);
                timeline.reverse();
            }
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "1500px center",
            markers:false,
            onEnter: () => {
                timeline.play();
            }
        });
    }

    $(".animLetter").each(function (index) { 
        const delay = parseFloat($(this).attr("data-delay")) || 0; // Default to 0 if not set
        let tl = gsap.timeline({ paused: true });

        tl.set($(this).find(".single-word-inner"), { perspective: 600 });
        tl.from($(this).find(".single-char"), {scaleY: 0, duration: 0.6, ease: "elastic-css", 
            stagger: {
                amount: 0.25 // Add the delay to the stagger amount
            }
        }, `+=${delay}`);
        createScrollTrigger($(this), tl);
    });

    $(".animLetter2").each(function (index) { 
        const delay = parseFloat($(this).attr("data-delay")) || 0; // Default to 0 if not set
        let tl = gsap.timeline({ paused: true });

        tl.set($(this).find(".single-word-inner"), { perspective: 600 });
        tl.from($(this).find(".single-char"), {rotateX: 90, duration: 0.6, ease: "power1.out", 
            stagger: {
                amount: 0.25 // Add the delay to the stagger amount
            }
        }, `+=${delay}`);
        createScrollTrigger2($(this), tl);
    });

    $(".animPath").each(function (index) { 
        const delay = parseFloat($(this).attr("data-delay")) || 0; // Default to 0 if not set
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find("path"), {
            opacity: 0, 
            duration: 0.6,
            scale:0, 
            ease: "power1.out", 
            stagger: {
                amount: 0.25 // Add the delay to the stagger amount
            }
        }, `+=${delay}`);
        createScrollTrigger($(this), tl);
    });

    let allSectionLayers = gsap.utils.toArray('.sectionLeave');
    allSectionLayers.forEach((leaveDiv, i) => {
        let leaveElem = leaveDiv.querySelector('.leave-layer')
        gsap.to(leaveElem, { 
            opacity: 1,
            ease: "none",
            delay: 0,
            scrollTrigger: {
                trigger: leaveDiv,
                markers: false,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true,
            }
        });
    });

    let allSectionLayersLeave = gsap.utils.toArray('.sectionFrom');
    allSectionLayersLeave.forEach((fromDiv, i) => {
        let fromElem = fromDiv.querySelector('picture')
        gsap.to(fromElem, { 
            scale: 2,
            //yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: fromDiv,
                markers: false,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });
    });
    
    gsap.to('.curtainXTop', { 
        yPercent: -100,
        //scaleY:0,
        ease: "none",
        scrollTrigger: {
            trigger: '.curtainX',
            markers: false,
            start: 'top top',
            endTrigger: '.curtainXEnd',
            end: 'top 50%',
            scrub: true,
        }
    });
    
    gsap.to('.curtainXBottom', { 
        yPercent: 100,
        //scaleY:0,
        ease: "none",
        scrollTrigger: {
            trigger: '.curtainX',
            markers: false,
            start: 'top top',
            endTrigger: '.curtainXEnd',
            end: 'top 50%',
            scrub: true,
        }
    });

    gsap.to('.curtainHeight', { 
        yPercent: -100,
        height: '100vh',
        //scaleY:0,
        ease: "none",
        scrollTrigger: {
            trigger: '.curtainX',
            markers: false,
            start: 'top top',
            end: 'center 30%',
            scrub: true,
        }
    });

   
    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {  
            gsap.utils.toArray('.revealInside').forEach((element) => {
                gsap.from(element, { 
                    opacity: 0,
                    //rotate:6,
                    transformOrigin: 'center',
                    scale: 0.9,
                    duration:0.6,
                    ease: "elastic-css",
                    scrollTrigger: {
                        trigger: element,
                        //markers: true,
                        start: 'center center',
                        end: 'center center',
                        toggleActions: "play none none reverse",
                    }
                });
            });            
            gsap.utils.toArray('.revealInside3').forEach((element) => {
                gsap.from(element, { 
                    opacity: 0,
                    //rotate:6,
                    transformOrigin: 'center',
                    scale: 0.9,
                    duration:0.6,
                    scrollTrigger: {
                        trigger: element,
                        //markers: true,
                        start: 'top 70%',
                        end: 'top center',
                        toggleActions: "play none none reverse",
                    }
                });
            });           
            
            if(document.querySelector('.split-chars.animate-transition-3')) {
                gsap.set(".split-chars.animate-transition-3 .single-word-inner .single-char", { 
                    scaleY:0,
                    transformOrigin: "top center"
                });
            }
            if(document.querySelector('.split-chars.animate-transition-3')) {
                gsap.to(".split-chars.animate-transition-3 .single-word-inner .single-char", { 
                    scaleY:1,
                    rotate: 0.001,
                    stagger: 0.01,
                    ease: "elastic-css",
                    delay: 0,
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: '.animate-transition-3',
                        //markers: true,
                        start: 'center center', 
                        end: 'center center',
                        toggleActions: 'play none none reverse',
                        //scrub: 1,
                    }
                });
            }

        }
    });
    
        gsap.from('.revealInside2 .popup-link-inner', { 
            opacity: 0,
            stagger: 0.05,
            transformOrigin: 'center',
            scale: 0.1,
            duration:0.8,
            ease: "elastic-css",
            scrollTrigger: {
                trigger: '.revealInside2',
                //markers: true,
                start: 'bottom -30%',
                scrub: false,
                //end: 'center 35%',
                toggleActions: "play none none reverse",
            }
        });

    ScrollTrigger.matchMedia({
        "(min-width: 1200px)": function() {  
            gsap.utils.toArray('.innerAnimateContainer').forEach((container) => {
                const innerAnimate = container.querySelector('.innerAnimate');
                if (innerAnimate) {
                    gsap.fromTo(innerAnimate, 
                        { y: 0 }, 
                        { 
                            y: () => -(innerAnimate.offsetHeight - window.innerHeight),
                            ease: "none",
                            scrollTrigger: {
                                trigger: container,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: true,
                                //markers: true // Remove this line in production
                            }
                        }
                    );
                }
                const innerAnimate2 = container.querySelector('.innerAnimate2'); 
                if (innerAnimate2) {
                    gsap.fromTo(innerAnimate2, 
                        { 
                           
                            y: () => -(innerAnimate2.offsetHeight - window.innerHeight),
                        }, 
                        { 
                            y: 0,
                            ease: "none",
                            scrollTrigger: {
                                trigger: container,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: true,
                                //markers: true // Remove this line in production
                            }
                        }
                    );
                }
            });
        }
    });
}

function popups() {
    // Team Cards
    $('[data-popup-card-id]').click(function() {
        var popupCardID = $(this).data('popup-card-id');
        // If card == open, close it. Else: main action
        if ($('[data-popup-lightbox-id="' + popupCardID + '"]').attr('data-popup-lightbox-status') == 'active') {
            $('[data-popup-lightbox-id="' + popupCardID + '"]').attr('data-popup-lightbox-status', 'not-active');
        } else {
            $('[data-popup-lightbox-id="' + popupCardID + '"]').attr('data-popup-lightbox-status', 'active').siblings().attr('data-popup-lightbox-status', 'transition');
            setTimeout(function() {
                $('[data-popup-lightbox-id="' + popupCardID + '"]').siblings().attr('data-popup-lightbox-status', 'not-active');
            }, 600);
        }
    });

    

    // Close popup if clicked outside or close button
    
    $('[data-popup-lightbox-toggle="close"]').click(function() {
        $('[data-popup-lightbox-id]').attr('data-popup-lightbox-status', 'not-active');
    });
    
    $(document).click(function(event) {
        var target = $(event.target);
        var activePopup = $('[data-popup-lightbox-status="active"]');
        if (activePopup.length && !target.closest('.single-popup-lightbox').length && !target.closest('[data-popup-card-id]').length) {
            activePopup.attr('data-popup-lightbox-status', 'not-active');
        }
    });
}

function barbaNavUpdate(data) {
    const updateItems = $(data.next.html).find('[data-barba-update]');
    $('[data-barba-update]').each(function(index) {
        const updateItem = $(updateItems[index]).get(0);
        if (updateItem) {
            const newClasses = updateItem.classList.value;
            setTimeout(() => {
                $(this).attr('class', newClasses);
            }, 50 );
        }
    });
}

function initScripts() {
    initSplitText();
    initCheckWindowHeight();
    initNav();
    playVideoInview();
    dynamicPositions();
    dynamicSizes();
    parallaxScroll();
    cursorMover();
    textAnimations();
    popups();
    lazyload();
}

function initPageBarba() {
    //history.scrollRestoration = "manual";

    // Scroll to top on enter + Refresh scrolltrigger
    barba.hooks.afterEnter(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
    });
    
    // Init on page specific transition with data attribute data-function="filenameInModulesFolder"
    barba.hooks.beforeEnter((data) => {
        onPageJs(data);
    });
    
    // Functions Before: Like to remove classes from the body
    function initResetDataBefore() {
      
    }

    barba.init({
        sync: true,
        debug: false,
        timeout: 7000,
        transitions: [{
            name: 'default',
            once(data) {
                initSmoothScroll(data.next.container);
                initScripts();
                initLoader();
                //pageTransitionEnter();
                //initLoaderShort();
            },

            async leave(data) {
                // setTimeout(() => {
                //     console.log('Next namespace:', data.next.namespace);
                //     if (data.next.namespace === 'light-page') {
                //         $('main').addClass('pageTransitiontoLight');
                //     }
                // },3000 );

                pageTransitionLeave(data.current);
                initResetDataBefore();
                await delay(transitionOffset);
                //barbaNavUpdate(data);
                //initResetDataAfter();
                
                scrollControl.destroy();
                // Important!!!!! below ffs
                data.current.container.remove();
            },
            async enter(data) {
                pageTransitionEnter(data.next.container);
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t => t.kill());
                initSmoothScroll(data.next.container);
                initScripts();
            },
        },{
            name: 'gallery-gallery',
            from:{
                namespace:['gallery-single']
            },
            to:{
                namespace:['gallery-single']
            },
            async leave(data) {

                initResetDataBefore();
                // Mobile
                const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
                if (isTouchDevice) {
                    $('html, body').animate({
                        scrollTop: $(document).height() - $(window).height()
                    }, 600); // 1000 is the duration in milliseconds
                } else {
                    scrollControl.down();
                }
                
                $('.cta-container').addClass('is-removed');

                gsap.to('.clip-circle', {
                    clipPath:"circle(100% at 50% 50%)",
                    duration: 1,
                    delay:0.2,
                    ease: 'primary-ease',
                });
                gsap.to('.cta-overlay', {
                    opacity:0,
                    duration: 1
                });
                gsap.to('.cta-container a img', {
                    scale:1,
                    opacity:1,
                    duration: 1,
                    ease: "elastic-css",
                });
                gsap.to('.progress-bar', {
                    width: "0%",
                    duration: 1,
                    ease: "expo.inOut",
                    delay:0
                });
                

                await delay(transitionOffset);
                //barbaNavUpdate(data);
                scrollControl.destroy();
                // Important!!!!! below ffs
                data.current.container.remove();
             },
            async enter(data) {

                gsap.from('.circ-holder', {
                    opacity: "0",
                    duration: 0.6,
                    delay:0.5
                });
                gsap.from('.progress-outer', {
                    scaleX: "0",
                    duration: 1,
                    delay:0.5,
                    //clearProps: "transform"
                });

                gsap.set('.revealEnter', {
                    display: 'none',
                });
             
            },
            async beforeEnter(data) {
                ScrollTrigger.getAll().forEach(t => t.kill());
                initSmoothScroll(data.next.container);
                initScripts();
            },
        }]
    });
}
initPageBarba();

CustomEase.create("animation-smooth", "0.62, 0.05, 0.01, 0.99");
class SliderSync {
    
    constructor(container) {
        this.$container = $(container);
        this.$sliderMain = this.$container.find('.sliderMain');
        this.$sliderNavs = this.$container.find('.sliderNav');
        this.$indicators = this.$container.find('.indicator');
        this.$progress = this.$container.find('.sliderProgress');
        this.$progressCounter = this.$progress.find('.progress-counter');
        this.initSlider();
        this.initNavs();
        this.initButtons();
        this.setInitialSelected();
        this.initMousewheel();
        this.initAutoSlide();
        $(window).on('resize', () => {
            this.updateIndicators();
            this.updateMaxHeight();
            this.updateMaxWidth();
        });
        this.updateMaxHeight();
        this.updateMaxWidth();

        //this.beepSound = new Audio('../aud/beep.mp3');

    }

    destroy() {
        // Destroy Flickity
        if (this.$sliderMain.data('flickity')) {
            this.$sliderMain.flickity('destroy');
        }

        // Remove all event listeners bound to the container
        $(window).off('resize');
        this.$sliderMain.off('.flickity');
        this.$sliderNavs.off('click');
        this.$container.find('.sliderNavPrev, .sliderNavNext').off('click');

        // Clean up DOM references
        this.$container = null;
        this.$sliderMain = null;
        this.$sliderNavs = null;
        this.$indicators = null;
        this.$progress = null;
        this.$progressCounter = null;
    }
    

    initSlider() {
        const autoPlayValue = this.$container.data('slider-autoplay') || false; 
        const fadeValue = this.$container.data('slider-fade') || false; 
        const watchCSSValue = this.$container.data('slider-watch') || false; 
        const speedValue = this.$container.data('slider-speed') || 0.025; 
        const freeScroll = this.$container.data('slider-freescroll') || false; 
        const cellAlign = this.$container.data('slider-cellalign') || 'left'; 
        const frictionValue = this.$container.data('slider-friction') || 0.28; 
        const transformerEnabled = this.$container.data('slider-transformer') || false;
        const sliderWrap = this.$container.data('slider-wrap') !== false; // Correct logic to handle false value
        const setGallerySize = this.$container.data('slider-gallerysize') !== false;
        const initialIndex = this.$container.data('slider-initialindex') || 0;

        this.$sliderMain.flickity({
            prevNextButtons: false,
            pageDots: false,
            setGallerySize: setGallerySize,
            wrapAround: sliderWrap,
            adaptiveHeight: false,
            fade: fadeValue,
            initialIndex: initialIndex,
            groupCells: 1,
            // setGallerySize: false,
            freeScroll: freeScroll,
            percentPosition: true,
            draggable: true,
            autoPlay: autoPlayValue,
            watchCSS: watchCSSValue,
            cellAlign: cellAlign,
            pauseAutoPlayOnHover: false,
            selectedAttraction: speedValue,
            friction: frictionValue,
            on: {
                ready: () => {
                    //ScrollTrigger.refresh();
                    //ScrollTrigger.refresh();
                    setTimeout(() => {
                        this.updateProgress();
                        this.updateMaxHeight();
                        this.updateMaxWidth();
                    }, 1200);
                },
                change: (index) => {
                    this.updateProgress(index);
                    if (document.querySelector('.slider-wheel')) {
                        this.updateRotateValue(index);
                    }
                }
            }
        });
        this.JSslider2 = this.$sliderMain.data('flickity');
        this.previousIndex = this.JSslider2.selectedIndex;

        // Ensure cells are initialized before accessing them
        if (this.JSslider2 && this.JSslider2.cells) {
            // Drag issue + Cursor
            this.$sliderMain.on('dragStart.flickity', (event, pointer) => {
                this.$sliderMain.find('.carousel-cell').css('pointer-events', 'none').css('cursor', 'grabbing');
                $('.cb-cursor').addClass('-dragging');
            });

            this.$sliderMain.on('dragEnd.flickity', () => {
                this.$sliderMain.find('.carousel-cell').css('pointer-events', 'all').css('cursor', 'inherit');
                setTimeout(() => {
                    $('.cb-cursor').removeClass('-dragging');
                }, 300);
            });

            // Initialize FlickityTransformer after Flickity is fully ready
            var flickityScale = 0.5;
            var flickityTranslateY = 0.5;
        
            if ($(window).width() < 991) {
              flickityScale = 0.8;
              flickityTranslateY = 0.1;
            }

            if (transformerEnabled) {
                new FlickityTransformer(this.JSslider2, [
                    {
                        name: "scale",
                        stops: [
                            [-window.innerWidth * 0.7, flickityScale],
                            [0, 1],
                            [window.innerWidth * 0.7, flickityScale]
                        ]
                    },
                    {
                        name: "translateY",
                        stops: [
                            [-window.innerWidth * 0.7, window.innerHeight * flickityTranslateY],
                            [0, 0],
                            [window.innerWidth * 0.7, window.innerHeight * flickityTranslateY]
                        ]
                    },
                    
                    //   {
                    //     name: "rotate",
                    //     stops: [
                    //       [-300, -30],
                    //       [0, 0],
                    //       [300, 30]
                    //     ]
                    //   },
                        //   {
                        //     name: "perspective",
                        //     stops: [
                        //       [0, 600],
                        //       [1, 600]
                        //     ]
                        //   },
                    //   {
                    //     name: "rotateY",
                    //     stops: [
                    //       [-300, 45],
                    //       [0, 0],
                    //       [300, -45]
                    //     ]
                    //   }
                ]);
            }
        }
    }

    updateRotateValue(currentIndex) {
        const sliderWheel = document.querySelector('.slider-wheel');
        let rotateValue = parseInt(getComputedStyle(sliderWheel).getPropertyValue('--rotate-value'));
        const totalSlides = this.JSslider2.cells.length;
    
        if (currentIndex === (this.previousIndex + 1) % totalSlides) { // Forward movement (normal or wrap-around)
            rotateValue += 180;
        } else { // Backward movement (normal or wrap-around)
            rotateValue -= 180;
        }
    
        sliderWheel.style.setProperty('--rotate-value', `${rotateValue}deg`);
        this.previousIndex = currentIndex; // Update previous index for future transitions
    }
    

    updateMaxHeight() {
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

        updateHeightForClass('setHeight1', '--use-height-1');
        updateHeightForClass('setHeightCard', '--use-height-card');
        updateHeightForClass('setHeight2', '--use-height-2');
        updateHeightForClass('setHeight3', '--use-height-3');
        updateHeightForClass('setHeightSlide', '--use-height-slide');
        updateHeightForClass('setNum1', '--use-num-1');

        updateHeightForClass('setHeightCircleSlider', '--use-height-circle-slider');

        updateHeightForClass('setHeightProgress', '--use-height-progress');

        // Update the slider after heights are applied
        const $sliderMain = $('.sliderMain'); // Adjust the selector to match your slider
        if ($sliderMain.length) {
            const flkty = $sliderMain.data('flickity');
            if (flkty) {
                flkty.resize();
                //scrolltrigger update
                //ScrollTrigger.refresh();
            }
        }
    }

    updateMaxWidth() {
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
        updateWidthForClass('setWidthCard', '--use-width-card');
        updateWidthForClass('setNumW1', '--use-width-1');
    }

    initNavs() {
        this.$sliderNavs.each((navIndex, nav) => {
            const $sliderNav = $(nav);
            const $JSsliderNavItems = $sliderNav.find('li');
            const $indicator = $sliderNav.siblings('.indicator');

            this.$sliderMain.on('select.flickity', () => {
                const $previousSelectedItem = $JSsliderNavItems.filter('.is-selected');
                const $selectedItem = $JSsliderNavItems.eq(this.JSslider2.selectedIndex);

                // Remove previous active class
                $JSsliderNavItems.removeClass('is-removed'); // Ensure no li has is-removed class
                $previousSelectedItem.removeClass('is-selected').addClass('is-removed');

                // Add new active class
                $selectedItem.addClass('is-selected').removeClass('is-removed');

                // Update the .sliderNav element with the active slide number
                $sliderNav.attr('data-active-slide', this.JSslider2.selectedIndex + 1);

                // Add class indicating direction
                const totalSlides = this.JSslider2.cells.length;
                if (
                    this.JSslider2.selectedIndex === (this.previousIndex + 1) % totalSlides // Moving forward (normal or wrap-around)
                ) {
                    $sliderNav.removeClass('slide-to-prev').addClass('slide-to-next');
                } else {
                    $sliderNav.removeClass('slide-to-next').addClass('slide-to-prev');
                }


                this.updateIndicator($sliderNav, $indicator);
            });

            this.$sliderMain.on('settle.flickity', () => {
                $JSsliderNavItems.removeClass('is-removed');
            });

            $sliderNav.on('click', 'li', (event) => {
                const index = $(event.currentTarget).index();
                this.$sliderMain.flickity('select', index);
                this.$sliderMain.flickity('stopPlayer');
            });
        });
    }

    initButtons() {
        this.$container.find('.sliderNavPrev').on('click', () => {
            this.$sliderMain.flickity('previous');
            this.$sliderMain.flickity('stopPlayer');
        });

        this.$container.find('.sliderNavNext').on('click', () => {
            this.$sliderMain.flickity('next');
            this.$sliderMain.flickity('stopPlayer');
        });

        this.$sliderMain.on('change.flickity', () => {
            this.$container.addClass('flickity-is-transitioning');
            setTimeout(() => {
                this.$container.removeClass('flickity-is-transitioning');
            }, 700);
        });
    }

    setInitialSelected() {
        setTimeout(() => {
            this.$sliderNavs.each((_, nav) => {
                $(nav).find('li:first-child').addClass('is-selected');
            });
            this.updateIndicators();
        }, 200);
    }

    updateIndicator($sliderNav, $indicator) {
        const $selectedItem = $sliderNav.find('li.is-selected');
        if ($selectedItem.length) {
            const left = $selectedItem.position().left;
            const width = $selectedItem.outerWidth();
            $indicator.css({
                left: `${left}px`,
                width: `${width}px`
            });
        }
    }

    updateIndicators() {
        this.$sliderNavs.each((_, nav) => {
            const $sliderNav = $(nav);
            const $indicator = $sliderNav.siblings('.indicator');
            this.updateIndicator($sliderNav, $indicator);
        });
    }

    updateProgress(index = 0) {
        const totalSlides = this.$sliderMain.find('.carousel-cell').length;
        const progress = ((index + 1) / totalSlides) * 100;
        gsap.to(this.$progress, {
            '--progress': progress,
            duration: 0.5,
            ease: 'animation-smooth'
        });
    }
    initMousewheel() {
        const mousewheelEnabled = this.$container.data('slider-mousewheel') || false;
        if (mousewheelEnabled) {
            let lastScrollTime = 0;
            const throttleTime = 200; // Throttle time in milliseconds
    
            this.$sliderMain.on('wheel', (event) => {
                event.preventDefault();
                const now = Date.now();
    
                if (now - lastScrollTime < throttleTime) return;
                lastScrollTime = now;
    
                const deltaY = event.originalEvent.deltaY;
    
                if (deltaY < -10) { // Adjust threshold as needed
                    this.$sliderMain.flickity('previous');
                } else if (deltaY > 10) { // Adjust threshold as needed
                    this.$sliderMain.flickity('next');
                }
    
               // this.$sliderMain.flickity('stopPlayer');
            });
        }
    }
    

    initAutoSlide() {
        const autoSlideEnabled = this.$container.data('slider-autoslide') || false;
        if (autoSlideEnabled) {
            const mainTicker = this.$sliderMain.data('flickity');
            let requestId;
            mainTicker.x = 0;
            function play() {
                mainTicker.x -= 1.5;
                mainTicker.settle(mainTicker.x);
                requestId = window.requestAnimationFrame(play);
            }
            function pause() {
                if (requestId) {
                    window.cancelAnimationFrame(requestId);
                    requestId = undefined;
                }
            }
            ScrollTrigger.create({
                trigger: this.$sliderMain[0],
                start: 'top bottom',
                end: 'bottom top',
                markers:false,
                onEnter: () => play(),
                onEnterBack: () => play(),
                onLeave: () => pause(),
                onLeaveBack: () => pause(),
            });
            this.$sliderMain.on('mouseenter', () => pause());
            this.$sliderMain.on('mouseleave', () => play());
        }
    }
}

export default function slider() {
    $('[slider]').each((_, container) => {
        new SliderSync(container);
        setTimeout(() => {
        },600);
    });
}

