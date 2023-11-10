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

// Подсчёт и вывод количества студентов, получивших положительную оценку (60 и выше)
let positiveGradesCount = grades.filter((grade) => grade >= 60).length;
console.log(
  "Количество студентов с положительной оценкой:",
  positiveGradesCount
);

// Подсчёт и вывод количества студентов, получивших отрицательную оценку (ниже 60)
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
