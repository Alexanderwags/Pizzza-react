import React, { Component } from 'react'
import '../../css/header.css'
import Image from '../../archivos_pizzeria/paginas/destacada.jpg';
import 'bootstrap/dist/css/bootstrap.css';


 const mystyle={
    width: "100%",
    height: "457px",   
    backgroundImage: `url(${Image})`,
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
    backgroundSize:"cover"
        
};
export class banner extends Component {
 
    
    render() {
       
        return (
            <div className="banner-header" style ={mystyle} >
                
                <h1>{this.props.titulo}</h1>
            </div>
        )
    }
}


export default banner
