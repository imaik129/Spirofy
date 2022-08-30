// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// // import '../styles/globals.css'
// // import type { AppProps } from 'next/app'

// // import {SessionProvider} from 'next-auth/react';

// // function MyApp({ Component, pageProps: {session, ...pageProps}}: AppProps) {

// //   return 
// //     <SessionProvider session={session}>
// //       <Component {...pageProps} />
// //     </SessionProvider>
// // }

// // export default MyApp

import {SessionProvider} from 'next-auth/react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

import { AppProps } from 'next/app'
import Footer from '../components/Footer'


function App({Component, pageProps: {session, ...pageProps}}: any) {

  return (
    
    <SessionProvider session={session}>

      <RecoilRoot>
          <link rel="icon" href="public/favicon.ico"/>
      <Component {...pageProps} />
      </RecoilRoot>
      <Footer/>
    </SessionProvider>
    

  );
}


export default App;

