import React, { Component } from "react";
import LogoAcerca from "../imagenes/Acerca.svg";
import Card from "./Card";

export default class Acerca extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <img
            src={LogoAcerca}
            alt="Acerca de la pagina"
            width="30"
            height="30"
            className="mr-2"
          />
          <h1>Acerca de la pagina</h1>
        </div>
        <div className="row justify-content-center">
          <Card
            titulo="Primera pagina estatica creada con ReactJS"
            cuerpo="Luego de revisar lo mas importante de React, se aplica en esta pagina, dejando fuera algunas caracteristicas como React Router o el consumo de APIs. "
            imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/2300px-React.svg.png"
          />
          <Card
            titulo="Los iconos utilizados pertenecen a Flaticon.es"
            cuerpo="No son de mi autoria, por lo que se pueden encontrar todos en su pagina. "
            imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"
          />
          <Card
            titulo="Componentes como estructura"
            cuerpo="La base son los componentes. Es por esto que la estructuracion se basa en estos. "
            imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Componente_01.svg/2560px-Componente_01.svg.png"
          />
        </div>
      </div>
    );
  }
}
