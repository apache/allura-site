$(window).scroll(function(evt){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('background-position','0px '+(0-(scrolled*.25))+'px');
});