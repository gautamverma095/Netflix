import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


function App(){
    return (
      <>
        <h1 className="heading_style">List of top 5 Netflix Series</h1>

        {Sdata.map((el) => {
          return (
            <Card
              key={el.id}
              imageLink={el.imageLink}
              name={el.name}
              sLink={el.sLink}
              title={el.title}
            />
          );
        })}
      </>
    );
}
export default App