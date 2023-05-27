import React from "react";

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";
import { foodActions } from "../store/food";

const MacroTable = () => {
    const dispatch = useDispatch();
    const food = useSelector(state => state.food);
    const [index, setIndex] = React.useState(0);
    const [foodName, setFoodName] = React.useState("");
    const [deleteFoodAlertOpen, setDeleteFoodAlertOpen] = React.useState(false);

    const handleDeleteFood = () => {
        dispatch({type: foodActions.REMOVE_FOOD_ENTRY, payload: index});
    };

    const handleFoodClicked = (i, name) => {
        return () => {
            setIndex(i);
            setDeleteFoodAlertOpen(true);
            setFoodName(name);
        };
    };

    return (
        <TableContainer component={Paper}>
            <Alert 
               open={deleteFoodAlertOpen}
               setOpen={setDeleteFoodAlertOpen}
               onContinue={handleDeleteFood}
               title="Delete Food"
               message={`Are you sure you want to remove "${foodName}" from your tracked food for the day?`}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Macros</TableCell>
                        <TableCell align="right">Fat</TableCell>
                        <TableCell align="right">Carbs</TableCell>
                        <TableCell align="right">Protein</TableCell>
                        {/*<TableCell align="right">Calories</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {food.map((item, i) => {
                        const multiplier = item.portionSize / item.servingSize;
                        const fat = Math.floor(item.fat * multiplier);
                        const carbs = Math.floor(item.carbs * multiplier);
                        const protein = Math.floor(item.protein * multiplier);
                        //const calories = fat * 9 + carbs * 4 + protein * 4;
                        return (
                            <TableRow key={item.food + i} hover onClick={handleFoodClicked(i, item.food)}>
                                <TableCell>{item.food}</TableCell>
                                <TableCell align="right">{fat}</TableCell>
                                <TableCell align="right">{carbs}</TableCell>
                                <TableCell align="right">{protein}</TableCell>
                                {/*<TableCell align="right">{calories}</TableCell>*/}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MacroTable;