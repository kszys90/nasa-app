import { Box } from "@mui/system";
import IntroBG from '../imgs/introBG.png'
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material";


export const Intro = ()=>{
    return (
        <Box sx={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${IntroBG})`, 
            backgroundSize: {xs: 'cover', sm: 'cover'}, 
            backgroundPosition: {xs: '0 40%', sm: '0 30%', md:'0 35%'}, 
            height: '90vh'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', height: {xs: '60vh',sm: '60vh', textAlign: 'center'}}}>
            <Box sx={{width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>     
                <Typography variant="h2" component="h2" sx={{fontSize: {xs: 24,sm: 32, md: 50}, mt: {xs: 5, sm: 2}, mb: {xs: 1.5, sm: 1}}}>
                Are You interested in space? 
                </Typography>
                <Typography variant="h4" component="h4" sx={{textAlign: 'center', mt: 1.5, fontSize: {xs: 12, sm: 18, md: 25}, ml: 2, mr: 2}}>
                This website has images, informations and movies from NASA database!
                </Typography>
            </Box>
        </Box>
        <Box sx={{height: '30vh', textAlign: 'center'}}>
            <Button 
                variant="contained" 
                size={"large"} 
                color="primary"
                sx={{
                    border: 'solid 0.1px white', 
                    fontSize: {xs: '15px', md: '35px'}, 
                    mt: 4
                }}
            >
                    EXPLORE
            </Button>
        </Box>
      </Box>
    )
}

export default Intro