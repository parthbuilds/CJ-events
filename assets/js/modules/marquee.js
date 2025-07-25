export default function marquee2() {
   $('[data-marquee-target]').each(function() {
       let marquee = $(this);
       
       let marqueeItemsWidth = marquee.find(".marquee-content").width();
       let marqueeSpeed = marquee.attr('data-marquee-speed') * (marqueeItemsWidth / $(window).width());

       // Speed up Marquee on Tablet & Mobile
       if ($(window).width() <= 540) {
           marqueeSpeed = marqueeSpeed * 0.33;
       } else if ($(window).width() <= 1024) {
           marqueeSpeed = marqueeSpeed * 0.66;
       }

       let initialDirection = marquee.attr('data-marquee-direction') === 'right' ? -1 : 1;
       let marqueeDirection = initialDirection;
       let marqueeContent = gsap.to(marquee.find('.marquee-content'), {
           xPercent: -100 * initialDirection,
           repeat: -1,
           duration: marqueeSpeed,
           ease: "linear",
           paused: true
       }).totalProgress(0.5);

       gsap.set(marquee.find(".marquee-content"), { xPercent: 50 * initialDirection });

       ScrollTrigger.create({
           trigger: marquee,
           start: "top bottom",
           end: "bottom top",
           onUpdate(self) {
               if (self.direction !== marqueeDirection) {
                   marqueeDirection *= -1;
                   gsap.to([marqueeContent], { timeScale: marqueeDirection, overwrite: true });
               }
               self.direction === -1 ? marquee.attr('data-marquee-status', 'normal') : marquee.attr('data-marquee-status', 'inverted');
           },
           onEnter: () => marqueeContent.play(),
           onEnterBack: () => marqueeContent.play(),
           onLeave: () => marqueeContent.pause(),
           onLeaveBack: () => marqueeContent.pause()
       });

       // Extra speed on scroll
       let triggerElement = marquee;
       let targetElement = marquee.find('.marquee-scroll');
       let marqueeScrollSpeed = marquee.attr('data-marquee-scroll-speed');

       let tl = gsap.timeline({
           scrollTrigger: {
               trigger: marquee,
               start: "0% 100%",
               end: "100% 0%",
               scrub: 0
           }
       });

       if (triggerElement.attr('data-marquee-direction') == 'left') {
           tl.fromTo(targetElement, {
               x: marqueeScrollSpeed + "vw",
           }, {
               x: marqueeScrollSpeed * -1 + "vw",
               ease: "none"
           });
       }

       if (triggerElement.attr('data-marquee-direction') == 'right') {
           tl.fromTo(targetElement, {
               x: marqueeScrollSpeed * -1 + "vw",
           }, {
               x: marqueeScrollSpeed + "vw",
               ease: "none"
           });
       }
   });
}