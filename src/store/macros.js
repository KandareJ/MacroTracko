import { profileActions, profileInitialState } from "./profile";
import { calculateMacros } from "../logic/macros";

const macrosInitialState = calculateMacros(profileInitialState);

export const macrosReducer = (state = macrosInitialState, action) => {
    if (action.type === profileActions.UPDATE_PROFILE) {
        return calculateMacros(action.payload);
    }
    else {
        return state;
    }
};