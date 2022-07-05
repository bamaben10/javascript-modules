// function sum(num1, num2) {
//     return num1 + num2;
// }
// let result = sum(2,3);
// console.log(result); // 5


function printAll() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5); // 1 2 3 4 5
printAll(10, 20); // 10 20


function sayHi(name = 'World') {
    console.log('Hello' + name);
}
sayHi();
sayHi('John');
