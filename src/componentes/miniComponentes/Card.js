import React from "react";

function Card(props) {
  return (
    <div className="tarjeta text-center" style={{ backgroundImage: `url(${props.imagen})` }}>
      <div className="cuerpo">
        <div className="texto">
          <h5 className="">{props.titulo}</h5>
          <p className="">{props.cuerpo}</p>
        </div>
        <div className="botones mb-3">
          <a href={props.linkCode} target="blank" className="btn btn-primary col-5 m-1 ">Código</a>
          {props.linkDemo ? <a href={props.linkDemo} target="blank" className="btn btn-warning m-1 col-5 ">Demo</a> : null}
        </div>
      </div>
    </div >
  );
}

export default Card;
