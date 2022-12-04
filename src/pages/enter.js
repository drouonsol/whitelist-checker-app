import React from 'react';
import Navbar from "../components/Navbar";
import Helmet from 'react-helmet';
import {
  NavbarContainer,
  RightContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink2,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarSocialLinks,
  NavbarExtFooter,
  NavLinkContainer
} from "../styles/Navbar.style";

const Enter = () => {



  function whitepaper() {

    setTimeout(function(){
    
      window.location.href = '/home';
    }, 500); 
  }

  
let number = Math.floor(Math.random()* 5);
let welcome = "ERROR";


    if (number == 0) {
      welcome = "Welcome to Paradise"
    }

    if (number == 1 ) {
      welcome = "Welcome Soldier"
    }
  

    if (number == 2) {
      welcome = "Welcome Degen"
    }

    if (number == 3) {
      welcome = "Welcome Kid"
    }

    if (number == 4) {
      welcome = "Welcome Wojak"
    }



    let number2 = Math.floor(Math.random()* 100000);

    if (number2 == 1) {
      welcome = [<q style={{fontFamily:"Oswald", transition:"2s"}}>I LOVE YOU</q>]
    }
    

    let numbergradient = Math.floor(Math.random()* 3);
    let gradient = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
  
    if (number == 0) {
      gradient = "linear-gradient(43deg, #00DBDE 0%, #FC00FF 100%)"
    }

    if ( number == 1 ) {
      gradient = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
    }

    if (number == 2) {
      gradient = "linear-gradient(43deg, #0093E9 0%, #80D0C7 100%)"
    }

    if (number == 3)  {
    gradient = "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"
    }
console.log(number)
return (
  <body style={{   background: [gradient]  ,overflow:"hidden"}}>
    <div style={{backgroundColor: "#4158D0",backgroundImage: [gradient],maxHeight:"100vh",minHeight:"fit-screen"
      }}>
      <Helmet><title>Welcome</title></Helmet>
  <NavbarLink2 onClick={whitepaper} to="/redirect">
	<section style={{color:"white", height:"94vh",minHeight:"100%",justifyContent:"center",textAlign:"center",top:"50",bottom:"50",alignItems:"center",display:"flex",verticalAlign:"middle", fontWeight:"300",flexDirection:"column" }}>

	<h1 className='entertxt' style={{color:"white",justifyContent:"center",textTransform:"uppercase",textAlign:"center",top:"50",bottom:"50",display:"flex",alignItems:"center", fontSize:"500%",verticalAlign:"middle", fontFamily:"Oswald",fontWeight:"300"}}>
  
  {[welcome]}
</h1>
  <div>
  <a style={{opacity:"0.5", fontFamily:"Oswald",textTransform:"uppercase",color:"white"}}>*Click anywhere </a>
  </div>

   

	</section>
  <div style={{verticalAlign:"bottom",fontFamily:"Oswald",padding:"2.5vh"}}>
    <h4 style={{fontFamily:"Oswald",color:"white",textTransform:"uppercase"}}>By <a style={{fontFamily:"Oswald",textTransform:"uppercase",color:"white",fontWeight:"900",}} >Infamous Labs ©2022</a></h4>
  </div>
  </NavbarLink2>
    </div>
    </body>
);
};

export default Enter;
