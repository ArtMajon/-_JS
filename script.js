const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", " ");

const personalMivieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const   a = prompt("Один из последних просмотренных фильмов ?", ""),
        b = prompt("На сколько оцените его ?", ""),
        c = prompt("Один из последних просмотренных фильмов ?", ""),
        d = prompt("На сколько оцените его ?", "");

personalMivieDB.movies[a] = b;
personalMivieDB.movies[c] = d;

console.log(personalMivieDB);