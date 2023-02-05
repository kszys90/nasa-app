import { Box } from "@mui/system";
import { Card } from "./Explore";
import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";



export const CreateCard :React.FC<Card>  = (card: Card, index) =>{
    const theme = useTheme();

    return (
        <Box 
            key={index} 
            sx={{borderRadius: '10px',
            width: {xs: '90%', lg: '30%'},
            height: {xs: '30%', lg: '90%'},
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${card.img})`, 
            backgroundSize: {xs: 'cover', sm: 'cover'},
            backgroundPosition: {xs: '0 40%', sm: '0 30%', md:'0 35%'}, 
            textAlign: 'center',
            border: 'solid 0.5px white',
            position: 'relative'
        }}>
            <Box bgcolor={theme.palette.secondary.main} sx={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                <Typography variant="h5" component="div" sx={{fontSize: {xs: '18px', sm: '22px', md: '28px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                    {card.title} 
                </Typography>
            </Box>
            <Button 
                variant="contained" 
                size={"large"} 
                color="secondary"
                sx={{
                    border: 'solid 0.1px white', 
                    fontSize: {xs: '12px', sm: '16px', md: '25px'}, 
                    mt: 4,
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: theme.palette.secondary.contrastText
                }}
                onClick={()=> window.location.replace(`#${card.searchId}`)}
            >
                    EXPLORE
            </Button>
        </Box>
    )
}