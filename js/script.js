//----------------Смена стилей у кнопок "в корзину"-----------------
let buttons = document.querySelectorAll('.slider__btn-cart');

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.backgroundColor === 'rgb(255, 255, 255)') {
            item.style.backgroundColor = 'rgb(255, 102, 51)'
        }
        else if (item.style.backgroundColor === 'rgb(255, 102, 51)') {
            item.style.backgroundColor = 'rgb(255, 255, 255)'
        }   
    })
})

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.color === 'rgb(112, 192, 91)') {
            item.style.color = 'rgb(255, 255, 255)'
        }
        else if (item.style.color === 'rgb(255, 255, 255)') {
            item.style.color = 'rgb(112, 192, 91)'
        } 
    })
})

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.border === '1px solid rgb(112, 192, 91)') {
            item.style.border = 'none'
        }
        else if (item.style.border === 'none') {
            item.style.border = '1px solid rgb(112, 192, 91)'
        }
    })
})

//----------------Инициализация слайдера-----------------
new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
    },
});

//----------------Смена стилей у табов-----------------
