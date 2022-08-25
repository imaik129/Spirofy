

import useSpotify from '../hooks/useSpotify';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import spotifyApi from '../lib/spotify';

import Songs from "../components/songs"
import { playlistIdState } from '../atoms/playlistAtom';
import {useRecoilState} from "recoil";
import Spirograph from '../components/Spirograph'

import { Fragment} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { playlistState} from '../atoms/playlistAtom';

import { audioFeaturesState } from '../atoms/playlistAtom';





function SelectionBar() {
  //spotify API
  const spotifyApi = useSpotify()

  const [playlist, setPlaylist] = useRecoilState(playlistState);

  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistID] = useRecoilState(playlistIdState)

  const { data: session, status } = useSession();
  const [audioFeatures, setAudioFeatures] = useRecoilState(audioFeaturesState);

  const [selected, setSelected] = useState(playlists[0])

  const [allIDs, setallIDs] = useState(['4V33aS5qju2ujbQt8JKi6P']);



  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      console.log("in use effect")
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
        console.log(data.body.items);
      });
    }
    else{
      console.log("no access token")
    }
  }, [session, spotifyApi]);
  

  function setSelectedAndSetPlaylist(playlist: any){
    setPlaylistID(playlist.id);
    setSelected(playlist);
  }

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body);
      // setallIDs([(playlist.tracks?.items.map((track) => track.track.id))])
    });
  }, [spotifyApi, playlistId]);

  useEffect(() => {
      setallIDs([(playlist.tracks?.items.map((track) => track.track.id))])
  }, [spotifyApi, playlist]);
  

  // useEffect(() => {
  //   spotifyApi.getMyTopTracks().then((data) => {
  //     console.log("USER TOP TRACKS: ", data.body);
  //     // setPlaylist(data.body);
  //   });
  // }, [spotifyApi, playlistId]);
  
  // if (allIDs.length == 0 || typeof allIDs[0] === 'undefined'){
  //   setallIDs(['4V33aS5qju2ujbQt8JKi6P'])
  // }

let songIDs = allIDs;

useEffect(() => {

  spotifyApi.getAudioFeaturesForTracks(songIDs).then((data) => {
    setAudioFeatures(data.body);
    
    // console.log("AUDIO FEATURES", data.body);
  })
  .catch((err) => console.log('Something went wrong!', err));
  
}, [spotifyApi, songIDs]);


console.log("CURRENT PLAYLIST", playlist.name)

console.log("AUDIO FEATURES TEST BUG", audioFeatures)


  return (

    <div> 
        <div> 
          {/* <Songs/> */}
        </div>
        <Spirograph/>
      <div className="fixed top-0 w-72">
        {/*   */}
        <Listbox value={selected}  onChange={setSelectedAndSetPlaylist}>
          <div className="relative mt-1">
             <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate inset-y-0 left-0 flex items-center">
                  <img
                    className="h-8 w-8 shadow-2xl left-0"
                    src={selected?.images?.[0]?.url}
                    alt=""
                  />
                  <p className = "flex space-x-2">  
                    {selected?.name}
                  </p> 
                </span>

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
            
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {playlists.map((playlist) => (
                  <Listbox.Option
                    key={playlist.id}
                    // onChange={() => setPlaylistID(playlist.id)}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    
                    value={playlist}
                  >
                    {({ selected }) => (
                      <>
                        <span
                            // onClick={() => setPlaylistID(playlist.id)}
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            
                          }`}
                        >
                          {playlist.name}
                          
                          <span className="absolute inset-y-0 left-0 flex items-center">
                                <img
                              className="h-8 w-58shadow-2xl"
                              src={playlist?.images?.[0]?.url}
                              alt="album image"
                          />
                            {/* <img className = "" src = {playlist?images?.[0]?.url}
                          alt = ""/> */}
                          </span>

                        </span>
                        
                        {selected ? (
                          <span  className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            
                            {/* <img className = "" src = {playlist?images?.[0]?.url}
                          alt = ""/> */}
                          </span>
                        ) : null}
                      </>
                    )}
                    
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    <div className = "fixed bot-30 text-white">  
      Spriofy 2022 v1
    {/* {playlists.map((playlist) => (
      <p
        key={playlist.id}
        onClick={() => setPlaylistID(playlist.id)}
        className="cursor-pointer hover:text-black"
      >
        {playlist.name}

      </p>
      
    ))} */}

    </div> 


{/* 
    <Songs playlist = {playlist} /> */}
    {/* <div>  
      {playlist.tracks?.items.map((song) => (
      <div>  {song.track.duration_ms} </div>
      ))}
    </div> 
       */}

  
    </div>
  );
}

export default SelectionBar;
