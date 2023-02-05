import { data} from './Search'
import React from "react"
import { Box, Button, Typography, useTheme, Modal, CircularProgress } from "@mui/material"
import noImg from '../imgs/No_image_available.svg.png'
import { getElement } from '../api/getElement'
import { useAsyncFn } from 'react-use'
import { ErrorMessage } from './ErrorMessage'

interface extendeditem {
    href: string
}

export const RenderElement: React.FC<{item:data}> = ({item}) => {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const [openModalDescription, setOpenModalDescription] = React.useState(false)
    const [itemData, doFetch] = useAsyncFn((url :string) =>getElement(url))

    const handleOpen = () => {
        setOpen(true)
        getItemInfo()
    }
    const handleModalDesc = () => setOpenModalDescription(openModalDescription===true ? false : true)
    const handleClose = () => setOpen(false)
    function getItemInfo (){
        doFetch(item.data[0].nasa_id)
    }

    return (
        <Box bgcolor={theme.palette.secondary.main} sx={{pb: 1,minHeight: '20vh', width: {xs: '90vw', sm: '80vw'}, maxWidth: '1200px', mb: 5, border: `0.2px solid ${theme.palette.secondary.main}`}}>
            <Box sx={{height: 'auto', maxWidth: '1200px', width: {xs: '90vw', sm: '80vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={item.links? item.links[0].href : noImg}
                    alt={'rover phot'}
                    style={{
                            objectFit: 'contain',
                            width: '100%',
                            maxHeight: '100%',
                            height: 'auto',
                            maxWidth: '100%'       
                        }}
                />
                
                    </Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'row', sm: 'row'}}}>
                <Box sx={{minHeight: '100%', width: '100%', justifySelf: {sm: 'center'}}}>
                    <Typography variant="h5" component="div" sx={{fontSize: {xs: '12px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                        Media type: {item.data[0].media_type}
                    </Typography>
                </Box>
                <Box sx={{minHeight: '100%', width: '100%', justifySelf: {sm: 'flex-end'} }}>
                    <Typography variant="h5" component="div" sx={{fontSize: {xs: '12px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText}}>
                        Date: {item.data[0].date_created}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{minHeight: '100%', width: '100%'}}>
                <Typography variant="h5" component="div" sx={{fontSize: {xs: '12px', sm: '16px', md: '18px'}, p: 1, color: theme.palette.secondary.contrastText, textAlign: 'justify'}}>
                    {item.data[0].description.length > 200 ? item.data[0].description.slice(0,200)+ '...': item.data[0].description }  
                </Typography>
            </Box>
           
            <Box sx={{minHeight: '100%', width: '100%'}}>
                <Button onClick={handleOpen} variant={'contained'}>Read more</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{overflow:'scroll',}}
                    >
                        <Box 
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '85vw',
                                maxWith: '85%',
                                height: '80%',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                p: {xs:'6px', sm: 4},
                                overflowY: 'scroll',
                                overflowX: 'hidden'
                            }}
                        >
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                Title: {item.data[0].title}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                {item.data[0].date_created}
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', my: 2}}>
                                <Typography variant="h6" sx={{textAlign: 'justify'}}>
                                            Description:   
                                </Typography>
                                {item.data[0].description.length > 300 ?
                                    <Button sx={{bgcolor: theme.palette.secondary.main}} size={'small'} variant="contained" onClick={handleModalDesc}>
                                        {openModalDescription===false ? 'More' : 'Hide' }
                                    </Button>
                                        :
                                            null
                                }

                            </Box>
                            <Box>
                                {item.data[0].description.length > 300 ?
                                    <Typography sx={{textAlign: 'justify'}}>
                                        {openModalDescription===false ? item.data[0].description.slice(0,300)+ '...': item.data[0].description }
                                    </Typography>
                                    :
                                        <Typography sx={{textAlign: 'justify'}}>
                                            {item.data[0].description}  
                                        </Typography>
                                }

                            </Box>
                            {openModalDescription===false ? null :
                                <Box bgcolor={'secondary'}>  
                                    <Typography sx={{ mt: 2 }}>
                                        {item.data[0].description}
                                    </Typography>
                                </Box>
                            }
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: 2}}>
                                <Typography variant="h6" sx={{textAlign: 'justify'}}>
                                            Links:   
                                </Typography>
                            </Box>
                            <Box>
                            {itemData.loading ?
                            <Box><CircularProgress /></Box> 
                            :
                            itemData.error ?
                                <ErrorMessage status={itemData.error.message} />
                                : 
                                !itemData.value ?
                                    <Box>No data...</Box>
                                    :
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                        {
                                            itemData.value.collection.items.length === 0 ?
                                                <Typography sx={{ mt: 2 }}>
                                                    No data... 
                                                </Typography>
                                                    :
                                                    itemData.value.collection.items.map((item: extendeditem, index: number)=>{
                                                        return (
                                                            <Typography
                                                                key={index} 
                                                                sx={{ 
                                                                    mt: 2, 
                                                                    wordBreak: 'break-all', 
                                                                    "&:hover": {textDecoration: 'underline'}, 
                                                                    cursor: 'pointer' 
                                                                }}
                                                                onClick={()=>window.open(item.href, '_blank')}
                                                            >

                                                                {item.href} 
                                                            </Typography>
                                                        )
                                                    })
                                        }
                                        
                                        
                                </Box>
                }
                            </Box>
                        </Box>
                    </Modal>
            </Box>

        </Box>
    )   
}
export default RenderElement