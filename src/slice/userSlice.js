import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Jessica",
      lastName: "Sympson",
      username: "jessica420",
      designation: "software Engineer",
      country: "India",
      imageLink:
        "https://img.freepik.com/premium-photo/girl-red-sweater-with-red-top_81048-3567.jpg?size=626&ext=jpg",
      theme: "light",
    skills: [
      {
        name: "React",
        level: "beginner",
        rating: 2,
      },
      {
        name: "Angular",
        level: "intermediate",
        rating: 4,
      },
    ],
  }
;

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      localStorage.setItem("applied-theme",state.theme);
    },
    setTheme:(state,action)=>{
      if(action.payload){
        state.theme = action.payload
      }else{
        localStorage.setItem("applied-theme",state.theme)
      }
    }
  },
});

export const { toggleTheme , setTheme } = UserSlice.actions;

export default UserSlice.reducer;
