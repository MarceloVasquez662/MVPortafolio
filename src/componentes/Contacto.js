import React, { Component } from "react";

export default class Contacto extends Component {

  contacto = e => {


    e.preventDefault();
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let mensaje = document.getElementById("mensaje").value

    let contacto = document.getElementById("contacto")
    contacto.setAttribute("href", `mailto: marcelovasquez662@gmail.com?subject = ${nombre}${email}& body=${mensaje}`)
    contacto.click()
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <img
            src="https://svgsilh.com/svg/304080.svg"
            width="30"
            height="30"
            alt="Contacto"
            className="mr-2"
          />
          <h1>Contacto</h1>
        </div>{" "}
        <form id="form" onSubmit={this.contacto} className="form">
          <div className="form-group col-12">
            <input
              id="nombre"
              name="nombre"
              className="form-control"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="form-group col-12">
            <input
              id="email"
              name="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              type="email"
              required
            />
          </div>
          <div className="form-group col-12">
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-control "
              placeholder="Tu mensaje"
              required
            />
          </div>
          <div className="text-center">
            <input type="submit" className="btn btn-success col-auto" value="Enviar mensaje"></input>
          </div>
        </form>
        <a href="mailto:marcelovasquez662@gmail.com" id="contacto"></a>
      </div >
    );
  }
}

