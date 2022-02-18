import React, { Component } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Acerca from "./componentes/Acerca";
import Linea from "./componentes/Linea"
import Contacto from "./componentes/Contacto";
import Proyectos from "./componentes/Proyecto"
import Footer from "./componentes/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Navbar />
          <Banner
            titulo="Portafolio"
            subtitulo="Marcelo Vasquez"
            subtitulo2="Titulado Analista Programador Año 2019"
          />
        </div>
        <div className="acercade">
          <Acerca />
        </div>
        <hr width="80%" />
        <div className="lineaTiempo">
          <Linea />
        </div>
        <hr width="80%" />
        <div className="proyectos">
          <Proyectos />
        </div>
        <hr width="80%" />
        <div className="contacto">
          <Contacto />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
