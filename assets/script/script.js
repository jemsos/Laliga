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
                spaceBetween: 24
            }
        }
    });


   
    const sliderSwiper2 = new Swiper('.swiper-laliga-room',{
        navigation: false,
        breakpoints: {
            340: {
                slidesPerView: 2.1
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
    

    
});