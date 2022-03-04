import React, { Component } from "react";
import Scroll from "./miniComponentes/Scroll";
import fotoPerfil from "../imagenes/fotoPerfil.jpg"

export default class Banner extends Component {
  render() {
    return (
      <div className="textoBanner">
        <div className="hps">
          <img src={fotoPerfil} alt="Marcelo" className="imagenPerfil"></img>
          <h6>
            {this.props.subtitulo} <br /> {this.props.subtitulo2}
          </h6>
        </div>
        <Scroll
          hacia="acercade"
          clase="link btn btn-success"
          texto="Acerca de mí"
        />
      </div>
    );
  }
}
