const waterInitialState = 0;

export const waterReducer = (state = waterInitialState, action) => {
    if (action.type === waterActions.DRINK_WATER) {
        return state + action.payload;
    }
    else {
        return state;
    }
};

export const waterActions = {
    DRINK_WATER: "DRINK_WATER",
};