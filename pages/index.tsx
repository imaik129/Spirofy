

import  SelectionBar from '../components/SelectionBar';
import {useSession, signIn, signOut, getSession} from 'next-auth/react';
import ImageGallery from 'react-image-gallery';

/* load in example spirograph images for ImageGallery Component*/
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



/* load pre-login home screen */
export default function Home() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <main> 
        < SelectionBar /> 
        </main>
      </>
    );
  }

  return (
    // <img className = "flex flex-col   w-1000 h-100" src={'../bar/bar1.png'} alt="" />


    <div className="flex flex-col items-center bg-slate-800 min-h-screen w-full justify-center">
    {/* <div className=" "> 
      <h1 className = "" >     </h1> 
    </div> */}
    <div className="flex flex-row justify-between items-center"> 
      <div> 
        {/* <img className = "object-contain w-33 h-20 " src={'../Icon/icon.png'} alt="" /> */}
      </div>
      <div>
        <h3 className = "text-center lg:text-5xl  sm:test-2xl xs:text-2xl mb-5 pt-20 text-cyan-500 font-bold">
          @ Spirofy: <em>   Visualize Music </em>
        </h3> 
      </div>

    </div>

    <div className=" "> 
      <h3 className = "text-center lg:text-9xl md:text-8xl xs:text-6xl text-6xl  pt-20 text-white font-bold">
      <em> Visualize </em> Your Playlist</h3> 
    </div>

    <div className=" "> 
      <p className = "text-center md:text-4xl sm:text-4xl text-2xl text-white mt-8"> 
      Create a cool spirograph that corresponds to song data from your spotify playlist. 
      {/* The graph's shapes, angles, frame-rate, strokes, thickness, size, disparity, and patterns all correspond to your spotify playlist data <br/>  including but not limited to the playlist's duration, danceability, valence, tempo, length, and loudness. See what your playlist  <br/> looks like as a mathematical pattern, and customize by changing the color of the background and the graph! */}
      
      </p>
    </div>
        

    <div className="text-center mt-10 max-w-prose"> 
    
      <button className = "sticky transform hover:scale-110  transition-all via-cyan-300 bg-gradient-to-br bg-white-200 bg-opacity-100 hover:bg-cyan-300 outline outline-2 outline-cyan-300  duration-500 justify-between h-full  text-white p-6 rounded-full bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:bg-right-bottom hover:to-blue-500 "

        onClick={() => signIn()}> <p className = "text-center font-normal px-20  md:text-6xl sm:text-2xl xs:text-2xl min-[770px]:text-2xl text-6xl"> Visualize </p>
      </button>
      </div> 
  

    </div>

    

    // <div className="flex-col justify-center bg-black ">

    // <div className="flex justify-center  "> 
    
    //   <h1 className = " pt-2000 flex text-[7vw]  pt-20 text-center text-black font-['Courier_New']  font-light" >     </h1> 
    // </div>

    // <div className="flex justify-center "> 
    //   <h3 className = "flex text-8xl mt-10 pd-20 mb-10 text-center text-white font-['Roboto']  font-normal">
    //      Visualize Your Playlist</h3> 
    // </div>

    // <div className="flex justify-center  "> 
    //   <p className = "flex text-base  mb-20 text-center text-sky-100 font-['Lato'] font-extralight"> 
    //   The graph's shapes, angles, frame-rate, strokes, thickness, size, disparity, and patterns all correspond to your spotify playlist data <br/>  including but not limited to the playlist's duration, danceability, valence, tempo, length, and loudness. See what your playlist  <br/> looks like as a mathematical pattern, and customize by changing the color of the background and the graph!</p>
    // </div>
          
    // <div className="flex justify-center mb-20"> 

    //   <button className = "sticky transform hover:scale-110  bg-white bg-opacity-100 hover:bg-cyan-300 mt-0 outline outline-2 outline-black w-200 transition duration-500 justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
    //     onClick={() => signIn()}> <p className = "text-center font-thin px-20 text-2xl"> Visualize </p></button>
    //   </div> 
  

    // </div>
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



    {/* <div className="fixed top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 bottom-0 h-20 "> 
      <button className = "sticky transform hover:scale-110  bg-white bg-opacity-70 hover:bg-green-400 mt-20 outline outline-2 outline-black w-200 transition duration-500 justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
        onClick={() => signIn()}> <p className = "text-center font-thin px-20 text-[40px]"> Start Exploring </p></button>
      </div> 
    */}

    {/* <div className="flex justify-center bg-black "> 
      <ImageGallery items={images} useBrowserFullscreen = {true} autoPlay={true} showThumbnails={true} />
    </div> */}

      {/* <div className="flex justify-center  p-40 "> 
      <button className = "transform hover:scale-110  hover:bg-green-400 mt-20 outline outline-2 outline-black w-200 transition duration-500 flex flex-col justify-between h-full  text-black p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
        onClick={() => signIn()}> <p className = "ftext-center font-thin px-20 text-[2vw]"> Start Exploring </p></button>
      </div> 
    */}