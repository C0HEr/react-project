import React from "react";

function ButtonReact(props) {
  let gererClick=( nom )=>{
    alert('Hello : '+nom)
  }

  return (
    <button
      className="btn btn-outline-secondary mx-2"
      disabled={props.disabled}
      onClick={props.onClick}
    //   onClick={()=>gererClick(props.nom)}
    >
      {props.children}
    </button>
  );
}

export default ButtonReact;
