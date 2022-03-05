import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h5 className="card-text">{props.titulo}</h5>
      </div>
      <img
        src={props.imagen}
        width={props.ancho}
        height={props.alto}
        alt="React"
        className="card-img"
      />
      <div className="card-body">
        <hr />
        <p className="card-text">{props.cuerpo}</p>
      </div>
      <div className="card-footer">
        <a href={props.linkCode} target="blank" className="btn btn-primary col-5 m-1">Codigo</a>
        {props.linkDemo ? <a href={props.linkDemo} target="blank" className="btn btn-warning m-1 col-5">Demo</a> : null}
      </div>
    </div >
  );
}

export default Card;
