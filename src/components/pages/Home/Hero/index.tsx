import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Heading,
  Eyebrow,
  Description,
  ButtonContainer,
  Unicorn,
  BtnText,
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
          <NextLink
            href="https://app.uniswap.org/#/swap?outputCurrency=0xd96e84ddbc7cbe1d73c55b6fe8c64f3a6550deea"
            passHref={true}
          >
            <a target="_blank">
              <Button theme="uniswap" shadow>
                <Unicorn src="images/uniswap-uni-logo.png" />
                <BtnText>Buy on Uniswap </BtnText>
              </Button>
            </a>
          </NextLink>
          <NextLink
            href="https://app.sushi.com/swap?outputCurrency=0xd96e84ddbc7cbe1d73c55b6fe8c64f3a6550deea"
            passHref={true}
          >
            <a target="_blank">
              <Button theme="sushiswap" shadow>
                <Unicorn src="images/sushiswap-sushi-logo.png" />
                <BtnText>Buy on Sushiswap</BtnText>
              </Button>
            </a>
          </NextLink>
        </ButtonContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
