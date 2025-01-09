import React from "react";
import { useState } from "react";

const NotFetchApiData = () => {
  const [apiData, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      // Not a correct way to fetch and set api data useState update data and re render component and again set data this go in infinte loop
      //   console.log(data);
      //   setApiData(data);
    });
  return (
    <div>
      <ul>
        Data :
        {apiData.map((currData) => {
          return <li key={apiData.userId}>{currData.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default NotFetchApiData;
