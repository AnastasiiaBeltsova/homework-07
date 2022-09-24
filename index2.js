// Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.

function culcAverage(arr) {
    return arr.reduce((sum, a) => sum + a, 0) / arr.length;
}

console.log(culcAverage([5, 3, 6, 10, 1]));