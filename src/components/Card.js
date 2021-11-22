import React from "react";
import Button from "react-bootstrap/Button";

const Card = (props) => {
  return (
    <div className="cards my-2 p-4">
      <h5 className="my-3 text-light">{props.dato || props.dat}</h5>
      <div
        className="color-container"
        style={{ background: props.dato || props.dat }}
      ></div>
      <Button
        className="rounded-pill my-3 bg-button w-75"
        onClick={() => props.borrarColor(props.dato || props.dat)}
      >
        Borrar
      </Button>
    </div>
  );
};

export default Card;
