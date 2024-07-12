/* 북마크 */
let popupBtn = false;

function bookmarksite() {
    const title = document.title;
    const url = window.location.href;

    if (window.sidebar && window.sidebar.addPanel) {
        // Firefox <23
        window.sidebar.addPanel(title, url, '');
    } else if (window.external && 'AddFavorite' in window.external) {
        // IE
        window.external.AddFavorite(url, title);
    } else {
        // Chrome, Firefox 23+, Safari, Opera 15+
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const shortcutKey = isMac ? 'Cmd+D' : 'Ctrl+D';
        const message = `${shortcutKey} 키를 눌러 이 페이지를 즐겨찾기에 추가해 주세요.\n\n` + `Safari 사용자: 공유 버튼(사각형에서 화살표가 나오는 아이콘)을 클릭한 후 "북마크에 추가"를 선택하세요.`;

        showPopup(message);
    }
}

function showPopup(message) {
    popupBtn = true;
    document.getElementById('popupMessage').textContent = message;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    popupBtn = false;
    document.getElementById('popup').style.display = 'none';
}

/* 바탕화면 아이콘추가 */
