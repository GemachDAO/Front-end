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
              Gemach is the native token of the Gemach DAO, which acts as a tool
              to coordinate activity and is awarded to community members for
              participation in the bankless movement.
            </Paragraph>
          </Col1>
        </Col2Row>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
