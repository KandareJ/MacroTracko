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
import { useSelector } from "react-redux";

const MacroTable = () => {
    const food = useSelector(state => state.food);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Macros</TableCell>
                        <TableCell align="right">Fat</TableCell>
                        <TableCell align="right">Carbs</TableCell>
                        <TableCell align="right">Protein</TableCell>
                        <TableCell align="right">Calories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {food.map((item, i) => {
                        const multiplier = item.portionSize / item.servingSize;
                        const fat = Math.floor(item.fat * multiplier);
                        const carbs = Math.floor(item.carbs * multiplier);
                        const protein = Math.floor(item.protein * multiplier);
                        const calories = fat * 9 + carbs * 4 + protein * 4;
                        return (
                            <TableRow key={item.food + i}>
                                <TableCell>{item.food}</TableCell>
                                <TableCell align="right">{fat}</TableCell>
                                <TableCell align="right">{carbs}</TableCell>
                                <TableCell align="right">{protein}</TableCell>
                                <TableCell align="right">{calories}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MacroTable;