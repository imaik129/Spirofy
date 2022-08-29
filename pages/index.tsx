import type { NextPage } from 'next'
// import { signOut, useSession} from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'

import  SelectionBar from '../components/SelectionBar';
// import TopNav from '../components/TopNav'
// import Dropdown from '../components/Dropdown'

import {useSession, signIn, signOut, getSession} from 'next-auth/react';

// import Spirograph from '../components/Spirograph'

export default function Home() {
  const { data: session, status } = useSession();


  
  
  if (session) {
    return (
      <>

        <main> 
        {/* <TopNav/>*/}
        < SelectionBar /> 
        {/* <Spirograph/> */}
        </main>
      </>
    );
  }
  return (
    <>
      <p className = "text-white">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      </p>
    </>
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

