let allArticles = []; // Declare allArticles globally

fetch('articles.json')
.then(response => response.json())
.then(data => {
    allArticles = data.articles;
    const categoriesNav = document.getElementById('categories-nav');

    // Add "All Categories" button first
    const allCategoriesLink = document.createElement('a');
    allCategoriesLink.href = "#";
    allCategoriesLink.classList.add('category-item',"cate_all");
    allCategoriesLink.dataset.category = 'all';
    allCategoriesLink.textContent = '所有分類';
    categoriesNav.appendChild(allCategoriesLink);

    data.categories.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = "#";
        categoryLink.classList.add('category-item');
        categoryLink.dataset.category = category;
        categoryLink.textContent = category;
        categoriesNav.appendChild(categoryLink);
    });
    renderArticles(allArticles);
    filterArticles(); // 初始載入時過濾一次
});

function renderArticles(articles) {
    const container = document.getElementById('articles-container');
    container.innerHTML = ''; // 清空現有文章
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.id = article.id;
        articleElement.classList.add('article');
        articleElement.onclick = () => location.href = article.url;
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || ''}</p>
            <div class="tags">${article.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        
        `;
        
        container.appendChild(articleElement);
    });
}

document.getElementById('search-input').addEventListener('keyup', filterArticles);
document.getElementById('categories-nav').addEventListener('click', (event) => {
    if (event.target.classList.contains('category-item')) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            filterArticles();
        }
        else{
            event.preventDefault();
            // 移除所有分類項目的 active 類別
            // 如果點擊的是“所有分類”
            if (event.target.dataset.category === 'all') {
                // 移除所有其他分類的 active 類別
                document.querySelectorAll('.category-item:not(.cate_all)').forEach(item => {
                    item.classList.remove('active');
                });
                // 確保“所有分類”被激活
                event.target.classList.add('active');
            } else {
                // 如果點擊的是其他分類，則取消“所有分類”的激活狀態
                document.querySelector('.cate_all').classList.remove('active');
                // 切換當前點擊分類的激活狀態
                event.target.classList.toggle('active');
            }

            // 如果沒有任何分類被選中，則默認選中“所有分類”
            if (document.querySelectorAll('.category-item.active').length === 0) {
                document.querySelector('.cate_all').classList.add('active');
            }
            filterArticles();
        }
        
    }
});

function filterArticles() {
    
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeCategoryElements = document.querySelectorAll('.category-item.active');
    const selectedCategories = Array.from(activeCategoryElements).map(item => item.dataset.category);

    // 如果“所有分類”被選中，或者沒有任何分類被選中，則視為選擇了所有分類
    const selectAll = selectedCategories.includes('all') || selectedCategories.length === 0;

    const filtered = allArticles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                                    (article.description && article.description.toLowerCase().includes(searchTerm));
            const matchesCategory = selectAll || (article.tags && selectedCategories.some(cat => article.tags.includes(cat)));
            return matchesSearch && matchesCategory;
        });
    renderArticles(filtered);
}
document.addEventListener('DOMContentLoaded', () => {
const basicColorPickers = {
     primaryColor: document.getElementById('primaryColor'),
     textColor: document.getElementById('textColor'),
     backgroundColor: document.getElementById('backgroundColor')
 };

 const advancedColorPickers = {
     secondaryColor: document.getElementById('secondaryColor'),
     containerBgColor: document.getElementById('containerBgColor'),
     borderColor: document.getElementById('borderColor'),
     categoryItemBg: document.getElementById('categoryItemBg'),
     contentAreaBg: document.getElementById('contentAreaBg')
 };

 const allColorPickers = { ...basicColorPickers, ...advancedColorPickers };

 const defaultColors = {
     primaryColor: '#333',
     secondaryColor: '#333',
     backgroundColor: '#eef2f7',
     textColor: '#333',
     containerBgColor: '#ffffff',
     borderColor: '#eef2f7',
     categoryItemBg: '#eef2f7',
     contentAreaBg: '#ffffff'
 };
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeButton = document.querySelector('.close-button');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');


// Load saved colors from localStorage and apply them
function applyColor(key, color) {
     document.documentElement.style.setProperty(`--${key.replace(/Color$/, '-color').replace(/Bg$/, '-bg').replace(/ItemBg$/, '-item-bg')}`, color);
     if (key === 'primaryColor') {
         document.documentElement.style.setProperty('--primary-hover-color', color);
     }
 }

 function loadColors() {
     for (const key in allColorPickers) {
         const savedColor = localStorage.getItem(key);
         if (savedColor) {
             applyColor(key, savedColor);
             allColorPickers[key].value = savedColor;
         } else {
             applyColor(key, defaultColors[key]);
             allColorPickers[key].value = defaultColors[key];
         }
     }
 }

 function saveColors() {
     for (const key in allColorPickers) {
         localStorage.setItem(key, allColorPickers[key].value);
     }
 }

 // Add event listeners for each color picker
 for (const key in allColorPickers) {
     allColorPickers[key].addEventListener('input', (event) => {
         applyColor(key, event.target.value);
         localStorage.setItem(key, event.target.value);
     });
 }

 loadColors(); // Initial load of colors

// Settings Modal functionality
settingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'block';
    // Load current colors into modal inputs
     for (const key in allColorPickers) {
         allColorPickers[key].value = document.documentElement.style.getPropertyValue(`--${key.replace(/Color$/, '-color').replace(/Bg$/, '-bg').replace(/ItemBg$/, '-item-bg')}`);
     }

     // Toggle advanced settings
     const toggleAdvancedBtn = document.getElementById('toggleAdvanced');
     const basicColorsDiv = document.getElementById('basicColors');
     const advancedColorsDiv = document.getElementById('advancedColors');
     const resetDefaultBtn = document.getElementById('resetDefault');

     toggleAdvancedBtn.addEventListener('click', () => {
         if (advancedColorsDiv.style.display === 'none') {
             advancedColorsDiv.style.display = 'block';
             toggleAdvancedBtn.textContent = '基本設定';
         } else {
             advancedColorsDiv.style.display = 'none';
             toggleAdvancedBtn.textContent = '進階設定';
         }
     });

     resetDefaultBtn.addEventListener('click', () => {
         for (const key in defaultColors) {
             applyColor(key, defaultColors[key]);
             if (allColorPickers[key]) {
                 allColorPickers[key].value = defaultColors[key];
             }
             localStorage.setItem(key, defaultColors[key]);
         }
     });

     // Show only basic colors when modal opens, and all when advanced is toggled
     settingsModal.addEventListener('show.bs.modal', () => {
         advancedColorsDiv.style.display = 'none';
         toggleAdvancedBtn.textContent = '進階設定';
     });
});

closeButton.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
                if (event.target == settingsModal) {
                    settingsModal.style.display = 'none';
                }
            });
});