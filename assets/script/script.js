$(document).ready(function(){

    /**Slick */
    $('.laliga-slider').slick({
        autoplay: true,
        dots: true,
        // arrows: true,
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
    });

});