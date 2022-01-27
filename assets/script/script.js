$(document).ready(function(){

    'use strict';

    var urlParams = new URLSearchParams(window.location.search);
    var urlParamLang = urlParams.get('lang');
    var langJson;
    if(urlParamLang != 'cn' && urlParamLang != 'id' && urlParamLang != 'vn' && urlParamLang != 'th') {
        urlParamLang = 'en';
    }
    fetchLangJson(urlParamLang);
    function fetchLangJson(country) {
        // $('.lang-area .sel-lang').prepend('<img src="media/custom/flags/'+country+'.svg">');
        $('body').attr('data-lang', country);
        $.ajax({
            url: "assets/script/langcontent/"+country+".json",
            type: 'GET',
            cache: false,
            dataType: 'json',
            success: function(result) {
                Object.entries(result).map(obj => {
                    const key   = obj[0];
                    const value = obj[1];
                    $('[data-txt="'+key+'"]').html(value);
                    $('[data-cta="'+key+'"]').attr('href', value);
                });
            },
            error: function() {
                alert("No");
            }
        });
    }

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
                pagination: {
                    el: ".swiper-pagination",
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

    $(window).resize(function() {
        toggleSwiper();
        setSwiperDta();
    });

    //odds
    let apiURL = "https://api.mfeeduno.com/api";
    let imageURL = apiURL + "/mgoalfeed/getteamicon?filename=";

    let selectedMatchCat = 1;
    let refreshMatches = null;

    function loadMatches(){
        let selectedMS = 1;
        let endpoint = apiURL + "/mgoalfeed/";

        if(selectedMS == undefined || selectedMS == 1){
            endpoint += "gettodaymatches";
        }

        $.get(endpoint, function(data) {
            console.log(data)
            if(data != null && data.length > 0){
                oddMatch(data);
            }else{
                $(".laliga-slider").html(""); 
            }

            refreshMatches = setInterval(function(){
                // console.log(refreshMatches)
                loadMatches(selectedMatchCat);
            }, 30000);
        });
    };

    function setSwiperDta(w){
        let patternW = $('.swiper.swiper-pattern').width();
        let slidesPerView;
        let slidesPerBetween;
        let newWidth;
        if(patternW <= '340' && patternW == '340'){
            slidesPerView = 1.25;
            slidesPerBetween = 10;
        }else if(patternW >= "640" && patternW <= '766'){
            slidesPerView = 1.25;
            slidesPerBetween = 10;

        }else if(patternW >= "640" && patternW <= '766'){
            slidesPerView = 3.24;
            slidesPerBetween = 10;

        }else if(patternW >= "767" && patternW <= '1023'){
            slidesPerView = 2.5;
            slidesPerBetween =10;
        }else {
            slidesPerView = 3.24;
            slidesPerBetween = 25;
            
        }
        newWidth = patternW / Math.floor(slidesPerView);
        newWidth = Math.round(newWidth)
        console.log(newWidth)
        $('.swiper-slide').css({'width':newWidth, 'margin-right': slidesPerBetween + 'px' })
    }

    //date
    function formatDate(date){
        let d = new Date();
        let newDate = d.toLocaleString('en-us', { month: 'short', day: 'numeric', });
        return newDate;
    }

    function oddMatch(data){
        let template =  '<div class="swiper-slide" >\
            <div class="card figure-game">\
                <div class="card-body">\
                    <div class="laliga-crest-heading">\
                        <img src="assets/img/laliga-pattern/LALIGA.png" alt="" srcset="">\
                        <span class="separator"></span>\
                        <span class="laliga-date">[DATE]</span>\
                    </div>\
                    <div class="laliga-crest-content">\
                        <div class="laliga-matches">\
                            <p>[TEAM1]</p>\
                            <p>[TEAM2]</p>\
                        </div>\
                        <div class="laliga-crest">\
                            <img src="[HOMETEAMICON]" alt="" srcset="">\
                            <img src="[AWAYTEAMICON]" alt="" srcset="">\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';

        let html = '';
        let newCount;
        for(let i = 0; i < data.length; i++){
            newCount = i;
            let homeIndicator = "";
            let awayIndicator = "";

            html += template.replace("[LEAGUE]", data[i].tournament)
                    .replace("[TEAM1]", data[i].homeTeam)
                    .replace("[TEAM2]", data[i].awayTeam)
                    .replace("[HOMEODDS]", data[i].homeOdds)
                    .replace("[AWAYODDS]", data[i].awayOdds)
                    .replace("[DRAWODDS]", data[i].drawOdds)
                    .replace("[HOMETEAMICON]", imageURL + data[i].homeTeamIcon)
                    .replace("[AWAYTEAMICON]", imageURL + data[i].awayTeamIcon)
                    .replace("[HOMEINDICATOR]", homeIndicator)
                    .replace("[AWAYINDICATOR]", awayIndicator)
                    .replace("[DATE]", formatDate(data[i].date))
                    .replace("[INDEX]", i);
        }

        $(".laliga-slider").html(html);
    }

    loadMatches();
});

