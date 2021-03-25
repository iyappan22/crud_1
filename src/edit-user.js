import React from "react";

function Edituser(props) {
console.log(props)
    return (
      <>
            User{props.match.params.id}
      </>
    );
  }
  
  export default Edituser;