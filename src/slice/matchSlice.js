import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active:{
        skills:['React','express','angular','node','Vue'],
        desc:''
    }
  };

export const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    addActiveSkill:(state,action)=>{
        if(!state.active.skills.includes(action.payload)){
            state.active.skills.push(action.payload)
        }
    },
    deleteActiveSkill:(state,action)=>{
        state.active.skills = state.active.skills.filter(skill=>skill !== action.payload)
    },
    addActiveDesc:(state,action)=>{
        state.active.desc = action.payload
    }
  },
});

export const { addActiveSkill , deleteActiveSkill , addActiveDesc  } = matchSlice.actions;

export default matchSlice.reducer;
