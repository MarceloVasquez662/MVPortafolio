import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.imagen}
        width={props.ancho}
        height={props.alto}
        alt="React"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{props.titulo}</h5>
        <p className="card-text">{props.cuerpo}</p>
      </div>
      <div className="card-footer text-center">
        <a href={props.link} target="blank" className="btn btn-primary">Ir al proyecto</a>
      </div>
    </div>
  );
}

export default Card;
