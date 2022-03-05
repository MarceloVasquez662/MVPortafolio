import React, { Component } from 'react'
import logoLinea from "../imagenes/iconosSecciones/logoLinea.svg"

export default class Linea extends Component {
    render() {
        return <div className='container p-5'>
            <div className="row">
                <img
                    src={logoLinea}
                    alt="Línea de tiempo"
                    width="30"
                    height="30"
                    className="mr-2"
                />
                <h1>Linea de tiempo</h1>
            </div>
            <div>
                <ul className='timeline'>
                    <li>
                        <strong><p>Ingreso Analista Programador (2017)</p></strong>
                        <p>Comienzo carrera en CFT Inacap, estudiando las bases de la programación y el pseudocódigo</p>
                    </li>
                    <li>
                        <strong><p>Tercer Semestre (2018)</p></strong>
                        <p>Diseño Web, diseño de aplicaciones móviles y bases de datos relacionales</p>
                    </li>
                    <li>
                        <strong><p>Inicio proyecto 'Administración Colegio' en PHP (2018)</p></strong>
                        <p>Se comienza con toma de requerimientos y primero bocetos de la aplicación</p>
                    </li>
                    <li>
                        <strong><p>Cuarto Semestre (2018)</p></strong>
                        <p>Desarrollo en lenguaje C#, mayor profundización de conocimientos y realización de proyectos con Arduino</p>
                    </li>
                    <li>
                        <strong><p>Quinto Semestre (2019)</p></strong>
                        <p>Desarrollo de 'Gestión Biblioteca' como proyecto final, con generación de la base de datos, creación de pantallas y lanzamiento para ser presentado en clases </p>
                        <p>Ademas, se hizo la presentación del proyecto 'Administración Colegio' y se concluyo con éxito el proceso de entrega </p>
                    </li>
                    <li>
                        <strong><p>Practica Profesional (2019)</p></strong>
                        <p>Desde agosto hasta noviembre realizo practica en la empresa Innova SPA, como soporte técnico de software Softland</p>
                    </li>
                    <li>
                        <strong><p>Titulado (2019)</p></strong>
                    </li>
                </ul>
            </div>

        </div>
    }
}