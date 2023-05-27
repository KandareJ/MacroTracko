const foodInitialState = [];
const foodHistoryInitialState = {};

export const foodReducer = (state = foodInitialState, action) => {
    if (action.type === foodActions.EAT_FOOD) {
        return [...state, action.payload];
    }
    else if (action.type === foodActions.CLEAR_FOOD) {
        return foodInitialState;
    }
    else if (action.type === foodActions.REMOVE_FOOD_ENTRY) {
        const foods = [...state];
        foods.splice(action.payload, 1);

        return foods;
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
    else if (action.type === foodActions.CLEAR_FOOD_HISTORY) {
        return foodHistoryInitialState;
    }
    else {
        return state;
    }
}

export const foodActions = {
    EAT_FOOD: "EAT_FOOD",
    REMOVE_FOOD_ENTRY: "REMOVE_FOOD_ENTRY",
    CLEAR_FOOD: "CLEAR_FOOD",
    CLEAR_FOOD_HISTORY: "CLEAR_FOOD_HISTORY",
};