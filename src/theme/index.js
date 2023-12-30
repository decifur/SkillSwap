import { extendTheme } from '@chakra-ui/react'


const breakpoints = {
    'md':'52em'
}

const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}


const theme = extendTheme({config,breakpoints })

export default theme