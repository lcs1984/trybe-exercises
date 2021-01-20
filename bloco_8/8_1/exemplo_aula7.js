const scores = ["D", "A", "C", "B"];
const numbers = [1, 20, 2, 5, 20]
console.log(scores);

scores.sort();
console.log(scores);

numbers.sort((value1, value2) => {
    return value1-value2;
});

console.log(numbers);