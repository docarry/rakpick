// 검색창 모달
document.getElementById('searchButton').addEventListener('click', function() {
    const searchModal = document.getElementById('searchModal');
    const searchModalBg = document.getElementById('searchModalBg');
    const searchIcon = document.getElementById('searchIcon');

    if (searchModal.classList.contains('active')) {
        // 비활성화 애니메이션
        searchModal.style.opacity = '0';
        searchModal.style.transform = 'translateY(-2rem)';
        searchModalBg.style.opacity = '0'; // 배경 서서히 사라지기
        searchIcon.src = '/img/icon/Search_alt.svg'; // 아이콘을 즉시 원래대로 복구
        setTimeout(() => {
            searchModal.classList.remove('active');
            searchModalBg.classList.remove('active');
            searchModal.style.visibility = 'hidden'; // 비활성화 후 모달을 숨김
            searchModalBg.style.visibility = 'hidden'; // 배경을 숨김
        }, 600); // 0.3초 후에 비활성화 처리
    } else {
        // 활성화 애니메이션
        searchModal.style.visibility = 'visible'; // 모달을 보이게 설정
        searchModalBg.style.visibility = 'visible'; // 배경을 보이게 설정
        searchModal.classList.add('active');
        searchModalBg.classList.add('active');
        searchIcon.src = '/img/icon/Close.svg';  // 아이콘을 즉시 변경
        setTimeout(() => {
            searchModal.style.opacity = '1';
            searchModal.style.transform = 'translateY(0)';
            searchModalBg.style.opacity = '1'; // 배경 서서히 나타나기
        }, 10); // 약간의 지연 후 애니메이션 실행
    }
});
// searchModalBg를 클릭해도 모달이 사라지지 않도록 제거
// searchModalBg 클릭에 대한 이벤트 리스너 제거
// 만약 searchModalBg 클릭을 무시하고 싶다면 이 부분을 생략하거나 아무 동작도 하지 않도록 유지.
document.getElementById('searchModalBg').removeEventListener('click', function() {
    document.getElementById('searchModal').style.display = 'none';
    document.getElementById('searchModalBg').style.display = 'none';
    // 아이콘을 원래대로 복구
    document.getElementById('searchIcon').src = '/img/icon/Search_alt.svg';
});
// 검색창 모달 종료





$(function(){

    // header 고정
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
        }else{
            $('#header').removeClass('fix');
        }
    });


    // 탑버튼 고정
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#fixBtn').addClass('btnShow');
        }else{
            $('#fixBtn').removeClass('btnShow');
        }
    });


    // 당첨자 발표
    $('#winner .winnerList .listText').on('click', function() {
        var $p = $(this).closest('li').find('p'); // 클릭한 .listText의 부모 li 안에 있는 p를 찾음
    
        // 해당 p가 열려 있는지 확인
        if ($p.is(':visible')) {
            $p.slideUp(500); // 이미 열려 있는 p는 닫기
        } else {
            // 모든 p 닫기
            $('#winner .winnerList p').slideUp(500);
            
            // 클릭한 .listText의 p만 열기
            $p.slideDown(500);
        }
    });
    $('#winner .winnerList p').on('click', function() {
        $(this).slideUp(500); // p를 클릭하면 해당 p를 슬라이드 업
    });
    
    

    // 자주묻는질문 페이지
    $('#faqContainer .faqContent dl dt').on('click', function() {
        var $dd = $(this).next('dd'); // 현재 클릭한 dt의 다음 dd를 선택
        var $arrow = $(this).find('.arrow'); // 현재 클릭한 dt의 화살표 선택
    
        // 열린 dd가 있으면 닫기
        if ($dd.is(':visible')) {
            $dd.slideUp(500); // dd 닫기
            $arrow.removeClass('rotated'); // 화살표 원래대로
        } else {
            // 모든 dd 닫고 화살표 초기화
            $('#faqContainer .faqContent dl dd').slideUp(500);
            $('#faqContainer .faqContent dl dt .arrow').removeClass('rotated');
    
            // 현재 클릭한 dt의 dd만 열고, 화살표 회전
            $dd.slideDown(500);
            $arrow.addClass('rotated');
        }
    });
    
    $('#faqContainer .faqContent dl dd').on('click', function() {
        $(this).slideUp(500); // dd를 클릭하면 해당 dd를 슬라이드 업
        $('#faqContainer .faqContent dl dt .arrow').removeClass('rotated'); // dd가 닫히면 화살표 원상 복귀
    });



    // 공지사항 페이지
    $('.noticeContent .noticeBox dt').on('click', function() {
        var $dd = $(this).next('dd'); // 현재 클릭한 dt의 다음 dd를 선택
    
        // dd가 열려 있으면 닫기
        if ($dd.is(':visible')) {
            $dd.slideUp(500);
        } else {
            // 모든 dd 닫기
            $('.noticeContent .noticeBox dd').slideUp(500);
    
            // 클릭한 dt의 dd만 열기
            $dd.slideDown(500);
        }
    });
    $('.noticeContent .noticeBox dd').on('click', function() {
        $(this).slideUp(500); // p를 클릭하면 해당 p를 슬라이드 업
    });    



    // 네비 햄버거 버튼
    $('.navBtn').on('click', function(){
        $(this).toggleClass('slideOn');
    });


    // 메인 배너 슬라이드, 서브 배너 이미지 바꾸기
    $(window).on('resize', function() {
        if (window.innerWidth <= 990) {
            $('#mainBanner-swiper .slideImg01').attr('src', '/img/banner/m-slideimg01.jpg');
            $('#mainBanner-swiper .slideImg02').attr('src', '/img/banner/m-slideimg02.jpg');
            $('#mainBanner-swiper .slideImg03').attr('src', '/img/banner/m-slideimg03.jpg');
            $('#coachingContainer .subBanner').attr('src', '/img/banner/m-subbannder.jpg');
        } else if (window.innerWidth > 990) {
            $('#mainBanner-swiper .slideImg01').attr('src', '/img/banner/slideimg01.jpg');
            $('#mainBanner-swiper .slideImg02').attr('src', '/img/banner/slideimg02.jpg');
            $('#mainBanner-swiper .slideImg03').attr('src', '/img/banner/slideimg06.jpg');
            $('#coachingContainer .subBanner').attr('src', '/img/banner/subbannder.jpg');
        }
    });
    // 초기 로딩 시 이미지 변경
    $(window).trigger('resize');
    

});

