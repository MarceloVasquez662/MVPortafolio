import React, { Component } from "react";
import Logo from "../imagenes/logo.svg";
import Scroll from "./miniComponentes/Scroll";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top ">
        <a className="navbar-brand" href="https://marcelovasquez662.github.io/react_spa/">
          <img src={Logo} width="30" height="30" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          data-target="#menu"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Scroll hacia="banner" clase="nav-link" texto="Inicio" />
            </li>

            <li className="nav-item">
              <Scroll
                hacia="acercade"
                clase="nav-link"
                texto="Acerca de mí"
              /></li>

            <li className="nav-item">
              <Scroll
                hacia="linea"
                clase="nav-link"
                texto="Línea de Tiempo"
              /></li>

            <li className="nav-item">
              <Scroll
                hacia="proyectos"
                clase="nav-link"
                texto="Proyectos"
              /></li>

            <li className="nav-item">
              <Scroll
                hacia="contacto"
                clase="nav-link"
                texto="Contacto"
              /></li>

          </ul>
        </div>
      </nav>
    );
  }
}
