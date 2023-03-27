import 'reset-css';
import '@/styles/globals.css'
import '@/styles/layout.css'
import '@/styles/media.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
