
import dynamic from "next/dynamic";
import p5Types from "p5";
import { playlistState, playlistIdState} from '../atoms/playlistAtom';
import {useRecoilState, useRecoilValue} from "recoil";
import { useEffect, useState } from 'react';
import { songIdState } from '../atoms/playlistAtom';
import { audioFeaturesState } from '../atoms/playlistAtom';

import useSpotify from '../hooks/useSpotify';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { signOut, useSession } from 'next-auth/react';

import React from 'react';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

import { MdTransform } from 'react-icons/md';
import {RiInformationLine} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';

// import {RiInformationLine} from "@react-icons/all-files/Ri/RiInformationLine";
  
// import {MdTransform } from "@react-icons/all-files/Md/MdTransform";


// import {FiLogOut} from "@react-icons/all-files/Fi/FiLogOut";



// import {MdDownload} from "react-icons/Md";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});


const colorSelections = [
  ["#7CB9E8", "#7B68EE", "#002244","#7FFFD4", "#000000"],
  ["#051937", "#004d7a", "#008793", "#00bf72", "#a8eb12"],
  ["#d16ba5", "#c777b9", "#ba83ca", "#aa8fd8", "#8aa7ec"],
  ["#FF00FF", "#FF69B4", "#FF00BF", "#eec0c8", "#FFC0CB"],
  ["#d1bf6b", "#ddb369", "#e6a76c", "#ec917d", "#ed8a7e"],
  ["#FFEA00", "#ddb369", "#93C572", "#DFFF00", "#ed8a7e"],
  ["#ed8a7e","#ec917d",  "#e6a76c", "#ddb369","#d1bf6b"],
  ["#ed8a7e","#000000",  "#ff355e", "#8b0000","#ea3c53"],
  ["#ff0800","#dc143c",  "#ff355e", "#8b0000","#801818"],
  ["#3b7a57", "#0bda51", "#90ee90", "#1c352d", "#00fa9a"],
  ["#008000", "#ccff00", "#90ee90", "#1c352d", "#00fa9a"],
  ["#00563f", "#123524", "#74da83", "#123524", "#7ee29a"],
  ["#483d8b", "#11e821", "#0000ff", "#add8e6","#024f00"],
  ["#f4bbff", "#c771d3", "#bd76d9", "#c71585", "#f4bbff"],
  ["#ced16b", "#d1d570", "#ffff00", "#ffffe0", "#ebd570"],
  ["#800080", "#7B68EE", "#9400d3","#7FFFD4", "#dda0dd"],
  ["#ffa500", "#7B68EE", "#9400d3","#ff7f50", "#dda0dd"],
  ["#ffa500", "#ff4500", "#ffdab9","#ff7f50", "#dda0dd"],
  ["#480607", "#ff4500", "#8b4513","#7f1734", "#dda0dd"],
  ["#808080", "#778899", "#708090","#7f1734", "#dcdcdc"],
  ["#808080", "#778899", "#708090","#e5e4e2", "#dcdcdc"],
  ["#ff7f50", "#9932cc", "#708090","#dc143c", "#ff7f50"],

]

let colorArray = colorSelections[Math.floor((Math.random() * 21) + 1)]

let backgroundColor = "#000000";

export const Spirograph = () => {


  // pg.ellipse(random(pg.width), random(pg.height), 100, 100);

  const [currValue, setCurrValue] = useState(0)
  const [avgFeatures, setAvgFeatures]: any[] = useState([])
  const[clicked, setClicked] = useState(false)

  const[SavePhotoClicked, setSavePhotoClicked]= useState(false)
  const audioFeatures:{ [key: string]: any } = useRecoilValue(audioFeaturesState);
  

  const[changeBackgroundClicked, setChangedBackgroundClicked] = useState(false);

  const playlistLength = audioFeatures['audio_features']?.length;

  const[popupClicked, setPopupClicked] = useState(false);


  function findAverage (featureName: string){
    const feature = featureName
    let featureAvg = 0; 

    for (var i = 0; i <  playlistLength; i++) {
      if (audioFeatures['audio_features']?.[i] == null){
        // console.log("IN IF CASE AUDIO FEATUREs")
        featureAvg += 0
      }
      else{
      
        // featureAvg += audioFeatures?.audio_features?.[i][feature]
        featureAvg += audioFeatures?.audio_features?.[i][feature]
      }
      // const temp = someObj[field as keyof ObjectType]
    }

    featureAvg = featureAvg/ playlistLength 
    return featureAvg
  }

  const avg_danceability = findAverage("danceability")
  const avg_tempo = findAverage("tempo");
  const avg_valence = findAverage("valence");
  const avg_energy = findAverage("energy");
  const avg_loudness = findAverage("loudness");
  const avg_duration = findAverage("duration");


  // console.log("avg_danceability: ", avg_danceability)

  // console.log("avg_tempo: ",  avg_tempo)

  // console.log("avg_valence: ", avg_valence)

  // console.log("avg_energy: ", avg_energy)
  // console.log("avg_loudness: ", avg_loudness)

  const preload = (p5: p5Types) => {};
 

  let pg: any; 



  // let colorArray = ["#ff7f50", "#9932cc", "#708090","#dc143c", "#ff7f50"]
  const setup = (p5: p5Types, canvasParentRef: Element)=> {
    p5.background(backgroundColor);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    pg = p5.createGraphics(800, 1000);
   
    // p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    // p5.createLoop({duration:15,gif:true})

  };

  function setClickStatus() {
    setClicked(true);
    colorArray = colorSelections[Math.floor((Math.random() * 21) + 1)]
  }

  function setBackgroundClickStatus(){

    if (backgroundColor == "#FFFFFF"){
      // console.log("BAckgrouns is white")
      backgroundColor = "#000000"
    }
    else{
      // console.log("BAckgrouns is black")
      backgroundColor = "#FFFFFF"
    }
    setChangedBackgroundClicked(true);
  }

  // const onPopupClick = () => {
  //   console.log("in function")
  //   return(
  //     <div className = "absolute text-white text-[100px]"> 
  //     HELLO
  //     <PopupComponent> </PopupComponent>
  //     </div>
  //   )

  // }

  //blueish/purple
  //blueish/green
  //light pink
  //bright pink
  //yellow ish
  //bright yellow
  //reddish dry
  //bright red with black middle
  //bright red
  //green
  //bright green closer to yellow
  //dark green
  //green/blue/purple
  //yellow
  //purple
  //orange/purple
  //orange
  //brownish bright orange
  //grey and orange
  //grey
  //purple red



  

  
 
  let sf = 1; // scaleFactor
  let x = 0; // pan X
  let y = 0; // pan Y
  
  let mx, my; // mouse coords;
  // let colorArray = ["#ff7f50", "#9932cc", "#708090","#dc143c", "#ff7f50"];
 


  let color = "#000000"

  // var fade = 0;
  // var fadeSpeed =1;
  const draw = (p5: p5Types) => {
    
  // p5.tint(255, fade);
  // if (fade < 255) {
  //   fade = fade + fadeSpeed; 
  // }
  // mx = p5.mouseX;
  //  my = p5.mouseY;

    
  // p5.translate(mx, my);
  // p5.scale(sf);
  // p5.translate(-mx, -my);
  // p5.translate();


    let a_tempo = avgFeatures[0];
    let a_danceability = avgFeatures[1];
    let a_valence = avgFeatures[2];
    let a_energy = avgFeatures[3];
    let a_lenPlaylist = avgFeatures[4]
    let a_loudness = avgFeatures[5]


    // console.log("AENEGY", a_energy);
    
    //greater higher r2, and lower r1, more sparse
    // let r1 =500;
    let r1 = a_danceability*100
    // let r2 = a_tempo;

      
    let r2 = ((a_tempo-a_tempo/2)*10);  //keepv under 500 both can be high but have to be the same number
    // ((a_tempo-a_tempo/2)*20)
    
    let r2_4 = a_tempo*5
    let r2_3=  a_tempo*10
    let r2_2 = a_tempo -(a_energy *10)*100;  
    let r2_1= a_tempo 

    
    
    let a1 =1;
    let a2 =2;
    let prevX = 0;
    let prevY = 0;
    

    p5.translate(p5.windowWidth/2, p5.windowHeight/2)
    // p5.translate(800/2, 800/2)
    p5.stroke(255)
    //0.1-2

    const avg_danceability_ele = Math.abs(avg_danceability*10); // Change to positive
    var decimal =  avg_danceability_ele - Math.floor(avg_danceability_ele)
    p5.strokeWeight(decimal)



    let numStrokes = a_tempo *5;

    const a1_val = a_valence *1000; 

    // console.log("VJE CALENCE", a1_val )
    
    for (var x = 0; x < (numStrokes); x++){
      if(a_energy > 0.7){
        r1 = r1 +2;
      }
      else if ( a_energy >0.5358){
        r1 = r1+1
      }
      else if (a_energy >0.5 ){
        // r1 = (a_danceability*2) +((a_tempo-200)*2)
        r1 = a_tempo/a_danceability
      }
      else if (a_energy >0.4 ){
        r1 = 500+a_tempo
      }
      else if (a_energy > 0.2){
        r1 = a_tempo/a_danceability
      }
      else{
        r1 = r1 
      }


      if(a_loudness > 0.8){
        r2 = r2_4
      }
      else if ( a_loudness >0.7){
        r2 = r2_3
      }
      else if ( a_loudness >0.5){
        r2= r2_2
      }
      else if ( a_loudness >0.4){
        r2 = r2_1
      }
      else if (a_loudness < 0){
        r2 = a_tempo *2
      }
      else{
        r2 = r2
      }
      
      //set color
      if (x<numStrokes/4){
        color = colorArray[0]
      }
      else if (x > numStrokes-(numStrokes/4)){
        color = colorArray[1]
      }
      else if (x > numStrokes-(numStrokes/2)){
        color = colorArray[2]
      }
      else if (x >= numStrokes/4){
        color = colorArray[3]
      }
      else{
        color = colorArray[4]
      }
      

      let a1_val_1 = 1;
      let a1_val_2 = 5;

      if(a1_val >800){
        a1_val_1 = 1
        a1_val_2 = 5
      }
      else if(a1_val >600){
        a1_val_1 = 1
        a1_val_2 = 10
      }
      else if(a1_val >590){
        a1_val_1 = 10
        a1_val_2 = 10
      }
      else if(a1_val >580){
        a1_val_1 = 5
        a1_val_2 = 5
      }
      else if(a1_val> 570){
        a1_val_1 = 10
        a1_val_2 = 1
      }
      else if(a1_val >500){
        a1_val_1 = 1
        a1_val_2  = 100
      }
      else if(a1_val >490){
        a1_val_1 = 5
        a1_val_2  = 1
      }
      else if(a1_val >489){
        a1_val_1 = 9
        a1_val_2  = 1
      }
      else if(a1_val >493){
        a1_val_1 = 1
        a1_val_2  = 500000
      }
      else if(a1_val >400){
        a1_val_1 = 1
        a1_val_2  = 5
      }
      else if(a1_val > 370){
        a1_val_1 = 500
        a1_val_2  = 500
      }
      else if(a1_val > 360){
        a1_val_1 = 500
        a1_val_2  = 5000
      }
      else if(a1_val > 350){
        a1_val_1 = 2
        a1_val_2  = 500
      }
      else if(a1_val > 300){
        a1_val_1 = 121
        a1_val_2  = 509
      }
      else{
        a1_val_1 = 1
        a1_val_2 = 5
      }

        for (var i =0; i < 5; i++){
          p5.stroke(color)

          var x1 = r1 * Math.cos(a1)
          var y1 = r1 *Math.sin(a1)
        
          var x2 =x1 +r2 * Math.cos(a2)
          var y2 = y1 +r2 *Math.sin(a2)

          p5.line(prevX, prevY, x2, y2)
          prevX =x2  
          prevY = y2
          
          p5.point(x1, y1)
          // a1 += avg_loudness/10
          a1 += a1_val_1
          a2 +=a1_val_2
          
 

        }
 
    }
  
    // let removeBtn = p5.createButton("Save Canvas");
    // removeBtn.position(30, 200)
    // removeBtn.mousePressed(p5.saveToFile);
    if (SavePhotoClicked){
      setSavePhotoClicked(false);
      p5.saveCanvas(pg, 'png', 'photo');
      
    }
    if(changeBackgroundClicked){
      // console.log("SET IS TRUE")
      p5.background(backgroundColor);

      p5.redraw();
      setChangedBackgroundClicked(false)
    }

    if (clicked){
      // console.log("IS CLICKED")
      p5.background(backgroundColor);

      setAvgFeatures([avg_tempo, avg_danceability, avg_valence, avg_energy, playlistLength, avg_loudness])
      p5.redraw();
      setClicked(false);
 

      
    }
  }
  
  // function keyPressed(p5: p5Types) {
  //   if (key == "s"){
  //     p5.saveCanvas(pg, 'png', 'photo');
  //   }

  // }

  const windowResized = (p5: p5Types) => {

   
    p5.background(backgroundColor);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

      // if(p5.windowHeight > p5.windowWidth){
      //   factor = p5.windowHeight;
      //   factdiv = 1080;
      // }else{
      //   factor = p5.windowWidth;
      //   factdiv = 1920;
      // }
    // p5.resizeCanvas(800, 800);

  };
  const contentStyle = {
    maxWidth: "50%",
    width: "90%",
    opacity: "90%",
    background: "white",
    color:"black",
  };


  return (
    
    <div> 

    <div className= "fixed top-24 pt-20">
    <div className="flex flex-col space-y-1 ...">
      
    <button className ="flex text-center bg-blue-700 border-2 border-blue-500  hover:bg-blue-700 text-[24px] text-white font-bold py-2 px-4 rounded" onClick={() => setClickStatus()}>  
      <MdTransform className = "text-center text-[30px] mr-5" />   Visualize / Change Color
    </button> 

    <div className="flex space-x-1 ...">


    <button className="bg-slate-600 bg-opacity-80 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() => setSavePhotoClicked(true)}>  
      {/* <MdDownload/>  */}
      Download
    </button> 
    <button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() =>setBackgroundClickStatus() }>  
      {/* <MdDownload/>  */}
      Change Background Color
    </button> 



    <div>
      
      
      <Popup className = "text-white  text-[30px]"trigger={<button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() =>setBackgroundClickStatus() }>  
      {/* <MdDownload/>  */}
      <RiInformationLine className = "text-white text-center text-[30px] mx-5 " /> 
    </button> }  modal contentStyle={contentStyle}
      > 
      <h1 className = "font-['Verdana'] font-medium text-black text-[40px] ml-2"> Spirofy:Visualize your playlist </h1>
        <hr/>
        <br/>
        <div className = "text-[25px] ml-2 flex">1. Click  <p className = "flex text-blue-600"> "Visualize/Change Color" </p>  to change the color of the spirograph/ to spirofy new playlist </div>
        <br/>
        <div className = "text-[25px] ml-2 flex">2. Click <p className = "flex text-purple-700"> "Change background color" </p> to change the background of the screen [white, black] </div>
        <br/>
        <div className = "text-[25px] ml-2 flex">3. Click <p className = "flex text-rose-700"> "Download"</p>  to download spirograph as a png file. </div>
        <br/>
        <div className = "text-[25px] ml-2 flex">4. Adjust screen size with "command +/-". </div>
        <br/>
        <div className = "text-[25px] ml-2">Spirofy uses avg. tempo, duration, valence, danceability, loudness, and energy data to visualize your playlists as mathematical forms known as hypotrochoids and epitrochoids. </div>
      
      </Popup>
    </div>


    <div className="text-white text-center text-[30px] "
            onClick= {()=>signOut()}
          >

          <button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " >  
          <p> <FiLogOut className = "text-white text-center text-[30px] mx-5 " /> </p>
          </button> 

      </div>
    

    {/* <button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() =>onPopupClick() }>  

      Details
    </button> 
 */}

    </div>
</div>

  

</div>


      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        
        windowResized={windowResized}
      />

      <div className = "items-center font-serif text-2xl text-[2vw] text-center text-stone-400 ">  
          Spirofy 2022 v1 by imaik
      </div> 


    </div>
  );
};


export default Spirograph;

