import { useEffect, useState } from "react";
import styles from "../css/moviedescriptionmodal.module.css";
import { createPortal } from "react-dom";
function MovieDescriptionModal({ movieID, setShowMovieDescriptionModal }) {
  const apiURL = "https://api.themoviedb.org/3/movie/";

  const API_KEY = "7a7404fea70343b6cd99f801252513c4";
  const [movieResult, setMovieResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(`${apiURL}${movieID}?api_key=${API_KEY}`);
      const data = await res.json();
      setMovieResult(data);
      console.log(data);
      setIsLoading(false);
      // console.log(data.results);
    }
    fetchMovie();
  }, []);
  const handleBackgroundClick = () => {
    // Handle content click here
    setShowMovieDescriptionModal(false);
    // Prevent event propagation to the background
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };
  return createPortal( //Portal allows the component to ignore the placement allowing you to directly render the component to a certain component with the ID
    <>
      {isLoading && (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.content} onClick={handleContentClick}>
            Loading...
          </div>
        </div>
      )}

      {!isLoading && movieResult && (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.content} onClick={handleContentClick}>
            <img
              className={styles.movieImage}
              src={`https://image.tmdb.org/t/p/original${movieResult.poster_path}`}
              alt="Movie Image"
            />
            <p className={styles.movieTitle}>{movieResult.original_title}</p>
            <p className={styles.releaseDate}>
              {formatDate(movieResult.release_date)}
            </p>
            <div className={styles.genres}>
              {movieResult.genres &&
                movieResult.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
            </div>
            <p>{movieResult.overview}</p>
          </div>
        </div>
      )}
    </>
  ,document.getElementById('modal'));
}
export default MovieDescriptionModal;
