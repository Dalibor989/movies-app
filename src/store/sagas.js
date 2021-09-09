import * as moviesSagas from "./movies/sagas";
import * as activeUserSagas from "./activeUser/sagas";

const sagas = {
    ...moviesSagas,
    ...activeUserSagas,
}

export default sagas;