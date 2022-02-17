import React, { Component } from "react";
import Scroll from "./miniComponentes/Scroll";

export default class Banner extends Component {
  render() {
    return (
      <div className="textoBanner">
        <div className="hps">
          <h1>{this.props.titulo}</h1>
          <h6>
            {this.props.subtitulo} <br /> {this.props.subtitulo2}
          </h6>
        </div>
        <Scroll
          hacia="acercade"
          clase="btn btn-success mr-2 col-4 mb-5"
          texto="Acerca de mi"
        />
        <Scroll
          hacia="contacto"
          clase="btn btn-info col-4 mb-5"
          texto="Contactanos"
        />
      </div>
    );
  }
}
