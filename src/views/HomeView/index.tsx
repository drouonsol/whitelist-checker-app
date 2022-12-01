import Link from "next/link";
import { FC } from "react";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { SolanaLogo } from "components";
import styles from "./index.module.css";
import { PublicKey } from "@solana/web3.js";
import fs from 'fs';
import { useState,useEffect } from 'react';
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Authorized } from "@solana/web3.js";
import { NavbarSocialLinks } from "./styles/Navbar.style";

require('@solana/wallet-adapter-react-ui/styles.css');

export const HomeView = ({}) => {
  const { publicKey } = useWallet();
  let WhitelistState = ".";
  let [balance, setBalance] = useState<number>();
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  
  const walletlist  =  [
    '7b6itFeLcDoYQHqDTZqPnrbS2czarJWa8ULHsz642FBq',
    '3SgV1dMLaFtRDF2cvxqdZFtdk8h6asE8cMmwgY58XJyb',
    '6EyxL99z84ss1nSvkPApg6Z43W6oojrjYJZFcwbNsK9b'
  ];

  const [isVisible, setIsVisible] = useState(true);

 



  let mintprice = 2


/*if (balance < mintprice) {
let fundeligibility = "You are Eglible to mint";
} else {
  let fundeligibility = "You are Not Eglible to mint";
} */
   
 let  Whitelisted  = [<a>Error</a>];


  let checkWalletWhitelist = publicKey?.toString();
  let checkwalletlist2 = checkWalletWhitelist;
  
 

  const onClick = () => {};


  let result = '';

  
  let solscanlink = "https://solscan.io/account/" + checkWalletWhitelist;


let walletprint = ''



if (checkWalletWhitelist != undefined) {
  let walletbreak = checkWalletWhitelist.substring(0,4);
let walletbreak2 = checkWalletWhitelist.substring(40,44);

 walletprint = walletbreak + "..." + walletbreak2 ;


  if (walletlist.includes(checkWalletWhitelist)) {
    console.log("Wallet is Whitelisted")


    Whitelisted  = [<a className="walletliststatuspositive">Whitelisted</a>];


    WhitelistState = 'Whitelisted';
     
  if (WhitelistState == 'Whitelisted') {
  
    setTimeout(() => {
      setIsVisible(false);
    }, 5)
   
 };
  } else {

    Whitelisted  = [<a className="waleltliststatusnegative">Not Whitelisted</a>];
  }


    
  
};
 
  return (
    <>
    <div style={{background:"cream"}}>
   
   <div  style={{height:"55vh",margin:"20px",background:"cream"}}>   

   <div className="navbar mb-2 text-neutral-content transperant ">
          <div className="flex-none">
           
             <img width="58px" src="https://infamouswolves.com/static/media/logo.e01194a8.jpg"></img>
         
          </div>
          <div className="flex-1 px-2 mx-2">
          
          </div>
          <div className="flex-none">
            <WalletMultiButton style={{backgroundColor:"white",fontWeight:"bolder",color:"black"}} className="btn btn-ghost" />
          </div>
        </div>

        
     
                  <div style={{minHeight:"45vh", textAlign:"center",verticalAlign:"middle",justifyContent:"center",top:"50px" }}>

    
   
     


          
          
                   
                    {!publicKey ?  <div className="container2">
             <div className="containerstatus1">
              
                     <div style={{verticalAlign:"middle", margin:"7.5vh 0",justifyContent:"center", flex:"center"}}>
                      <div style={{justifyContent:"center", flex:"center",alignSelf:"center",textAlign:"center"}}>
                    
<div style={{justifyContent:"center",textAlign:"center",alignSelf:"center",left:"50px",right:"50px",margin:"auto"}}>
<a className="flex" style={{alignSelf: "center",margin:"auto"}} >
           
           <img width="100px" style={{margin:"auto",marginBottom:"7.5vh"}} src="https://infamouswolves.com/static/media/logo.e01194a8.jpg"></img>
       
        </a>
        
        </div>
                                <h1 style={{fontSize:"150%",fontFamily:"Oswald",textTransform:"uppercase"}}>Please Connect your Wallet        <div style={{}}><td></td></div></h1>
                        
                                <br />
                             
</div>     <div style={{height:"10vh"}}></div>
                         </div></div></div>

                    : null }








                    {publicKey ? <>  
                    <div className="container2">
             <div className="containerstatus">
              
                     <div style={{verticalAlign:"middle", margin:"7.5vh 0",justifyContent:"center", flex:"center"}}>
                      <div style={{justifyContent:"center", flex:"center",alignSelf:"center",textAlign:"center"}}>
                    
<div style={{justifyContent:"center",textAlign:"center",alignSelf:"center",left:"50px",right:"50px",margin:"auto"}}>
<a className="flex" style={{alignSelf: "center",margin:"auto"}} >
           
           <img width="100px" style={{margin:"auto",marginBottom:"7.5vh"}} src="https://infamouswolves.com/static/media/logo.e01194a8.jpg"></img>
       
        </a>
        
        </div>
                                <h1 style={{fontSize:"150%",fontFamily:"Oswald",textTransform:"uppercase"}}>Whitelist Status:<a className="waleltliststatus">{Whitelisted}</a></h1>
                                <br />
                                <a className="walletbalanceshowcase">{[walletprint]}</a>
                            
                                <br />
                                <br />
                             
</div>     <div style={{height:"10vh"}}></div>
                         </div></div></div>      </>: null}
           
                
                      
   
        </div>
                        


    </div>
                        </div>
                     

</>
  );
};
