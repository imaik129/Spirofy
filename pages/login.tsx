import {getProviders, signIn} from "next-auth/react";

function Login({providers}: any) {
//  console.log({providers})
  return (
    <div className = "flex flex-col items-center bg-white min-h-screen w-full justify-center">
        <img className = "w-40 mb-5" src = '../../spotify.png' alt = ""/> 
        
        {Object.values(providers).map((provider:any) => (
            <div key = {provider.name}> 
            <div className=" mb-100 flex flex-col">
                {/* <button className = "flex flex-col justify-between h-full bg-black text-white rounded-xl p-4  hover:from-spotifyGreen hover:to-[#33a7ea]" */}

                <div className="text-center mt-10 max-w-prose"> 
    
                <button className = "sticky transform hover:scale-110  text-black hover:text-white transition-all via-cyan-300 bg-gradient-to-br bg-white-200 bg-opacity-100 hover:bg-cyan-300 outline outline-2 outline-cyan-300  duration-500 justify-between h-full  text-white p-6 rounded-full bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:bg-right-bottom hover:to-blue-500 "
                    onClick = {
                        () => signIn(provider.id, { callbackUrl: '/' })
                    }>
                <p className ="text-center font-normal px-20 lg:text-6xl md:text-4xl sm:text-2xl xs:text-2xl text-3xl" > 
                    Login with <em> {provider.name}</em>
                </p>
                </button>

                </div> 
               
                {/* <button className = "transform text-4xl hover:scale-110  hover:bg-blue-800 hover:text-white outline outline-2 outline-black w-200 transition duration-500  text-black p-2 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
                // <button className = " hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                
                onClick = {
                    () => signIn(provider.id, { callbackUrl: '/' })
                }>
                    <p className ="text-center font-thin px-20 text-[2vw]"> 
                Login with {provider.name}
                </p>
                </button> */}


            </div>

            </div>
        ))}


    </div>
  );
}

export default Login;

export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props:{
            providers
        },
    };
}