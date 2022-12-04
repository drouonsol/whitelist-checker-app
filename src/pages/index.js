import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import Navbar from '../components/Navbar';
import "../index.scss";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Axios from 'axios';
import { useState } from 'react';


const Home = () => {



  const lamplortspersolana = 1000000000;
  var totalBGs = 0;
  var rnd = Math.floor(Math.random() * totalBGs) + 0; // 1 - 15
  // 70% of the original volume

  //function MyButton(){

   // const [playSound] = useSound(mySound, { volume: 0.7 }) // 70% of the original volume
   // const handleClick = () => {
    //  playSound()
   // }
   // };



  let nftnumber = Math.floor(Math.random()* 3333);
  let nftnumber2 = Math.floor(Math.random()* 3333);
  let nftnumber3 = Math.floor(Math.random()* 3333);
  let nftnumber4 = Math.floor(Math.random()* 3333);

  const nft0 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber + ".png";
  const nft1 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber2 + ".png";
  const nft2 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber3 + ".png";
  const nft3 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber4 + ".png";

  function select() {
    (".l1") ({ backgroundImage: "url(https://static.infamouswolves.com/randomwolf/" + rnd + ".png)" });
  };



  const [floorPrice,setfloorPrice,] = useState("")
  const [listings,setlistings,] = useState("")
  const [collectionvolume,setcollectionVolume] = useState("")



Axios.get("https://api-mainnet.magiceden.dev/v2/collections/ekids/stats/", {
  'ME-Pub-API-Metadata': {"paging":true}
}).then((res) => {
  setfloorPrice(res.data.floorPrice/lamplortspersolana)
  setlistings(res.data.listedCount)
  setcollectionVolume(Math.round((res.data.volumeAll/lamplortspersolana) *10.00)/10.00);
});

 const marketcap = 3333*floorPrice; 



return (

  <div className='backlndpage' style={{}}>
    <Navbar />
	<div style={{ display: "flex",height:"70vh" ,justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Home</title>
      
      </Helmet>

    <td>
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>



<section style={{color:"white"}}>


 
<div style={{verticalAlign:"middle", padding :"21vh 0",paddingTop:"30vh"}}>
      <h1 className="indextext" style={{fontFamily:"Pieces NFI",}}>Elysian Kids</h1>

    <a href="https://magiceden.io/marketplace/ekids" target="_blank" class="button button-arrow bg-magiceden">
    Buy a kid &nbsp;
      <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"  class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>            
    </a>
      </div>

</section>
</div>

  </td>

</div>



<section style={{height:"auto",margin:"5%",verticalAlign:"center"}}>
<div className="grid-flex" style={{margin:"auto",verticalAlign:"center",top:"50",bottom:"50",background:"black",borderRadius:"20px"}}>
    <div className="col col-text" style={{borderRadius:"15px",verticalAlign:"center"}}>
    <TwitterTweetEmbed    options={{width: 1000}}
  tweetId={'1598006444636672002'}
/>


    </div>
    <div className="col col-text col-left" style={{verticalAlign:"center",top:"50",bottom:"50"}}>
      <div className="Aligner-item">
        <h1 style={{fontSize:"350%",textTransform:"uppercase",color:"white"}}>So we were in Shambles

   
        </h1>
      </div>
    </div>

  </div> 

  </section>







  <section style={{paddingTop:"50px",backgroundColor:"#ececec"}}>
  <h1 className="wwab" style={{fontFamily:"Oswald",}}>What we are building</h1>
  <h1 className="  wwabsmall" style={{fontFamily:"Oswald",}}>And what we are planning on building</h1>

  <div  style={{height: "fit-content",  }}> <div class="container">
    
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src={[nft1]} alt={nftnumber2} />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>DOCS</h4>
                        <br/>
                        <a className="utilitybutton" target="_blank" href="https://docs.elysiankids.com/" style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Read our whitepaper</a>
                     <br/>
                     {/* <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber2]}</h5>**/}
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card"  >
                <div class="content" >
                    <div class="imgBx">
                        <img src={[nft2]} alt={[nftnumber3]}/>
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>STAKE</h4>
                        <br/>
                        <a className="utilitybuttonrejected" target="_blank"  style={{textTransform:"uppercase", fontFamily:"Oswald"}}>STAKE YOUR KID</a>
                        <br />
                        {/* <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber3]}</h5> */}
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                      <a>
                        <img src={[nft3]} alt={nftnumber4} />
                      </a>
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>RAFFLES</h4>
                        <br/>
                        <a className="utilitybuttonrejected" target="_blank" style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Join a raffle</a>
                        <br/>
                     {/* <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber4]}</h5> */}
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src={[nft0]} alt={nftnumber} />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%",  fontFamily:"Oswald"}}>ELEGIBILITY</h4>
                        <br/ >
                        <a className="utilitybuttonrejected" target="_blank"  style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Check ELEGIBILITY</a>
                        <br/>
                     {/* <h5 className="nftnumber" style={{padding:"15px",fontFamily:"Oswald",}}>Elysian Kid #{[nftnumber]}</h5> */}
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            </div>
        </div>


  <img className="imgtransition" style={{display:"flex",overflow:"hidden"}} width="100%" height="auto" src="https://media.discordapp.net/attachments/890670720705777785/1048337243028340757/Untitled_Artwork.png"/>
  </section>
  <section>

    <div  style={{height: "fit-content",  }}> <div class="container" style={{padding:"1%"}}>
    
            <div class="cardstats">
                <div class="content">
                   
                    <div class="contentBx">
                    <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>volume</h4>
                        <br/>
                        <h1 className="datatext" style={{ textTransform:"uppercase", fontFamily:"Pieces NFI"}}>{[collectionvolume]}&nbsp;<svg width="40.5" height="38" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)"/>
<defs>
<linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
<stop offset="0.08" stop-color="#000000"/>
<stop offset="0.3" stop-color="#000000"/>
<stop offset="0.5" stop-color="#000000"/>
<stop offset="0.6" stop-color="#000000"/>
<stop offset="0.72" stop-color="#000000"/>
<stop offset="0.97" sstop-color="#000000"/>
</linearGradient>
</defs>
</svg></h1>
          
              
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="cardstats"  >
                <div class="content" >
                    
                    <div class="contentBx">
                    <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>Floor Price</h4>
                        <br/>
                        <h1 className="datatext" style={{ textTransform:"uppercase", fontFamily:"Pieces NFI",}}>{[floorPrice]}&nbsp;<svg width="40.5" height="38" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)"/>
<defs>
<linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
<stop offset="0.08" stop-color="#000000"/>
<stop offset="0.3" stop-color="#000000"/>
<stop offset="0.5" stop-color="#000000"/>
<stop offset="0.6" stop-color="#000000"/>
<stop offset="0.72" stop-color="#000000"/>
<stop offset="0.97" sstop-color="#000000"/>
</linearGradient>
</defs>
</svg></h1>
                 

                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="cardstats">
                <div class="content">
                
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",}}>Market CAP</h4>
                        <br/>
                        <h1 className="datatext" style={{ textTransform:"uppercase", fontFamily:"Pieces NFI"}}>{[marketcap]}&nbsp;<svg width="40.5" height="38" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)"/>
<defs>
<linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
<stop offset="0.08" stop-color="#000000"/>
<stop offset="0.3" stop-color="#000000"/>
<stop offset="0.5" stop-color="#000000"/>
<stop offset="0.6" stop-color="#000000"/>
<stop offset="0.72" stop-color="#000000"/>
<stop offset="0.97" sstop-color="#000000"/>
</linearGradient>
</defs>
</svg></h1>
                
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            
          </div>
          <a href="https://magiceden.io/marketplace/ekids" target="_blank" class="button button-arrow bg-stuck2" style={{opacity:"100%"}}>
     TRADE&nbsp;
      <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"  class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>            
    </a>
          </div>
    
  </section>


  <h1 className="probwarning" style={{textTransform:"uppercase"}}>And just a heads up ... </h1>
  <section className="fuckupsection" style={{borderRadius:"50px",height:"auto"}}>
  <h1 className="prob" style={{padding:"0",margin:"0%"}}>WE WILL PROBABLY</h1>
  <h1 className="prob2" style={{padding:"0",margin:"0%"}}>BREAK THINGS</h1>
  <h1 className="prob" style={{padding:"0",margin:"0%",textTransform:"uppercase",opacity:"50%"}}>ALONG THE WAY</h1>
  </section>

      <div className='footermobileindex'>
    
      </div>
      <Footer/>
      </div>
    


);
};

export default Home;
