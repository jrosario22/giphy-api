import React from "react";

function Results(props) {
  return (
    <div>
      {/* <h2>{props.i.title}</h2> */}
      <img src={props.i.images.downsized_large.url} alt="default" />
    </div>
  );
}

export default Results;
