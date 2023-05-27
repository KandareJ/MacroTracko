import React from "react";

import {
    Autocomplete,
    Card,
    Modal,
    Typography,
    Box,
    Stack,
    Button,
    TextField,
    MenuItem
} from "@mui/material";
import { modalsActions } from "../store/modals";
import { foodActions } from "../store/food";
import { useDispatch, useSelector } from "react-redux";

const AddFoodModal = ({ open }) => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.foodHistory);
    const [food, setFood] = React.useState("");
    const [protein, setProtein] = React.useState("");
    const [carbs, setCarbs] = React.useState("");
    const [fat, setFat] = React.useState("");
    const [unit, setUnit] = React.useState("count");
    const [servingSize, setServingSize] = React.useState("");
    const [portionSize, setPortionSize] = React.useState("");

    const isNumberOrEmpty = (input) => {
        return input.match(/^(\s*|\d+)$/);
    };

    const renderUnit = () => {
        return (
                <TextField select variant="outlined" label="Unit" value={unit} onChange={(e) => {setUnit(e.target.value)}} style={{width: 110}}>
                    <MenuItem value="count">count</MenuItem>
                    <MenuItem value="oz">oz</MenuItem>
                    <MenuItem value="grams">grams</MenuItem>
                </TextField>
        );
    };

    const handleClose = () => {
        dispatch({ type: modalsActions.CLOSE_FOOD });
        setFood("");
        setProtein("");
        setCarbs("");
        setFat("");
        setUnit("count");
        setServingSize("");
        setPortionSize("");
    };

    const handleSave = () => {
        if (food && protein && carbs && fat && unit && servingSize && portionSize) {
            dispatch({ type: foodActions.EAT_FOOD, payload: {
                food,
                protein: parseInt(protein),
                carbs: parseInt(carbs),
                fat: parseInt(fat),
                unit,
                servingSize,
                portionSize
            }});
            dispatch({ type: modalsActions.CLOSE_FOOD });
            setFood("");
            setProtein("");
            setCarbs("");
            setFat("");
            setUnit("count");
            setServingSize("");
            setPortionSize("");
        }
    }
    
    const autoCompleteHelper = (event, newValue) => {
        if (newValue === null) {
            setFood("");
        }
        else if (history[newValue]) {
            setFood(history[newValue].food);
            setFat(history[newValue].fat);
            setProtein(history[newValue].protein);
            setCarbs(history[newValue].carbs);
            setUnit(history[newValue].unit);
            setServingSize(history[newValue].servingSize);
        }
        else {
            setFood(newValue);
        }
    }

    return (
        <Modal open={open}>
            <Card style={styles.modal}>
                <Box style={{paddingLeft: 10, paddingRight: 10}}>
                <Typography variant="h4" style={{marginTop: 10}}>Add Food</Typography>
                <Typography variant="subtitle">Enter nutritional information to add it to your daily macros.</Typography>
                
                <Stack spacing={1.5} style={{paddingTop: 20}}>
                    <Autocomplete
                        value={food}
                        onChange={autoCompleteHelper}
                        options={Object.keys(history)}
                        freeSolo
                        filterOptions={(options, state) => {
                            if (state.inputValue.length < 1) return [];
                            const filtered = options.filter((x) => x.includes(state.inputValue));
                            if (filtered.length > 3) return filtered.slice(0, 3);
                            else return filtered;
                        }} 
                        renderInput={(params) => <TextField {...params} variant="outlined" label="Food" value={food} onChange={(e) => {setFood(e.target.value)}} />} 
                    />
                    <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Fat per Serving" value={fat} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setFat(e.target.value)}} />
                    <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Carbs per Serving" value={carbs} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setCarbs(e.target.value)}} />
                    <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Protein per Serving" value={protein} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setProtein(e.target.value)}} />
                    
                    <Stack direction="row" spacing={1}>
                        <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Serving Size" value={servingSize} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setServingSize(e.target.value)}} />
                        {renderUnit()}
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <TextField variant="outlined" inputProps={{ inputMode: "numeric" }} label="Portion Size" value={portionSize} onChange={(e) => {if (isNumberOrEmpty(e.target.value))setPortionSize(e.target.value)}} />
                        {renderUnit()}
                    </Stack>
                </Stack>
                

                <Stack spacing={2} direction="row" justifyContent="center" style={{marginTop: 20}}>
                    <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>Add Food</Button>
                </Stack>
                </Box>
            </Card>
        </Modal>
    );
};

export default AddFoodModal;

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