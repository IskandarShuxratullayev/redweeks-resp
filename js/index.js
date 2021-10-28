//banner
let number1 = document.querySelectorAll('.number1');
let number2 = document.querySelectorAll('.number2');
let number = document.querySelectorAll('.number');
let numberLine = document.querySelectorAll('.number_line');

for (let i = 0; i < number1.length; i++) {
  number1[i].onclick = function () {
    let j = 0;
    while (j < number1.length) {
      number[j++].className = 'number';
    }
    number[i].className = 'number active';
  };
}

// change banner

const bannerList = [
  ` Топовый рюкзак
    успей купить `,
  ` Топовый Одежда 
    успей купить `,
  ` Топовый Игрушки
    успей купить `,
];

const bannerPrice = ['1 800 ₽', '1 300 ₽', '1 400 ₽'];

let number01 = document.getElementById('number01');
let number02 = document.getElementById('number02');
let number03 = document.getElementById('number03');
let bannerTitle = document.querySelector('.banner__title');
let bannerSubtitle = document.querySelector('.banner__subtitle');
let bannerImg = document.querySelector('.banner__backpack');

number01.addEventListener('click', () => {
  bannerTitle.innerHTML = bannerList[0];
  bannerSubtitle.innerHTML = bannerPrice[0];
  bannerImg.setAttribute('src', './img/banner img/backpack.png');
});
number02.addEventListener('click', () => {
  bannerTitle.innerHTML = bannerList[1];
  bannerSubtitle.innerHTML = bannerPrice[1];
  bannerImg.setAttribute('src', 'img/banner img/odejda.png');
});
number03.addEventListener('click', () => {
  bannerTitle.innerHTML = bannerList[2];
  bannerSubtitle.innerHTML = bannerPrice[2];
  bannerImg.setAttribute('src', './img/banner img/igrushka.png');
});

// change menu color
let lineMenu = document.querySelectorAll('.line__menu');

for (let i = 0; i < lineMenu.length; i++) {
  lineMenu[i].onclick = function () {
    let j = 0;
    while (j < lineMenu.length) {
      lineMenu[j++].className = 'line__menu';
    }
    lineMenu[i].className = 'line__menu active';
  };
}

// accardion script

let AButton1 = document.querySelector('.button1');
let AButton2 = document.querySelector('.button2');
let AButton3 = document.querySelector('.button3');
let AButton4 = document.querySelector('.button4');
let FInfo1 = document.querySelector('.info2');
let FInfo2 = document.querySelector('.info3');
let FInfo3 = document.querySelector('.info4');
let FInfo4 = document.querySelector('.info5');

AButton1.addEventListener('click', () => {
  FInfo1.classList.toggle('faq_info');
});
AButton2.addEventListener('click', () => {
  FInfo2.classList.toggle('faq_info');
});
AButton3.addEventListener('click', () => {
  FInfo3.classList.toggle('faq_info');
});
AButton4.addEventListener('click', () => {
  FInfo4.classList.toggle('faq_info');
});

let navToggleBtn = document.querySelector('.navbar__toggle__btn');
let navLinks = document.querySelector('.nav__links');

navToggleBtn.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});
