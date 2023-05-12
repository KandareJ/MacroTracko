const modalsInitialState = {
    food: false,
    water: false,
    profile: false
}

export const modalsReducer = (state = modalsInitialState, action) => {
    if (action.type === modalsActions.OPEN_WATER) {
        return {
            ...state,
            water: true,
        };
    }
    else if (action.type === modalsActions.OPEN_FOOD) {
        return {
            ...state,
            food: true,
        };
    }
    else if (action.type === modalsActions.OPEN_PROFILE) {
        return {
            ...state,
            profile: true,
        };
    }
    else if (action.type === modalsActions.CLOSE_WATER) {
        return {
            ...state,
            water: false,
        };
    }
    else if (action.type === modalsActions.CLOSE_FOOD) {
        return {
            ...state,
            food: false,
        };
    }
    else if (action.type === modalsActions.CLOSE_PROFILE) {
        return {
            ...state,
            profile: false,
        };
    }
    else {
        return state;
    }
};

export const modalsActions = {
    OPEN_WATER: "OPEN_WATER",
    OPEN_FOOD: "OPEN_FOOD",
    OPEN_PROFILE: "OPEN_PROFILE",
    CLOSE_WATER: "CLOSE_WATER",
    CLOSE_FOOD: "CLOSE_FOOD",
    CLOSE_PROFILE: "CLOSE_PROFILE"
};