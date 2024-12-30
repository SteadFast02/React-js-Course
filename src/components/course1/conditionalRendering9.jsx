import React from "react";

const ConditionalRendering9 = () => {
  const name = "Movie name";
  let age = 17;
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, voluptatem doloremque quidem provident eligendi modi ea amet eum voluptates accusamus reiciendis ipsum quibusdam minima, voluptatum exercitationem numquam officia excepturi, nesciunt eaque veniam iusto tempora corporis? Officiis quod, est eos magnam earum ratione odio sed facere. Atque libero necessitatibus facilis veniam.";

  const returnGenre = () => {
    const genre = "ROMCOM";
    return genre;
  };

  let isWatch = "You can Watch";
  if (age <= 18) {
    isWatch = "Age Restricted to Watch";
  }

  return (
    <>
      <div style={{ border: "white 1px solid" }}>
        <div>
          <img src="movie.jpg" alt="" width="40%" height="40%" />
          <h2>Name: {name}</h2>
          <h3>Rating:{rating}</h3>
          <p>Summary:{summary}</p>
          <p>Genre : {returnGenre()}</p>
          <p>Age : {age}</p>
          <button>{age <= 18 ? "Age restricted" : "Click Here"}</button>
          <button>{isWatch}</button>
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering9;
