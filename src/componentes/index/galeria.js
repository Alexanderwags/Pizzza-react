import React, { Component } from 'react'
import Galeriaimg from '../index/galeriaimg'
import rutaimg from './nomimg.json'
export default class galeria extends Component {

    state={
        cantidad:rutaimg
    }
    render() {
        return (
            <div>
                <Galeriaimg cantidad={this.state.cantidad} secc={this.props.secc} />
            </div>
        )
    }
}
