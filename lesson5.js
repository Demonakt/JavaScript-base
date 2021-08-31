'use strict'


//   1-1
//
// let four = document.querySelector('#four');
//
// console.log(four);

//   1-2
//
// let clas = document.querySelectorAll('.one');
//
// console.log(clas);

//  1-3
//
// let clas = document.querySelectorAll('div[class="card-body"] .card-link');
//
// console.log(clas);

//  1-4
//
// let selec = document.querySelector('div[class="progress-bar"][aria-valuenow="50"] ')
//
// console.log(selec);

 // 1-5
 //
// console.log(document.querySelector('title'))

// 2-1
//
// let one = document.querySelector('.mt-0')
//
// console.log(one.parentNode);

// 2-2
// let div = document.createElement('h3');
// div.innerHTML = 'Hello World';
// cont.append(div)  //добавил в div id='cont'

// 2-3
//
// let btn = document.querySelectorAll('.btn-outline-warning')
// btn[0].remove();
// let btn2 = document.querySelectorAll('.btn-outline-dark')
// btn2[0].remove();

// 2-4

// let btn = document.querySelector('.btn-info')
// btn.innerHTML = 'Кнопка'

// 3-1
//
// let ul = document.querySelector('ul')
// ul.className = 'one'

// 3-2

// let test = document.querySelector('.nav-link')
// test.classList.toggle('active');

// 3-3

// let test = document.querySelector('.dropdown-menu')
// test.classList.remove('dropdown-menu');

// 3-4

// let test = document.querySelector('.menu')
// test.insertAdjacentHTML('afterbegin','<a href="#">link</a>')

// 3-5

// let test = document.querySelector('.close')
// console.log(test['ariaLabel']);
// console.log(test['dataset']['dismiss']);
//
// console.log(test.getAttribute('aria-label'))
// console.log(test.getAttribute('data-dismiss'))

// 3-6

// let test = document.querySelector('h1')
// test.setAttribute('data-one', 'один')
// test.setAttribute('data-two', 'два')

// 3-7

// let test = document.querySelector('#title')
// test.id = 'two';

// 4-1

// document.addEventListener("DOMContentLoaded", alert("все теги добавлены на страницу"));

// 4-2

// document.addEventListener("load", alert("все теги добавлены на страницу"));

// 4-3

// function btn(){
//     alert('клик'); // добавил     onclick="btn()"
// }

// 4-4

// function test(){
//     console.log('вы навели на textarea');  // добавил onmouseover="test()"
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// 1-1

// let test = document.querySelectorAll('img');
// test.forEach(function (elem, i, test){
//     console.log(elem)
// })

// 1-2

// let test = document.getElementsByClassName('one')
// for (let i = 0; i < test.length; i++){
//     console.log(test[i]['localName'])
// }

// 1-3

// let test = document.getElementsByTagName('h2')
// for(let i = 0; i < test.length; i++){
//     console.log(test[i].className)
// }

// 1-4

// let test = document.querySelector('div')
// let classes = test.classList;
// classes.forEach(function (elem, i, classes ) {
//     console.log(elem)
// });

// 1-5

// let test = document.querySelector('div')

// 1-6

// let test = document.querySelectorAll('.card')

// 1-7

// let test = document.querySelectorAll('a')
// let res = test.contains()
// console.log(res)

// 1-9

// let test = document.querySelectorAll('i')
// console.log(test)
// test.forEach(function (elem, i, test){
//     elem.classList.toggle('green')
// })

// 2-1

// let test = document.querySelector('button')
// test.onclick = function(event) {
//     console.log(test.id, test.className, test.innerText)
// };

// 2-2

// let test = document.querySelector('p')
// test.onclick = function (event){
//     console.log(event.target.classList);
// }
// test.classList.forEach(function (elem,i ,test){
//     console.log(elem)
// })

// 2-3

// let test = document.querySelector('div')
// test.onclick = function(event){
//     console.log(test.getAttribute('class'))
//     console.log(test.getAttribute('id'))
//     console.log(test.getAttribute('tabindex'))
//     console.log(test.getAttribute('aria-labelledby'))
//     console.log(test.getAttribute('aria-hidden'))
// }

// 2-4

// let test = document.querySelector('.product')
// test.onclick = function(event){
//     test.innerHTML = '<div>Другой товар</div> <div>Другое описание</div>'
// }

// 2-5

// let test = document.querySelectorAll('ul')
// test.onclick = function (event){
//     console.log(test[0].children)
// }

// 3-1

// let test = document.querySelector('button')
// test.style='font-size:30px';
// let test2 = document.querySelector('textarea')
// test2.style='background-color:green';











