import React from 'react'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider} from '@mui/material'
import { createThemes } from './components/createThemes'
import GlobalStyles from '@mui/material/GlobalStyles';
import Intro from './components/Intro'
import { NavBar } from './components/NavBar'
import { useSelector } from 'react-redux'
import { IRootState  } from './store'
import APOTD from './components/APOTD'
import Explore from './components/Explore'
import { Mars } from './components/Mars'
import { Search } from './components/Search'


function App () {
const mode = useSelector((state: IRootState) => state.variant.variant)
const theme = React.useMemo(() => createTheme(createThemes(mode)), [mode]);
  return (
    <>
        <GlobalStyles styles={{ 
        body: {margin: 0, padding: 0, overflowX: 'hidden'},
        html: {margin:0, padding:0}
        }} />
        <ThemeProvider theme={(theme)}>
            <Box id='home'  bgcolor={"background.default"}>
                <NavBar />
                <Intro/>
                <Explore />
                <APOTD />
                <Mars />
                <Search />
            </Box>
        </ThemeProvider>
    </>
  )
}

export default App