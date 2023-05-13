import { configureStore } from '@reduxjs/toolkit'

import { profileReducer } from './profile';
import { modalsReducer } from './modals';
import { waterReducer } from './water';
import { macrosReducer } from './macros';
import { foodReducer, foodHistoryReducer } from './food';

const storageKey = 'macroState';

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem(storageKey, JSON.stringify(store.getState()));

    return result;
};

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(storageKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        profile: profileReducer,
        modals: modalsReducer,
        water: waterReducer,
        macros: macrosReducer,
        food: foodReducer,
        foodHistory: foodHistoryReducer,
    },
    preloadedState: loadState(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;