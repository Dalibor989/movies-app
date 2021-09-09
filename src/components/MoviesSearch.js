import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import _ from "lodash";

function MoviesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const search = () => {
    console.log("debounced search", { searchTerm });
    if (!searchTerm || searchTerm.length > 2) {
      dispatch(getMovies(searchTerm));
    }
  };

  const debouncedChange = useCallback(
    _.debounce(handleChangeSearchTerm, 500),
    []
  );

  useEffect(() => {
    console.log("use effect", searchTerm);
    search();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        onChange={debouncedChange}
        placeholder="Search movies"
      />
    </div>
  );
}

export default MoviesSearch;