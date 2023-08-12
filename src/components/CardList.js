import React, { useState, useEffect, useRef } from "react";
import CardFormat from "./CardFormat";

const CardList = (props) => {
  const recepies = [];
  const [dishes, setDishes] = useState(recepies);
  // const [current, setCurrent] = useState(1);
  // const [error, setError] = useState(false);
  // const [totalResult, setTotalResult] = useState(0);

  const link = useRef(null);

  useEffect(() => {
    fetchFood();
    // eslint-disable-next-line
  }, []);

  // const api = "1b31215237dd427e9cb176ccb8226514";
  // const api = "f396a4ddbf134e2dbf2f3a6b977afaa9";
  const api = "6873bf6e3266410997e78993ea61de9a";

  const fetchFood = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api}&page=1&pageSize=5`;
    let response = await fetch(url);
    let responseJson = await response.json();
    setDishes(responseJson.articles);

    // setTotalResult(parsedData);
    // console.log(responseJson.results);
  };

  const wordCapitaliser = (word) =>{
    return word.slice(0,1).toUpperCase() + word.slice(1);
  }

  return (
    <>
      <div className="container headings"><b>{props.category === "general" ? "Trending" : wordCapitaliser(props.category)}</b></div>
      <div className="lists">
        {dishes.map((food) => {
          const onClick = () => {
            link.current.click(); 
          }
          return (
            <div className="list-item" key={food.url}>
              <CardFormat
                image={!food.urlToImage ? "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" : food.urlToImage}
                title={!food.title ? "" : food.title}
                desc={!food.description ? "" : food.description.length > 90 ? food.description.slice(0,91) : food.description}
                link={food.url}
                openLink={onClick}
                source={!food.source.name ? "" : food.source.name.length > 15 ? food.source.name.slice(0,18) : food.source.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
