import React from "react";
import { useSelector } from "react-redux";

import Topbar from "./components/Topbar";
import ProfileModal from "./components/ProfileModal";
import AddFoodModal from "./components/AddFoodModal";
import AddWaterModal from "./components/AddWaterModal";
import MacroTable from "./components/MacroTable";
import Charts from "./components/Charts";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/Theme";

const App = () => {
    const modals = useSelector(state => state.modals);

    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <ProfileModal open={modals.profile}/>
            <AddFoodModal open={modals.food} />
            <AddWaterModal open={modals.water} />
            
            <div style={{padding: 10, paddingTop: 20}}>
                <div>
                    <Charts />
                </div>
                <div style={{paddingTop: 50}}>
                    <MacroTable />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;