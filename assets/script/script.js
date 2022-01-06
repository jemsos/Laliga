$(document).ready(function(){

    /**Swipe */
    const sliderSwiper = new Swiper('.swiper-pattern',{
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: false,
        breakpoints: {
            340: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            767: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
                navigation: false,
            }
        }
    })
});