import { useRecoilValue, useRecoilState } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import { useEffect, useState } from 'react';

import useSpotify from '../hooks/useSpotify';

import { songIdState } from '../atoms/playlistAtom';
import { audioFeaturesState } from '../atoms/playlistAtom';

import Spirograph from '../components/Spirograph'

function Songs() {
    
  // const [tempo, setTempo] = useState(0)
  // const playlist = useRecoilValue(playlistState);
  // const spotifyApi = useSpotify();
  // const [songId, setSongID] = useRecoilState(songIdState)
  // const audioFeatures = useRecoilValue(audioFeaturesState);

  // function findAverage (featureName){
  //   const feature = featureName
  //   let featureAvg = 0; 
  //   const length = audioFeatures.audio_features?.length;
  //   for (var i = 0; i < length; i++) {
  //       featureAvg += audioFeatures?.audio_features?.[i][feature]
  //   }

  //   featureAvg = featureAvg/length
  //   // console.log(featureAvg);
  //   return featureAvg
  // }
  // const tempo = findAverage("tempo");

  // const danceability = findAverage("danceability") +100;

  // console.log("temp in songs", tempo)
  return (
    <div  className="">
      
      <div id="">


      {/* <Spirograph/> */}
    </div>

    </div>
  );
}

export default Songs;
