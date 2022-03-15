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
          <p>Titulado de la carrera Analista Programador, año 2019, CFT Inacap Valdivia.
            Con el manejo de  Java, C#, PHP, además de bases de datos relacionales (SQL) y creación de páginas mediante React o Django, logro desarrollar proyectos personales y academicos. Estoy en constante aprendizaje para tener conocimientos y alternativas de desarrollo y siempre mejorando para crecer como profesional.
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
