import React, { Component } from 'react';
import Especialidad from './especialidad.js';
import '../../css/menu.css'

export default class especialidades extends Component {

    

    render() {

        return (
            <div className="container-especial">
                {this.props.especial.map(especialidad => <Especialidad especialidad={especialidad} key={especialidad.id} secc={this.props.secc}/>)}
            </div>
        );
    }
}
