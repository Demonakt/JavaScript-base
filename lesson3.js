/*

// ЗАДАНИЕ №1

let even = ' - Четное число';
let notEven = ' - Не четное число';
let zero = ' - Это ноль';

for( i = 0; i < 11; i++){
    if (i == 0){
        console.log(i + zero)
    } else if(i % 2 == 0){
        console.log(i + even)
    } else{
        console.log(i + notEven)
    }
}



// ЗАДАНИЕ №2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post['author']);
console.log(post["comments"][0] ["rating"]["dislikes"]);
console.log(post["comments"][1]['userId']);
console.log(post["comments"][1]['text']);


 */

// ЗАДАНИЕ №3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];