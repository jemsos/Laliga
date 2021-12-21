$(document).ready(function(){

    /**Slick */
    $('.laliga-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        autoplaySpeed: 5000,
        prevArrow: '<div class="arrow prev">\
        <div class="arrow-bottom"></div>\
        </div>',
        nextArrow: '<div class="arrow next">\
        <div class="arrow-top"></div>\
        </div>',
        responsive: [{
            breakpoint: 1366,
            settings:{
                slidesToShow: 3,
            }
        },{
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 1,
                dots: false,
                arrows: false,
            }
        }
        ]
    });

});