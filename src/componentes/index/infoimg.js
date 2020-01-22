import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import datos from './indexdatos.json'
import '../../css/infoimg.css'
export default class infoimg extends Component {
    

    state={
        info:datos
    }
    imprimirdatos(){
         
        if (this.props.tipo === "0") {

            return <div className="info-img row">
                <div className="texto-info col-12 col-md-6">
                    <h1>{this.state.info[this.props.estado].title}</h1>
                    <p>{this.state.info[this.props.estado].description}</p>
                    <a href="k" className="btn-ama">{this.state.info[this.props.estado].enlace}</a>
                </div>
                <div className="img-info col-12 col-md-6">
                    <img alt="img" src={require("../../archivos_pizzeria/img/" + this.state.info[this.props.estado].img)} className="imagen"></img>

                </div>
            </div>
        }
        if (this.props.tipo === "1") {

            return <div className="info-img row">
                <div className="texto-info col-12 col-md-6 ">
                    <h1>{this.state.info[this.props.estado].title}</h1>
                    <p>{this.state.info[this.props.estado].description}</p>
                    <a href="k" className="btn-ama">{this.state.info[this.props.estado].enlace}</a>
                </div>
                
            </div>
        }

        return <div></div>
    }
    render() {
        return (
            <div className="container-fluid">
               
               {this.imprimirdatos()}
            </div>
           
        )
    }
}
