// Завдання - порахувати суму елементів масиву
// const numbers = [5, 10, 25, 68, 78, 95]; // 281
// let total = 0;

// const sum = numbers[0] + numbers[1] + numbers[2]....

/////// імперативний код (for)

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }

// /////// декларативний код (for of)

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

////////////////////////////////////////////////////////////

// Приклад 1 -
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведіть у консоль рядок у форматі "номер_елемента: значення_елемента".
// Нумерація елементів має починатися з 1

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/////////////////////////////////////////////////

// Приклад 2 - Переписати на for of
// Скрипт виводить у консоль лише парні елементи масиву.

// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 48, 51];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     continue;
//   }
//   if (numbers[i] > 30) {
//     break;
//   }

//   console.log(numbers[i]);
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   if (number > 30) {
//     break;
//   }

//   console.log(number);
// }

////////////////////////////////////////////////////////////

// Приклад 3 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.
// Код має працювати для будь - якого масиву чисел.
// Використовуйте цикл для вирішення задачі.

// const numbers = [5, 2, 17, 94, 1, 23, 37, 0.5];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   console.log('min', min);
// }

// console.log(min); // 1
