import React from "react";

const Scroll=(props)=>{
    console.log(props.childern);

        return <div style={{overflow:"scroll",border:"5px solid",height:"500px"} }>{props.childern} </div>
};
export default Scroll;