let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

let cartItems = [
  { item: "Book", price: 30 },
  { item: "Pen", price: 5 },
  { item: "Notebook", price: 50 },
  { item: "Bag", price: 125 },
];

let students = [
  { name: "John", grade: "A" },
  { name: "Jane", grade: "A" },
  { name: "Jack", grade: "B" },
  { name: "Jill", grade: "C" },
];

let temperatures = [0, 20, 30, 100];

let student_scores = [
  { name: "John", score: 85 },
  { name: "Jane", score: 90 },
  { name: "Jack", score: 70 },
  { name: "Jill", score: 60 },
];

let sentence = "The quick brown fox jumps over the lazy dog";

/*
Exercise 1: Calculate Total Price of Items in a Cart

Create an endpoint /cart/total that calculates the total price of items in the cart.

Define the function calculateTotalPrice to sum up the prices of all items.

Respond with the total price.
*/
function calculateTotalPrice(cartItems) {
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice = totalPrice + cartItems[i].price;
  }
  return totalPrice;
}

app.get("/cart/total", (req, res) => {
  let totalPrice = calculateTotalPrice(cartItems);
  res.json({ totalPrice: totalPrice });
});

/*
Exercise 2: Filter Students by Grade

Create an endpoint /students/filter that accepts a grade from request query.

Define the variable name for the grade as grade.

Write a function filterStudentsByGrade to filter students by the given grade.

Respond with the filtered list of students.
*/
function filterStudentsByGrade(students, grade) {
  let filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === grade) {
      filteredStudents.push(students[i]);
    }
  }
  return filteredStudents;
}
app.get("/students/filter", (req, res) => {
  let grade = req.query.grade;
  let filteredStudents = filterStudentsByGrade(students, grade);
  res.json({ students: filteredStudents });
});

/*
Exercise 3: Convert Temperatures from Celsius to Fahrenheit

Create an endpoint /temperatures/convert that accepts an array of temperatures from the request parameters.

Define the variable name for the temperatures as temperatures.

Write a function convertCelsiusToFahrenheit to convert each temperature from Celsius to Fahrenheit.

Respond with the converted temperatures.
*/
function convertCelsiusToFahrenheit(temperatures) {
  let convertedTemperatures = [];
  for (let i = 0; i < temperatures.length; i++) {
    convertedTemperatures.push((temperatures[i] * 9) / 5 + 32);
  }
  return convertedTemperatures;
}
app.get("/temperatures/convert", (req, res) => {
  // in question is is asking that array will be passed as req parm but in api call it is simple call path, so we are using defined temp array instead of query parm
  let convertedTemperatures = convertCelsiusToFahrenheit(temperatures);
  res.json({ convertedTemperatures: convertedTemperatures });
});

/*
Exercise 4: Calculate Average Score of Students

Create an endpoint /students/average-score that accepts an array of student_scores & calculates the average score of students.

Define the function calculateAverageScore to calculate the average score.

Respond with the average score.
*/
function calculateAverageScore(student_scores) {
  let totalScore = 0;
  for (let i = 0; i < student_scores.length; i++) {
    totalScore = totalScore + student_scores[i].score;
  }
  return totalScore / student_scores.length;
}
app.get("/students/average-score", (req, res) => {
  // in question is is asking that array will be passed as req parm but in api call it is simple call path, so we are using defined student_scores array instead of query parm
  let averageScore = calculateAverageScore(student_scores);
  res.json({ averageScore: averageScore });
});

/*
Exercise 5: Count Words in a Sentence

Create an endpoint /sentence/count-words that accepts a sentence from the request parameters.

Define the variable name for the sentence as sentence.

Write a function countWords to count the words in the given sentence.

Respond with the word count
*/
function countWords(sentence) {
  let words = sentence.split(" "); // here we  Split the sentence by spaces. words arry will contains only words in sentences
  // console.log(words[2]);
  return words.length;
}
app.get("/sentence/count-words", (req, res) => {
  // in question is is asking that array will be passed as req parm but in api call it is simple call path, so we are using defined sentence instead of query parm
  let wordCount = countWords(sentence);
  res.json({ wordCount: wordCount });
});
