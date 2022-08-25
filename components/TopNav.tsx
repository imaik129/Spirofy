import useSpotify from '../hooks/useSpotify';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';


function TopNav() {
    const { data: session } = useSession();
    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
      setActive(!isActive);
    };

    return (

        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide select-none relative">
        <header className="absolute top-5 right-8" onClick={handleToggle}>
          <div className="flex items-center bg-[#2e2e2e] space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2">
            <img
              className="rounded-full w-10 p-1 h-10"
              src={session?.user.image}
              alt="user image"
            />
            <h2 className="text-white">{session?.user.name}</h2>
            {/* <ChevronDownIcon className="text-white h-5 w-5" /> */}
          </div>
        </header>
        <div
          className={
            `h-10 w-52 rounded-sm bg-[#2e2e2e] text-white absolute right-8 top-[4.3rem] flex-col` +
            ' ' +
            `${isActive ? 'hidden' : 'flex'}`
          }
        >
          <div
            className="flex items-center justify-between cursor-pointer px-3 py-2"
            onClick={signOut}
          >
            <p className="hover:bg-[#2b2d30]">Log out</p>
            {/* <LogoutIcon className="w-5 h-5" /> */}
          </div>
        </div>
    
      </div>
    );
    }
    
  
  export default TopNav