import React, { Component } from 'react'
import logoLinea from "../imagenes/logoLinea.svg"

export default class Linea extends Component {
    render() {
        return <div className='container p-5'>
            <div className="row">
                <img
                    src={logoLinea}
                    alt="Linea de tiempo"
                    width="30"
                    height="30"
                    className="mr-2"
                />
                <h1>Linea de tiempo</h1>
            </div>
            <div>
                <ul className='timeline'>
                    <li>
                        <p>Ingreso Analista Programador (2017)</p>
                        <p>Comienzo carrera en CFT Inacap, estudiando las bases de la programacion y el pseudocodigo</p>
                    </li>
                    <li>
                        <p></p>
                        <p></p>
                    </li>
                </ul>
            </div>

        </div>
    }
}