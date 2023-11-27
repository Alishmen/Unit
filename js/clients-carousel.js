$(document).ready(function () {
    // Находим блок с слайдами
    const owl = $('#clients-slider');
    // Запускаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true
    });

    // Находим кастомные кнопки Вперед назад 
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // Клик на кнопку назад прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })
    // Клик на кнопку вперед прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel', [300]);
    })
});




