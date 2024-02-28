import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMatch:{
        skills:[],
        desc:''
    },
    availableSkills:['react','express','angular','node','vue','rust','javascript','python','c','c++','c#','dsa','django','flask','react-native','java','springboot','typescript','tailwind','html','css','flutter','kotlin','ruby',''],
  };

export const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    addActiveSkill:(state,action)=>{
        if(!state.activeMatch.skills.includes(action.payload)){
            state.activeMatch.skills.push(action.payload)
        }
    },
    deleteActiveSkill:(state,action)=>{
        state.activeMatch.skills = state.activeMatch.skills.filter(skill=>skill !== action.payload)
    },
    addActiveDesc:(state,action)=>{
        state.activeMatch.desc = action.payload
    }
  },
});

export const { addActiveSkill , deleteActiveSkill , addActiveDesc  } = matchSlice.actions;

export default matchSlice.reducer;
