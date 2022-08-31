import type { NextPage } from 'next'
// import { signOut, useSession} from 'next-auth/react'

import Image from 'next/image'

import  SelectionBar from '../components/SelectionBar';
import TopNav from '../components/TopNav'
// import Dropdown from '../components/Dropdown'

import {useSession, signIn, signOut, getSession} from 'next-auth/react';

import ImageGallery from 'react-image-gallery';
// import Head from 'next/head'
// import Spirograph from '../components/Spirograph'
const images = [
  {
    original: '../spirograph_examples/1.png',
    thumbnail: '../spirograph_examples/1.png',
  },
  {
    original: '../spirograph_examples/3.png',
    thumbnail: '../spirograph_examples/3.png',
  },
  {
    original: '../spirograph_examples/5.png',
    thumbnail: '../spirograph_examples/5.png',
  },
  {
    original: '../spirograph_examples/6.png',
    thumbnail: '../spirograph_examples/6.png',
  },
  {
    original: '../spirograph_examples/7.png',
    thumbnail: '../spirograph_examples/7.png',
  },
  {
    original: '../spirograph_examples/4.png',
    thumbnail: '../spirograph_examples/4.png',
  },
  {
    original: '../spirograph_examples/2.png',
    thumbnail: '../spirograph_examples/2.png',
  },
];



export default function Home() {
  const { data: session, status } = useSession();

  
  if (session) {
    return (
      <>
        <main> 

        < SelectionBar /> 
        {/* <Spirograph/> */}
        </main>
      </>
    );
  }
  return (
    <div className="flex-col justify-center bg-white ">


    {/* <Head>
    <title>Spirofy: Playlist Visualizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}

    <div className="flex justify-center  "> 
    
      <h1 className = " pt-2000 flex text-[7vw]  pt-20 text-center text-black font-['Courier_New']  font-light" >     <img className = "flex flex-col   w-1000 h-100" src={'../bar/bar1.png'} alt="" /></h1> 
    </div>

    <div className="flex justify-center "> 
      <h3 className = "flex text-4xl mt-10 pd-20 mb-10 text-center text-black font-['Roboto']  font-light">
         Generate Complex Graphs To Visualize Your Spotify Playlist!</h3> 
    </div>

    <div className="flex justify-center  "> 
      <p className = "flex text-base  mb-20 text-center text-sky-900 font-['Lato'] font-extralight"> 
      The graph's shapes, angles, frame-rate, strokes, thickness, size, disparity, and patterns all correspond to your spotify playlist data <br/>  including but not limited to the playlist's duration, danceability, valence, tempo, length, and loudness. See what your playlist  <br/> looks like as a mathematical pattern, and customize by changing the color of the background and the graph!</p>
    </div>
          
    <div className="flex justify-center mb-20"> 

      <button className = "sticky transform hover:scale-110  bg-white bg-opacity-70 hover:bg-cyan-300 mt-0 outline outline-2 outline-black w-200 transition duration-500 justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
        onClick={() => signIn()}> <p className = "text-center font-thin px-20 text-2xl"> Start Exploring </p></button>
      </div> 
   

    {/* <div className="fixed top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 bottom-0 h-20 "> 
      <button className = "sticky transform hover:scale-110  bg-white bg-opacity-70 hover:bg-green-400 mt-20 outline outline-2 outline-black w-200 transition duration-500 justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
        onClick={() => signIn()}> <p className = "text-center font-thin px-20 text-[40px]"> Start Exploring </p></button>
      </div> 
    */}

    <div className="flex justify-center bg-black "> 
      <ImageGallery items={images} autoPlay={true} showThumbnails={false} showFullscreenButton ={false}/>
    </div>

      {/* <div className="flex justify-center  p-40 "> 
      <button className = "transform hover:scale-110  hover:bg-green-400 mt-20 outline outline-2 outline-black w-200 transition duration-500 flex flex-col justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
        onClick={() => signIn()}> <p className = "ftext-center font-thin px-20 text-[2vw]"> Start Exploring </p></button>
      </div> 
    */}

    </div>
  );
}

export async function getServerSideProps(context:any){
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}

