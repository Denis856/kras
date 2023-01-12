var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu__list');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});

const productContainers = [...document.querySelectorAll('.page1__courusel')];
const nxtBtn = [...document.querySelectorAll('.page1__arrow1')];
const preBtn = [...document.querySelectorAll('.page1__arrow2')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


var arrow = document.querySelector('.page3__arrow');
var items3 = [...document.querySelectorAll('.page3__items')];
var nxtBtn1 = [...document.querySelectorAll('.page3__arrow')];


items3.forEach((item, i) => {
   let containerDimensions = item.getBoundingClientRect();
   let containerWidth = containerDimensions.width;

   nxtBtn1[i].addEventListener('click', () => {
       item.scrollLeft += containerWidth;
       arrow.classList.toggle('active');
       if(arrow.classList.contains('active')) {
        item.scrollLeft -= containerWidth;
     }
   });
});