// Генерация случайных оценок для 12 студентов от 1 до 100
let grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log("Оценки:", grades);

// Вычисление и вывод среднего балла студентов
let averageGrade =
  grades.reduce((total, grade) => total + grade) / grades.length;
console.log("Средний балл студентов:", averageGrade.toFixed(2));

// Поиск и вывод максимальной оценки среди студентов
let maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

// Поиск и вывод минимальной оценки среди студентов
let minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// Подсчёт и вывод количества студентов, получивших положительную оценку
let positiveGradesCount = grades.filter((grade) => grade >= 60).length;
console.log(
  "Количество студентов с положительной оценкой:",
  positiveGradesCount
);

// Подсчёт и вывод количества студентов, получивших отрицательную оценку
let negativeGradesCount = grades.filter((grade) => grade < 60).length;
console.log(
  "Количество студентов с отрицательной оценкой:",
  negativeGradesCount
);

// Преобразование числовых оценок в буквенные оценки
let letterGrades = grades.map((grade) => {
  if (grade >= 80) {
    return "A";
  } else if (grade >= 60) {
    return "B";
  } else if (grade >= 40) {
    return "C";
  } else if (grade >= 20) {
    return "D";
  } else {
    return "E";
  }
});

console.log("Буквенные оценки:", letterGrades);

// Задание со звёздочкой
// Сохраняем массив режиссёров в переменную
const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];
// Вызываем метод forEach у массива и в функцию-обработчик добавим код, который относится к работе с DOM
directors.forEach(function (director) {
  const nameElement = document.createElement("h2");
  const careerElement = document.createElement("p");
  const filmsElement = document.createElement("p");

  nameElement.textContent = director.name;
  careerElement.textContent = director.career;
  filmsElement.innerHTML =
    '<a href="' +
    director.films +
    '" target="_blank">' +
    "Фильмография" +
    "</a>";

  // Добавляем информацию на страницу
  document.body.append(nameElement);
  document.body.append(careerElement);
  document.body.append(filmsElement);
});

// Создаем новый массив topFilmsList с лучшими фильмами режиссёров
const topFilmsList = directors.map(function (director) {
  return director.top_rated_film;
});

// Выводим информацию из нового массива на страницу
const topFilms = document.createElement("h3");
const topRatedFilmElement = document.createElement("p");

topFilms.textContent = "Лучшие фильмы: ";
topRatedFilmElement.textContent = topFilmsList;

document.body.append(topFilms);
document.body.append(topFilmsList);
