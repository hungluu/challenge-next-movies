import type { AppProps } from 'next/app'
import Head from 'next/head'
import pkg from '../package.json'
import 'normalize.css/normalize.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>{pkg.name.replace(/[\W]+/, ' ')}</title>
      <meta name='description' content={pkg.description} />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
