// Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// console.log('~ phonesArr', phonesArr);
// console.log('~ namesArr', namesArr);

///////////////////////////////////////////////

// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
// Результуючий рядок не повинен починатися або закінчуватися пробілом.
// Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future my friend!';
// const strArr = string.split(' ');
// // strArr.shift();
// // strArr.pop();
// console.log(strArr);

// console.log(strArr.slice(1, -1).join(' '));

////////////////////////////////////////////////

// Напиши скрипт, який «розвертає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future!';
// // let reversedStr = '';

// // for (let i = string.length - 1; i >= 0; i -= 1) {
// //   reversedStr += string[i];
// // }

// /////

// let reversedStr = string.split('').reverse().join('');

// console.log(reversedStr);

///////////////////////////////////////////////

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);

// let finished = false;

// while (!finished) {
//   finished = true;
//   for (let i = 1; i < langs.length; i += 1) {
//     if (langs[i - 1] > langs[i]) {
//       finished = false;
//       const temp = langs[i - 1];
//       langs[i - 1] = langs[i];
//       langs[i] = temp;
//     }
//   }
// }

// console.log(langs);

// let done = false;

// while (!done) {
//   done = true;
//   for (let i = 1; i < langs.length; i += 1) {
//     if (langs[i - 1] > langs[i]) {
//       done = false;
//       const tmp = langs[i - 1];
//       langs[i - 1] = langs[i];
//       langs[i] = tmp;
//     }
//   }
// }

// console.log(langs);

////////////////////////////////////////////////

// Random quotes

const quotes = [
  'Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський',
  'Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон',
  'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней',
  'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс',
  'Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі',
  'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі',
  'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн',
  'Іноді щось може йти не так, як хотілося б, але ви не повинні зупинятися. – Майкл Джордан',
  'Будь собою, інші ролі зайняті. – Оскар Уайльд',
];

const colors = [
  'aqua',
  'plum',
  'tomato',
  'bisque',
  'darkturquoise',
  'deepskyblue',
  'lemonchiffon',
  'lightpink',
  'lightgreen',
];

const index = Math.floor(Math.random() * quotes.length);

console.log(index);

document.body.textContent = quotes[index];
document.body.style.backgroundColor = colors[index];
