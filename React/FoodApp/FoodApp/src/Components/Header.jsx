import { useEffect, useState } from "react";

const apiURL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false";
const API_KEY = "7a7404fea70343b6cd99f801252513c4";
function Header({ searchResult, setSearchResult }) {
  const [searchQuery, setSearchQuery] = useState("pasta");
  //   const [testQuery, setTestQuery] = useState("");
  //Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${apiURL}&api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setSearchResult(data.results);

      //   try {
      //     const res = await fetch(
      //       `${apiURL}?query=${searchQuery}&apiKey=${API_KEY}`
      //     );
      //     const data = await res.json();
      //     setSearchResult(data.results);
      //   } catch (error) {
      //     console.error("Error fetching data:", error);
      //   }
    }
    fetchFood();
    // function demo() {
    //   console.log("HELLO FROM FOOD APP");
    // }
    // demo();

    // console.log(`${apiURL}?query=${searchQuery}&apiKey=${API_KEY}`);
  }, [searchQuery]);
  //   function demo() {
  //     console.log("HELLO FROM FOOD APP");
  //   }
  return (
    <>
      <header>
        <div>
          <input
            type="text"
            name="searchQuery"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Recipe"
            id="searchQuery"
            value={searchQuery}
          />
          {/* <input
            type="text"
            name="searchQuery"
            onChange={(e) => setTestQuery(e.target.value)}
            placeholder="Search Recipe"
            id="searchQuery"
            value={testQuery}
          /> */}
        </div>
      </header>
    </>
  );
}

export default Header;
