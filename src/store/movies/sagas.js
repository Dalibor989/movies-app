import { addMovie, getMovies, setMovies } from "./slice";
import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";

function* handleGetMovies(action) {
    try {
        const movies = yield call(movieService.getAll, action.payload);
        console.log('Get movies: ', movies)
        yield put(setMovies(movies));   
    } catch (error) {
        console.log(error);
    }
}

function* addMovieHandler(action) {
    try {
        const movie = yield call(movieService.addMovie, action.payload);

        yield put(setMovies(movie));
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