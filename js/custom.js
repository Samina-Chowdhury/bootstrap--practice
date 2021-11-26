$(document).ready(function(){
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 1, 
    });
    //about video popup,
    $('.venobox').venobox();


    // testimonail slider 
    $(".tesimonail-slider").slick({
        arrows:false,
        slidesToShow:2,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
    });


    
    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 3500,
    });
});