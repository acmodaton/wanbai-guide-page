const announcement = document.getElementById('announcement');
const closeBtn = document.getElementById('closeBtn');

if (!localStorage.getItem('announcementClosed')) {
    if (announcement) {
        announcement.style.display = 'block';
        announcement.style.opacity = '0';
        announcement.style.transform = 'scale(0.95)';
    }
} else {
    if (announcement) {
        announcement.style.display = 'none';
    }
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (announcement) {
            announcement.style.opacity = '0';
            announcement.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                announcement.style.display = 'none';
                localStorage.setItem('announcementClosed', 'true');
            }, 300);
        }
    });
}

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。请尝试使用浏览器自带的收藏功能。");
        }
    }
}

window.addEventListener('load', function() {
    if (announcement && announcement.style.display !== 'none') {
        setTimeout(() => {
            announcement.style.transform = 'translateY(0) scale(1)';
            announcement.style.opacity = '1';
        }, 300);
    }
});
