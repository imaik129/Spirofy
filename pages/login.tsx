import {getProviders, signIn} from "next-auth/react";

function Login({providers}: any) {
 console.log({providers})
  return (
    <div className = "flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img className = "w-80 mb-5" src = "https://links.papareact.com/9xl" alt = ""/> 
        
        {Object.values(providers).map((provider:any) => (
            <div key = {provider.name}> 
            <div className="flex flex-col  flex-col justify-between rounded-xl bg-gradient-to-r   p-px from-spotifyGreen via-[#2d6d8b] to-[#33a7ea]">
                {/* <button className = "flex flex-col justify-between h-full bg-black text-white rounded-xl p-4  hover:from-spotifyGreen hover:to-[#33a7ea]" */}
                 <button className = "transform hover:scale-110 bg-blue-400 w-80 transition duration-500 flex flex-coljustify-between h-full  text-white p-4 rounded-xl bg-gradient-to-rfrom-black to-black hover:from-spotifyGreen hover:to-blue-500"
                
                // <button className = " hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                
                onClick = {
                    () => signIn(provider.id, { callbackUrl: '/' })
                }>
                    
                Login with {provider.name}
                
                </button>


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