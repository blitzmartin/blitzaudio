import React from 'react';
import { data } from "../pics";

export default function Pictures(){
    return(
         <>
         <div className="center-align">
           <div className="bg-image"></div>
           <div className="overlay portfolio-container">
             <div className="pics-container">
               {data.map((pic) => (
                 <div key={pic.name}>
                   <img alt={pic.name} className='grid-img'
                     src={`./images/liz/${pic.name}`}
                   />
                 </div>
               ))}
             </div>
           </div>
         </div>
       </>
    )
}