import React from "react";
import { useDispatch } from "react-redux";

import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { modalsActions } from "../store/modals";

const Topbar = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFood = () => {
        setAnchorEl(null);
        dispatch({type: modalsActions.OPEN_FOOD})
    };

    const handleWater = () => {
        setAnchorEl(null);
        dispatch({type: modalsActions.OPEN_WATER})
    };

    const handleProfile = () => {
        dispatch({ type: modalsActions.OPEN_PROFILE});
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" color="inherit" onClick={handleProfile}>
                        <PersonIcon />
                    </IconButton>
                    <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1  }}>
                        Macros
                    </Typography>
                    <IconButton size="large" color="inherit" onClick={handleMenu}>
                        <AddIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem onClick={handleFood}>Add Food</MenuItem>
                        <MenuItem onClick={handleWater}>Add Water</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Topbar;