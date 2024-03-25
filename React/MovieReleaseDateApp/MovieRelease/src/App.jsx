import { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Logo from "./assets/lickytongueLogo.png";
import { Helmet } from "react-helmet";
import MovieDescriptionModal from "./components/MovieDescriptionModal";

function App() {
  // Get today's date
  const today = new Date();
  // Format the date as yyyy-mm-dd
  const formattedDate = today.toISOString().slice(0, 10);

  const [searchStartDate, setSearchStartDate] = useState(formattedDate);
  const [searchEndDate, setSearchEndDate] = useState(formattedDate);
  const [movieID, setMovieID] = useState();
  const [showMovieDescriptionModal, setShowMovieDescriptionModal] =
    useState(false);

  // useEffect(() => {
  //   console.log(movieID);
  // }, [movieID]);
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} type="image/png" />
      </Helmet>
      <Header
        searchStartDate={searchStartDate}
        searchEndDate={searchEndDate}
        setSearchStartDate={setSearchStartDate}
        setSearchEndDate={setSearchEndDate}
      />
      <Content
        searchStartDate={searchStartDate}
        searchEndDate={searchEndDate}
        setMovieID={setMovieID}
        setShowMovieDescriptionModal={setShowMovieDescriptionModal}
      />
      {showMovieDescriptionModal && (
        <MovieDescriptionModal
          movieID={movieID}
          setShowMovieDescriptionModal={setShowMovieDescriptionModal}
        />
      )}
    </>
  );
}

export default App;
