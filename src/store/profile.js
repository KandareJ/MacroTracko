export const profileInitialState = {
    height: 60,
    weight: 180,
    age: 25,
    gender: "Male",
    goal: "Fat Loss",
    exerciseLevel: "Moderately Active"
};

export const profileReducer = (state = profileInitialState, action) => {
    if (action.type === profileActions.UPDATE_PROFILE) {
        return action.payload;
    }
    else {
        return state;
    }
};

export const profileActions = {
    UPDATE_PROFILE: "UPDATE_PROFILE"
};