import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme(
  {
    colors: { ...proTheme.colors, brand: proTheme.colors.blue },
  },
  proTheme,
)

export default theme
