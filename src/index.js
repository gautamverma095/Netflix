import React from "react"

import ReactDOM from "react-dom"
import Card from "./Card"
import "./index.css"
import Sdata from "./Sdata"
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series</h1>
    <Card
      imageLink={Sdata[0].imageLink}
      name={Sdata[0].name}
      sLink={Sdata[0].sLink}
      title={Sdata[0].title}
    />
    <Card
      imageLink={Sdata[1].imageLink}
      name={Sdata[1].name}
      sLink={Sdata[1].sLink}
      title={Sdata[1].title}
    />
    <Card
      imageLink={Sdata[2].imageLink}
      name={Sdata[2].name}
      sLink={Sdata[2].sLink}
      title={Sdata[2].title}
    />
    <Card
      imageLink={Sdata[3].imageLink}
      name={Sdata[3].name}
      sLink={Sdata[3].sLink}
      title={Sdata[3].title}
    />
    <Card
      imageLink={Sdata[2].imageLink}
      name={Sdata[2].name}
      sLink={Sdata[2].sLink}
      title={Sdata[2].title}
    />
  </>,
  document.getElementById("root")
);