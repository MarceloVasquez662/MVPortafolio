import React, { Component } from "react";
import Logo from "../imagenes/logo.svg";
import Scroll from "./miniComponentes/Scroll";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg">
          <a className="navbar-brand" href="/">
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
            <div className="navbar-nav">
              <Scroll hacia="banner" clase="nav-item nav-link" texto="Inicio" />
              <Scroll
                hacia="acercade"
                clase="nav-item nav-link"
                texto="Acerca de mía"
              />
              <Scroll
                hacia="contacto"
                clase="nav-item nav-link"
                texto="Contacto"
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
