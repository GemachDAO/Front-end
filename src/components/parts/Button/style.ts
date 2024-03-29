import styled from 'styled-components'
import { colors, gradients } from 'src/theme'

const Button = styled.button`
  ${({ shadow }) => shadow && 'box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);'};
  padding: ${({ thin }) => (thin ? '5px 8px' : '8px 20px')};
  font-size: 16px;
  line-height: 26px;
  border-radius: 6px;
  text-transform: ${({ uppercase }) => (!uppercase ? 'none' : 'uppercase')};

  border-width: 1px;
  border-style: solid;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: all ease 0.5s;
`
export const UniswapButton = styled.button`
  ${({ shadow }) => shadow && 'box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);'};
  padding: ${({ thin }) => (thin ? '5px 8px' : '8px 20px')};
  color: ${colors.white};
  background: ${colors.uniswappink};
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  border-radius: 6px;
  text-transform: ${({ uppercase }) => (!uppercase ? 'none' : 'uppercase')};
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-color: ${colors.uniswappink};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: all ease 0.5s;
  &:hover {
    background: rgba(255, 0, 122, 0.5);
    color: ${colors.white};
  }
`
export const SushiswapButton = styled.button`
  ${({ shadow }) => shadow && 'box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);'};
  padding: ${({ thin }) => (thin ? '5px 8px' : '8px 20px')};
  color: ${colors.white};
  background: ${colors.blue};
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  border-radius: 6px;
  text-transform: ${({ uppercase }) => (!uppercase ? 'none' : 'uppercase')};
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-color: ${colors.blue};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: all ease 0.5s;
  &:hover {
    background: rgba(61, 67, 207, 0.5);
    color: ${colors.white};
  }
`

export const RedButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.red};
  border-color: ${colors.red};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.redder};
      border-color: ${colors.redder};
    }`}
`

export const GrayButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.gray};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.gray};
      background: ${colors.lightGray};
    }`}
`

export const WhiteButton = styled(Button)`
  color: ${colors.black};
  background: ${colors.white};
  border-color: ${colors.gemachblue};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.white};
      background: ${colors.gemachblue};
    }`}
`

export const PinkButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.pink};
  border-color: ${colors.red};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.redder};
    }`}
`

export const GreenButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.lime};
  border-color: ${colors.green};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.green};
    }`}
`

export const DiscordButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.discord};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.discord};
      background: ${colors.white};
    }`}
`

export const GradientButton = styled(Button)`
  color: ${colors.white};
  background: ${gradients.grayblue};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${gradients.black};
    }`}
`
