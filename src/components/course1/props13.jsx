import React from "react";

// const Props13 = (props) => {
//   console.log(props)

// Destructuring Props
const Props13 = ({ items }) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    items;

  const ratingStyle = rating >= 8 ? "green" : rating < 5 ? "red" : "yellow";
  return (
    <>
      <li
        style={{
          // background: " #e5e5e5",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div>
          <div>
            <img src={img_url} alt="" width="100%" height="100%" />
            <div style={{ padding: "1rem" }}>
              <h2>Name: {name}</h2>
              <h3>
                Rating:{" "}
                <span className={`rating-style ${ratingStyle}`}>{rating}</span>{" "}
              </h3>
              <p className="text-3xl font-bold underline">
                <strong>Summary:</strong> {description}
              </p>
              <p>
                <strong>Cast:</strong> {cast}
              </p>
              <p>
                <strong>Genre:</strong> {genre}
              </p>
              <a href={watch_url} target="_blank">
                <button className={`${ratingStyle}`}>Click here</button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Props13;
