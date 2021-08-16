import { useRef, useState } from 'react'
import NextLink from 'next/link'

import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'

import ConnectWalletButton from './ConnectWalletButton'
import {
  HeaderWrapper,
  HeaderContainer,
  MobileNavButton,
  LogoContainer,
  HeaderBrandContainer,
  HeaderNavContainer,
  HeaderNav,
  HeaderNavItem,
  DropdownCarot,
  DropdownNavItem,
  DropdownContainer,
} from './style'

const DropdownCarotIcon = ({ active = false }) => (
  <img
    src={active ? '/images/icon-carot-up.svg' : '/images/icon-carot-down.svg'}
    alt={active ? 'Close Dropdown' : 'Open Dropdown'}
    width={20}
    height={10}
  />
)

const Header = ({ currentPage = '' }) => {
  const governanceDropdownRef = useRef()

  const [
    isGovernanceDropdownActive,
    setGovernanceDropdownIsActive,
  ] = useDetectOutsideClick(governanceDropdownRef, false)

  const handleGovernanceDropdownClick = () => {
    setGovernanceDropdownIsActive(!isGovernanceDropdownActive)
  }

  const handleDropdownItemClick = () => {
    setGovernanceDropdownIsActive(false)
    setMobileNavIsActive(false)
  }

  const [isMobileNavActive, setMobileNavIsActive] = useState(false)
  const handleMobileNavClick = () => setMobileNavIsActive(!isMobileNavActive)
  return (
    <HeaderWrapper as="header">
      <HeaderContainer thin>
        <HeaderBrandContainer>
          <MobileNavButton>
            <img
              src={
                isMobileNavActive
                  ? '/images/icon-close.svg'
                  : '/images/icon-mobile-nav.svg'
              }
              alt="Open Mobile Nav"
              width={30}
              height={30}
              onClick={handleMobileNavClick}
            />
          </MobileNavButton>
          <LogoContainer>
            <NextLink href="/">
              <a onClick={() => setMobileNavIsActive(false)}>
                <img
                  src="/brand.svg"
                  alt="Gemach DAO Logo"
                  width={150}
                  height={150}
                />
              </a>
            </NextLink>
          </LogoContainer>
        </HeaderBrandContainer>
        <HeaderNavContainer>
          <HeaderNav active={isMobileNavActive}>
            <NextLink href="https://gemach.io/app.html" passHref={true}>
              <HeaderNavItem
                target="_blank"
                onClick={() => setMobileNavIsActive(false)}
              >
                Interest, Loans, & Staking
              </HeaderNavItem>
            </NextLink>
            <NextLink href="/mission">
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('mission')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Mission
              </HeaderNavItem>
            </NextLink>
            <DropdownNavItem>
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('governance')}
                onClick={handleGovernanceDropdownClick}
              >
                Governance
                <DropdownCarot>
                  <DropdownCarotIcon active={isGovernanceDropdownActive} />
                </DropdownCarot>
              </HeaderNavItem>
              <DropdownContainer
                ref={governanceDropdownRef}
                active={isGovernanceDropdownActive}
              >
                <li>
                  <NextLink href="https://snapshot.org/#/gemach.eth">
                    <a onClick={handleDropdownItemClick} target="_blank">
                      Vote
                    </a>
                  </NextLink>
                </li>
              </DropdownContainer>
            </DropdownNavItem>
          </HeaderNav>
          <ConnectWalletButton />
        </HeaderNavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
