import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return( 
        <>
          <Navbar/>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </>
        );
}
