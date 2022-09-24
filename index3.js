// Создать функцию, которая удаляет из строки все символы,
// переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"
let str = "";

function func(string, letter) {
    let arr = string.split('');
    for (let i in arr) {
        if (arr[i] == letter) {
            arr.splice(i, 2);
        }
    }
    return arr.join('');
} 
console.log(func("hello world", 'l', 'd')); 