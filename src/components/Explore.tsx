import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import { useTheme } from "@mui/material";
import { CreateCard } from "./CreateCard";
import apotdImg from '../imgs/apotd.jpg'
import marsImg from '../imgs/mars.jpg'
import searchImg from '../imgs/search.jpg'


export interface Card {
    title: string
    img: string
}

export const Explore = ()=>{
    const theme = useTheme();
    const cards: Array<Card> = [
        {
            title: 'Astronomic picture of the day',
            img: apotdImg
        },
        {
            title: 'Mars rover photos',
            img: marsImg
        },
        {
            title: 'Media search',
            img: searchImg
        }
    ]
    
    
    
    return (
        <Box sx={{height: {xs: '140vh', lg: '100vh'}, ml: {xs: 2, lg: 5}, mr: {xs: 2, lg: 5}, mt: 15}}>
            <Box sx={{height: {xs: '8%', lg: '35vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" component="div" sx={{textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: {xs: 1, md: 8}, display: {xs: 'block', md: 'block'}}}>
                    Website Content 
                </Typography>
            </Box>
            <Box sx={{position: 'relative', height: {xs: '90%', lg: '50vh'}}}>
                <Box sx={{width: '100%', height: {xs: '85%', lg: '80%'}, position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: {xs: 'column', lg:'row'}}}>
                    {cards.map((card: Card, index)=>CreateCard(card, index))}
                </Box>

                <Box bgcolor={theme.palette.primary.main} sx={{height: {xs: '63vh', lg: '25vh'}, width: '100%', position: 'absolute', top: 0}} />
                <Box bgcolor={theme.palette.primary.main} sx={{borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', height: {xs: '63vh', lg: '25vh'}, width: '100%',position: 'absolute', top: 0, transform: 'translate(0, 99%)'}} />
            </Box>
            <Box sx={{height: {xs: '1%', md: '15vh'}}}>
            </Box>
        </Box>
    )
}

export default Explore