import { addMovie, getMovies, setMovies, getMovie, setMovie } from "./slice";
import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";

function* handleGetMovies(action) {
    try {
        const movies = yield call(movieService.getAll, action.payload);
        
        yield put(setMovies(movies));   
    } catch (error) {
        console.log(error);
    }
}

function* handleGetMovie(action) {
    try {
        const movie = yield call(movieService.getMovie, action.payload);
        
        yield put(setMovie(movie));
    } catch (error) {
        console.log(error);
    }
}

function* addMovieHandler(action) {
    try {
        const movie = yield call(movieService.addMovie, action.payload);
    } catch (error) {
        console.log('Add Movie', error);
    }
}

export function* watchGetMovies() {
    yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchAddMovie() {
    yield takeLatest(addMovie.type, addMovieHandler);
}

export function* watchGetMovie() {
    yield takeLatest(getMovie.type, handleGetMovie);
}