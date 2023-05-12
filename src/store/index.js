import { configureStore } from '@reduxjs/toolkit'

import { profileReducer } from './profile';
import { modalsReducer } from './modals';
import { waterReducer } from './water';
import { macrosReducer } from './macros';
import { foodReducer, foodHistoryReducer } from './food';

const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer,
        water: waterReducer,
        macros: macrosReducer,
        food: foodReducer,
        foodHistory: foodHistoryReducer,
    }
});

export default store;