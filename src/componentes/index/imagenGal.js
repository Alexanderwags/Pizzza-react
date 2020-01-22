import React, { Component } from 'react'


import '../../css/galeria.css'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';


export default class imagenGal extends Component {
    
    
    hoverimg(){
       
        if(this.props.secc==="4"){
            return <div className="galimg-hover">

            <h1>Especialidad {this.props.cantidad.id}</h1>
            <p>{this.props.cantidad.description}</p>
            <h3>{this.props.cantidad.price}</h3>
            <a href="k">Leer mas</a>



            </div>            
        }
        if(this.props.secc==="1"){
            return <div className="galimg-hover-1">

            <h1>Especialidad {this.props.cantidad.id}</h1>
            <p>{this.props.cantidad.description}</p>
            <h3>{this.props.cantidad.price}</h3>
            <a href="k">Leer mas</a>



            </div>            
        }
        if(this.props.secc==="3"){
            return <div className="galimg-hover-2">

            <h3>Especialidad {this.props.cantidad.id}</h3>
            <p>{this.props.cantidad.description}</p>
          
            </div>            
        }

      if (this.props.secc === "5") {
        return <div className="galimg-hover-3">

                <App nom={this.props.cantidad.rutaimg} />
               </div> 
    
      }
        
        return <div></div>
    }
    render() {

        return (
            <div className="galimg">
                <img alt="img" src={require("../../archivos_pizzeria/galeria/" + this.props.cantidad.rutaimg)}></img>

             {this.hoverimg()}
            </div>
        )
    }

}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img alt="img" className="w-100" src={require("../../archivos_pizzeria/galeria/" + props.nom)}></img>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  
  );
}

function App(pops) {
  const [modalShow, setModalShow] = React.useState(false);
    
  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        nom={pops.nom}
      />
       
    </ButtonToolbar>
    
  );
}

