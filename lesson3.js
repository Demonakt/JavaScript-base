

// ЗАДАНИЕ №1

// let even = ' - Четное число';
// let notEven = ' - Не четное число';
// let zero = ' - Это ноль';
//
// for( i = 0; i < 11; i++){
//     if (i == 0){
//         console.log(i + zero)
//     } else if(i % 2 == 0){
//         console.log(i + even)
//     } else{
//         console.log(i + notEven)
//     }
// }



// ЗАДАНИЕ №2

// const post = {
//     author: "John", //вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2 //вывести это число
//             }
//         },
//         {
//             userId: 5, //вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", //вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1
//             }
//         },
//     ]
// };
//
// console.log(post['author']);
// console.log(post["comments"][0] ["rating"]["dislikes"]);
// console.log(post["comments"][1]['userId']);
// console.log(post["comments"][1]['text']);





// ЗАДАНИЕ №3

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];
//
// function sale() {
//     console.log(products[0]["price"] * 0.85,
//     products[1]["price"] * 0.85,
//     products[2]["price"] * 0.85);
// }
//
// products.forEach(sale);
//
// console.log(products[0]["price"] * 0.85 + products[1]["price"] * 0.85 + products[2]["price"] * 0.85);




// ЗАДАНИЕ №4


// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ]
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: []
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg"
//         ]
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];
//
// if(products[0]['photos'][0] ?? null) {
//     console.log(products[0]);
// } if(products[1]['photos'][0] ?? null){
//     console.log(products[1]);
// } if(products[2]['photos'][0] ?? null){
//     console.log(products[2]);
// } if(products[3]['photos'][0] ?? null){
//     console.log(products[3]);
// }
//
// let arr = [products[0], products[1], products[2], products[3]]
// arr.sort(function (a, b){
//     return a.price - b.price;
// });
//
// console.log(arr)

// // ЗАДАНИЕ №6
//
// let x = '';
//
// for (i = 0; i < 20; i++){
//      x = x + 'x';
//     console.log(x);
// }


