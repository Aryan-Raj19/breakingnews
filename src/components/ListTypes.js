import React from "react";
import CardList from "./CardList";

const ListTypes = (props) => {
    const {country} = props;
  return (
    <div>
      <CardList category="general" country={country} />
      <CardList category="business" country={country} />
      <CardList category="sports" country={country} />
      <CardList category="health" country={country} />
      <CardList category="science" country={country} />
      <CardList category="technology" country={country} />
      <CardList category="entertainment" country={country} />
    </div>
  );
};

export default ListTypes;
