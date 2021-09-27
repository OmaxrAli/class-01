import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import HornedBeasts from './components/HornedBeasts';
import Data from './data.json';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class App extends React.Component{

  

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



   

 
  render(){

     return(

      <div>
         
        <Header/>
        
        
        
        
        
        
        {
        Data.map((HB)=> <Main  

        

        image_url= {HB.image_url}
        title ={HB.title}
        description= {HB.description}
        keyword ={HB.keyword}
        horns= {HB.horns}
       
        />
        )}
        
        
        {/* <HornedBeasts/> */}
        <Footer/>
      </div>
      
      

     )
  
     }
}

export default App;