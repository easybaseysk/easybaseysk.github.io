document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty(`--textColor`, localStorage.getItem('textColor'))
});