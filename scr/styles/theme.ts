import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#054ABF',
      600: '#FFFFFF',
      500: '#C69236'
    },
    secondary: {
      700: '#FBA94C',
      600: '#FFFFFF'
    },
    button:{
      700: '#054ABF',
      bg: '#FFFFFF',
      click: '#f5f5f5'
      
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    red: {
      700: '#922',
      600: '#811',
      500: '#ff0000'

    },
    white: '#FFFFFF',
    },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});