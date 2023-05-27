const waterInitialState = 0;

export const waterReducer = (state = waterInitialState, action) => {
    if (action.type === waterActions.DRINK_WATER) {
        return state + action.payload;
    }
    else if (action.type === waterActions.CLEAR_WATER) {
        return waterInitialState;
    }
    else {
        return state;
    }
};

export const waterActions = {
    DRINK_WATER: "DRINK_WATER",
    CLEAR_WATER: "CLEAR_WATER",
};