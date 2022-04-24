import React, { Component } from "react";
import Logo from "../imagenes/logo.svg";
import Scroll from "./miniComponentes/Scroll";
import { Link } from "react-scroll"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top ">
        <Link className="navbar-brand" to="navbar" spy={true} smooth={true}>
          <img src={Logo} height="30" width="30" alt="logo"></img>
        </Link>
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
