import React, { Component } from 'react'
import Banner from '../../componentes/header/banner.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/nosotros.css'
import Galeria from '../index/galeria.js'
export default class nosotros extends Component {
    render() {
        return (
            <div className="nosotros-estilo">
                <Banner titulo="Sobre Nosostros" img="menu"/>
                <div className="info-nosotros lead mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="mb-5"><Galeria   secc="3" /></div>
            </div>
        )
    }
}
