import React, { Component } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Acerca from "./componentes/Acerca";
import Linea from "./componentes/Linea"
import Proyectos from "./componentes/Proyecto"
import Contacto from "./componentes/Contacto"
import Footer from "./componentes/Footer";

export default class App extends Component {
  render() {
    return (
      <div >
        <div className="navbar">
          <Navbar />
        </div>

        <div className="banner">
          <Banner
            subtitulo="Marcelo Vasquez"
            subtitulo2="Titulado Analista Programador Año 2019"
          />
        </div>

        <div className="container">
          <hr width="100%" className="acercade" />
        </div>
        <Acerca />

        <div className="container">
          <hr width="100%" className="linea" />
        </div>
        <Linea />

        <div className="container">
          <hr width="100%" className="proyectos" />
        </div>
        <Proyectos />

        <div className="container">
          <hr width="100%" className="contacto" />
        </div>
        <Contacto />


        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
