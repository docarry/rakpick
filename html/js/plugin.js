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
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }
});


// 이벤트 페이지 페이지네이션 버튼 활성화
// 모든 페이지 링크 요소를 선택합니다.
const pageLinks = document.querySelectorAll('.page-link');

// 각 페이지 링크에 focus 이벤트와 blur 이벤트를 추가합니다.
pageLinks.forEach(link => {
    link.addEventListener('focus', function() {
        this.classList.add('focused'); // 포커스 시 스타일 적용
    });
    
    link.addEventListener('blur', function() {
        this.classList.remove('focused'); // 포커스 해제 시 스타일 제거
    });
});
