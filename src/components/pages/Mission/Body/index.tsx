import { SectionWrapper, SectionContainer, Heading, Paragraph } from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Heading>Our Mission</Heading>
        <Paragraph>
          As many around the world remain unbanked, Gemach DAO’s mission
          involves much more than providing moneylending services. Our mission
          involves educating our communities about financial literacy and the
          importance of self-sufficiency, facilitating dialogue between members
          of each community to achieve a broader goal – financial stability in
          both present and future generations. Gemach DAO allows people who
          usually wouldn't have access to credit the opportunity to borrow money
          as well as create a group lending system with our decentralized
          autonomous organization. Gemach DAO allows users to borrow with no
          minimum loan amount where everybody can participate, issue proposals,
          vote, and have a voice in the future of the protocol. Our mission is
          to positively impact the world while encouraging communal
          responsibility, knowledge-sharing, and participation regardless of
          one’s financial situation or background.
        </Paragraph>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
