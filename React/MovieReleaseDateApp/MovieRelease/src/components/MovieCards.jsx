import React from "react";
import styles from "../css/moviecards.module.css";
function MovieCards({
  searchResult,
  setMovieID,
  setShowMovieDescriptionModal,
}) {
  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const handleMovieClick = (id) => {
    setMovieID(id);
    setShowMovieDescriptionModal(true);
  };
  return (
    <>
      {searchResult.map((result, index) => (
        <div
          key={index}
          className={styles.movieCard}
          onClick={() => handleMovieClick(result.id)}
        >
          <div className={styles.cardImageContainer}>
            <img
              className={styles.cardImage}
              src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
              alt="Movie Image"
            />
          </div>
          <div className={styles.cardDescriptionContainer}>
            <p className={styles.cardTitle}>{result.original_title}</p>
            <p className={styles.cardReleaseDate}>
              {formatDate(result.release_date)}
            </p>
            <p className={styles.cardOverview}>{result.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default React.memo(MovieCards);
