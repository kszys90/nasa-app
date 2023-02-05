import { Box, Button, Typography, useTheme } from "@mui/material"

export const Test = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.primary.light} sx={{minHeight: '20vh', width: {xs: '90%', sm: '80%'}, maxWidth: '1200px'}}>
            <Box bgcolor={theme.palette.secondary.main} sx={{minHeight: '100%', width: '100%'}}> 
                <Typography variant="h3" component="div" sx={{fontSize: {xs: '20px', sm: '22px', md: '28px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                    Title 
                </Typography></Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
                <Box sx={{minHeight: '100%', width: '100%', justifySelf: {sm: 'center'}}}>
                    <Typography variant="h5" component="div" sx={{fontSize: {xs: '14px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                        Media type: image
                    </Typography>
                </Box>
                <Box sx={{minHeight: '100%', width: '100%', justifySelf: {sm: 'flex-end'} }}>
                    <Typography variant="h5" component="div" sx={{fontSize: {xs: '14px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                        Date: 2012-01-30
                    </Typography>
                </Box>
            </Box>
            <Box sx={{minHeight: '100%', width: '100%', background: 'green'}}>
                <Typography variant="h5" component="div" sx={{fontSize: {xs: '14px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                    Descripton:  
                </Typography>
            </Box>
            <Box sx={{height: '30vh', maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                IMAGE
                  {/* <img
                    src={item.img_src}
                    alt={'rover phot'}
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      maxWidth: '100%'       
                    }}
                  /> */}
                </Box>
            <Box sx={{minHeight: '100%', width: '100%', background: 'pink'}}>
                <Button>Read more</Button>
            </Box>

        </Box>
    )   
}

export default Test