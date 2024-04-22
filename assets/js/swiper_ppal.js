const { default: Swiper } = require("swiper");

var swiper= new Swiper(".mySwiper",{
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    loop:true,
    coverflowEffect:{
        depth:500,
        modifier:1,
        slideShadows:true,
        rotate:0,
        stretch:0
    }


})