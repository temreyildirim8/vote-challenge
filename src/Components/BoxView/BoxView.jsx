import React from "react";
import "./BoxView.css";

function BoxView(props) {
  return (
    <div className="box-view">
      <div
        className="box-view-text"
        style={props.subText === undefined ? { fontSize: "45px" } : {}}
      >
        {props.text}
      </div>
      <div>{props.subText}</div>
    </div>
  );
}

export default React.memo(BoxView);
