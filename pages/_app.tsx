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
  const description = "A playlist visualizer for Spotify. Create unique mathematical spirographs using detailed playlist data."
  return (
    
    <SessionProvider session={session}>
      <Head> 
      <title>Spirofy: Playlist Visualizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="public/favicon.ico" />
        <meta name="description" content={description} />
        </Head> 
      <RecoilRoot>
          <link rel="icon" href="public/favicon.ico"/>
      <Component {...pageProps} />
      </RecoilRoot>
      <Footer/>
    </SessionProvider>
    

  );
}


export default App;

