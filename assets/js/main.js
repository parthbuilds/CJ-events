import { lazyload } from './modules/lazyload.js';
import { dynamicPositions } from './modules/dynamicPositions.js';
import { dynamicSizes } from './modules/dynamicSizes.js';
import { onPageJs } from './modules/onPageJs.js';
import { initLoader,initLoaderShort , pageTransitionLeave, pageTransitionEnter } from './modules/pageTransitionModule.js';
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


(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.lity = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== "undefined" ? window : this, function(window, $) {
    'use strict';

    var document = window.document;

    var _win = $(window);
    var _deferred = $.Deferred;
    var _html = $('html');
    var _instances = [];

    var _attrAriaHidden = 'aria-hidden';
    var _dataAriaHidden = 'lity-' + _attrAriaHidden;

    var _focusableElementsSelector = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';

    var _defaultOptions = {
        esc: true,
        handler: null,
        handlers: {
            image: imageHandler,
            inline: inlineHandler,
            iframe: iframeHandler
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    };

    var _imageRegexp = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;

    var _transitionEndEvent = (function() {
        var el = document.createElement('div');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    })();

    function transitionEnd(element) {
        var deferred = _deferred();

        if (!_transitionEndEvent || !element.length) {
            deferred.resolve();
        } else {
            element.one(_transitionEndEvent, deferred.resolve);
            setTimeout(deferred.resolve, 500);
        }

        return deferred.promise();
    }

    function settings(currSettings, key, value) {
        if (arguments.length === 1) {
            return $.extend({}, currSettings);
        }

        if (typeof key === 'string') {
            if (typeof value === 'undefined') {
                return typeof currSettings[key] === 'undefined'
                    ? null
                    : currSettings[key];
            }

            currSettings[key] = value;
        } else {
            $.extend(currSettings, key);
        }

        return this;
    }

    function parseQueryParams(params) {
        var pos = params.indexOf('?');

        if (pos > -1) {
            params = params.substr(pos + 1);
        }

        var pairs = decodeURI(params.split('#')[0]).split('&');
        var obj = {}, p;

        for (var i = 0, n = pairs.length; i < n; i++) {
            if (!pairs[i]) {
                continue;
            }

            p = pairs[i].split('=');
            obj[p[0]] = p[1];
        }

        return obj;
    }

    function appendQueryParams(url, params) {
        if (!params) {
            return url;
        }

        if ('string' === $.type(params)) {
            params = parseQueryParams(params);
        }

        if (url.indexOf('?') > -1) {
            var split = url.split('?');
            url = split.shift();

            params = $.extend(
                {},
                parseQueryParams(split[0]),
                params
            )
        }

        return url + '?' + $.param(params);
    }

    function transferHash(originalUrl, newUrl) {
        var pos = originalUrl.indexOf('#');

        if (-1 === pos) {
            return newUrl;
        }

        if (pos > 0) {
            originalUrl = originalUrl.substr(pos);
        }

        return newUrl + originalUrl;
    }

    function iframe(iframeUrl, instance, queryParams, hashUrl) {
        instance && instance.element().addClass('lity-iframe');

        if (queryParams) {
            iframeUrl = appendQueryParams(iframeUrl, queryParams);
        }

        if (hashUrl) {
            iframeUrl = transferHash(hashUrl, iframeUrl);
        }

        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' + iframeUrl + '"/></div>';
    }

    function error(msg) {
        return $('<span class="lity-error"></span>').append(msg);
    }

    function imageHandler(target, instance) {
        var desc = (instance.opener() && instance.opener().data('lity-desc')) || 'Image with no description';
        var img = $('<img src="' + target + '" alt="' + desc + '"/>');
        var deferred = _deferred();
        var failed = function() {
            deferred.reject(error('Failed loading image'));
        };

        img
            .on('load', function() {
                if (this.naturalWidth === 0) {
                    return failed();
                }

                deferred.resolve(img);
            })
            .on('error', failed)
        ;

        return deferred.promise();
    }

    imageHandler.test = function(target) {
        return _imageRegexp.test(target);
    };

    function inlineHandler(target, instance) {
        var el, placeholder, hasHideClass;

        try {
            el = $(target);
        } catch (e) {
            return false;
        }

        if (!el.length) {
            return false;
        }

        placeholder = $('<i style="display:none !important"></i>');
        hasHideClass = el.hasClass('lity-hide');

        instance
            .element()
            .one('lity:remove', function() {
                placeholder
                    .before(el)
                    .remove()
                ;

                if (hasHideClass && !el.closest('.lity-content').length) {
                    el.addClass('lity-hide');
                }
            })
        ;

        return el
            .removeClass('lity-hide')
            .after(placeholder)
        ;
    }

    function iframeHandler(target, instance) {
        return iframe(target, instance);
    }

    function winHeight() {
        return document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : Math.round(_win.height());
    }

    function keydown(e) {
        var current = currentInstance();

        if (!current) {
            return;
        }

        // ESC key
        if (e.keyCode === 27 && !!current.options('esc')) {
            current.close();
        }

        // TAB key
        if (e.keyCode === 9) {
            handleTabKey(e, current);
        }
    }

    function handleTabKey(e, instance) {
        var focusableElements = instance.element().find(_focusableElementsSelector);
        var focusedIndex = focusableElements.index(document.activeElement);

        if (e.shiftKey && focusedIndex <= 0) {
            focusableElements.get(focusableElements.length - 1).focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
            focusableElements.get(0).focus();
            e.preventDefault();
        }
    }

    function resize() {
        $.each(_instances, function(i, instance) {
            instance.resize();
        });
    }

    function registerInstance(instanceToRegister) {
        if (1 === _instances.unshift(instanceToRegister)) {
            _html.addClass('lity-active');

            _win
                .on({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        $('body > *').not(instanceToRegister.element())
            .addClass('lity-hidden')
            .each(function() {
                var el = $(this);

                if (undefined !== el.data(_dataAriaHidden)) {
                    return;
                }

                el.data(_dataAriaHidden, el.attr(_attrAriaHidden) || null);
            })
            .attr(_attrAriaHidden, 'true')
        ;
    }

    function removeInstance(instanceToRemove) {
        var show;

        instanceToRemove
            .element()
            .attr(_attrAriaHidden, 'true')
        ;

        if (1 === _instances.length) {
            _html.removeClass('lity-active');

            _win
                .off({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        _instances = $.grep(_instances, function(instance) {
            return instanceToRemove !== instance;
        });

        if (!!_instances.length) {
            show = _instances[0].element();
        } else {
            show = $('.lity-hidden');
        }

        show
            .removeClass('lity-hidden')
            .each(function() {
                var el = $(this), oldAttr = el.data(_dataAriaHidden);

                if (!oldAttr) {
                    el.removeAttr(_attrAriaHidden);
                } else {
                    el.attr(_attrAriaHidden, oldAttr);
                }

                el.removeData(_dataAriaHidden);
            })
        ;
    }

    function currentInstance() {
        if (0 === _instances.length) {
            return null;
        }

        return _instances[0];
    }

    function factory(target, instance, handlers, preferredHandler) {
        var handler = 'inline', content;

        var currentHandlers = $.extend({}, handlers);

        if (preferredHandler && currentHandlers[preferredHandler]) {
            content = currentHandlers[preferredHandler](target, instance);
            handler = preferredHandler;
        } else {
            // Run inline and iframe handlers after all other handlers
            $.each(['inline', 'iframe'], function(i, name) {
                delete currentHandlers[name];

                currentHandlers[name] = handlers[name];
            });

            $.each(currentHandlers, function(name, currentHandler) {
                // Handler might be "removed" by setting callback to null
                if (!currentHandler) {
                    return true;
                }

                if (
                    currentHandler.test &&
                    !currentHandler.test(target, instance)
                ) {
                    return true;
                }

                content = currentHandler(target, instance);

                if (false !== content) {
                    handler = name;
                    return false;
                }
            });
        }

        return {handler: handler, content: content || ''};
    }

    function Lity(target, options, opener, activeElement) {
        var self = this;
        var result;
        var isReady = false;
        var isClosed = false;
        var element;
        var content;

        options = $.extend(
            {},
            _defaultOptions,
            options
        );

        element = $(options.template);

        // -- API --

        self.element = function() {
            return element;
        };

        self.opener = function() {
            return opener;
        };

        self.content = function() {
            return content;
        };

        self.options  = $.proxy(settings, self, options);
        self.handlers = $.proxy(settings, self, options.handlers);

        self.resize = function() {
            if (!isReady || isClosed) {
                return;
            }

            content
                .css('max-height', winHeight() + 'px')
                .trigger('lity:resize', [self])
            ;
        };

        self.close = function() {
            if (!isReady || isClosed) {
                return;
            }

            isClosed = true;

            removeInstance(self);

            var deferred = _deferred();

            // We return focus only if the current focus is inside this instance
            if (
                activeElement &&
                (
                    document.activeElement === element[0] ||
                    $.contains(element[0], document.activeElement)
                )
            ) {
                try {
                    activeElement.focus();
                } catch (e) {
                    // Ignore exceptions, eg. for SVG elements which can't be
                    // focused in IE11
                }
            }

            content.trigger('lity:close', [self]);

            element
                .removeClass('lity-opened')
                .addClass('lity-closed')
            ;

            transitionEnd(content.add(element))
                .always(function() {
                    content.trigger('lity:remove', [self]);
                    element.remove();
                    element = undefined;
                    deferred.resolve();
                })
            ;

            return deferred.promise();
        };

        // -- Initialization --

        result = factory(target, self, options.handlers, options.handler);

        element
            .attr(_attrAriaHidden, 'false')
            .addClass('lity-loading lity-opened lity-' + result.handler)
            .appendTo('body')
            .focus()
            .on('click', '[data-lity-close]', function(e) {
                if ($(e.target).is('[data-lity-close]')) {
                    self.close();
                }
            })
            .trigger('lity:open', [self])
        ;

        registerInstance(self);

        $.when(result.content)
            .always(ready)
        ;

        function ready(result) {
            content = $(result)
                .css('max-height', winHeight() + 'px')
            ;

            element
                .find('.lity-loader')
                .each(function() {
                    var loader = $(this);

                    transitionEnd(loader)
                        .always(function() {
                            loader.remove();
                        })
                    ;
                })
            ;

            element
                .removeClass('lity-loading')
                .find('.lity-content')
                .empty()
                .append(content)
            ;

            isReady = true;

            content
                .trigger('lity:ready', [self])
            ;
        }
    }

    function lity(target, options, opener) {
        if (!target.preventDefault) {
            opener = $(opener);
        } else {
            target.preventDefault();
            opener = $(this);
            target = opener.data('lity-target') || opener.attr('href') || opener.attr('src');
        }

        var instance = new Lity(
            target,
            $.extend(
                {},
                opener.data('lity-options') || opener.data('lity'),
                options
            ),
            opener,
            document.activeElement
        );

        if (!target.preventDefault) {
            return instance;
        }
    }

    lity.version  = '@VERSION';
    lity.options  = $.proxy(settings, lity, _defaultOptions);
    lity.handlers = $.proxy(settings, lity, _defaultOptions.handlers);
    lity.current  = currentInstance;
    lity.iframe   = iframe;

    $(document).on('click.lity', '[data-lity]', lity);

    return lity;
}));