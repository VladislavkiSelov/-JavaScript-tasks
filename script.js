// Уровень 4.1 задачника JavaScript
// // Сделайте функцию, которая вернет текущий день недели словом.
// function currentDay() {
//     const days = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота'
//     ];
//     const day = new Date().getDay();
//     return console.log(days[day]);
// }

// currentDay()

// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
// function currentDate(date) {
//     const days = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота'
//     ];
//     const currentDay = date.getDay()
//     return console.log(days[currentDay]);
// }

// currentDate(new Date())

// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
// function cutString(n, str) {
//     return console.log(str.substring(0, n));
// }
// cutString(8, "Добрый день!")


// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
// function getZodiacSign(date) {
//     const day = date.getDay();
//     const month = date.getMonth() + 1;
//     if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//         return console.log('Овен');
//     }
//     if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//         return console.log('Телец');
//     }
//     if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//         return console.log('Близнецы');
//     }
//     if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//         return console.log('Рак');
//     }
//     if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//         return console.log('Лев');
//     }
//     if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//         return console.log('Дева');
//     }
//     if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//         return console.log('Весы');
//     }
//     if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//         return console.log('Скорпион');
//     }
//     if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//         return console.log('Стрелец');
//     }
//     if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//         return console.log('Козерог');
//     }
//     if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//         return console.log('Водолей');
//     }
//     if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//         return console.log('Водолей');
//     }
// }

// getZodiacSign(new Date())


// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
// function setSumDelete(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         if (n % i === 0) {
//             sum += i
//         }
//     }
//     return console.log(sum);
// }
// setSumDelete(265)

// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
// function deleteZero(n) {
//     n += '';
//     let result = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === '0') {
//             continue;
//         }
//         result += n[i]
//     }
//     return console.log(result * 1);
// }
// deleteZero(450065)

