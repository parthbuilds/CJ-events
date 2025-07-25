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

