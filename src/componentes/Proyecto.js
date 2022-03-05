import React, { Component } from 'react';
import Card from "./miniComponentes/Card"
import logoProyectos from "../imagenes/iconosSecciones/logoProyectos.svg"
import math from "../imagenes/iconosProyectos/logomath.jpg"
import imagen from "../imagenes/iconosProyectos/logoimage.jpg"
import menu from "../imagenes/iconosProyectos/logomenu.jpg"
import pet from "../imagenes/iconosProyectos/logopet.jpg"
import folder from "../imagenes/iconosProyectos/logofolder.jpg"
import book from "../imagenes/iconosProyectos/logobook.jpg"
import school from "../imagenes/iconosProyectos/logoschool.jpg"

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
                <div className='proyectos container row justify-content-center'>
                    <Card titulo="React Matemáticas"
                        cuerpo="Aprende las operaciones básicas con la pequeña aplicación en React"
                        imagen={math}
                        alto="30%"
                        ancho="30%"
                        linkDemo="https://marcelovasquez662.github.io/react_matematica/"
                        linkCode="https://github.com/MarceloVasquez662/react_matematica"
                    />
                    <Card titulo="React Busca Imagen"
                        cuerpo="Busca tus imágenes favoritas con el consumo de la API de Pixabay"
                        imagen={imagen}
                        alto="30%"
                        ancho="30%"
                        linkDemo="https://marcelovasquez662.github.io/react_buscador/"
                        linkCode="https://github.com/MarceloVasquez662/react_buscador"
                    />
                    <Card titulo="Django QR Animal"
                        cuerpo="Los datos de tu mascota en un QR, solo colocalo en su collar. (En desarrollo) Sólo está funcionando en modo Local"
                        imagen={pet}
                        alto="30%"
                        ancho="30%"
                        linkCode="https://github.com/MarceloVasquez662/django-QRMascota-local"
                    />
                    <Card titulo="Ordena y limpia"
                        cuerpo="Organiza tu carpeta automáticamente. Además limpia tus archivos temporales y seguido vacía tu papelera"
                        imagen={folder}
                        alto="30%"
                        ancho="30%"
                        linkCode="https://github.com/MarceloVasquez662/python_automatizacion-descargas"
                    />
                    <Card titulo="Gestión Biblioteca"
                        cuerpo="Código fuente proyecto 'Gestión Biblioteca' de último semestre de la carrera. Desarrollado en Java"
                        imagen={book}
                        alto="30%"
                        ancho="30%"
                        linkCode="https://github.com/MarceloVasquez662/java_biblioteca"
                    />
                    <Card titulo="Administración Colegio"
                        cuerpo="Código fuente proyecto 'Administración Colegio' de quinto semestre. Desarrollada mayormente en PHP"
                        imagen={school}
                        alto="30%"
                        ancho="30%"
                        linkCode="https://github.com/MarceloVasquez662/php_colegio"
                    />
                    <Card titulo="React Menú Online"
                        cuerpo="Arma tu propio menú online y olvídate de la carta física"
                        imagen={menu}
                        alto="30%"
                        ancho="30%"
                        linkDemo="https://marcelovasquez662.github.io/react_menu/"
                        linkCode="https://github.com/MarceloVasquez662/react_menu"
                    />
                </div>
            </div>
        );
    }
}