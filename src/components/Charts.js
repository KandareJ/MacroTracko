import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Charts = () => {
    const macros = useSelector(state => state.macros);
    const water = useSelector(state => state.water);
    const food = useSelector(state => state.food);

    let fat = 0, carbs = 0, protein = 0, calories = 0;

    food.map((item) => {
        const multiplier = item.portionSize / item.servingSize;
        fat += item.fat * multiplier;
        carbs += item.carbs * multiplier;
        protein += item.protein * multiplier;
    });

    calories = fat * 9 + carbs * 4 + protein * 4;

    const chart = (color, label, remaining, consumed) => {
        const data = [
            { title: "remaining", value: remaining, color: `${color}33`},
            { title: "consumed", value: consumed, color}
        ];

        return (
            <PieChart
                data={data}
                lineWidth={30}
                startAngle={270}
                animate
                animationDuration={1000}
                labelPosition={0}
                label={() => {return label}}
                labelStyle={{fontSize: 20}}
                
            />
        );
    };

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "23%"}}>
                <Card style={{padding: 10, justifyContent: "center"}}>
                    {chart("#FF8360", "Fat", macros.fat - fat, fat)}
                    <Typography align="center">{Math.floor(macros.fat - fat)}g</Typography>
                </Card>
            </div>
            <div style={{width: "23%"}}>
                <Card style={{padding: 10, justifyContent: "center"}}>
                    {chart("#E8E288", "Carbs", macros.carbs - carbs, carbs)}
                    <Typography align="center">{Math.floor(macros.carbs - carbs)}g</Typography>
                </Card>
            </div>
            <div style={{width: "23%"}}>
                <Card style={{padding: 10, justifyContent: "center"}}>
                    {chart("#7DCE82", "Protein", macros.protein - protein, protein)}
                    <Typography align="center">{Math.floor(macros.protein - protein)}g</Typography>
                </Card>
            </div>
            <div style={{width: "23%"}}>
                <Card style={{padding: 10, justifyContent: "center"}}>
                    {chart("#3CDBD3", "Water", macros.water - water, water)}
                    <Typography align="center">{Math.floor(macros.water - water)}oz</Typography>
                </Card>
            </div>
            
        </div>
    );
};

export default Charts;