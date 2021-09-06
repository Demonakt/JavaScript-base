'use strict'

// 1-1

// for(let key in products){
//     console.log(key)
//     console.log(products[key])
// }

// 1-2

// let test = document.querySelector('p')
// test.innerHTML = '';

// 1-3

// let totalString = 'слово1' + 'слово2' + 'слово3';
// console.log(totalString);

// 1-4

// let url = "https://picsum.photos/200/300";
// let targetAttr = "_blank";
// let linkText = "ссылка";
//
// document.body.insertAdjacentHTML(`afterbegin`,`<a href=${url} target=${targetAttr}>${linkText}</a>`)

// 2-1

// let test = document.querySelectorAll('button')
// test.forEach(function (elem, i, test) {
// elem.addEventListener('click', function(event){
//     console.log(event.target.dataset.id);
//     console.log(event.target.dataset.value);
// })
// })

//  2-2

// for( let i = 0; i < 6;i++){
//     document.body.insertAdjacentHTML('afterbegin', `<img src="https://picsum.photos/200/300?random=${i}" alt="picture${i}" </img> `)
// }

// 2-3

// let inpt = document.querySelector('input')
// let div = document.querySelector('div')
//
// inpt.addEventListener('input', function (event) {
//     console.log(event.target.value)
//     div.style=`font-size:${event.target.value}px`
// })

// 3-1
// в index1.html

// 3-2

// let btn = document.querySelector('button')
// let msg = document.querySelector('.message')
// let notification = new Audio('notification.mp3')
//
// btn.addEventListener('click', function (event) {
// let msgHeight = msg.clientHeight;
// msg.style.transform = `translateY(-${40 + msgHeight}px)`;
// notification.play();
// })

// 4-1

// 1-вывод товаров.html / app.js

// 4-2
//
// let div = document.querySelector('div');
//
// /**
//  * @param {number} percent величина процента от 0 до 100.
//  */
// function changeProgress(percent) {
//     div.style.background = `linear-gradient(90deg, rgba(38,255,162,1) ${percent}%, rgba(255,255,255,1) ${percent}%)`;
//
// }
// for( let i =0; i <= 100; i++){
//     setTimeout(function () {
//         changeProgress(i);
//     },i * 200)
// }



