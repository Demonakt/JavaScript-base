'use strict'


// Задание № 1.1

//   ES5

// function product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// product.prototype.make25PercentDiscount = function(){
//         return this.price * 0.75;
// }

//   ES6

// class product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     make25PercentDiscount(){
//         return this.price * 0.75;
//     }
// }
// let user = new product('Nik', 1000);

// Задание № 1.2

//   ES5

// function post(author, text, date){
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }
//
// post.prototype.edit = function(){
//     let text = prompt('Введите текст');
//     return this.text = text;
// }
// let user = new post('Nik', ' ');
//
// function AttachedPost(author, text, date, highlighted){
//     post.call(this, author, text, date)
//     this.highlighted = highlighted;
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(post.prototype)
// AttachedPost.prototype.makeTextHighlighted = function(){
//     return this.highlighted = true;
// }
//
// let test = new AttachedPost('Nik',' ', 2021,' ' )

//   ES6

class post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(){
        let text = prompt('Введите текст');
        return this.text = text;
    }
}

class AttachedPost extends post{
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
        this.highlighted = false;
    }
    makeTextHighlighted(){
        return this.highlighted = true;
    }
}


let test = new AttachedPost('Nik',' ', 2021, ' ');