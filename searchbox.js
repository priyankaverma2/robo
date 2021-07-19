import React from "react";

const Searchbox = ({searchange}) => {
  return (
    <div>
      <input
       // className="pa3 ba b--green bg-lightest-blue"
       style={{
         padding:10,
          backgroundColor: "#cdecff"
             }}
        type="search"
        placeholder="Find Your Robot"
        onChange={searchange}
      />
    </div>
  );
};

export default Searchbox;