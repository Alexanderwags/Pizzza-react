import React, { Component } from 'react'
import '../../css/menu.css'
export default class especialidad extends Component {


    imprimirEspecial() {
        if (this.props.secc === "0") {
            return <div className="box-especial">
                <div className="box-img">
                    <img alt="img" src={require("../../archivos_pizzeria/especialidades/" + this.props.especialidad.rutaimg)}></img>
                </div>
                <div className="box-header">
                    <h1>{this.props.especialidad.title}</h1>
                    <h1>{this.props.especialidad.price}</h1>
                </div>
                <div className="box-footer">
                    <p>{this.props.especialidad.description}</p>
                </div>
            </div>
        }
        if (this.props.secc === "1") {
            return <div className="box-especial-1  mb-3">
                <div className="box-img">
                    <img alt="img" src={require("../../archivos_pizzeria/especialidades/" + this.props.especialidad.rutaimg)}></img>
                </div>
                <div className="box-header-1">
                    <div className="caja"><span>11</span> <span>NOV</span></div>
                    <div className="texto-user">
                        <h3>{this.props.especialidad.title}</h3>
                        <div className="user">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                            <p>La Pizzeria</p>
                        </div>

                    </div>

                    
                </div>
                <div className="box-footer">
                    <p>{this.props.especialidad.description}</p>
                    <a href="k" className="btn-red-b">Leer más</a>
                </div>
            </div>
        }
        return <div></div>
    }
    
    render() {
        
        
      
        return (
            <div >
            {this.imprimirEspecial()}
            </div>
        );
    }
}
