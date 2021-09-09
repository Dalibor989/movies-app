import { getMovies, setMovies } from "./slice";
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

export function* watchGetMovies() {
    yield takeLatest(getMovies.type, handleGetMovies);
}