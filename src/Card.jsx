import React from "react";
import Images from "./Images";

function Card(props){

  // console.log(props)
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imageLink = {props.imageLink}/>
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
    )
}

export default Card