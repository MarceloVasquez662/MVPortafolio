import React, { Component } from 'react';
import Card from "./miniComponentes/Card"
import logoProyectos from "../imagenes/logoProyectos.svg"
import math from "../imagenes/logomath.svg"
import imagen from "../imagenes/logoimage.svg"
import menu from "../imagenes/logomenu.svg"
import pet from "../imagenes/logopet.svg"
import folder from "../imagenes/logofolder.svg"
import book from "../imagenes/logobook.svg"
import school from "../imagenes/logoschool.svg"

export default class Proyectos extends Component {
    render() {
        return (
            <div className='container p-5'>
                <div className="row">
                    <img
                        src={logoProyectos}
                        alt="Proyectos"
                        width="40"
                        height="40"
                        className="mr-2"
                    />
                    <h1>Proyectos</h1>
                </div>
                <div className='row justify-content-center'>
                    <Card titulo="React Matemáticas"
                        cuerpo="Aprende las operaciones básicas con la pequeña aplicación en React"
                        imagen={math}
                        alto="30%"
                        ancho="30%"
                        link="https://marcelovasquez662.github.io/react_matematica/"
                    />
                    <Card titulo="React Busca Imagen"
                        cuerpo="Busca tus imagenes favoritas con el consumo de la API de Pixabay"
                        imagen={imagen}
                        alto="30%"
                        ancho="30%"
                        link="https://marcelovasquez662.github.io/react_buscador/"
                    />
                    <Card titulo="React Menu Online"
                        cuerpo="Arma tu propio menú online y olvidate de la carta física"
                        imagen={menu}
                        alto="30%"
                        ancho="30%"
                        link="https://marcelovasquez662.github.io/react_menu/"
                    />
                    <Card titulo="Django QR Animal"
                        cuerpo="Los datos de tu mascota en un QR, solo colocalo en su collar. (En desarrollo)"
                        imagen={pet}
                        alto="30%"
                        ancho="30%"
                        link="https://github.com/MarceloVasquez662/django-QRMascota-local"
                    />
                    <Card titulo="Ordena y limpia"
                        cuerpo="Organiza tu carpeta automáticamente. Ademas limpia tus temporales y seguido vacía tu papelera"
                        imagen={folder}
                        alto="30%"
                        ancho="30%"
                        link="https://github.com/MarceloVasquez662/python_automatizacion-descargas"
                    />
                    <Card titulo="Gestión Biblioteca"
                        cuerpo="Código fuente proyecto 'Gestión Biblioteca' de ultimo semestre de la carrera. Desarrollado en Java"
                        imagen={book}
                        alto="30%"
                        ancho="30%"
                        link="https://github.com/MarceloVasquez662/java_biblioteca"
                    />
                    <Card titulo="Administración Colegio"
                        cuerpo="Código fuente proyecto 'Administración Colegio' de quinto semestre. Desarrollada mayormente en PHP"
                        imagen={school}
                        alto="30%"
                        ancho="30%"
                        link="https://github.com/MarceloVasquez662/php_colegio"
                    />
                </div>
            </div>
        );
    }
}