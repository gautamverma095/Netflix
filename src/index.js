import React from "react"

import ReactDOM from "react-dom"
import Card from "./Card"
import "./index.css"
import Sdata from "./Sdata"

// function nCard(el,index,arr){
// return (
//   <Card
//     imageLink={el.imageLink}
//     name={el.name}
//     sLink={el.sLink}
//     title={el.title}
//   />
// );
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series</h1>
  
    {Sdata.map((el) => {   
          return (
  <Card
    imageLink={el.imageLink}
    name={el.name}
    sLink={el.sLink}
    title={el.title}
  />
);
    })}
   
  </>,
  document.getElementById("root")
);