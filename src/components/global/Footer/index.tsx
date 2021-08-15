import NextLink from 'next/link'

import {
  FooterWrapper,
  FooterContainer,
  BrandRow,
  CopyrightRow,
  IconsCol,
  CopyrightCol,
} from './style'

const Footer = () => {
  return (
    <FooterWrapper as="footer">
      <FooterContainer thin>
        <BrandRow>
          <img src="/logo.svg" alt="Gemach Logo" width={60} height={60} />
          <strong>Gemach DAO</strong>
        </BrandRow>
        <CopyrightRow>
          <IconsCol>
            <NextLink href="https://www.facebook.com/gemach.io">
              <a target="_blank">
                <img
                  src="/images/facebook.svg"
                  alt="Facecbook Icon"
                  width={32}
                  height={35}
                />
              </a>
            </NextLink>
            <NextLink href="https://www.instagram.com/gemach.io/">
              <a target="_blank">
                <img
                  src="/images/instagram.svg"
                  alt="Instagram Icon"
                  width={32}
                  height={35}
                />
              </a>
            </NextLink>
            <NextLink href="https://twitter.com/gemach_io">
              <a target="_blank">
                <img
                  src="/images/twitter.svg"
                  alt="Twitter Icon"
                  width={32}
                  height={35}
                />
              </a>
            </NextLink>
            <NextLink href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNTMxNDQ1NjM2">
              <a target="_blank">
                <img
                  src="/images/telegram.svg"
                  alt="Telegram Icon"
                  width={35}
                  height={28}
                />
              </a>
            </NextLink>
          </IconsCol>
          <CopyrightCol>
            &copy; {new Date().getFullYear()} Gemach DAO
          </CopyrightCol>
        </CopyrightRow>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
