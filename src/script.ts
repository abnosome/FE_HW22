//Описание: Привет, TypeScript! Создайте переменную greeting типа string и присвойте ей значение "Hello, TypeScript!". Выведите значение переменной в консоль.
const greeting:string ="Hello, TypeScript!";
console.log(greeting);
//Описание: Калькулятор суммы. Напишите функцию mult, которая принимает два параметра типа number и возвращает их произведение.

function mult(x:number, y: number):number{
    return x*y;
}
console.log(mult(5,6));

//Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(6));

//Напишите функцию greetUser, которая принимает имя пользователя и выводит приветствие.

function greetUser(userName: string): void {
    console.log(`Hello, ${userName}!`);
}
greetUser('Alice');

//Создайте функцию filterPositiveNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
function filterPositiveNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num > 0);
}
const numbers = [-62, 9, -5, 10, -1, 56];
const positiveNumbers = filterPositiveNumbers(numbers);
console.log(positiveNumbers);
