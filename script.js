// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// let numberOfFilms;


// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");
//     }
// }

// start();

// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// function LastFilm() {


//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов ?", ""),
//             b = prompt("На сколько оцените его ?", "");
//         if (a != null && b != null && a != " " && b != '' && a.length < 50) {
//             personalMoviesDB.movies[a] = b;
//             console.log('ok');
//         } else {
//             console.log('error');
//             i--;
//         }

//     }

// }
// LastFilm();


// function personalLvl() {
//     if (personalMoviesDB.count < 10) {
//         console.log('Мало фильмов');
//     } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
//         console.log('Классика просмотра');
//     } else if (personalMoviesDB.count >= 50) {
//         console.log('Иди работать!');
//     } else {
//         console.log('Error');
//     }
// }
// personalLvl();

// console.log(personalMoviesDB);


function LearnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

LearnJS('JavaScript', done);