import React from 'react';

export default function TituloSeccion(props) {
    return (
        <div className="text-center mb-5">
            <img
                src={props.imagen}
                alt="Seccion"
                width="30"
                height="30"
                className="m-2"
            />
            <h1 >{props.titulo}</h1>
        </div>
    );
}