import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

import BodySection from '../../../src/components/pages/Mission/Body'

const pageMeta: PageMetaProps = {
  title: 'Gemach DAO Mission | Gemach DAO',
  description: 'The mission for Gemach DAO.',
  url: 'https://gemach.io/mission',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return <BodySection />
}
export default Page
