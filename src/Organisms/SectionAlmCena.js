import React from 'react';

import Hamburguesas from './../Molecules/ItemsHambuerguesas';
import Acompañaminetos from './../Molecules/ItemsAcomp';
import Bebidas from './../Molecules/ItemsBebidas';
import Extras from './../Molecules/ItemsExtras';


function SectionAlmCena (props){

   return(
       
        <div className="Section-Container"> 

             <div className = "items-container">  
            
              <Hamburguesas/>   

              <Acompañaminetos/>   

              <Bebidas/>

              <Extras/>
            
             </div>  


             <div>  
            
            
            
            </div> 
        
      
        
        </div>
 

    
   )



} 

export default SectionAlmCena;