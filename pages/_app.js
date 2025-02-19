import "@/styles/globals.css";
import Navbar from "@/components/Navigation"

export default function App({ Component, pageProps }) {
  return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
  )
}
