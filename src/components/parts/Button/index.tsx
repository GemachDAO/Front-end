import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  GrayButton,
  DiscordButton,
  GradientButton,
  UniswapButton,
  SushiswapButton,
} from './style'

const Button = ({
  theme = 'red',
  thin = false,
  shadow = false,
  disabled = false,
  children,
  ...restProps
}) => {
  if ('green' === theme)
    return (
      <GreenButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </GreenButton>
    )
  if ('pink' === theme)
    return (
      <PinkButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </PinkButton>
    )
  if ('white' === theme)
    return (
      <WhiteButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </WhiteButton>
    )
  if ('discord' === theme)
    return (
      <DiscordButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </DiscordButton>
    )
  if ('gray' === theme)
    return (
      <GrayButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </GrayButton>
    )
  if ('gradient' === theme)
    return (
      <GradientButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </GradientButton>
    )
  if ('uniswap' === theme)
    return (
      <UniswapButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </UniswapButton>
    )
  if ('sushiswap' === theme)
    return (
      <SushiswapButton
        thin={thin}
        shadow={shadow}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </SushiswapButton>
    )
  return (
    <RedButton thin={thin} shadow={shadow} disabled={disabled} {...restProps}>
      {children}
    </RedButton>
  )
}

export default Button
