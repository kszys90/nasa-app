import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import PhotoSlider from "./PhotoSlider";
import getMarsData from "../api/getMarsData";
import React, { FormEvent } from "react";
import { useAsyncFn } from "react-use";
import { ErrorMessage } from "./ErrorMessage";
import { Button, MenuItem, CircularProgress } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


export const Mars = ()=>{
    const theme = useTheme();
    const [state, doFetch] = useAsyncFn(getMarsData)
    React.useEffect(() => {
        doFetch(sol, rover)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[doFetch])
    const [rover, setRover] = React.useState('curiosity')
    function handleRoverChange (event: SelectChangeEvent){
        setRover(event.target.value);
    }
    const [sol, setSol] = React.useState('2')
    const handleSolChange = (event: { target: { value: string } }) => {
        if (!isNaN(Number(event.target.value))){
            setSol(event.target.value);
        }
      };
    const handleMarsSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        doFetch(sol, rover)
      };

    return (
        <Box
            id='mars'
            sx={{
                minHeight: '100vh',
                mt: {md: 14},
                pt: {xs:'56px', sm:'38px'}
            }}
        >
            <Box bgcolor={theme.palette.primary.main} sx={{minHeight: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2}}>
                <Typography variant="h2" component="div" sx={{verticalAlign: 'middle' ,color: theme.palette.primary.contrastText ,textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: 0, display: {xs: 'block', md: 'block'}}}>
                    Mars Rover Photos
                </Typography>
            </Box>
            <Box 
            sx={{
                minHeight: '80vh', 
                background: theme.palette.primary.light,
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-evenly', 
                alignItems: 'center',
                flexDirection: 'column'
                }}
            >
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <form onSubmit={handleMarsSubmit}>
                        <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', maxWidth: '600px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 0.5}}>
                                <Typography 
                                    variant='h6' 
                                    component='p' 
                                    sx={{
                                        fontSize: {xs: '13px', sm: '18px'},
                                        my: 1,
                                        color: theme.palette.primary.contrastText
                                    }}
                                    >
                                        Sol* (number)
                                </Typography>
                                <Typography 
                                    placeholder='...' 
                                    component='input' 
                                    onChange={handleSolChange}
                                    value={sol}
                                    sx={{
                                        p: 0, 
                                        height: {xs: '50.25px', sm: '58.88px'},
                                        fontSize: {xs: '12px', sm: '18px'}, 
                                        width: {xs: '93px', sm: '117.55px'}, 
                                        textAlign: 'center',
                                        color: theme.palette.primary.contrastText,
                                        background: theme.palette.primary.main,
                                        border: 'none',
                                    }}/>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 0.5}}>
                                <Typography 
                                    variant='h6' 
                                    component='p' 
                                    sx={{
                                        fontSize: {xs: '13px', sm: '18px'},
                                        my: 1,
                                        color: theme.palette.primary.contrastText
                                    }}
                                    >
                                        Rover:
                                </Typography>
                                <Select
                                    labelId="rover-select"
                                    id="rover-select"
                                    value={rover}
                                    label="Rover"
                                    onChange={handleRoverChange}
                                    sx={{
                                        py: '0',
                                        my: '0',
                                        fontSize: {xs: '12px', sm: '18px'},
                                        minWidth: {xs: '93px', sm: '117.55px'},
                                        background: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText
                                    }}
                                >
                                    <MenuItem value={'curiosity'} sx={{color: theme.palette.primary.contrastText}}>Curiosity</MenuItem>
                                    <MenuItem value={'spirit'} sx={{color: theme.palette.primary.contrastText}}>Spirit</MenuItem>
                                    <MenuItem value={'opportunity'} sx={{color: theme.palette.primary.contrastText}}>Opportunity</MenuItem>
                                </Select>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', m: 0.5}}>
                                <Button 
                                    sx={{
                                        my: 0, 
                                        p: 0, 
                                        height: {xs: '50.25px', sm: '58.88px'},
                                        fontSize: {xs: '12px', sm: '18px'}, 
                                        width: {xs: '93px', sm: '117.55px'},
                                        background: theme.palette.success.dark 
                                    }} 
                                    variant="contained"
                                    type={'submit'}
                                >
                                     Search
                            </Button>
                        </Box>
                                </Box>
                            </form>
                        </Box>   
                        <Typography variant='h6' component='p' sx={{fontSize: {xs: '8px', sm: '10px'}, color: theme.palette.primary.contrastText, textAlign: 'center'}}>
                            * Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date.
                        </Typography>
                            {state.loading ?
                              <Box><CircularProgress /></Box> 
                              :
                            state.error ?
                                <ErrorMessage status={state.error.message} />
                                : 
                                    !state.value ?
                                    <Typography variant="h2" component="h2" sx={{minHeight: '50vh', textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: {xs: 1, md: 8}, display: {xs: 'block', md: 'block', color: theme.palette.primary.contrastText}}}>
                                        No data... Change search terms and try again 
                                    </Typography>
                                    :
                                    <>

                                        <Box sx={{minHeight: '50vh', width: {xs: '95%', md: '85%'}, maxWidth: '1200px', justifySelf: 'flex-end' }}>
                                            <PhotoSlider photos={state.value.photos}/>
                                        </Box>

                                    </>
                            }
        </Box>
        <Box bgcolor={theme.palette.primary.main} sx={{minHeight: '6vh', py: 2}}></Box>
    </Box>
)
}

