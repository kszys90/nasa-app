import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import PhotoSlider from "./PhotoSlider";
import getMarsData from "../api/getMarsData";
import React from "react";
import { useAsyncFn } from "react-use";
import { ErrorMessage } from "./ErrorMessage";


export const Mars = ()=>{
    const theme = useTheme();
    const [state, doFetch] = useAsyncFn(getMarsData)
    React.useEffect(() => {
        doFetch('1000')
    },[doFetch])
    function render(){
        console.log(state)
    }

    return (
        <Box sx={{
            height: {xs: '60vh', sm: '100vh'},
            mt: {md: 15}
        }}
        >
            <Box bgcolor={theme.palette.primary.main} sx={{height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h2" component="div" sx={{verticalAlign: 'middle' ,color: theme.palette.primary.contrastText ,textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: 0, display: {xs: 'block', md: 'block'}}}>
                    Mars Rover Photos
                </Typography>
            </Box>
            <Box 
            sx={{
                height: '80%', 
                background: theme.palette.primary.light,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center'
                }}
            >
                {state.loading ?
                  <Box>Loading...</Box> 
                  :
                state.error ?
                    <ErrorMessage status={state.error.message} />
                    : 
                        !state.value ?
                        <Typography variant="h2" component="h2" sx={{textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: {xs: 1, md: 8}, display: {xs: 'block', md: 'block'}}}>
                            No data...
                        </Typography>
                        :
                        <>
                            {render()}
                            <Box sx={{height: '45vh', width: {xs: '95%', md: '85%'}, maxWidth: '1200px' }}>
                                <PhotoSlider photos={state.value.photos}/>
                            </Box>
                        </>
                }
                {/* camera->full_name
                rover->name
                img_src
                earth_date
                id */}
                {/* search by:
                    camera type
                    sol - days from the start of the mission
                    earth_date - ?earth_date=2015-6-3 - narazie nie robić
                 */}
                

            </Box>
            <Box bgcolor={theme.palette.primary.main} sx={{height: '10%'}}></Box>
        </Box>
    )
}

