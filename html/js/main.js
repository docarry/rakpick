
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
});


$(function(){
    
});

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