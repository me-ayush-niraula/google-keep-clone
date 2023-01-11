import React from "react";
import "./Createnote.css";

export const Createnote = () => {
  const expandInput = () => {
    var lol = document.querySelector(".miniInput");
    var lol1 = document.querySelector(".maxInput");
    lol.style.display = "none";
    lol1.style.display = "";
  };
  const closeExpand = () => {
    var lol = document.querySelector(".miniInput");
    var lol1 = document.querySelector(".maxInput");
    lol.style.display = "";
    lol1.style.display = "none";
  };
  return (
    <div className="createNote container">
      <input className="miniInput" type="text" onClick={expandInput} placeholder="mini" />
      <div className="maxInput" style={{ display: "none" }}>
        <input type="text" onClick={expandInput} placeholder="maxi" />
        <button onClick={closeExpand}>close</button>
      </div>
    </div>
  );
};
