document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty(`--textColor`, localStorage.getItem('textColor'))

    const homeIcon = document.querySelector('.home-icon');
    if (homeIcon) {
        homeIcon.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }
});