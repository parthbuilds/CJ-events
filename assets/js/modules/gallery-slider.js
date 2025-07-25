import { scrollControl } from './scrollModule.js';
export default function gallery() {
    // $('.h1').click(function() {
    //     scrollControl.start();
    // });
    // ScrollTrigger.create({
    //     trigger: '.gallery-start',
    //     start: "top top",
    //     markers:false,
    //     onEnter: () => {
    //         scrollControl.stop();
    //     }
    // });

    ScrollTrigger.create({
        trigger: '.gallery-start',
        start: "center center",
        markers:false,
        onEnter: () => {
            $('.slider-gallery').removeClass('pe-none');
        }
    });
    
}