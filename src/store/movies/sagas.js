import { getMovies, setMovies } from "./slice";
import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";

function* handleGetMovies() {
    try {
        const movies = yield call(movieService.getAll);
        console.log(movies);
        yield put(setMovies(movies));   
    } catch (error) {
        console.log(error);
    }
}

export function* watchGetMovies() {
    yield takeLatest(getMovies.type, handleGetMovies);
}