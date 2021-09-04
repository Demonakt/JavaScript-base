'use strict'

// 1-1

// let test = document.querySelector('img');
// test.src = 'images/2.jpg';

// 1-2

// let test = document.querySelectorAll('div')
// test.forEach(test => test.style='padding:10px');

// 1-3

// let test = document.querySelectorAll('.product');
// test.forEach(product => product.style='background-color:yellow');
//
// let test2 = document.querySelectorAll('.productName')
// test2.forEach(productName => productName.style='font-size:24px')

// 1-4

// setTimeout(function() {
//     alert('message')
// }, 3000 );

// 1-5

// let test = document.querySelectorAll('input')
// test.forEach(input => input.style='margin-bottom:20px')

// 1-6

// let test = document.querySelectorAll('input')
// test.forEach(input => input.insertAdjacentHTML('afterend', '<br>'))

// 2-1

// let spanEl = document.querySelector('span')
// let fromEl = document.getElementById('from')
// fromEl.addEventListener('change', function (event) {
//     spanEl.innerText = event.target.value
// })

// 2-2

// let btn = document.querySelector('button')
// let msg = document.querySelector('.message')
// btn.addEventListener('click', function(event){
//     msg.style='display:block';
//     msg.classList.add('animate__animated', 'animate__fadeInLeftBig')
// })

// 2-3

// let firstStar = document.getElementById('first');
// let secondStar = document.getElementById('second');
// let thirdStar = document.getElementById('third');
// let fourthStar = document.getElementById('fourth');
// let fifthStar = document.getElementById('fifth');
//
// let goldenClass = 'golden';
//
// firstStar.addEventListener('mouseover', function() {
//     if (!firstStar.classList.contains('goldenClass')) {
//         firstStar.classList.add(goldenClass);
//     }
//     firstStar.style='color:gold';
// });
//
// firstStar.addEventListener('mouseout', function() {
//     firstStar.classList.remove(goldenClass);
//     firstStar.style='color:black';
// });
//
// secondStar.addEventListener('mouseover', function(){
//     if(!secondStar.classList.contains('goldenClass')){
//         secondStar.classList.add(goldenClass)
//     }
//     firstStar.style='color:gold';
//     secondStar.style='color:gold';
// })
// secondStar.addEventListener('mouseout', function() {
//     secondStar.classList.remove(goldenClass);
//     secondStar.style='color:black';
//     firstStar.style='color:black';
// });
// ну итд

// 3-1

// let btn = document.querySelectorAll('.alert');
// btn[0].addEventListener('click', function() {
//     btn[0].style='display:none'
// })
// btn[1].addEventListener('click', function() {
//     btn[1].style='display:none'
// })
// btn[2].addEventListener('click', function() {
//     btn[2].style='display:none'
// })

/////////////////////////////////////////////////////

// let btn = document.querySelectorAll('button')
// btn.forEach(function (elem, i, btn) {
//     elem.addEventListener('click', function (event) {
//         event.Target = elem.parentNode.style='display:none'
//     })
// });
// function buttonClickHandler(event) {
//
// }

// 3-2

// let btn = document.querySelectorAll('button')
// btn.forEach(function (elem, i, btn) {
//     elem.addEventListener('click', function  buttonClickHandler(event){
//     event.target = elem.parentNode.style='background:lightgreen' ;
//     })
//     elem.addEventListener('click', function  buttonClickHandler(event){
//         event.target = elem.innerText='Добавлено';
//     })
// })

// 3-3

// let first = document.getElementById('first')
// let second = document.getElementById('second')
// let formEl = document.querySelector('button')
// let nothing = '';
//
// formEl.addEventListener('click', function(event){
//     if (first.value == nothing || null){
//         first.style.borderColor='red';
//         event.preventDefault();
//     }
//     if (second.value == nothing || null){
//         second.style.borderColor='red';
//         event.preventDefault();
//     }
// })

// 3-4

// let goToTopEl = document.getElementById('goToTop')
// window.addEventListener('scroll', function(event){
//     if(window.pageYOffset < 500){
//         goToTopEl.style='display:none';
//     }else{
//         goToTopEl.style='display:string';
//     }
// })

// 3-5

    // setTimeout(function () {
    //     let img = document.querySelectorAll('img')
    //     for( let i = 0; i < img.length; i++){
    // img[i].setAttribute('src',`images/${i+1}.jpg`)
    //     }
    // }, 3000);

