import React from "react";

import {
    Card,
    Modal,
    Typography,
    Box,
    Stack,
    Button,
    TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { modalsActions } from "../store/modals";
import { waterActions } from "../store/water";

const AddWaterModal = ({ open }) => {
    const dispatch = useDispatch();
    const [water, setWater] = React.useState("");

    const isNumberOrEmpty = (input) => {
        return input.match(/^(\s*|\d+)$/);
    };

    const handleClose = () => {
        dispatch({ type: modalsActions.CLOSE_WATER });
        setWater("");
    };

    const handleAddWater = () => {
        if (water) {
            dispatch({
                type: waterActions.DRINK_WATER,
                payload: parseInt(water)
            });
        }
        dispatch({ type: modalsActions.CLOSE_WATER });
        setWater("");
    }

    return (
        <Modal open={open}>
            <Card style={styles.modal}>
                <Box style={{paddingLeft: 10, paddingRight: 10}}>
                <Typography variant="h4" style={{marginTop: 10}}>Add Water</Typography>
                <Typography variant="subtitle">Enter the amount of water you drank in ounces to track it.</Typography>
                
                <Stack spacing={1.5} style={{paddingTop: 20}}>
                    <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Amount in oz" value={water} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setWater(e.target.value)}} />
                    
                </Stack>
                

                <Stack spacing={2} direction="row" justifyContent="center" style={{marginTop: 20}}>
                    <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleAddWater}>Add Water</Button>
                </Stack>
                </Box>
            </Card>
        </Modal>
    );
};

export default AddWaterModal;

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        maxHeight: "80%",
        overflowY: "scroll",
        padding: 10
    }
}