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
            fetchAndDisplayPage("SJ'sHomepage.html" + page);
            break;
        case '#profile':
            fetchAndDisplayPage("Profile.html" + page);
            break;
        case '#lifeStory': // URL 인코딩된 버전 사용
            fetchAndDisplayPage("LifeStory.html" + page);
            break;
        case '#usefulThings': // URL 인코딩된 버전 사용
            fetchAndDisplayPage("UsefulThings.html" + page);
            break;
        default:
            fetchAndDisplayPage('404.html' + page);
            break;
    }
}

// 특정 HTML 파일을 가져와서 내용을 표시하는 함수
function fetchAndDisplayPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html; // content 요소에 페이지 내용 삽입
        })
        .catch(error => {
            console.error('페이지를 불러오는 중 오류 발생:', error);
            document.getElementById('content').innerHTML = '<p>페이지를 찾을 수 없습니다.</p>';
        });
}


// 초기화 함수 호출
init();
