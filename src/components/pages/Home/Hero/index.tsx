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
        <Heading>Introducing Gemach DAO</Heading>
        <Description>
          Gemach DAO is a community-driven initiative that aims to organize,
          educate and empower people in the use of decentralized finance. This
          initiative will bring together leaders from around the world together
          to drive awareness, adoption and education around the concepts behind
          decentralized finance (DeFi) ecosystems. Our mission is to provide an
          open ecosystem for anyone interested in learning about and
          participating in DeFi activities from borrowing, to lending and
          staking. Gemach DAO aims to build bridges between communities by
          providing tools for the Web3 future.
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
