import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        overflowX: 'hidden',
        bgGradient:
          'linear-gradient(90deg, dappTemplate.bgStripes 0.1%, dappTemplate.dark.base 0.1%, dappTemplate.dark.base 50%, dappTemplate.bgStripes 50%, dappTemplate.bgStripes 50.1%, dappTemplate.dark.base 50.1%, dappTemplate.dark.base 100%);',
        bgSize: '700px',
        backgroundPositionX: '150px',
        color: 'dappTemplate.white',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: 1.5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'dappTemplate.dark.base',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'dappTemplate.light',
          borderRadius: 1.5,
        },
        scrollbarWidth: 'auto',
        scrollbarColor: 'dappTemplate.light dappTemplate.dark.base',
      },
    },
  },
  fonts: {
    heading: 'Comfortaa, sans-serif',
    body: 'Comfortaa, sans-serif',
  },
  colors: {
    dappTemplate: {
      bgStripes: '#000000',
      shadowColor: '#141414',
      dark: {
        lighter: '#f0c132',
        base: '#000000',
        darker: '#1d222a',
      },
      light: '#FAFFFD',
      white: '#ffffff',
      color1: {
        lighter: '#59a1ea',
        base: '#3C91E6',
        darker: '#1c7bda',
      },
      color2: {
        lighter: '#f0c132',
        base: '#F0c132',
        darker: '#f0c132',
      },
      color3: {
        lighter: '#f0c132',
        base: '#f0c132',
        darker: '#f0c132',
      },
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'dappTemplate.dark.lighter',
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1560px',
  },
});
