import React from "react"

import ReactDOM from "react-dom"

function Card(props){

  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src={props.imageLink}
            alt="myPic"
            className="card__img"
          />
          <div className="card__info">
            <span className="card__category"> {props.name}</span>
            <h3 className="card__title">{props.title}</h3>
            <a
              href={props.sLink}
              target="_blank"
            >
              <button> Watch now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <>
    <Card
      imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ivwH1p2Q0m_2WOVPSoeJO6XCOReSGVc-g0vVifHnQ&s"
      name="A Netflix original series"
      sLink="https://www.netflix.com/watch/80114790?trackId=14277281"
      title="DARK"
    />
    <Card
      imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ivwH1p2Q0m_2WOVPSoeJO6XCOReSGVc-g0vVifHnQ&s"
      name="A Netflix original series"
      sLink="https://www.netflix.com/watch/81038343?trackId=14277281"
      title="Extra Curricular"
    />
    <Card
      imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YcnIjA8lOzVvNQbQQ48zbYs5J2IfhB9LZqtl5Eo&s"
      name="A Netflix original series"
      sLink="https://www.netflix.com/watch/80077368?trackId=14277281"
      title="Stranger Things"
    />
  </>,
  document.getElementById("root")
);