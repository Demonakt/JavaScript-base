'use strict';

  //ЗАДАНИЕ №1;

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 /  c равен 2 т.к. а = 1 + инкрементом повышаем а еще на 1, а т.к. с = а то и с = 2.
//пример 2
d = b++;
alert(d); //ответ: 1 /  d = 1 т.к.  b = 1 тк b декрементом повышается на 1 только после alert
//пример 3
c = 2 + ++a;
alert(c); //ответ: 5  / благодаря 1 примеру а = 2,  поэтому инкрементом повышая а на 1  мы получае а = 3.
//пример 4
d = 2 + b++;
alert(d); //ответ: 4  / тоже самое что и в примере 3, только тут у нас декремент, поэтому сначало алерт, а уже потом +1.
alert(a); //3  / благодаря примерам №1 и №3 мы получаем а = 3.
alert(b); //3  / благодаря примерам №2 и №4 мы получаем b = 3.

   //ЗАДАНИЕ №2;

let a = 2;
let x = 1 + ( a *= 2 );

// a = 4 / тк a *= 2 это тоже что и а = а * 2 / т.е. мы а * 2 и присваиваем это а, в итоге а = 4.
// x = 5 / тк а *= 2 у нас равняется 4, то 1 + (a *= 2) у нас равняется 5.



   //ЗАДАНИЕ №3;
let a = 5;
let b = 8;

if( a > 0 && b > 0 ){
    alert( a - b );
} else if( a < 0 && b < 0 ){
    alert( a + b );
} else {
    alert( a + b );
}



   //ЗАДАНИЕ №4;

function numAddition(a, b) {
    return console.log(a + b);
} function numDifference( a, b ) {
    return console.log(a - b);
} function numMultiplication( a, b ) {
    return console.log(a * b);
  } function numDivision( a, b ) {
    return console.log(a / b);
  }


  //ЗАДАНИЕ №5;
  let arg1 = +prompt("enter number");
  let arg2 = +prompt("enter number")
  let operation = prompt("enter operator")
  let mathOperation = (arg1, arg2, operation) => {
    switch (operation){
        case "+":
            numAddition(arg1, arg2);
            break;
        case '-':
            numDifference(arg1, arg2);
            break;
        case '*':
            numMultiplication(arg1, arg2);
            break;
        case '/':
            numDivision(arg1, arg2);
            break;
    }

  }

mathOperation(arg1, arg2, operation);



