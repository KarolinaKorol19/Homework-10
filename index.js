// Завдання 1

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// Функція countItems тут
function countItems(array, condition) {
  let count = 0;
  for (const item of array) {
    if (condition(item)) {
    }
    count++;
  }
}

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;


console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

// Завдання 2 Калькулятор з операціями

// Функція calculate тут
const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Помилка при діленнні на нуль!";
  }
  return a / b;
};

console.log(calculate(10, 5, add)); 
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide)); 
console.log(calculate(10, 0, divide)); 

// Завдання 3 Генератор повідомлень
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
}

const simpleMessage = (i) => console.log(`Повідомлення №${i + 1}`);
const greetMessage = (i) => console.log(`👋 Привіт! Це привітання №${i + 1}`);
const countdownMessage = (i) => console.log(`Зворотний відлік: ${3 - i}`);

console.log(" Просте повідомлення ");
repeatMessage(3, simpleMessage);
console.log(" Вітання ");
repeatMessage(5, greetMessage);
console.log(" Зворотний відлік ");
repeatMessage(3, countdownMessage);

// Завдання 4 Кінотеатр (творче та додаткове завдання)
const movies = [
  "Avatar",
  "Harry Potter",
  "Pirates of the Caribbean",
  "Carolina",
  "Kingdom of heaven",
];

// Основна функція
function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

const showMovie = (movie, index) => {
  console.log(`${index + 1}. ${movie}`);
};

const addEmoji = (movie, index) => {
  console.log(` ${movie}`);
};

const watchMovie = (movie, index) => {
  console.log(` Я дивлюсь "${movie}" (${index + 1} з ${movies.length})`);
};

const countLetters = (movie) => {
  console.log(`"${movie}" має ${movie.length} літер`);
};

console.log(" Список фільмів");
processMovies(movies, showMovie);

console.log(" З емоджі");
processMovies(movies, addEmoji);

console.log("Перегляд фільмів");
processMovies(movies, watchMovie);

console.log("Кількість літер");
processMovies(movies, countLetters);


