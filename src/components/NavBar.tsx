import { AppBar, Button, IconButton, Toolbar, styled, Switch, MenuItem, Menu} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { useDispatch } from "react-redux";
import { changeVariantAction } from "../state/variant";
import { useSelector } from "react-redux";
import { IRootState  } from '../store'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})


export default function NavBar () {
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch()

    const mode = useSelector((state: IRootState) => state.variant.variant)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        mode==='dark' ? dispatch(changeVariantAction('light')) : dispatch(changeVariantAction('dark'))
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <Box sx={{ flexGrow: 1, height: '10vh', position: 'sticky', zIndex: 999 }}>
      <AppBar sx={{minHeight: '30px'}}>
        <StyledToolbar sx={{minHeight: {xs: 30}, display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  width: '100%', maxWidth: '1000px'}}>
            <IconButton
                id="menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: {xs: 'block', sm: 'none'} }}
                >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                >
                <MenuItem sx={{color: 'white'}} onClick={handleClose}>Astronomic picture of the day</MenuItem>
                <MenuItem sx={{color: 'white'}} onClick={handleClose}>Mars Rover Photos</MenuItem>
                <MenuItem sx={{color: 'white'}} onClick={handleClose}>Media search</MenuItem>
            </Menu>
                <Button 
                    color="inherit" 
                    sx={{mr: 2, display: {xs: 'none', sm: 'block'}}}
                    >
                    Home
                </Button>
                <Button 
                    color="inherit" 
                    sx={{mr: 2, display: {xs: 'none', sm: 'block'}}}
                    >
                    APOTD
                </Button>
                <Button 
                    color="inherit" 
                    sx={{mr: 2, display: {xs: 'none', sm: 'block'}}}
                    >
                        MARS
                </Button>
                <Button 
                    color="inherit" 
                    sx={{mr: 2, display: {xs: 'none', sm: 'block'}}}
                    >
                        SEARCH
                </Button>
                <Switch checked={checked} color='secondary' onChange={handleChange}/>
            </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export {NavBar}