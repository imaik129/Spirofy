

import useSpotify from '../hooks/useSpotify';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import spotifyApi from '../lib/spotify';

// import Songs from "../components/songs"
import { playlistIdState } from '../atoms/playlistAtom';
import {useRecoilState} from "recoil";
import Spirograph from '../components/Spirograph'

import { Fragment} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { playlistState} from '../atoms/playlistAtom';

import { audioFeaturesState } from '../atoms/playlistAtom';


function SelectionBar() {


  const spotifyApi = useSpotify()

  const [playlist, setPlaylist] = useRecoilState(playlistState);

  const [playlists, setPlaylists] = useState([] as any[])
  const [playlistId, setPlaylistID] = useRecoilState(playlistIdState)


  const { data: session, status } = useSession();
  const [audioFeatures, setAudioFeatures] = useRecoilState(audioFeaturesState);

  // const [selected, setSelected] = useState(playlist[])

  const [selected, setSelected] = useState( {
    "collaborative" : false,
    "description" : "",
    "external_urls" : {
      "spotify" : "https://open.spotify.com/playlist/23ZNzltCcWKLltQFlrwIUx"
    },
    "followers" : {
      "href" : null,
      "total" : 0
    },
    "href" : "https://api.spotify.com/v1/playlists/23ZNzltCcWKLltQFlrwIUx",
    "id" : "23ZNzltCcWKLltQFlrwIUx",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
      "width" : 640
    } ],
    "name" : "Normal People",
    "owner" : {
      "display_name" : "kyosuke912",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
      },
      "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
      "id" : "kyqm5w3ecp5ecovlu3j7e2622",
      "type" : "user",
      "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
    },
    "primary_color" : null,
    "public" : false,
    "snapshot_id" : "NSwzNDE0MGM2NDI4NDczODg2YTM3MzUyNjNiOTQwNmM5NGU5YzVkZDFi",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/playlists/23ZNzltCcWKLltQFlrwIUx/tracks?offset=0&limit=100&locale=en-US,en;q=0.9",
      "items" : [ {
        "added_at" : "2022-06-17T21:28:55Z",
        "added_by" : {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
          },
          "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
          "id" : "kyqm5w3ecp5ecovlu3j7e2622",
          "type" : "user",
          "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
        },
        "is_local" : false,
        "primary_color" : null,
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
              },
              "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
              "id" : "3MZsBdqDrRTJihTHQrO6Dq",
              "name" : "Joji",
              "type" : "artist",
              "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
            } ],
            "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX"
            },
            "href" : "https://api.spotify.com/v1/albums/5EzDhyNZuO7kuaABHwbBKX",
            "id" : "5EzDhyNZuO7kuaABHwbBKX",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e0253f6fa0d2589c6a7174f4b81",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d0000485153f6fa0d2589c6a7174f4b81",
              "width" : 64
            } ],
            "name" : "Nectar",
            "release_date" : "2020-09-25",
            "release_date_precision" : "day",
            "total_tracks" : 18,
            "type" : "album",
            "uri" : "spotify:album:5EzDhyNZuO7kuaABHwbBKX"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
            },
            "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
            "id" : "3MZsBdqDrRTJihTHQrO6Dq",
            "name" : "Joji",
            "type" : "artist",
            "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4N7IToHBlPXqlrXiv1Nij6"
            },
            "href" : "https://api.spotify.com/v1/artists/4N7IToHBlPXqlrXiv1Nij6",
            "id" : "4N7IToHBlPXqlrXiv1Nij6",
            "name" : "rei brown",
            "type" : "artist",
            "uri" : "spotify:artist:4N7IToHBlPXqlrXiv1Nij6"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "disc_number" : 1,
          "duration_ms" : 166883,
          "episode" : false,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "ZZOPM2002176"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/4UiogCfzKQW98U1GTCivsn"
          },
          "href" : "https://api.spotify.com/v1/tracks/4UiogCfzKQW98U1GTCivsn",
          "id" : "4UiogCfzKQW98U1GTCivsn",
          "is_local" : false,
          "name" : "Normal People (feat. rei brown)",
          "popularity" : 62,
          "preview_url" : "https://p.scdn.co/mp3-preview/5d7659e2441b512e53368b78096c4b25fa92e8cd?cid=0c6341c05681483e87400a216858a4e4",
          "track" : true,
          "track_number" : 12,
          "type" : "track",
          "uri" : "spotify:track:4UiogCfzKQW98U1GTCivsn"
        },
        "video_thumbnail" : {
          "url" : null
        }
      } ],
      "limit" : 100,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 3
    },
    "type" : "playlist",
    "uri" : "spotify:playlist:23ZNzltCcWKLltQFlrwIUx"
  })



  const [allIDs, setallIDs] = useState(['4V33aS5qju2ujbQt8JKi6P']);

  // let tempArray = 
  // useEffect(() => {
  //   if (spotifyApi.getAccessToken()) {
  //     // console.log("in use effect")
 
  //     spotifyApi.getUserPlaylists({ limit: 50 ,offset:0}).then((data: any) => {
  //       setPlaylists(data.body.items);
  //       // console.log(data.body.items);
  //     });
  //   }
  //   }


 
  const [playlistOne, setPlaylistOne] = useState([]);

  const [playlistTwo, setPlaylistTwo] = useState([]);

  const [playlistThree, setPlaylistThree] = useState([]);

  const [playlistFour, setPlaylistFour] = useState([]);

  const [playlistFive, setPlaylistFive] = useState([]);

 

  useEffect(() => {

    if (spotifyApi.getAccessToken()) {
      // console.log("in use effect")
      // let tempPlaylists = [];
      spotifyApi.getUserPlaylists({ limit: 50 ,offset:0}).then((data: any) => {
        
        // setPlaylistOne(data.body.items)
        setPlaylists(data.body.items);
        // console.log(data.body.items);
      });

      // setPlaylists([playlistOne])
      // setPlaylists([...playlistOne, ...playlistTwo]);
      // spotifyApi.getUserPlaylists({ limit: 50 ,offset:102}).then((data: any) => {
      //   setPlaylistThree(data.body.items);
      //   // setPlaylists(playlists => [playlists, ...data.body.items])

      //   // console.log(data.body.items);
      // });
      // spotifyApi.getUserPlaylists({ limit: 50 ,offset:154}).then((data: any) => {
      //   setPlaylistFour(data.body.items);
      //   // setPlaylists(playlists => [playlists, ...data.body.items])

      //   // console.log(data.body.items);
      // });

      // spotifyApi.getUserPlaylists({ limit: 50 ,offset:205}).then((data: any) => {
      //   setPlaylistFive(data.body.items);
      //   // setPlaylists(playlists => [playlists, ...data.body.items])

      //   // console.log(data.body.items);
      // });

      // setPlaylists([...playlistOne, ...playlistTwo, ...playlistThree, ...playlistFour, ...playlistFive]);
      // setPlaylists(playlistOne, playlistTwo)
    }
    else{
      console.log("no access token")
    }
    


    
  }, [session, spotifyApi]);
  

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // console.log("in use effect")
 
      spotifyApi.getUserPlaylists({ limit: 50 ,offset:51}).then((data: any) => {
        setPlaylistTwo(data.body.items);
        // console.log(data.body.items);
      });
    }
    else{
      console.log("no access token")
    }
  }, [session, spotifyApi]);
  
  
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // console.log("in use effect")
 
      spotifyApi.getUserPlaylists({ limit: 50 ,offset:154}).then((data: any) => {
        setPlaylistThree(data.body.items);
        // console.log(data.body.items);
      });
    }
    else{
      console.log("no access token")
    }
  }, [session, spotifyApi]);
  

  
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // console.log("in use effect")
 
      spotifyApi.getUserPlaylists({ limit: 50 ,offset:205}).then((data: any) => {
        setPlaylistFour(data.body.items);
        // console.log(data.body.items);
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
    spotifyApi.getPlaylist(playlistId).then((data: any) => {
      setPlaylist(data.body);
      // console.log(playlist);
      // setallIDs([(playlist.tracks?.items.map((track) => track.track.id))])
    });
  }, [spotifyApi, playlistId]);

  useEffect(() => {
      const IdList = (playlist.tracks?.items.map((track) => track.track.id))
      setallIDs(IdList)

  }, [spotifyApi, playlist]);
  

  // useEffect(() => {
  //   spotifyApi.getMyTopTracks().then((data) => {
  //     console.log("USER TOP TRACKS: ", data.body);
  //     // setPlaylist(data.body);
  //   });
  // }, [spotifyApi, playlistId]);
  
let songIDs = allIDs;

useEffect(() => {

  spotifyApi.getAudioFeaturesForTracks(songIDs).then((data: any) => {
    setAudioFeatures(data.body);
    
    // console.log("AUDIO FEATURES", data.body);
  })
  .catch((err: any) => console.log('Something went wrong!', err));
  
}, [spotifyApi, songIDs]);


// console.log("CURRENT PLAYLIST", playlist.name)

// console.log("AUDIO FEATURES TEST BUG", audioFeatures)



  return (

    <div> 
        <div className = "flex flex-col space-y-1 ..."> 
        {/* papyrus */}
          <div className = "font-['Wingdings']  fixed top-0  text-[5em]  text-blue-300">
            Spirofy
          </div>
      
          <div>
            <Spirograph/>
          </div>
        </div>
      <div className="fixed top-20 pt-9 w-72 ">
        {/*   */}
        <Listbox value={selected}  onChange={setSelectedAndSetPlaylist}>
          <div className="relative mt-1">
             <Listbox.Button className=" py-2 border-2 border-blue-500  relative w-full cursor-default rounded-lg bg-white  bg-opacity-80 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate inset-y-0 left-0 flex items-center">
                  <img
                    className="h-8 w-8 shadow-2xl left-0"
                    src={selected['images'][0]['url']}
                    alt=""
                  />
                  <p className = "flex space-x-2 px-2 text-[20px]">  
                    {selected['name']}
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
                
                {playlists.concat(playlistTwo, playlistThree, playlistFour).map((playlist) => (
                  <Listbox.Option
                    key={playlist['id']}
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
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            
                          }`}
                        > 
                        
                          {playlist['name']}
                          
                          <span className="absolute inset-y-2 left-0 flex items-center">
                          <img
                              className="h-8 w-58shadow-2xl"
                              src={(playlist['images'] == undefined) ? null : playlist['images'][0]?.['url']}
                              alt="album image"
                          />

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
