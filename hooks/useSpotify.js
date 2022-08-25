import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

function useSpotify() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      // If Refresh token fails make user login again
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }

      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session])

  return spotifyApi
}


export default useSpotify

// import { useEffect } from "react";
// import {useSession, signIn, signOut} from 'next-auth/react';
// import SpotifyWebApi from "spotify-web-api-node";


// const spotifyAPI = new SpotifyWebApi({
//     clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
// })



// function useSpotify() {
//     const { data: session } = useSession();

//     useEffect(() => {
//       if (session) {
//         if (session.error === 'RefreshAccessTokenError') {
//           signIn();
          
//         }
//         console.log("HIII", session.user.accessToken)
//         spotifyAPI.setAccessToken(session.user.accessToken);
//       }
//     }, [session]);
  
//     return spotifyAPI;
//   }
  
//   export default useSpotify;