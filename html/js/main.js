
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
    

});

// 검색창 모달
// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.getElementById('searchButton');
//     const searchIcon = document.getElementById('searchIcon');
//     const modal = document.getElementById('modal');

//     // 열기/닫기 버튼 클릭 시 모달의 표시 상태를 토글합니다.
//     searchButton.addEventListener('click', () => {
//         if (modal.style.display === 'none' || modal.style.display === '') {
//             modal.style.display = 'block';
//             modal.classList.add('open');
//             searchIcon.src = '/img/icon/xBtn.svg'; // 열기 아이콘을 닫기 아이콘으로 변경
//         } else {
//             modal.style.display = 'none';
//             modal.classList.remove('open');
//             searchIcon.src = '/img/icon/Search_alt.svg'; // 닫기 아이콘을 열기 아이콘으로 변경
//         }
//     });
// });