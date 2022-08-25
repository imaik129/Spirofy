
import dynamic from "next/dynamic";
import p5Types from "p5";
import { playlistState, playlistIdState} from '../atoms/playlistAtom';
import {useRecoilState, useRecoilValue} from "recoil";
import { useEffect, useState } from 'react';
import { songIdState } from '../atoms/playlistAtom';
import { audioFeaturesState } from '../atoms/playlistAtom';

import useSpotify from '../hooks/useSpotify';

import {MdDownload} from "react-icons/Md";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});


export const Spirograph = () => {

  // pg.ellipse(random(pg.width), random(pg.height), 100, 100);

  const [currValue, setCurrValue] = useState(0)
  const [avgFeatures, setAvgFeatures] = useState([])
  const[clicked, setClicked] = useState(false)

  const[colorChangeClicked, setColorChangeClicked]= useState(false)
  const audioFeatures = useRecoilValue(audioFeaturesState);
  

  const playlistLength = audioFeatures.audio_features?.length;

  function findAverage (featureName){
    const feature = featureName
    let featureAvg = 0; 

    for (var i = 0; i <  playlistLength; i++) {
      if (audioFeatures?.audio_features?.[i] == null){
        console.log("IN IF CASE AUDIO FEATUREs")
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

  const preload = (p5: p5Types) => {};
 

  let pg; 

  // let colorArray = ["#ff7f50", "#9932cc", "#708090","#dc143c", "#ff7f50"]
  const setup = (p5: p5Types, canvasParentRef: Element)=> {
    p5.background(1);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    pg = p5.createGraphics(800, 1000);

    // p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    // p5.createLoop({duration:15,gif:true})

  };

  function setClickStatus() {
    setClicked(true);
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
  
  const colorArray = colorSelections[Math.floor((Math.random() * 21) + 1)]


  // let list_idx=  Math.round(((avg_valence -0.5)*100));

  // if (list_idx > 10){
  //   list_idx = 7
  // }
  // else if (list_idx < 0){
  //   list_idx= 0
  // }

  // let colorArray = colorSelections[list_idx]


  // let list_idx = 0;
  // let colorArray = colorSelections[list_idx]

  // function setColor(){
  //   list_idx=  Math.round(((avg_valence -0.5)*100));
  //   if (list_idx >= 8){
  //     list_idx = 8
  //   }
  //   else if (list_idx < 0){
  //     list_idx= 0
  //   }
  //   let colorArray = colorSelections[list_idx]

  // }


  
  // console.log("LIST INDEX", list_idx)
  // console.log("calculation", (avg_valence -0.5)*100)

  function findR1(avg_value){
    
  }


  function keyTyped(p5: p5Type) {

      p5.saveCanvas('photo', 'png');
   
  }
  const draw = (p5: p5Types) => {

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
    let prevX;
    let prevY;
    

    p5.translate(p5.windowWidth/2, p5.windowHeight/2)
    // p5.translate(800/2, 800/2)
    p5.stroke(255)
    //0.1-2

    const avg_danceability_ele = Math.abs(avg_danceability*10); // Change to positive
    var decimal =  avg_danceability_ele - Math.floor(avg_danceability_ele)
    p5.strokeWeight(decimal)


    let color = "#000000"
    
    let numStrokes = a_tempo *5;

    const a1_val = a_valence *1000; 

    // console.log("VJE CALENCE", a1_val )

    for (var x = 0; x < numStrokes; x++){
      // 0.5357
      //0.5717058823529412
      //0.5909699999999997
      //0.722125
      //0.5736666666666667
      // change stroke dynamic-ness
      // console.log("ASDFASD", a_energy)
      // if (a_energy > 0.7){
      //   r1 = r1+3
      // }
      // p5.scale(2)
      
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
      else{
        r2 = r2
      }


      // else{
      //   r1 = r1;
      // }
      
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
    if (colorChangeClicked){
      setColorChangeClicked(false);
      p5.saveCanvas(pg, 'png', 'photo');
      
    }
    if (clicked){
      console.log("IS CLICKED")

      // p5.saveCanvas(p5, 'photo', 'png');
      p5.background(1);
      // p5.save("pg.png"); 
      // setCurrValue(avg_tempo);
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

   
    p5.background(1);
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


  return (
    
    <div> 

    <div class= "fixed top-14">

    <button class ="flex bg-blue-500 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded" onClick={() => setClickStatus()}>  
      Visualize / Change Color
    </button> 

    <button class ="outline-10 hover:bg-blue-700 text-[20px] text-white font-bold py-2 px-4 rounded" onClick={() => setColorChangeClicked(true)}>  
      <MdDownload/> 
    </button> 


</div>

      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        
        windowResized={windowResized}
      />

      <div class= "items-center font-serif text-2xl text-center text-stone-400 ">  
          Spirofy 2022 v1
      </div> 


    </div>
  );
};


export default Spirograph;

