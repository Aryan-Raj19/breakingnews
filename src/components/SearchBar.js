import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [dishes, setDishes] = useState([]);
  const [query, setQuery] = useState("");

//   useEffect(() => {
//     searchNews();
//   }, []);

//   // const api = "1b31215237dd427e9cb176ccb8226514";
//   const api = "f396a4ddbf134e2dbf2f3a6b977afaa9";
// //   const api = "6873bf6e3266410997e78993ea61de9a";

//   const searchNews = async (query) => {
//     const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api}`;
//     let response = await fetch(url);
//     let responseJson = await response.json();
//     setDishes(responseJson.articles);

//     // setTotalResult(parsedData);
//     // console.log(responseJson.results);
//   };
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-3"
          type="text"
          placeholder="Search"
          name="query"
          id="query"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* {dishes.filter((result) => {
            if (query === "") {
              return result;
            } else if (
              result.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return result;
            }
            return result;
          })
          .map((result) => {
            return (
              <div className="container search-item">
                <p>{result.title}</p>
              </div>
            );
          })} */}
        <button className="btn btn-outline-danger" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
