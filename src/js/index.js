//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0; 

setInterval(function(){ const six = Math.floor(counter/10000);
                        const five = Math.floor(counter/10000);
                        const four = Math.floor(counter/1000); 
                        const three = Math.floor(counter/100);
                        const two = Math.floor(counter/10); 
                        const one = Math.floor(counter/1); 
                        console.log(four, three, two, one); //render your react application
                        
                        ReactDOM.createRoot(document.getElementById('app')).render(<Home one={one} two={two} three={three} four={four} five={five} six={six}/>);
                        
                        counter++;},1000);




