import React from "react";
import App from '../App';
import Data from '../data.json';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
                                                                                                                          
class Main extends React.Component {

    //
    

    Update= () => {

    this.setState ({
         
    })

}

    

    
    render(){
        return(
            <div>
                <Modal.Dialog>
                 <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>{this.props.description}</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
                

     <Button variant="primary" onClick={this.props.handleShow}> View
             </Button>
      <Modal show={this.props.show} onHide={this.props.handleClose}  animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
         </Button>
         </Modal.Footer>
         </Modal>
                
                 </Modal.Footer>
                </Modal.Dialog>
            </div>
            )
    }
}

export default Main;