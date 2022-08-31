
import dynamic from "next/dynamic";
import p5Types from "p5";
import { playlistState, playlistIdState} from '../atoms/playlistAtom';
import {useRecoilState, useRecoilValue} from "recoil";
import { useEffect, useState } from 'react';
// import { songIdState } from '../atoms/playlistAtom';
import { audioFeaturesState } from '../atoms/playlistAtom';

// import useSpotify from '../hooks/useSpotify';

// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { signOut, useSession } from 'next-auth/react';

import React from 'react';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

import { MdTransform } from 'react-icons/md';
import {RiInformationLine} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';
import {VscGraphLine} from 'react-icons/vsc';
import{BsFillImageFill,BsCardImage} from 'react-icons/bs';
// import {FaExchangeAlt} from 'react-icons/fa';
import { Line, Bar} from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
import Chart from "chart.js/auto";

// import {RiInformationLine} from "@react-icons/all-files/Ri/RiInformationLine";
  
// import {MdTransform } from "@react-icons/all-files/Md/MdTransform";


// import {FiLogOut} from "@react-icons/all-files/Fi/FiLogOut";



import {MdDownload} from "react-icons/md";

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
  const [avgFeatures, setAvgFeatures]: any[] = useState([])
  
  const[clicked, setClicked] = useState(false)

  const[SavePhotoClicked, setSavePhotoClicked]= useState(false)

  const audioFeatures:{ [key: string]: any } = useRecoilValue(audioFeaturesState);
  
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  const[changeBackgroundClicked, setChangedBackgroundClicked] = useState(false);

 const[changeBackgroundIcon, setChangeBackgroundIcon] = useState(false);
  
  const playlistLength = audioFeatures['audio_features']?.length;

  // const[popupClicked, setPopupClicked] = useState(false);


  function findAverage (featureName: string){
    const feature = featureName
    let featureAvg = 0; 

    for (var i = 0; i <  playlistLength; i++) {
      if (audioFeatures['audio_features']?.[i] == null){
        featureAvg += 0
      }
      else{
        featureAvg += audioFeatures?.audio_features?.[i][feature]
      }
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

  const setup = (p5: p5Types, canvasParentRef: Element)=> {
    p5.background(backgroundColor);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    // pg = p5.createGraphics(800, 1000);
    pg = p5.createGraphics(p5.windowWidth, p5.windowHeight);
  };

  function setClickStatus() {
    setClicked(true);
    colorArray = colorSelections[Math.floor((Math.random() * 21) + 1)]
  }

  function setBackgroundClickStatus(){
    if (backgroundColor == "#FFFFFF"){
      backgroundColor = "#000000"
      setChangeBackgroundIcon(true);
    }
    else{
      backgroundColor = "#FFFFFF"
      setChangeBackgroundIcon(false);
    }
    setChangedBackgroundClicked(true);

  }


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




  let color = "#000000"

 
  const draw = (p5: p5Types) => {

    let a_tempo = avgFeatures[0];
    let a_danceability = avgFeatures[1];
    let a_valence = avgFeatures[2];
    let a_energy = avgFeatures[3];
    let a_lenPlaylist = avgFeatures[4]
    let a_loudness = avgFeatures[5]

    let r1 = a_danceability*100

    let r2 = ((a_tempo-a_tempo/2)*10);  //keepv under 500 both can be high but have to be the same number
    let r2_4 = a_tempo*5
    let r2_3=  a_tempo*10
    let r2_2 = a_tempo -(a_energy *10)*100;  
    let r2_1= a_tempo 

    let a1 =1;
    let a2 =2;
    let prevX = 0;
    let prevY = 0;

    p5.translate(p5.windowWidth/2, p5.windowHeight/2)
    p5.stroke(255)


    const avg_danceability_ele = Math.abs(avg_danceability*10); // Change to positive
    var decimal =  avg_danceability_ele - Math.floor(avg_danceability_ele)
    p5.strokeWeight(decimal)

    let numStrokes = a_tempo *5;

    const a1_val = a_valence *1000; 
    
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
        if(x==0 && i ==0){
          p5.stroke(50, 0)
          p5.strokeWeight(0);
        }
        p5.strokeWeight(1);
        p5.line(prevX, prevY, x2, y2)
        prevX =x2  
        prevY = y2
          
        p5.point(x1, y1)
        // a1 += avg_loudness/10
        a1 += a1_val_1
        a2 +=a1_val_2
        }
 
    }
  
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
  

  const windowResized = (p5: p5Types) => {
    p5.background(backgroundColor);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    
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
    <div className="flex flex-col space-y-1 ... ">
      
    <button className ="flex text-center bg-blue-700 border-2 border-blue-500  hover:bg-blue-500 text-[24px] text-white font-bold py-2 px-4 rounded" onClick={() => setClickStatus()}>  
      <MdTransform className = "text-center text-4xl mr-5" />   Visualize / Change Color
    </button> 
    

    <div className="flex space-x-1 ...">

    <div className="flex"> 
    <button className="bg-slate-600 bg-opacity-80 hover:bg-blue-700  text-2xl  text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() => setSavePhotoClicked(true)}>  
      <MdDownload className = "text-white text-center text-3xl mx-5 "/> 
      {/* Download */}
    </button> 
    </div>
    <div className="flex"> 
    <button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-2xl text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " onClick={() =>setBackgroundClickStatus() }>  
      {/* Change Bg. Color */}
      <p> {changeBackgroundIcon ? <BsCardImage className = "text-white text-center text-3xl mx-5 "/> : <BsFillImageFill className = "text-white text-center text-3xl mx-5 "/>  } </p>

    </button> 
    </div>
    <div className="flex " >
      
    <Popup className = " text-white  text-2xl "trigger={<button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " >  
      {/* <MdDownload/>  */}
      <RiInformationLine className = "text-white text-center text-3xl mx-5 " /> 
    </button> }  modal contentStyle={contentStyle}
      > 

      <br/> 
      <h1 className = "font-['Verdana'] font-medium text-white text-3xl ml-2"> Spirofy.com: About </h1>
        <hr/>
        <br/>

        <div className = ""> 
          {/* <div className ="text-blue-800"> */}
          <div className = "text-sm ml-2 flex text-white">1. Click  "Visualize/Change_Color" to change the color of the spirograph/ to spirofy new playlist </div>
          <br/>
          {/* <p className = "text-purple-700"> */}
          <div className = "text-sm ml-2 flex text-white">2. Click Background Icon to change the background color of the screen [white, black] </div>
          <br/>
          {/* <p className = "text-rose-700"> */}
          <div className = "text-sm ml-2 flex text-white">3. Click the download button to download spirograph as a png file! (e.g. use as playlist cover, share with friends!) </div>
          <br/>
          <div className = "text-sm ml-2 flex text-white">4. Adjust screen size with "command +/-". </div>
          <br/>
          <div className = "text-sm ml-2 text-white">Spirofy uses avg. tempo, duration, valence, danceability, loudness, and energy data to visualize your playlists as mathematical forms known as hypotrochoids and epitrochoids. </div>
          <hr/>
          <br/> 
        </div> 
        {/* <div className = ""> 
          <div className = "text-sm ml-2 flex text-white">1. Click <p className = "text-blue-800">  "Visualize/Change_Color"  </p> to change the color of the spirograph/ to spirofy new playlist </div>
          <br/>
          <div className = "text-sm ml-2 flex text-white">2. Click <BsCardImage className = "mt-2 mx-5"/> to <p className = "mx-2 text-purple-700"> change the background </p> screen [white, black] </div>
          <br/>
          <div className = "text-sm ml-2 flex text-white">3. Click <MdDownload className = "mt-2 mx-5"/>  to <p className = "mx-2 text-rose-600"> download </p> spirograph as a png file to use as your playlist cover! </div>
          <br/>
          <div className = "text-sm ml-2 flex text-white">4. Adjust screen size with "command +/-". </div>
          <br/>
          <div className = "text-sm ml-2 text-white">Spirofy uses avg. tempo, duration, valence, danceability, loudness, and energy data to visualize your playlists as mathematical forms known as hypotrochoids and epitrochoids. </div>
          <hr/>
          <br/> 
        </div>  */}
      </Popup>

      <Popup className = "popupGraph text-white text-2xl "trigger={<button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-5 ml-1 rounded border-2 border-blue-500 " >  
      {/* <MdDownload/>  */}
      <VscGraphLine className = "text-white text-center text-3xl mx-5 " /> 
    </button> }  modal contentStyle={contentStyle}
      > 

      <br/> 
      <h1 className = "font-['Verdana'] font-medium text-white text-3xl ml-2"> Spirofy.com: Visualize your playlist</h1>
      <br/> 



      <hr/>
      <h3 className = "flex  font-['Verdana'] font-medium text-white text-3xl ml-2 mt-5"> 
      <hr/>
      <img
        className="ml-5  mr-5 mb-5 flex h-15 w-20 shadow-2xl"
        src={playlist['images'][0]?.['url']}
        alt="album image"
      />
      Current Playlist:  {playlist.name}</h3>
      <hr/>
      <br/> 
        <Line
            data={{
              labels: [
                "Danceability *100",
                "# of Songs",
                "Duration:",
                "Loudness: *10",
                "Valence *100",
                "Energy *100",
                "Tempo"
              ],
              datasets: [
        
                {
                  label: "Average Playlist",
                  data: [0.737*100, 50, 55, -8*10, 0.546*100, 0.72*100, 121.306],
                  fill: true,
                  backgroundColor: "rgba(255, 0, 0, 0.4)",
                  borderColor: "red",
                  borderWidth: 2
                },
                {
                  label: "Your Playlist",
                  data: [avg_danceability *100, playlistLength, 60,avg_loudness*10, avg_valence*100, avg_energy*100, avg_tempo],
                  backgroundColor: "rgba(75,192,192,0.8)",
                  fill: true,
                  borderColor: "blue",
                  borderWidth: 2
                }
              ]
            }}
            height={220}
            width={500}
            options={{
              maintainAspectRatio: true
              ,
              scales: {
                y: {
                  ticks: {
                    color: 'rgb(255,250,250, 0.9)',
                    font: {
                      size: 10,
                    }
                  }
                },
                x: {
                  ticks: {
                    color: 'rgb(255,250,250, 0.9)',
                    font: {
                      size: 10
                    }
                  }
                }
              }
            }}
          />
             <br/> 
          <Bar
            data={{
              labels: [
                "Danceability *100",
                "# of Songs",
                "Duration:",
                "Loudness: *10",
                "Valence *100",
                "Energy *100",
                "Tempo"
              ],
              datasets: [
                {
                  label: "Your Playlist",
                  data: [avg_danceability *100, playlistLength, 60,avg_loudness*10, avg_valence*100, avg_energy*100, avg_tempo],
                  backgroundColor: "rgba(75,192,192,0.9)",
                  // fill: true,
                  borderColor: "blue",
                  borderWidth: 2
                },
                {
                  label: "Average Playlist",
                  data: [0.737*100, 50, 55, -8*10, 0.546*100, 0.72*100, 121.306],
                  // fill: true,
                  backgroundColor: "rgba(255, 0, 0,0.9)",
                  borderColor: "red",
                  borderWidth: 2
                }
              ]
            }}
            height={220}
            width={500}
            options={{
              maintainAspectRatio: true,
              scales: {
                y: {
                  ticks: {
                    color: 'rgb(255,250,250, 0.9)',
                    font: {
                      size: 10
                    }
                  }
                },
                x: {
                  ticks: {
                    color: 'rgb(255,250,250, 0.9)',
                    font: {
                      size: 10
                    }
                  }
                }
              }
            }}
            
            
          />
          
        <div className = "text-[25px] text-white ml-2 bg-opacity-20 "> 
        <hr/> 
        <br/>
        <h4 className = "text-3xl font-['Verdana']  pb-4"  > Playlist Characteristic Description: </h4>  
      
        <div className = "characteristic font-['Courier'] text-sm"> 
        - Length: The number of songs in a playlist. <br/>  
        - Danceability: A measurement of how danceable the song is derived through a combination of values such as energy, rhythm and other relevant song characteristics. <br/> 
        - Duration: The average length of a song in a playlist. 
        <br/> - Loudness: A measurement of the loudness of the playlist. Louder == more energetic.  
         <br/>- Valence: A value between 0.0 and 1.0. A higher valence corresponds to emotions such as happy and excited, while a lower valence corresponds to feelings of sadness and depression. 
         <br/>- Energy: A measurement of how intense and active the songs in the playlist are on average.
        <br/>- Tempo: Measured in BPM (Beats Per Minute). Tempo represents the average pace of a playlist.</div>
      </div>

      </Popup>



    </div>



    <div className="flex text-white text-center text-[30px] "
            onClick= {()=>signOut()}
          >

          <button className="bg-slate-600 bg-opacity-90 after:outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded border-2 border-blue-500 " >  
          <p> <FiLogOut className = "text-white text-center text-[30px] mx-5 " /> </p>
          </button> 

      </div>
    

    </div>
</div>

  

</div>
 <div >

      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        
        windowResized={windowResized}
      />

      {/* <div className = "items-center font-serif text-2xl text-[2vw] text-center text-stone-400 ">  
          Spirofy 2022 v1 by imaik
      </div>  */}

</div>
    </div>
  );
};


export default Spirograph;

