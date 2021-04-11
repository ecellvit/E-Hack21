import React from "react";

function Devfolio(){
 React.useEffect(() => {
   const script = document.createElement("script");
   script.src = "https://apply.devfolio.co/v2/sdk.js";
   script.async = true;
   script.defer = true;
   document.body.appendChild(script);
   return () => {
     document.body.removeChild(script);
   };
 }, []);
 return (
   <div
     class="apply-button"
     data-hackathon-slug="ehack"
     data-button-theme="light"
     style={{height: 44, width: 312}}
   ></div>
 );
}

export default Devfolio;