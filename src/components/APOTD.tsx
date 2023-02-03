import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import { useAsyncFn } from "react-use";
import { getAPOTD } from "../api/getAPOTD";
import { ErrorMessage } from "./ErrorMessage";
import React from "react";


export const APOTD = ()=>{
    const [state, doFetch] = useAsyncFn(getAPOTD)
    React.useEffect(() => {
        doFetch()
    },[doFetch])
    
    function renderPic (){
        if (state.value){
            return (
                <img
                    src={state.value.url}
                    alt="astronomic_picture_of_the_day"
                    style={{height: '100%', width: '100%', objectFit: 'contain', maxHeight: '60vh', maxWidth: '85vw'}}
                    >
                </img>
        )
    }
    }

    return (
        <Box sx={{mt: 15, mb: 15}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
            <Box sx={{width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>     
                <Typography variant="h2" component="h2" sx={{textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: 8}}>
                Astronomic picture of the day 
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 5, mb: 10}}>
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
                                    <Box sx={{ maxWidth: '85%', maxHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 5 }}> 
                                        {renderPic()}
                                    </Box>
                                    <Typography variant="h2" component="a" sx={{textAlign: 'center', mt: 1.5, fontSize: {xs: 28,sm: 32, md: 50}, ml: 2, mr: 2}}>
                                        {state.value.title}
                                    </Typography>
                                    <Typography 
                                        variant="h2" 
                                        component="div"
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mt: 1.5,
                                            fontSize: {xs: 10,sm: 16, md: 25},
                                            cursor: 'pointer',
                                            ml: 2, 
                                            mr: 2}}
                                        onClick={()=>window.open(state.value.hdurl, '_blank')}
                                    >
                                        {state.value.hdurl}
                                    </Typography>
                                </>
                }
            </Box>
        </Box>
      </Box>
    )
}

export default APOTD