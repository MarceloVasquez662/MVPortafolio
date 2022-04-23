import React, { Component } from "react";
import TituloSeccion from "./miniComponentes/TituloSeccion";
import LogoAcerca from "../imagenes/iconosSecciones/logoAcerca.svg";
import curriculum from "../imagenes/CV.pdf"


export default class Acerca extends Component {
  render() {
    return (
      <div className="container p-5 ">
        <TituloSeccion
          imagen={LogoAcerca}
          titulo={"Acerca de mí"}
        />
        <div className="textoAcerca">
          <p>Analista Programador, proactivo, aprendiendo constantemente y buscando nuevas tecnologías para continuar
            mejorando. Mi objetivo es ofrecer soluciones de calidad, mejorando la experiencia del usuario a través del uso
            de aplicaciones. Lo que mas me gusta de mi profesión es resolver problemas, equivocarme y lograr solucionar
            mediante el estudio y las pruebas.
          </p>
          <p>Entusiasta, curioso y preparado para enfrentar retos, con muchas ganas de innovar y absorber toda la información.</p>
        </div>
        <div className="text-center">
          <a className="btn btn-info" href={curriculum} download="CV Marcelo Vasquez">Descargar CV</a>
        </div>
      </div>
    );
  }
}
