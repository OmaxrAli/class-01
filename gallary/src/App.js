import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
// import Main from './components/Main';
import Header from './components/Header';
import HornedBeasts from './components/HornedBeasts';
// import HB2 from './components/HB2';

class App extends React.Component{

  render(){

     return(

      <div>
        <Header/>
        <HornedBeasts/>
        <Footer/>
      </div>
      
      

     )
  
     }
}

export default App;