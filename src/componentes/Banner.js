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
          clase="link btn btn-success"
          texto="Acerca de mi"
        />
        <Scroll
          hacia="contacto"
          clase="link btn btn-info"
          texto="Contacto"
        />
      </div>
    );
  }
}
