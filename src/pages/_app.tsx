import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import SiteLayout from '../components/global/SiteLayout'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import * as gtag from '../utils/gtag'

export const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

const defaultPageMeta = {
  title: 'Gemach DAO',
}

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderDefault = dynamic(
  () => import('../providers/Web3ReactProviderDefaultSSR'),
  { ssr: false }
)

const GemachApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderDefault getLibrary={getLibrary}>
        <SiteLayout pageMeta={pageProps.pageMeta || { defaultPageMeta }}>
          <Component {...pageProps} />
        </SiteLayout>
      </Web3ReactProviderDefault>
    </Web3ReactProvider>
  )
}

export default GemachApp
