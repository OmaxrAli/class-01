import React from "react";
import Main from "./Main";

class HornedBeasts extends React.Component {

    render(){

        return(
            <div>
            <Main Title={'UniWhal'} />

            <Main image_url={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}/>

            <Main  description={'A unicorn and a narwhal nuzzling their horns'}/>
            </div>
            
        )
    }
}

export default HornedBeasts;