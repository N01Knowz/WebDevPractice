import React, { useEffect, useState } from "react";
import styles from "../css/content.module.css";
import MovieCards from "./MovieCards";

function Content({
  searchStartDate,
  searchEndDate,
  setMovieID,
  setShowMovieDescriptionModal,
}) {
  const apiURL = "https://api.themoviedb.org/3/discover/movie?";

  const API_KEY = "7a7404fea70343b6cd99f801252513c4";

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `${apiURL}include_adult=true&include_video=false&language=en-US&page=1&region=PH&release_date.gte=${searchStartDate}&release_date.lte=${searchEndDate}&api_key=${API_KEY}`
      );
      const data = await res.json();
      // console.log(data);
      // console.log(data.results);
      setSearchResult(data.results);
    }
    fetchMovie();
  }, [searchStartDate, searchEndDate]);
  return (
    <>
      <div className={styles.content}>
        <MovieCards
          searchResult={searchResult}
          setMovieID={setMovieID}
          setShowMovieDescriptionModal={setShowMovieDescriptionModal}
        />
      </div>
    </>
  );
}
export default React.memo(Content); //React.memo makes it so that whenever the parent component re-renders. The variables used in the child component is saved and reused.
