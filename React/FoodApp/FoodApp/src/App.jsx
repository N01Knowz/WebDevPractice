import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <Header searchResult={searchResult} setSearchResult={setSearchResult} />
    </>
  );
}

export default App;
