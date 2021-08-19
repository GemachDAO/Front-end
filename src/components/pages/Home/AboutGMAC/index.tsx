import {
  SectionWrapper,
  SectionContainer,
  Col2Row,
  Col1,
  Heading,
  Paragraph,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Col2Row>
          <Col1>
            <Heading>About Gemach</Heading>
            <Paragraph
              css={`
                margin-bottom: 20px;
              `}
            >
              Gemach is the native token of Gemach DAO and is an instrument to
              coordinate the activity among its community members for
              participation in the unbanked Web3 movement.
            </Paragraph>
          </Col1>
        </Col2Row>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
