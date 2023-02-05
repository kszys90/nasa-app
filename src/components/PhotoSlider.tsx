import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface camera {
  id: number | string
  rover_id: number | string
  full_name: string
  name: string
}
interface rover {
  id: number | string
  landing_date: string
  launch_date: string
  name: string
  status: string
}

interface images {
  id: string
  sol: string
  camera: camera
  img_src: string
  earth_date: string
  rover: rover
}

export const PhotoSlider : React.FC<{photos:images[]}> = ({photos}) => {
  const theme = useTheme();
  const  images = photos
  const [activeStep, setActiveStep] = React.useState(0);
  const imagesAmount = images.length - 1

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>

    {images.length === 0 ? 
      <Box>
        <Typography variant="h6" component="div"  sx={{fontSize: {xs: '14px', sm: '18px', md: '20px'}, color: theme.palette.primary.contrastText, textAlign: 'center'}}>
                We are sorry.
        </Typography>
        <Typography variant="h6" component="div"  sx={{fontSize: {xs: '14px', sm: '18px', md: '20px'}, color: theme.palette.primary.contrastText, textAlign: 'center'}}>
                There is no data corresponding to the query sent. Please change search conditions and try again 
        </Typography>
      </Box>
    :
    images.map((item, index)=>{
      if (index === activeStep){
        return (
          <Box key={item.id}  sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
            <Box sx={{justifySelf: 'flex-start', display: 'flex', flexDirection: 'row', width: '100%', minHeight: '75%', maxHeight: '70%', color: 'white'}}>
              <Box sx={{width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button sx={{m: 0, p: 0}} variant="text" disabled={activeStep===0} onClick={handleBack}>
                  <ArrowBackIosNewIcon sx={{fontSize: {xs: '35px', md: '90px'}, color: activeStep===0 ? 'grey' : theme.palette.secondary.main}} />
                </Button>
              </Box>
              <Box sx={{width: '75%'}}>
                <Box sx={{height: '40vh', maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={item.img_src}
                    alt={'rover phot'}
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      maxWidth: '100%'       
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button sx={{minWidth: '30px'}} variant="text" disabled={activeStep===imagesAmount} onClick={handleNext}>
                  <ArrowForwardIosIcon sx={{fontSize: {xs: '35px', md: '90px'}, color: activeStep===imagesAmount ? 'grey' : theme.palette.secondary.main}} />
                </Button>
              </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'flex-end',justifySelf: 'flex-end',height: '25%', maxHeight: '30%',textAlign: 'center', color: theme.palette.primary.contrastText, mt: 1}}>
              <Typography variant="h6" component="div"  sx={{fontSize: {xs: '14px', sm: '18px', md: '20px'}, color: theme.palette.primary.contrastText}}>
                Sol: {item.sol} (date: {item.earth_date})
              </Typography>
              <Typography variant="h6" component="div" sx={{fontSize: {xs: '14px', sm: '18px', md: '20px'}, color: theme.palette.primary.contrastText}} >
                Rover: {item.rover.name} 
              </Typography>
              <Typography variant="h6" component="div" sx={{fontSize: {xs: '14px', sm: '18px', md: '20px'}, color: theme.palette.primary.contrastText}} >
                Camera: {item.camera.full_name} 
              </Typography>
            </Box >
          </Box>
        )
      }
        return null
      })}
      
    </>
  );
}

export default PhotoSlider