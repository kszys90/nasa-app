import { Box, TextField, Button, useTheme, Typography, CircularProgress } from "@mui/material"
import React, { ChangeEvent } from "react"
import { useAsyncFn } from "react-use"
import { getData } from "../api/getData"
import { ErrorMessage } from "./ErrorMessage"
import RenderElement from "./RenderElement"

// export interface data {
//     data: result
// }

export interface resultData {
    center: string
    date_created: string
    description: string
    description_508: string
    keyword: string[]
    media_type: string
    nasa_id: string
    secondary_creator: string
    title: string
}

export interface data {
    href: string
    links?: dataLinks[]
    data: resultData[]
}

export interface dataLinks {
    href: string
    rel: string
    render: string
}

export const Search = ()=>{
    const theme = useTheme();
    const [state, doFetch] = useAsyncFn((request :string) =>getData(request))
    const [inputVal, setInputVal] = React.useState('')
    const [error, setError] = React.useState('')
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        setInputVal(e.target.value)
        setError('')

    }
    function handleSearchSubmit(e: React.SyntheticEvent){
        e.preventDefault()
        if (inputVal===''){
            setError('Enter searched phrase')
        }
        else {
            setError('')
            doFetch(inputVal)
            // setInputVal('')
        }
    }
    

    const [sliceResults, setSliceResults] = React.useState(4)

    function loadMore(){
        setSliceResults(prevResult => prevResult + 5)
    }

    return (
        <Box id='search' sx={{pt: {xs:'56px', sm:'38px'}, mt: 15}}>
            <Box bgcolor={theme.palette.secondary.main} sx={{minHeight: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center',py: 2}}>
                <Typography variant="h2" component="div" sx={{verticalAlign: 'middle' ,color: theme.palette.secondary.contrastText ,textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: 0, display: {xs: 'block', md: 'block'}}}>
                    NASA Image and Video Library
                </Typography>
            </Box>
            <Box sx={{ py: 4, minHeight: '80vh'}}>
                <Box
                    sx={{ textAlign: 'center'}}
                >
                    {error!=='' ? 
                        <Typography 
                            variant="h5" 
                            component="div" 
                            sx={{
                                verticalAlign: 'middle' ,
                                color: theme.palette.error.main ,
                                textAlign: 'center',
                                fontSize: {xs: 14,sm: 16, md: 20}, 
                                mb: 1
                            }}>
                            {error}
                        </Typography> 
                        :
                            null
                        }
                    
                    <form
                        onSubmit={(e)=>handleSearchSubmit(e)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <TextField 
                            error={error===''? false : true}
                            id="search-input" 
                            label="e.g. mars, sun, earth" 
                            variant="outlined" 
                            value={inputVal}
                            onChange={handleInputChange} 
                            sx={{
                                width: {xs: '80%', sm: '60%'},
                                label: { },
                                div: { input: {color: "white"}, fieldset: {borderColor: 'rgba(255, 255, 255, 0.23)'} }
                            }}
                        />
                        <Button
                            type={'submit'}
                            size="large"
                            variant="contained"
                            sx={{
                                background: theme.palette.secondary.main,
                                my: 2
                            }}
                            >
                            Search
                        </Button>
                    </form>
                </Box>
                <Box sx={{textAlign: 'center'}}>
                    {state.loading ?
                        <Box><CircularProgress /></Box> 
                        :
                        state.error ?
                            <ErrorMessage status={state.error.message} />
                            : 
                            !state.value ?
                                <Box>No data...</Box>
                                :
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>

                                    {
                                    state.value.collection.items.length === 0 ? 
                                    <Typography 
                                        variant="h2" 
                                        component="h2" 
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: {xs: 14,sm: 16, md: 18}, 
                                            mt: {xs: 1, md: 8}, 
                                            display: {xs: 'block', md: 'block'}, 
                                            color: theme.palette.error.main
                                        }}
                                     >
                                        No data<br /> Change search parameters and try again
                                    </Typography> 
                                        :
                                        state.value.collection.items.length < Number(sliceResults) ?
                                        state.value.collection.items.map((item : data) => {return <RenderElement item={item} />})
                                        :
                                            <>
                                            {state.value.collection.items.slice(0, Number(sliceResults)).map((item : data) => {return <RenderElement key={item.data[0].nasa_id} item={item} />}) }
                                            <Button onClick={loadMore} variant={'contained'}>Load more</Button>
                                            </>

                                    }

                                </Box>
                }
                </Box>
            </Box>
          </Box>
    )
}

