
                     //завдання 1

// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. 
// Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки


// const processArray = (array, callback) => {

// };
// const getSum = function(arr) {return arr.reduce((acc, curr) => acc + curr)}
// const getMin = function(arr) {return Math.min(...arr)}
// const getMax = function(arr) {return Math.max(...arr)}


const processArray = (array, callback) => {
    return callback(array.slice()); 
  };
  
  const arr = [10, 20, 5, 8];
  
  console.log("Сума:", processArray(arr, arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
  }));
  
  console.log("Мінімум:", processArray(arr, arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) if (arr[i] < min) min = arr[i];
    return min;
  }));
  
  console.log("Максимум:", processArray(arr, arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
    return max;
  }));
  



 //               варіант 2

//  2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. 
// Використайте її для виконання наступних операцій:

//1 Додавання.
//2 Віднімання.
//3 Множення.
//4 Ділення.
//5 Перепишіть колбеки на стрілкові функції

// const operate = (a, b, callback) => {

// };

// // Виклик функції з різними операціями
// console.log(operate(10, 5, function(a, b){ return a - b})); // Віднімання
// console.log(operate(10, 5, function(a, b){ return a + b})); // Додавання
// console.log(operate(10, 5, function(a, b){ return a * b})); // Множення
// console.log(operate(10, 5, function(a, b){ return a / b})); // Ділення\



const operate = (a, b, callback) => {
    return callback(a, b);
  };
  

  console.log("Додавання:", operate(10, 5, (a, b) => a + b));
  console.log("Віднімання:", operate(10, 5, (a, b) => a - b));
  console.log("Множення:", operate(10, 5, (a, b) => a * b));
  console.log("Ділення:", operate(10, 5, (a, b) => b !== 0 ? a / b : 'Помилка: ділення на нуль'));
  