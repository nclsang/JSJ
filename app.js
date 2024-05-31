// app.js

// 페이지 초기화 함수
function init() {
    // 초기 페이지 로드: URL 해시에 따라 해당 페이지 표시
    navigateToPage(window.location.hash);
    
    // 이벤트 리스너 등록: 해시 변경 시 페이지 변경
    window.addEventListener('hashchange', function() {
        navigateToPage(window.location.hash);
    });
}

// 페이지 내용을 동적으로 로드하고 표시하는 함수
function navigateToPage(hash) {
    // 해시에 따라 페이지를 구분하여 해당 페이지의 내용을 로드
    switch (hash) {
        case '#home':
            fetchAndDisplayPage("SJ'sHomepage.html");
            break;
        case '#Profile':
            fetchAndDisplayPage("Profile.html");
            break;
        case '#LifeStory': // URL 인코딩된 버전 사용
            fetchAndDisplayPage("LifeStory.html");
            break;
        case '#UsefulThings': // URL 인코딩된 버전 사용
            fetchAndDisplayPage("UsefulThings.html");
            break;
        default:
            fetchAndDisplayPage('404.html');
            break;
    }
}

// 특정 HTML 파일을 가져와서 내용을 표시하는 함수
function fetchAndDisplayPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('페이지를 불러오는 중 오류 발생:', error);
        });
}

// 초기화 함수 호출
init();
