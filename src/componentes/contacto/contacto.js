import React, { Component } from 'react'
import Banner from '../../componentes/header/banner.js'
import '../../css/contacto.css'
export default class contacto extends Component {
    render() {
        return (
            <div className="w-100 contact">
                 <Banner titulo="Contacto / Reservaciones" img="menu" />
                 <div className="contacto-vino">
                 <img alt="img" src={require("../../archivos_pizzeria/img/contacto_bg.jpg")}></img>

                 <form className="form-contact">
                     <h1>Realizar una reservacion</h1>
                   <input type="text" className="estilo-form" placeholder="Nombre"/>
                   <input type="text" className="estilo-form" placeholder="Telefono"/>
                   <input type="date" className="estilo-form"/> 
                   <input type="email" placeholder="Email" className="estilo-form"/>   
                   <input type="text-area" placeholder="Mensaje" className="estilo-form"/>
                   <button type="submit" className="btn-red">enviar</button>
                 </form> 
                 </div>
            </div>
        )
    }
}
