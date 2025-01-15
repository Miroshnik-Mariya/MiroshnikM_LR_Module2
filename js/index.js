//Лабораторная работа № 1
console.log("Лабораторная работа №1");
console.log("Напишите исходный код программы, которая выводит в консоль все автоморфные числа на заданном пользователем отрезке [a, b].");
console.log("Натуральное число называется автоморфным, если десятичная запись его квадрата оканчивается на десятичную запись этого числа.");

let a = prompt("Введите целое число a:");
a = parseInt(a);

let b = prompt("Введите целое число b:");
b = parseInt(b);

let numSquare = null; 
let num = null; 
let arr = [];

if (isNaN(a) || isNaN(b))
{
    alert("Ошибка ввода. Перезапустите программу.");
    console.log("Ошибка ввода. Перезапустите программу.");
}

else {
    if (b >= a) {
        alert(`Вы ввели: [ ${a}, ${b} ]`);
        console.log("Вы ввели: [", a, ",", b, "]");
    }

    else {
        while (a > b) {
            alert(`Ошибка: значение ${a} > ${b}`);
            console.log("Ошибка: значение ", a, ">", b);

            a = prompt("Введите целое число a:");
            a = parseInt(a);

            b = prompt("Введите целое число b:");
            b = parseInt(b);
        }
        alert(`Вы ввели: [ ${a}, ${b} ]`);
        console.log("Вы ввели: [", a, ",", b, "]");
    }

    for (let i = a; i < b + 1; i++) {
        numSquare = i * i;
        numSquare = String(numSquare);

        num = String(i);

        if (numSquare.length < num.length) {
            // Квадрат короче, чем исходное число
        }

        else {
            if (numSquare.endsWith(num)) {
                arr.push(i);
            }
            else { }
        }
    }

    if (arr.length > 0) {
        alert(`Автоморфные числа на диапазоне [ ${a}, ${ b }]: ${arr}`);
        console.log("Автоморфные числа на диапазоне [", a, ",", b, "]", arr);
    }
    else alert(`На диапазоне [${a},${b}] нет автоморфных чисел`);
}