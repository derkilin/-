//3.1
/*

let products = ['Milk', 'Bread', 'Apples'];

console.log(products.length);

products[1] = 'Bananas';

console.log(products); */

//3.2
/*
//
let shop = ['Milk', 'Bread', 'Apples'];
//
shop.splice(1, 1, 'Bananas', 'Eggs');

//
let lastItem = shop.pop();
console.log(lastItem);
//
shop.sort();
console.log(shop);
//
let milk = shop.indexOf('Milk');
console.log(milk);

//
let bananas = shop.indexOf('Bananas');
if (bananas !== -1) {
  shop.splice(bananas + 1, 0, 'Carrots', 'Lettuce');
}
//
let newShop = ['Juice', 'Pop'];
//
shop = shop.concat(newShop, newShop);
//
let lastPopIndex = shop.lastIndexOf('Pop');
console.log(lastPopIndex);
//
console.log(shop);*/

//3.3.
/*
let Arra = [1, 2, 3];
let TripleArra = [Arra, Arra, Arra];
console.log(TripleArra[0][1]);*/

//3.4.
/*
//
let myCar = {
  make: 'Toyota',
  model: 'GT86',
  year: 2021,
  electric: false
};

//
let color = 'color';
myCar[color] = 'Red';

//
color = 'forSale';
myCar[color] = true;

//
console.log('Make:', myCar.make);
console.log('Model:', myCar.model);

//
console.log('For Sale:', myCar.forSale);*/

//3.5.
//
/*let people = {
    friends: []
  };//
  //2.
  let friendFirst = { firstName: 'Lehich', lastName: 'wtf', id: 1 };
  let friendSecond = { firstName: 'Sanechik', lastName: 'fimozzz', id: 2 };
  let friendThird = { firstName: 'Maksonchik', lastName: 'no', id: 3 };
  //3.
  people.friends.push(friendFirst, friendSecond, friendThird);
  //4.
  console.log(people);*/ 

//4.1
/*
//
let bul = true;
//
console.log(bul);
//
if (bul) {
    console.log("все правильно");
} else {
    console.log("не true");
}

if (!bul) {
    console.log("что-то");
}
//
bul = false;

if (bul) {
    console.log("иное");
}*/

//4.2.
/*
//
let age = prompt("введи возраст:");
//
age = Number(age);
//
let message;
//
if (age > 21) {
    message = "разрешить вход в заведение и покупку алкоголя";
}
//
else if (age > 19) {
    message = "разрешить вход в заведение и запретить покупку алкоголя";
}
//
else {
    message = "запретить вход";
}
//
console.log(message);*/

//4.3
/*

let ID = true;

let messageTwo = ID ? "разрешить" : "запретить";

console.log(messageTwo);*/

//4.4.
/*

let randomNumber = Math.floor(Math.random() * 6);

let userMessage = prompt("введи:");

let messageThree;

switch (randomNumber) {
    case 0:
        messageThree = "Да, это хорошая идея!";
        break;
    case 1:
        messageThree = "Не уверен, стоит подумать.";
        break;
    case 2:
        messageThree = "Нет, лучше не стоит.";
        break;
    case 3:
        messageThree = "Может быть, но нужно уточнить.";
        break;
    case 4:
        messageThree = "Определенно да!";
        break;
    case 5:
        messageThree = "Я бы не рекомендовал этого делать.";
        break;
    default:
        messageThree = "Что-то пошло не так!";
        break;
}

console.log("запрос: " + userMessage);
console.log("ответ: " + messageThree);*/

//4.5.
/*

let prize = prompt("Выберите число:");


prize = Number(prize);


let message;

switch (prize) {
    case 0:
    case 1:
        message = "Вы выиграли клюшку!";
        break;
    case 2:
    case 3:
        message = "Вы выиграли мяч!";
        break;
    case 4:
    case 5:
        message = "Вы выиграли футболку!";
        break;
    case 6:
    case 7:
        message = "Вы выиграли кепку!";
        break;
    case 8:
    case 9:
        message = "Вы выиграли рюкзак!";
        break;
    case 10:
        message = "Вы выиграли главный приз!";
        break;
    default:
        message = "Неверный ввод.";
}


alert(message);*/

//5.1.
/*

const max = 5;

const randomNumber = Math.floor(Math.random() * max) + 1;
console.log("Полученное число:", randomNumber);


let isGuessed = false;


while (!isGuessed) {
    const userInput = prompt(`Угадайте число от 1 до ${max}:`);
    const userGuess = parseInt(userInput, 10);

    if (userGuess === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
        isGuessed = true;
        break;
    } else if (userGuess < randomNumber) {
        alert("Загаданное число больше. Попробуйте ещё раз.");
    } else if (userGuess > randomNumber) {
        alert("Загаданное число меньше. Попробуйте ещё раз.");
    } else {
        alert("Введите корректное число.");
    }
}*/

//5.2.
/*

let counter = 0;


const step = 5;


do {
    console.log("Текущее значение счетчика:", counter);
    counter += step;
} while (counter < 100);


console.log("Цикл завершен. Финальное значение счетчика:", counter);*/

//5.3.
/*

const myWork = [];

for (let i = 1; i <= 10; i++) {

    const status = (i % 2 === 0) ? false : true;

    const lesson = {
        name: `Lesson ${i}`,
        status: status
    };

    myWork.push(lesson);
}


console.log(myWork);*/

//5.4.
/*

let myTable = [];


const numRows = 8; // Количество строк
const numCols = 8; // Количество столбцов


let counter = 0;


for (let i = 0; i < numRows; i++) {
    let timeTable = [];

    for (let j = 0; j < numCols; j++) {

        counter++;


        timeTable.push(counter);
    }


    myTable.push(timeTable);
}

console.table(myTable);*/

//5.5.
/*
let grid = [];

const totalCells = 64;

let counter = 0;

let row = [];


for (let i = 0; i <= totalCells; i++) {
    if (i % 8 === 0) {
        if (row.length > 0) {
            grid.push(row);


            row = [];
        }
    }

    let temp = counter;
    row.push(temp);

    if (i === totalCells) {
        grid.push(row);
    }

    counter++;
}

console.log(grid);*/

//5.6.
/*
let Arrayx = [];

for (let i = 1; i <= 10; i++) {
    Arrayx.push(i);
}

console.log(Arrayx);

for (let i = 0; i < Arrayx.length; i++) {
    console.log(Arrayx[i]);
}

for (let i = 0; i < Arrayx.length; i++) {
    console.log(Arrayx[i]);
}*/

//5.7.
/*
let carObject = {
    make: "Toyota",
    model: "Celica",
    year: "1998"
};

console.log("Свойства для объекта:");
for (let key in carObject) {
    console.log(key + ": " + carObject[key]);
}

let carArray = [carObject.make, carObject.year, carObject.model];

console.log("Значение массива:");
for (let i = 0; i < carArray.length; i++) {
    console.log(carArray[i]);
}*/

//5.8.1.
/*
let output = "";

let skipNumber = 5;

for (let i = 1; i <= 10; i++) {
    if (i === skipNumber) {
        continue;
    }

    output += i + " ";
}

console.log("вывод с continue: " + output);

//5.8.2.
let outputSecond = "";

let skipNumberSecond = 5;

for (let i = 1; i <= 10; i++) {
    if (i === skipNumberSecond) {
        break;
    }

    outputSecond += i + " ";
}

console.log("вывод с break: " + outputSecond);*/

//6.1.
/*
function addNumbers(a, b) {
    return a + b;
}

let num1 = 10;
let num2 = 20;

let result1 = addNumbers(num1, num2);
console.log("Результат 1,2: " + result1);

let num3 = 5;
let num4 = 15;
let result2 = addNumbers(num3, num4);
console.log("результат 3,4: " + result2);*/



//6.2.
/*
let description = [
    "лад"
    "недано",
    "впвпвп",
    "hahhahaha",
    "bl..."
];

function getUserName() {
    let userName = prompt("Пожалуйста, введите ваше имя: ");
    return userName;
}

function getRandomDescription(descriptions) {
    let randomIndex = Math.floor(Math.random() * description.length);
    return description[randomIndex];
}

function displayResult() {
    let userName = getUserName();
    let randomDescription = getRandomDescription(description);
    console.log("Имя пользователя: " + userName);
    console.log("Описание: " + randomDescription);
}

displayResult();*/


//6.3.
/*
let num1 = 10;
let num2 = 5;
let operator = "+";
function calculate(a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else {
        return a + b;
    }
}

let result1 = calculate(num1, num2, operator);
console.log("результат" + operator + ": " + result1);

operator = "-";
let result2 = calculate(num1, num2, operator);
console.log("результат" + operator + ": " + result2);*/


//6.4.
/*
let results = [];

function calculateSum(a, b) {
    return a + b;
}

for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;

    let result = calculateSum(value1, value2);
    results.push(result);
}

console.log(results);*/

//6.5
/*
let myVar = 1000;

(function() {
    let myVar = 2000;
    console.log("Inside IIFE: " + myVar);
})();

let result = (function() {
    let myVar = 3000;
    return myVar;
})();
console.log("Value of result: " + result);

(function(newValue) {
    let myVar = newValue;
    console.log("Inside anonymous function: " + myVar);
})(4000);*/



//6.6
/*
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        console.log("значение для n: " + n);
        return n * factorial(n - 1);
    }
}

let number = 5; 
let result = factorial(number);
console.log("факториал " + number + ": " + result);

number = 7;
result = factorial(number);
console.log("факториал " + number + ": " + result);*/




//6.7
/*
let start = 10;

function countdown(n) {
    console.log("отсчет: " + n);

    if (n < 1) {
        return;
    }
    if (n >= 1) {
        return countdown(n - 1);
    }
}
function countdown2(n) {
    if (n > 0) {
        console.log("отсчет2: " + n);
        return countdown2(n - 1);
    } else {
        return;
    }
}

countdown(start);
countdown2(start);*/



//6.8
/*
let printArgument = function(arg) {
    console.log(arg);
};
printArgument("haha, ahah!");

function printArgument2(arg) {
    console.log(arg);
}
printArgument2("haha wnf, ahah!");
*/

