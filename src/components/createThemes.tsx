import { PaletteMode } from '@mui/material';


export const createThemes = (mode: PaletteMode) => ({
    palette: {
        mode: mode,
        primary: {
          main: mode==='dark' ? '#003147' : '#4c5440',
          contrastText: mode==='dark' ? '#fff' : '#fff'
        },
        secondary: {
          main: mode==='dark' ? '#0c1b24' : '#132b13 ',
          contrastText: mode==='dark' ? '#fff' : '#fff'
        },
          background: {
            default: 'black',
            paper: mode==='dark' ? '#003147' : '#4c5440' 
          },

        },
    typography: {
      allVariants: {
        ...(mode === 'dark' ? { color: '#608a9e',} : { color: '#768462'}),}
    }
});