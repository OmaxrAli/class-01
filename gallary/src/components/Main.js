import React from "react";
import App from '../App';
import Data from '../data.json';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
                                                                                                                          
class Main extends React.Component {

  constructor(props){
    super(props);

    this.state= {
        image_url: Data.map((value)=> 
        value.image_url
        ),
        title : Data.map((value)=> 
        value.title
        ),
        description : Data.map((value)=> 
        value.description)
        ,
        keyword : Data.map((value)=> 
        value.keyword)
        ,
        horns: Data.map((value)=> 
        value.horns)
       , show : false,
       setShow : false
}
}
        handleShow=() => { 
         this.setState({
            show : true
        })
      }

       handleClose=() => { 
        this.setState({
           show : false
       })}
 

    

    
    render(){
        return(
            <div>
                <Modal.Dialog>
                 <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>{this.props.description}</p>
                <img src={this.props.image_url} alt="" width={100}/>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Close</Button>
                {/* <Button variant="primary">Save changes</Button> */}
                

     <Button variant="primary" onClick={this.handleShow}> View
             </Button>
      <Modal show={this.state.show} onHide={this.handleClose}  animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_url} alt="" width={300}/>
          <p>
          description: 
            {this.props.description}
          </p>
          <p>
          keyword: 
            {this.props.keyword}
          </p>
          <p>
          horns
            {this.props.horns}
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>

          {/* <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
         </Button> */}
         </Modal.Footer>
         </Modal>
                
          </Modal.Footer>
          </Modal.Dialog>
            </div>
            )
    }
}

export default Main;