import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'

import HeroSection from 'src/components/pages/Home/Hero'
import AboutDAOSection from 'src/components/pages/Home/AboutDAO'
import AboutGMACSection from 'src/components/pages/Home/AboutGMAC'
import React from 'react'

const pageMeta: PageMetaProps = {
  title: 'Home | Gemach DAO',
  description:
    'A decentralized community driving adoption and awareness of bankless money systems like Ethereum, Bitcoin and DeFi.',
  url: 'https://www.gemach.io/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutDAOSection />
      <AboutGMACSection />
    </React.Fragment>
  )
}

export default Page
