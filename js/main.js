$('.owl-carousel').owlCarousel({
    //stagePadding: 50,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout:800,
    loop:true,
    margin:20,
    //nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});