import React, { Component } from 'react'
import especial from "./especialtask.json";
import Especialidad from './especialidades'
import Banner from '../../componentes/header/banner.js'
export default class menu extends Component {

    state = {

        especial:especial
    } 
    render() {
        return (
            <div className="menu-total">
                <Banner titulo="Nuestras Especialidades" img="menu"/>
                <div className="menu-especial">

                    <Especialidad especial={this.state.especial} secc={this.props.secc}/>
                </div>
            </div>
            
        )
    }
}
