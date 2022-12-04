import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import { useState,useEffect } from 'react';

const Redirect1 = () => {
   

    

    
   
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 2500 )
        }, []);
  
        

return (
	<>
<div className=''>

	<div style={{ display: "flex",height:"90vh",justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Redirecting</title>
      
      </Helmet>

    <div>

    <svg width="67.5" height="70" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="black">
    <rect y="10" width="15" height="120" rx="6">
        <animate attributeName="height"
             begin="0.5s" dur="0.7s"
             values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
             repeatCount="indefinite" />
        <animate attributeName="y"
             begin="0.5s" dur="0.7s"
             values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
             repeatCount="indefinite" />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
        <animate attributeName="height"
             begin="0.25s" dur="0.7s"
             values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
             repeatCount="indefinite" />
        <animate attributeName="y"
             begin="0.25s" dur="0.7s"
             values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
             repeatCount="indefinite" />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
        <animate attributeName="height"
             begin="0s" dur="0.7s"
             values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
             repeatCount="indefinite" />
        <animate attributeName="y"
             begin="0s" dur="0.7s"
             values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
             repeatCount="indefinite" />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
        <animate attributeName="height"
             begin="0.25s" dur="0.7s"
             values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
             repeatCount="indefinite" />
        <animate attributeName="y"
             begin="0.25s" dur="0.7s"
             values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
             repeatCount="indefinite" />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
        <animate attributeName="height"
             begin="0.5s" dur="0.7s"
             values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
             repeatCount="indefinite" />
        <animate attributeName="y"
             begin="0.5s" dur="0.7s"
             values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
             repeatCount="indefinite" />
    </rect>
</svg>
<div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>
   
      <div class="Aligner-item">     
      </div>   </div>
    



     



  </div>
 
  </div>
 

    </div>
    <div className="footera" style={{justifyContent:"center",backgroundColor:"transparent"}}>
    <a href="https://twitter.com/infwlsnft" href="" hidden={isVisible} class="button button-arrow bg-stuck">
     Stuck ?
        
    </a>
  

    
    </div>
	</>

);
};

export default Redirect1;
