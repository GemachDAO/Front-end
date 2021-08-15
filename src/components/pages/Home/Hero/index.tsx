import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Heading,
  Eyebrow,
  Description,
  ButtonContainer,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Eyebrow>The Future Will Remain Unbanked</Eyebrow>
        <Heading>The Gemach DAO welcomes you</Heading>
        <Description>
          Gemach DAO is a decentralized community driving adoption and awareness
          of bankless money systems like Ethereum, Bitcoin and DeFi through
          media, culture, and education.
        </Description>
        <ButtonContainer>
          <NextLink href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNTMxNDQ1NjM2">
            <a>
              <Button theme="discord" shadow>
                Join the Telegram
              </Button>
            </a>
          </NextLink>
        </ButtonContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
