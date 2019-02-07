(function ($) {
    "use strict";
    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_1').show().revolution({
            
            responsiveLevels: [1200, 992, 768, 576],
            gridwidth:[1200, 992, 768, 576],
            delay: 5000,
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            autoHeight: 'on',
            /* options that disable autoplay */
            /*stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,*/

            /* basic navigation arrows and bullets */

            navigation: {

                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                onHoverStop: 'off',

                touch: {
 
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
             
                },
 
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    hide_onleave: true

                },
 
                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 50,
                    space: 10
                }
            }
        });
    });

var screenH = $(window).height();

    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_2').show().revolution({
            
            responsiveLevels: [1200, 992, 768, 576],
            gridwidth:[1200, 992, 768, 576],
            delay: 5000,
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto', 
            autoHeight: 'on',
            minHeight: screenH,
            /* options that disable autoplay */
            /*stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,*/

            /* basic navigation arrows and bullets */

            navigation: {

                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                onHoverStop: 'off',

                touch: {
 
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
             
                },
 
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    hide_onleave: true

                },
 
                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 50,
                    space: 10
                }
            }
        });
    });

    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_3').show().revolution({
            
            responsiveLevels: [1200, 992, 768, 576],
            gridwidth:[1200, 992, 768, 576],
            delay: 5000,
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto', 
            autoHeight: 'on',
            minHeight: 690,
            /* options that disable autoplay */
            /*stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,*/

            /* basic navigation arrows and bullets */

            navigation: {

                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                onHoverStop: 'off',

                touch: {
 
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
             
                },
 
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    hide_onleave: true

                },
 
                bullets: {
                    enable: true,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 50,
                    space: 10
                }
            }
        });
    });


    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_4').show().revolution({
            
            responsiveLevels: [1200, 992, 768, 576],
            gridwidth:[1200, 992, 768, 576],
            delay: 5000,
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto', 
            autoHeight: 'on',
            minHeight: screenH,
            /* options that disable autoplay */
            /*stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,*/

            /* basic navigation arrows and bullets */

            navigation: {

                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                onHoverStop: 'off',

                touch: {
 
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
             
                },
 
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    hide_onleave: true

                },
 
                bullets: {
                    enable: false,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 50,
                    space: 10
                }
            }
        });
    });



    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_5').show().revolution({
            
            responsiveLevels: [1200, 992, 768, 576],
            gridwidth:[1200, 992, 768, 576],
            delay: 5000,
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto', 
            autoHeight: 'on',
            minHeight: screenH,
            /* options that disable autoplay */
            /*stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,*/

            /* basic navigation arrows and bullets */

            navigation: {

                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                onHoverStop: 'off',

                touch: {
 
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'horizontal',
                    drag_block_vertical: true
             
                },
 
                arrows: {
                    enable: true,
                    style: 'hesperiden',
                    hide_onleave: true

                },
 
                bullets: {
                    enable: false,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    hide_onleave: false,
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 50,
                    space: 10
                }
            }
        });
    });

})
(jQuery);