import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    data: []
}

const playerSlice = createSlice({
    name: 'PlayerSlice',
    initialState,
    reducers: {
        addPlayer(state,action){
            state.data = [
                ...state.data,
                {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName : action.payload.lastName,
                    createdAt : action.payload.createdAt,
                    teamName : action.payload.teamName
                }
            ]
        },
        removePlayer(state,action){
            const filteredData = state.data.filter(item => item.id !== action.payload.id);
            state.data = filteredData;
        },
        updatePlayer(state,action){
            const filteredData = state.data.filter(item => item.id !== action.payload.id);
            state.data = filteredData;

            const update = {
                id : action.payload.id, 
                firstName : action.payload.firstName , 
                lastName : action.payload.lastName ,
                createdAt : action.payload.createdAt,
                teamName : action.payload.teamName   
            } 
            
            state.data = [
                ...state.data,
                update
            ]
        }
    },
})

export const { addPlayer, removePlayer, updatePlayer } = playerSlice.actions;
export default playerSlice.reducer;