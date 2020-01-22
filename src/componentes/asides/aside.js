import React, { Component } from 'react'
import '../../css/aside.css'
export default class aside extends Component {
    render() {
        return (
            <div className="busqueda"> 
                <div className="busqueda-1">
                    <h3>Buscar</h3>
                    <input type="text" placeholder="buscar"/>
                </div>
                <div className="busqueda-2">
                    <h3>Categorias</h3>
                    <a href="/menu">Menu</a>
                    <a href="/galeria">Galeria</a>
                    <a href="/nosotros">Nosotros</a>
                </div>
            </div>
        )
    }
}
