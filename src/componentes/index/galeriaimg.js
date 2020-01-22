import React, { Component } from 'react'
import ImagenGal from "./imagenGal.js"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import '../../css/galeria.css'

export default class galeriaimg extends Component {

    verificacion(){
        if(this.props.secc === "2"){

            return <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../archivos_pizzeria/galeria/01.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../archivos_pizzeria/galeria/02.jpg")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../archivos_pizzeria/galeria/03.jpg")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        
        }
        if(this.props.secc === "1"){
            return <div className="container-img">



                <h1 className="galimg-title">Galería de Imágenes</h1>
                {this.props.cantidad.map(imagenGal => <ImagenGal cantidad={imagenGal} key={imagenGal.id} secc={this.props.secc} />)}


            </div>
        }
        if(this.props.secc === "3"){
            return <div className="container-img-2">



                {this.props.cantidad.map(imagenGal => <ImagenGal cantidad={imagenGal} key={imagenGal.id} secc={this.props.secc} />)}


            </div>
        }
        if(this.props.secc === "5"){
            return <div className="container-img-2">



                {this.props.cantidad.map(imagenGal => <ImagenGal cantidad={imagenGal} key={imagenGal.id} secc={this.props.secc} />)}


            </div>
        }
    }
    render() {

        return (

            <div  className="container-fluid text-center">
                
                {this.verificacion()}


                
            </div>
        )
    }

}
