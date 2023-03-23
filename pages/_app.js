import SSRProvider from 'react-bootstrap/SSRProvider'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import ScrollTopButton from '../components/ScrollTopButton'
import '../scss/theme.scss'
import { AuthStateProvider } from "../state/AuthStateProvider/AuthStateProvider";
import { NotificationsStateProvider } from "../state/NotificationsStateProvider/NotificationsStateProvider";

const Finder = ({Component, pageProps}) => {

  // Bind NProgress to Next Router events (Page loading animation)
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Finder | Directory &amp; Listings React / Next.js Bootstrap Template</title>
        <meta name='description' content='Finder - Directory &amp; Listings React / Next.js Bootstrap Template'/>
        <meta name='keywords'
              content='react, nextjs, bootstrap, business, directory, listings, e-commerce, car dealer, city guide, real estate, job board, user account, multipurpose, ui kit, css3, javascript, gallery, slider, touch'/>
        <meta name='author' content='Createx Studio'/>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png'/>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png'/>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png'/>
        <link rel='manifest' href='/favicon/site.webmanifest'/>
        <link rel='mask-icon' color='#5bbad5' href='/favicon/safari-pinned-tab.svg'/>
        <meta name='msapplication-TileColor' content='#766df4'/>
        <meta name='theme-color' content='#ffffff'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
      </Head>

      <NotificationsStateProvider>
        <AuthStateProvider>
          <Component {...pageProps} />
        </AuthStateProvider>
      </NotificationsStateProvider>

      <ScrollTopButton
        showOffset={600}
        duration={800}
        easing='easeInOutQuart'
        tooltip='Top'
      />
    </SSRProvider>
  )
}

export default Finder
