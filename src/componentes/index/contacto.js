import React, { Component } from 'react'
import '../../css/contacto.css'
export default class contacto extends Component {

    imprimirContacto(){

         return <div className="formulario">

             
                 <form className="form-contact">
                   <input type="text" className="estilo-form" placeholder="Nombre"/>
                   <input type="text" className="estilo-form" placeholder="Telefono"/>
                   <input type="date" className="estilo-form"/> 
                   <input type="email" placeholder="Email" className="estilo-form"/>   
                   <input type="text-area" placeholder="Mensaje" className="estilo-form"/>
                   <button type="submit" className="btn-red mt-2">enviar</button>
                 </form> 
             
             
            
             
         </div>
    }
    render() {
        return (
            <div className="w-100">
                {this.imprimirContacto()}
            </div>
        )
    }
}
