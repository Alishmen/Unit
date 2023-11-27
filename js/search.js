const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

console.log(searchForm);
console.log(searchButton);

//Клик по кнопке поиск 
searchButton.addEventListener('click', function(e) {
    if(!searchForm.classList.contains('search--visible')) {
        e.preventDefault();
        searchForm.classList.toggle('search--visible');
    } 
})