import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
export default class example extends Component {
  showSettings (event) {
    event.preventDefault();
    
  }
  render() {
    return (
      <div>
      <Menu>
          <a id="nosotros" className="menu-item" href="/Nosotros">Nosotros</a>
          <a id="menu" className="menu-item" href="/menu">menu</a>
          <a id="blog" className="menu-item" href="/blog">blog</a>
          <a onClick={this.showSettings} className="menu-item--small" href="/galeria">galeria</a>
          <a id="contact" className="menu-item" href="/contacto">contacto</a>
      </Menu>
  </div>
    )
  }
}
