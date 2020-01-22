import React, { Component } from 'react'
import especial from "../menu/especialtask.json";
import Especialidad from '../menu/especialidades.js'
import Banner from '../../componentes/header/banner.js'
import Aside from '../asides/aside.js'
import '../../css/blog.css'
export default class blog extends Component {
    
    state = {

        especial:especial
    } 
    render() {
        return (
            <div className="Blog-stilo w-100 mb-5">
                <Banner titulo="Nuestro Blog" img="menu" />

                <div className="menu-especial-1 col-8 gmd-3 ">

                    <Especialidad especial={this.state.especial} secc={this.props.secc} />
                    <Aside/>      
                </div>
            </div>
        )
    }
}
