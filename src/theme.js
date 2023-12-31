import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`;
const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    // light mode
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange

    //     // ....
    //   },
    //   // spacing: (factor) => `${0.25 * factor}rem`,
    // },

    // dark mode
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange

    //     // ...
    //   },
    // },
  },

  // ...other properties
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT

  },

  // breakpoint
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    }
  },

  components: {
    // Name of the component

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'capitalize'
        },
      },
    },

  },

  MuiTypography: {
    styleOverrides: {
      // Name of the slot
      root: {
        '& .MuiTypography-body1': {
          fontSize: '0.875rem'
        }
      }
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      // Name of the slot
      root: ({ theme }) => {
        return {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem'
        };
      }
    },
  },


  MuiOutlinedInput: {
    styleOverrides: {
      // Name of the slot
      root: ({ theme }) => {
        return {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.main
          //   },
          // },
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          }
        };
      }
    },
  },

});

export default theme;