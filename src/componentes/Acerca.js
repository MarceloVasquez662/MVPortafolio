import React, { Component } from "react";
import LogoAcerca from "../imagenes/iconosSecciones/logoAcerca.svg";
import curriculum from "../imagenes/CV.pdf"


export default class Acerca extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <img
            src={LogoAcerca}
            alt="Acerca de mi"
            width="30"
            height="30"
            className="mr-2"
          />
          <h1>Acerca de mi</h1>
        </div>
        <p>Titulado de la carrera Analista Programador, año 2019, CFT Inacap Valdivia.
          Principiante en el mundo de la programación, con ganas de aprender nuevas tecnologías
          e intentando mejorar y pulir lo aprendido. Lo que pude aprender durante mi desarrollo técnico fueron
          <strong> Java</strong>, <strong>C#</strong>, <strong>PHP</strong>, además de manejos de datos relacionales (SQL)
          y creación de páginas web con <strong>CSS</strong>, <strong>Javascript</strong> y <strong>Bootstrap</strong>.

        </p>
        <p>De manera personal, intento desarrollarme personalmente y he logrado tener conocimientos básicos para tener alternativas
          de desarrollo a lo aprendido. Lenguajes como <strong>Python</strong>, junto a su framework web <strong>Django</strong> y
          lo básico de <strong>ReactJS</strong> para desarrollar aplicaciones web.
        </p>
        <div className="text-center">
          <a className="btn btn-info" href={curriculum} download="CV Marcelo Vasquez">Descargar CV</a>
        </div>
      </div>
    );
  }
}
