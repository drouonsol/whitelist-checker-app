import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
  background-color: transparent;
  display: flex;
  flex-direction: column;


  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
`;

export const RightContainer = styled.div`

flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`

  padding: 5px;
  border-radius: 2px;
 
  font-family: Oswald;
  text-decoration: none;
  margin: 10px;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  transition: color 0.3s ease-out;
  font-size: 18px;

  border-radius: 2px;
  padding: 5px;
  
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;


  &:hover {
    color: #c2c2c2;
    font-weight: 800;
    text-decoration: none;
    transition: color 0.3s ease-out;
    font-size: 18px;
    transition: color 0.3s ease-out;
    border-radius: 2px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f1ece83d;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
padding: 30px;
border-radius: 2px;

font-family: Oswald;
text-decoration: none;
text-align: center;
justify-content: center;

margin: 10px;
color: #c2c2c2;
font-weight: 800;
text-decoration: none;
transition: color 0.3s ease-out;
font-size: 18px;
width: fit-content;
border-radius: 2px;
padding: 5px;

padding-left: 10px;
padding-right: 10px;
background-color: rgba(255, 255, 255, 0.25);
text-transform: uppercase;


`;

export const Logo = styled.img`
  margin-top: 3px;
  width: 80px;
  height: auto;
	transform: scaleX(-1);
	filter: FlipH;
	-ms-filter: "FlipH";
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 10px;
  padding-top: 60px;
  overflow: hidden;
  height: 100%;
  overflow: hidden;




  &:active {
    body {
      overflow:hidden;
    }
  } 

  @media (min-width: 700px) {
    display: none;
    overflow: hidden;
  }
`;




export const NavLinkContainer = styled.div`
display: flex;
flex-direction: column;
transition: 0.3s ease-in-out;
align-items: center;
height: 100vh;

@media (min-width: 700px) {
  display: none;
}

`;

export const NavbarSocialLinks = styled.a`

padding: 5px;
border-radius: 2px;
font-family: Oswald;
text-decoration: none;
margin: 10px;
color: #c2c2c2;
font-weight: 800;
text-decoration: none;
transition: color 0.3s ease-out;
font-size: 18px;

border-radius: 2px;
padding: 5px;

padding-left: 10px;
padding-right: 10px;
background-color: rgba(255, 255, 255, 0.11);
text-transform: uppercase;


`;


export const NavbarExtFooter = styled.div`
height: 10vh;
margin: 1.5%;
margin-left: 4%;
padding-right: 4%;
font-family: "Oswald";
justify-content: space-evenly;
color: rgb(255, 255, 255);

flex-direction: row;
padding-bottom: 10px;
padding: 2%;

padding-top: auto;
text-align: bottom;
height: 5vh;

`;


export const NavbarLink2 = styled(Link)`
background-color: rgba(0,0,0,0);
text-decoration: none;
`;