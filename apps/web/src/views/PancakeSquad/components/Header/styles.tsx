import { Box, Flex, lightColors, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSquadHeaderContainer = styled(Flex)`
  position: relative;
  background: linear-gradient(180deg, #31e101 0%, #0F4F0E 100%);
`

export const StyledSquadTitle = styled(Text)`
  font-size: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
  }
`

export const StyledSquadEventBorder = styled(Box)`
  background: linear-gradient(180deg, #53dee9 0%, #7645d9 100%);
  border-radius: 32px;
`

export const StyledSquadEventContainer = styled(Flex)`
  background: ${lightColors.text};
  background-clip: padding-box;
  border-radius: inherit;
`
