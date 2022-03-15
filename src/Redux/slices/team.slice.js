import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    data: []
}

const teamSlice = createSlice({
  name: 'TeamSlice',
  initialState,
  reducers: {
    addTeam(state,action){
        state.data = [
            ...state.data,
            {
                id: action.payload.id,
                name: action.payload.name,
                createdAt : action.payload.createdAt
            }
        ]
    },
    removeTeam(state,action){
       const filteredData = state.data.filter(item => item.id !== action.payload.id);
       state.data = filteredData;
    },
    updateTeam(state,action){
        const filteredData = state.data.filter(item => item.id !== action.payload.id);
            state.data = filteredData;

            const update = {
                id : action.payload.id, 
                name : action.payload.name , 
                createdAt : action.payload.createdAt  
            } 
            
            state.data = [
                ...state.data,
                update
            ]
    }
  },
})

export const { addTeam, removeTeam,updateTeam } = teamSlice.actions;
export default teamSlice.reducer;