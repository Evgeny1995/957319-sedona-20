var navMenu = document.querySelector('.page-heder__icon-menu');
var list = document.querySelector(".page-header__list-navigation");
var menu__open = document.querySelector(".menu__open");
var menu__close = document.querySelector(".list-navigation__btn_close");

navMenu.addEventListener('click',function(){
  if (list.classList.contains('list-navigation')){
    list.classList.remove('list-navigation');
    list.classList.add("menu__open");}
});

menu__close.addEventListener('click',function(){
if (list.classList.contains('menu__open')){
    list.classList.remove ('menu__open');
    list.classList.add ('list-navigation');}
});
