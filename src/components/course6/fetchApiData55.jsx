import React, { useState, useEffect } from "react";

const FetchApiData55 = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  }, []);
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

export default FetchApiData55;
