// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react'
import NextNProgress from 'nextjs-progressbar'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
 
export default function App({ Component, pageProps }: AppProps) {  
  return (
    <>
        <SpeedInsights />
        <Head>
          <link rel="shortcut icon" href="../../static/favicon.ico" type="image/x-icon" />
          <title>Shed Construction</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
        {/* SEO */}
          <meta name="description" content="ArMax Renovation LLC specializes in high-quality, affordable shed construction and installation services with a 3-year warranty. Explore our range of durable, weather-resistant sheds perfect for any outdoor space" />
          <meta name="keywords" content="Shed Construction, Affordable Sheds, Quality Sheds, Custom Sheds, Weather-Resistant Sheds, Garden Sheds, Outdoor Storage, Shed Builders, Shed Installation, Shed Warranty, Shed Construction, Shed Construction Company, Shed Construction Company in Georgia, Shed Construction Company in Atlanta, Sheds in Atlanta, Sheds in Georgia, Back offices in Georgia, Shed Construction Company near me, ArMax Renovation LLC" />
          <meta name="author" content="ArMax Renovation LLC" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 day" />
          <meta name="application-name" content="Shed Construction" />
          <meta name='canonical' content='www.shed-construction.com'/>
        </Head>
        <NextUIProvider>
            <RootLayout >
                <NextNProgress color="#ffc43a" />
                <Component {...pageProps}/>
            </RootLayout>
        </NextUIProvider>
    </>
  )
}