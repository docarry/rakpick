// 메인배너 슬라이드
var mainBannerSwiper = new Swiper("#mainBanner-swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2600,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#mainBanner-swiper .swiper-button-next",
        prevEl: "#mainBanner-swiper .swiper-button-prev",
    },
    pagination: {
        el: "#mainBanner-swiper .swiper-pagination",
        clickable: true,
    }
});


// 고객후기 슬라이드
var reviewSwiper = new Swiper("#review-Swiper.mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: "#review-Swiper .swiper-button-next",
        prevEl: "#review-Swiper .swiper-button-prev",
    },
    pagination: {
        el: "#review-Swiper .swiper-pagination",
        clickable: true,
    }
});