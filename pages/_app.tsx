import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts.css";

function ResumeApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>CV&nbsp;|&nbsp;Tom Bu</title>
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default ResumeApp;
