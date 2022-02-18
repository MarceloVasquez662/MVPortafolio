import React, { Component } from "react";
import LogoAcerca from "../imagenes/Acerca.svg";


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
        <div className="row justify-content-center">
          <p>Titulado de la carrera Analista Programador, año 2019, CFT Inacap Valdivia.
            Principiante en el mundo de la programacion, con ganas de aprender nuevas tecnologias
            e intentando mejorar y pulir lo aprendido. Los lenguajes y tecnologias que pude aprender durante mi desarrollo tecnico fueron
            <strong> Java</strong>, <strong>C#</strong>, <strong>PHP</strong>, ademas de manejos de datos relacionales (SQL)
            y creación de paginas web con <strong>CSS</strong>, <strong>Javascript</strong> y <strong>Bootstrap</strong>.

          </p>
          <p>De manera personal, intento desarrollarme personalmente y he logrado tener conocimientos basicos para tener alternativas
            de desarrollo a lo aprendido. Lenguajes como <strong>Python</strong>, junto a su framework web <strong>Django</strong> y
            lo basico de <strong>ReactJS</strong> para desarrollar aplicaciones web.
          </p>
        </div>
      </div>
    );
  }
}
