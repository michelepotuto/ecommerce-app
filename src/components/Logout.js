import React from "react";




const Logout = (props) => {

  return (
  
      <div>
        <button onClick={props.logoutFunction} className="inizia_spesa border border-1" >
        Logout</button>

      </div>
    
  );
};

export default Logout;
