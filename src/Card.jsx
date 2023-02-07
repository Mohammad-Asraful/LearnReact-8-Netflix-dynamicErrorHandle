import React from "react";

const linkStyle = {
   color: 'black'
}

const Card = (props) => {
   // console.log(props)
   return (
      <>
         <div className="card">
            <p>{props.title}</p>
            <p>{props.age}</p>
            <p>{props.department}</p>
            <button><a href={props.link} style={linkStyle}>See Full Details</a></button>
         </div>
      </>
   )
}

export default Card