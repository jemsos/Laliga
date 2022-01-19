$(document).ready(function(){

    /* Swipe */
    const sliderSwiper = new Swiper('.swiper-pattern',{
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            340: {
                slidesPerView: 1.25,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            640: {
                slidesPerView: 2.25,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            1024: {
                slidesPerView: 3.25,
                spaceBetween: 24,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    });
   
    const sliderSwiper2 = new Swiper('.swiper-laliga-room',{
        navigation: false,
        breakpoints: {
            340: {
                slidesPerView: 2.15
            },
            400: {
                slidesPerView: 2.25
            },
            480: {
                slidesPerView: 2.5
            },
            560: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

    function toggleSwiper(){
        const sliderSwiper3 = new Swiper('.swiper-more',{
            navigation: false,
            breakpoints: {
                340: {
                    slidesPerView: 1.1
                },
                400: {
                    slidesPerView: 1.2
                },
                480: {
                    slidesPerView: 1.4
                },
                560: {
                    slidesPerView: 1.6
                },
                640: {
                    slidesPerView: 1.9
                },
                767: {
                    slidesPerView: 2.25
                },
                960: {
                    slidesPerView: 2.7
                },
                1023: {
                    slidesPerView: 3
                }
            }
        });   
        if ( $(window).width() < 1024 ) {   
            $( ".laliga-more-sports .container > .swiper > div" ).addClass( "swiper-wrapper" );
            $( ".laliga-more-sports .container > .swiper > div > div" ).addClass( "swiper-slide" );  
            sliderSwiper3.init(); 
        } else {
            $( ".laliga-more-sports .container > .swiper > div" ).removeClass( "swiper-wrapper" );
            $( ".laliga-more-sports .container > .swiper > div > div" ).removeClass( "swiper-slide" );   
            sliderSwiper3.destroy();
        }
    }
    toggleSwiper();
    // // on load
    // $(window).load(function() {
    //     toggleSwiper();
    // });
    // on resize
    $(window).resize(function() {
        toggleSwiper();
    });

    
});