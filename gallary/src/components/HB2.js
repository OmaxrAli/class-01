import React from "react";
import Main from "./Main";

class HB2 extends React.Component {

    render(){

        return(
            <div>
            <Main Title={'Rhino Family'} />

            <Main image_url={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}/>

            <Main  description={'Mother (or father) rhino with two babies'}/>
            </div>
            
        )
    }
}

export default HB2;