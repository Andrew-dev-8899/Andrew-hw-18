//HW 18

//Задача 1.
//Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
//переданного в нее параметра. Если передадим число 100 то, надо вычислить
//сумму чисел от 0 до 100 (должно получится 5050)

function getSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(100));

//Задача 2.
//Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
//который хочет получить клиент и верните результат переплаты по кредиту:
//процентная ставка в год — 17%,
//количество лет — 5.
//Мы пишем функцию для хорошего банка, поэтому сумма кредита не
//увеличивается

function calculateLoanOverpayment(loanAmount) {
  const annualInterestRate = 0.17; 
  const loanTermYears = 5;
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = loanTermYears * 12;
  const annuityPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  const totalPayments = annuityPayment * numberOfPayments;
  const overpayment = totalPayments - loanAmount;
  return overpayment;
}

const creditSum = 3500; 
const overpayment = calculateLoanOverpayment(creditSum);
console.log(`Переплата по кредиту составит: ${overpayment.toFixed(2)}`);

//Задача.3
//Написать функцию trimString , которая в качестве аргумента принимает три
//параметра:
//строку
//значение «от»
//значение «по»
//После вызова функция должна вернуть переданную строку, обрезанную по
//значениям «от» и «по».

function trimString(str, start, end) {
  const startIndex = str.indexOf(start);
  const endIndex = str.indexOf(end);

  if (startIndex === -1 || endIndex === -1) {
     return str;
  }

   return str.substring(startIndex + start.length, endIndex);
}


let myString = "Это начало, а это конец.";
let startMarker = ", ";
let endMarker = ".";

let trimmed = trimString(myString, startMarker, endMarker);
console.log(trimmed); 

//Задача 4.
//Написать функцию getSumNumbers . Она будет принимать число и вычислять
//сумму цифр, из которых состоит число. Для 2021 это будет 5.

function getSumNumbers(number) {
  const str = String(number);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

console.log(getSumNumbers(2021))

//Задача 5.
//Написать функцию getSum , которая принимает два целых числа a и b, они могут
//быть положительными или отрицательными, найти сумму всех чисел между
//ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
//getSum(1, 0) == 1 // 1 + 0 = 1
//getSum(1, 2) == 3 // 1 + 2 = 3
//getSum(0, 1) == 1 // 0 + 1 = 1
//getSum(1, 1) == 1 // 1 Since both are same
//getSum(-1, 0) == -1 // -1 + 0 = -1
//getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;
    for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(1, 0))
console.log(getSum(1, 1))
console.log(getSum(-1, 2))

//Задача 6.
//Напишите функцию fooBoo которая принимает в качестве аргумента три
//параметра:
//булевое значение
//функцию foo которая выводит в консоль свое имя
//функцию boo которая выводит в консоль свое имя
//Если переданное булевое значение true , то запускаем функцию foo, иначе boo.

function foo() {
  console.log("foo");
}

function boo() {
  console.log("boo");
}

function fooBoo(isFoo, func1, func2) {
  if (isFoo) {
    func1();
  } else {
    func2();
  }
}


fooBoo(true, foo, boo); 
fooBoo(false, foo, boo); 

