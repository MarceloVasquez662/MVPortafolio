import React from "react";

function Card(props) {
  return (
    <article className="m-3 p-3 text-center">
      <div className="imagenCard">
        <img
          src={props.imagen}
          alt="React"
          width={props.ancho}
          height={props.alto}
          className="mx-auto"
        />
      </div>
      <div className="textoCard">
        <h5>{props.titulo}</h5>
        <p>{props.cuerpo}</p>
        <a href={props.link} target="blank">Ir al proyecto</a>
      </div>
    </article>
  );
}

export default Card;
