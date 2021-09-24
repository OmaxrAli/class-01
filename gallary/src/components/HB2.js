import React from "react";
import HornedBeasts from "./HornedBeasts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HB2 extends React.Component {

 
    constructor(props){
        super(props);

        this.state={
            Votes : 0
        }
    }


    increaseVotes = () => {

        this.setState ({
            Votes : this.state.Votes +1
        })

    }


    render(){

        return(
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img onClick = {this.increaseVotes } variant="top" src={this.props.image_url}/>
                <Card.Body>
                <Card.Title>Name :{this.props.title}</Card.Title>
                <Card.Text>
                    description :{this.props.description}
                    <p>Horns : {this.props.horns}</p> 
                    <p>Votes : {this.state.Votes}</p>
                </Card.Text>
                <Button onClick = {this.increaseVotes } variant="primary"> Vote </Button>
                </Card.Body>
                </Card>
            
            </div>
            
        )
    }
}

export default HB2;