
import {useSession, signIn, signOut} from 'next-auth/react';


export default function preHome() {

  return (
    <>

      This is the preHome screen <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

