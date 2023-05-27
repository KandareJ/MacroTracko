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
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { modalsActions } from "../store/modals";
import Alert from "./Alert";
import { foodActions } from "../store/food";
import { waterActions } from "../store/water";

const Topbar = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [startNewDayAlertOpen, setStartNewDayAlertOpen] = React.useState(false);
    const [clearFoodHistoryAlertOpen, setClearFoodHistoryAlertOpen] = React.useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSettingsMenu = (event) => {
        setAnchorEl2(event.currentTarget);
    }

    const handleFood = () => {
        setAnchorEl(null);
        dispatch({type: modalsActions.OPEN_FOOD})
    };

    const handleWater = () => {
        setAnchorEl(null);
        dispatch({type: modalsActions.OPEN_WATER})
    };

    const handleProfile = () => {
        setAnchorEl2(null);
        dispatch({ type: modalsActions.OPEN_PROFILE});
    };

    const handleStartNewDayModal = () => {
        setStartNewDayAlertOpen(true);
        setAnchorEl2(null);
    };

    const handleStartNewDay = () => {
        dispatch({ type: foodActions.CLEAR_FOOD });
        dispatch({ type: waterActions.CLEAR_WATER });
    };

    const handleClearFoodHistoryModal = () => {
        setClearFoodHistoryAlertOpen(true);
        setAnchorEl2(null);
    };

    const handleClearFoodHistory = () => {
        dispatch({ type: foodActions.CLEAR_FOOD_HISTORY });
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <Alert
                open={startNewDayAlertOpen}
                setOpen={setStartNewDayAlertOpen}
                onContinue={handleStartNewDay}
                title="New Day"
                message="Are you sure you'd like to start a new day? This will clear your tracked macros and water."
            />
            <Alert
                open={clearFoodHistoryAlertOpen}
                setOpen={setClearFoodHistoryAlertOpen}
                onContinue={handleClearFoodHistory}
                title="Clear Food History"
                message="Are you sure you'd like to clear your food history? You will have to enter all food in manually."
            />
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" color="inherit" onClick={handleSettingsMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl2}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorEl2)}
                        onClose={() => setAnchorEl2(null)}
                    >
                        <MenuItem onClick={handleProfile}>Edit Profile</MenuItem>
                        <MenuItem onClick={handleStartNewDayModal}>Start New Day</MenuItem>
                        <MenuItem onClick={handleClearFoodHistoryModal}>Clear Food History</MenuItem>
                    </Menu>
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