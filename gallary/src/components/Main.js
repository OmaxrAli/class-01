import React from "react";

import HornedBeasts from './HornedBeasts';
class Main extends React.Component{

    render(){

        return(
            
             
             <>
                <h2>{this.props.Title}</h2>
                <img src={this.props.image_url} alt=""/>
                <p>{this.props.description} </p>
            </>
                
            

        )
    }
}

export default Main;