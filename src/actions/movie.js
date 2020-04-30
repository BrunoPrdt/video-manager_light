/**
 * src/actions/movie.js
 * @author Bruno Prdt
 */
import { ADD_MOVIE, REMOVE_MOVIE, GET_NUMBER, GET_MOVIES } from "./types";

export  const addMovie = movie => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
        movies = [...movies, movie];
    } else {
        movies = [];
        movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: ADD_MOVIE,
        payload: movies
    }
};

export const removeMovie = movieId => {
    const oldMovies = JSON.parse(localStorage.getItem("movies"));
    // eslint-disable-next-line no-undef
    const movies = oldMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: REMOVE_MOVIE,
        payload: movies
    }
};

export const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    return {
        type: GET_MOVIES,
        payload: movies
    }
};

export const getNumber = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    let number;
    if (movies) {
        number = movies.length;
    } else {
        number = 0;
    }
    return {
        type: GET_NUMBER,
        payload: number
    }
};

