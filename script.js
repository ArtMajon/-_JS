// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");

const personalMivieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

// const   a = prompt("Один из последних просмотренных фильмов ?", ""),
//         b = prompt("На сколько оцените его ?", ""),
//         c = prompt("Один из последних просмотренных фильмов ?", ""),
//         d = prompt("На сколько оцените его ?", "");

// personalMivieDB.movies[a] = b;
// personalMivieDB.movies[c] = d;

// console.log(personalMivieDB);  

//Оптимизация через цикл for. 
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов ?", ""),
        b = prompt("На сколько оцените его ?", "");
    if (a != null && b != null && a != " " && b != '' && a.length < 50) {
        personalMivieDB.movies[a] = b;
        console.log('ok');
    } else {
        console.log('error');
        i--;
    }

}


if (personalMivieDB.count < 10) {
    console.log('Мало фильмов');
} else if (personalMivieDB.count >= 10 && personalMivieDB.count < 30) {
    console.log('Классика просмотра');
} else if (personalMivieDB.count >= 50) {
    console.log('Иди работать!');
} else {
    console.log('Error');
}

console.log(personalMivieDB);