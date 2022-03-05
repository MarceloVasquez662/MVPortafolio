import React from "react";

export default function ContactoCard(props) {
    return (
        <div className="cardContacto m-4 text-center">
            <a href={props.href} target='_blank' rel="noopener noreferrer">
                <img src={props.logo} alt="Contacto" width="50" height="50" />
            </a>
            <p>{props.nombre}</p>
        </div>
    )
}