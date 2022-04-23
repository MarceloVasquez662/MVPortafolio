import React, { Component } from 'react';
import emailjs from "emailjs-com"
import swal from "sweetalert"
import TituloSeccion from './miniComponentes/TituloSeccion';
import ContactoCard from './miniComponentes/ContactoCard';
import logoContact from "../imagenes/iconosSecciones/logoContact.svg";
import logoFacebook from "../imagenes/iconosContacto/logoFacebook.svg"
import logoLinkedin from "../imagenes/iconosContacto/logoLinkedin.svg"
import logoGithub from "../imagenes/iconosContacto/logoGithub.svg"



export default class Contacto extends Component {
    render() {

        const enviarCorreo = (e) => {
            e.preventDefault();

            emailjs.sendForm('gmail', 'template_1n2babp', e.target, 'mG90bALo1T1XCDGv0')
                .then((result) => {
                    console.log(result.text);
                    swal(
                        {
                            title: "Mensaje enviado",
                            text: "He recibido tu mensaje! <3",
                            icon: "success",
                            button: "Aceptar",
                            timer: "5000"
                        }
                    )
                }, (error) => {
                    console.log(error.text);
                    swal(
                        {
                            title: "Error al enviar mensaje",
                            text: "Hubo un error con el servicio :(",
                            icon: "error",
                            button: "Aceptar",
                            timer: "5000"
                        }
                    )
                });
            e.target.reset()
        }



        return (
            <div>
                <div className='container p-5 '>
                    <TituloSeccion
                        imagen={logoContact}
                        titulo={"Contacto"}
                    />
                    <div className="contactos row justify-content-center">

                        <ContactoCard
                            href="https://www.facebook.com/marcelo.vasquezmunoz/"
                            logo={logoFacebook}
                            nombre="Facebook"
                        />
                        <ContactoCard
                            href="https://www.linkedin.com/in/marcelovasquez662/"
                            logo={logoLinkedin}
                            nombre="Linkedin"
                        />
                        <ContactoCard
                            href="https://github.com/MarceloVasquez662"
                            logo={logoGithub}
                            nombre="Github"
                        />
                    </div>
                    <div className='contactoFormulario col-auto'>
                        <h5>Tambien puedes enviarme un correo</h5>
                        <form onSubmit={enviarCorreo} >
                            <input type="text" name="nombre" className='form-control m-1' placeholder='Nombre' required />
                            <input type="email" name="email" className='form-control m-1' placeholder='Email' required />
                            <textarea name="mensaje" className='form-control m-1' placeholder='Mensaje' required></textarea>
                            <input type="submit" className='btn btn-success' value="Enviar" />
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}