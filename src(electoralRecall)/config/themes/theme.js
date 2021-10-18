/*
 * lib: theme
 * author: Favour George
 * Date: April 9, 2020
 * Theme hack
 */

const light = {
  gradient: {
    primary: 'linear-gradient(#39598A, #79D7ED)',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      badge: '#162b4d'
    },
    primary: {
      light: '#146D3C',
      main: '#003333',
      dark: '#002424',
      link: '#12cd8b',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FF9404',
      main: '#FF6600',
      dark: '#8b3800',
      contrastText: '#FFFFFF'
    },
    alternate: {
      light: '#C300C3',
      main: '#6C006C',
      dark: '#4A004A',
      contrastText: '#FFFFFF'
    },
    error: {
      light: '#E25E64',
      main: '#DC3545',
      dark: '#D32F2F',
      contrastText: '#FFFFFF'
    },
    warning: {
      light: '#ffd750',
      main: '#FFC107',
      dark: '#a17d04',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: '#79BEE8',
      main: '#17A2B8',
      dark: '#007BFF',
      contrastText: '#FFFFFF'
    },
    success: {
      light: '#A7ECB8',
      main: '#2DCE89',
      dark: '#1b712f',
      contrastText: '#FFFFFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#303030',
      A700: '#616161',
      main: '#FAFAFA',
      dark: '#BDBDBD',
      contrastText: '#424242'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.68)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      placeholder: 'rgba(82,85,96,0.5)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    background: {
      paper: '#fff',
      default: '#EFF0F5',
      primary: '#FAFAFA',
      secondary: '#FFFFFF',
      inset: '#E2E4E8',
      input: 'rgba(65,67,78,0.12)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    }
  },
};

const dark = {
  gradient: {
    primary: 'linear-gradient(#091236, #1E215D)',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    primary: {
      light: '#8800ff',
      main: '#51007a',
      dark: '#34005a',
      link: '#64008f',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#4d89ef',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#FFFFFF'
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: '#FFFFFF'
    },
    warning: {
      light: '#FFB74D',
      main: '#FF9800',
      dark: '#F57C00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: '#FFFFFF'
    },
    success: {
      light: '#81C784',
      main: '#4CAF50',
      dark: '#388E3C',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#303030',
      A700: '#616161',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      placeholder: 'rgba(145,148,161,0.5)',
    },
    background: {
      paper: '#424242',
      default: '#212121',
      primary: '#050505',
      secondary: '#111111',
      inset: '#111111',
      input: 'rgba(191,193,201,0.12)'
    },
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }
  }
};

const defaults = {
  typography: {
    fontFamily: "'Montserrat', 'Rubik', sans-serif",
    fontSize: '14px',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
    p: 1.5,
    span: 1.2
  },
  button: {
    light: '#8800FF',
    main: '#5700A5',
    dark: '#4D008F',
    darker: '#4d0074',
    color: '#FAFAFA',
  },
  // Put other themeables here
};

export const lightTheme = {...defaults, ...light};
export const darkTheme = {...defaults, ...dark};
