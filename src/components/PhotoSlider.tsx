import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface images {
  id: string
  sol: string
  camera: object
  img_src: string
  earth_date: string
  rover: object
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
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%', color: 'white'}}>
      <Box sx={{width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="text" disabled={activeStep===0} onClick={handleBack}>
          <ArrowBackIosNewIcon sx={{fontSize: {xs: '40px', md: '90px'}, color: activeStep===0 ? 'grey' : theme.palette.secondary.main}} />
        </Button>
      </Box>
      <Box sx={{width: '75%'}}>
        <Box sx={{height: '100%', maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {images.map((item,index)=>{
            if (index === activeStep){
              return (
                <img
                  key={index} 
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
              )
            }
            return null
          }
          )}
        </Box>
      </Box>
      <Box sx={{width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="text" disabled={activeStep===imagesAmount} onClick={handleNext}>
          <ArrowForwardIosIcon sx={{fontSize: {xs: '40px', md: '90px'}, color: activeStep===imagesAmount ? 'grey' : theme.palette.secondary.main}} />
        </Button>
      </Box>
    </Box>

    
  );
}

export default PhotoSlider