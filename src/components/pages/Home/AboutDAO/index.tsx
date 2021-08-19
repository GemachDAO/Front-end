import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Col1,
  Col2,
  Heading,
  Subheading,
  Paragraph,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Col1
          src="/images/gemach-mission.jpg"
          srcset="/images/gemach-mission-mobile.jpg 320w, /images/gemach-mission.jpg 768w"
          alt="Node Graph Illustration"
        />
        <Col2>
          <Heading>Gemach DAO</Heading>
          <Subheading>We have entered into the sharing economy.</Subheading>
          <Paragraph>
            Gemach DAO is a shared public good ecosystem created to leverage
            blockchain technology. The GMAC token is our lifeblood and the
            governance token that will direct the future of our ecosystem
            through proposals, voting, and in coordinating economic activity
            under a single offering. The GMAC token is a borderless token where
            every participant can contribute to its growth and development in
            proportion to their participation. Our shared ecosystem allows us to
            pool our resources and diverse talents together and realize our
            combined potential under a common goal to create opportunities for
            everyone around the world.
          </Paragraph>
          <NextLink href="/mission">
            <a>
              <Button theme="white">Read More</Button>
            </a>
          </NextLink>
        </Col2>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
