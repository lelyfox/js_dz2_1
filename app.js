var one = +prompt('Введите первое число');
var two = +prompt('Введите второе число');
var three = +prompt('Введите третье число');

if (one > two && one < three) {
    alert('Среднее число: ' + one);
}else if (two > one && two < three) {
    alert('Среднее число: ' + two);
}else if (three > two && three < one) {
    alert('Среднее число: ' + three);
}else if (one < two && one > three) {
    alert('Среднее число: ' + one);
}else if (two < one && two > three) {
    alert('Среднее число: ' + two);
}else if (three < two && three > one) {
    alert('Среднее число: ' + three);    
}
