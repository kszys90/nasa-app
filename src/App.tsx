import React, {ChangeEvent} from 'react'
import { getData } from './api/getData'
import { useAsyncFn } from 'react-use'
import { ErrorMessage } from './components/ErrorMessage'
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



function App () {
const [state, doFetch] = useAsyncFn((request :string) =>getData(request))

const [inputVal, setInputVal] = React.useState('')
function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    setInputVal(e.target.value)
}
function handleSearchSubmit(e: React.SyntheticEvent){
    e.preventDefault()
    doFetch(inputVal)
    setInputVal('')
}
function renderData(){
    console.log(state)
    return (
        <div>123</div>
    )
}
const mode = useSelector((state: IRootState) => state.variant.variant)
const theme = React.useMemo(() => createTheme(createThemes(mode)), [mode]);
  return (
    <>
    <GlobalStyles styles={{ 
      body: {margin: 0, padding: 0, overflowX: 'hidden'},
      html: {margin:0, padding:0}
    }} />
    <ThemeProvider theme={(theme)}>
      <Box bgcolor={"background.default"}>
          <NavBar />
          <Intro/>
          <Explore />
          <APOTD />
          <Mars />
          <Box
          style={{ textAlign: 'center' }}
          >
              <form
              onSubmit={(e)=>handleSearchSubmit(e)}
              >
                  <input
                      type="text"
                      value={inputVal}
                      onChange={(e)=>handleInputChange(e)}
                      />
                  <button
                      type={'submit'}
                      >
                      Search
                  </button>
              </form>
          </Box>
          <Box>
          {state.loading ?
                  <Box>Loading...</Box> 
                  :
                  state.error ?
                  <ErrorMessage status={state.error.message} />
                  : 
                  !state.value ?
                  <Box>No data...</Box>
                  :
                  <Box> 
                  {renderData()}
                  </Box>
          }
          </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App