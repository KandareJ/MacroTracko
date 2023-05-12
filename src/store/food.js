const foodInitialState = [];
const foodHistoryInitialState = {};

export const foodReducer = (state = foodInitialState, action) => {
    if (action.type === foodActions.EAT_FOOD) {
        return [...state, action.payload];
    }
    else {
        return state;
    }
};

export const foodHistoryReducer = (state = foodHistoryInitialState, action) => {
    if (action.type === foodActions.EAT_FOOD) {
        const { food, fat, carbs, protein, unit, servingSize } = action.payload;
        const foodKey = food.toLowerCase();
        
        return {
            ...state,
            [foodKey]: { food, fat, carbs, protein, unit, servingSize}
        };
    }
    else {
        return state;
    }
}

export const foodActions = {
    EAT_FOOD: "EAT_FOOD",
};