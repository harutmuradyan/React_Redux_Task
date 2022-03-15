import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/player.slice.js';
import teamReducer from './slices/team.slice.js';

export const store = configureStore({
    reducer:{
         team: teamReducer ,
         player : playerReducer
    }
})