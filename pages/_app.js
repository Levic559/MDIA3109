import '../styles/app.scss'
import MyThemeProvider from '../utils/provider'
function MyApp({ Component, pageProps }) {
  return  <MyThemeProvider>

    <Component {...pageProps} />
  </MyThemeProvider> 
}

export default MyApp
