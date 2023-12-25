import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    info: {
      firstName: "Jessica",
      lastName: "Sympson",
      username: "jessica420",
      designation: "software Engineer",
      country: "India",
      imageLink:
        "https://img.freepik.com/premium-photo/girl-red-sweater-with-red-top_81048-3567.jpg?size=626&ext=jpg",
      theme: "light",
    },
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
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.user.info.theme === "light") {
        state.user.info.theme = "dark";
      } else {
        state.user.info.theme = "light";
      }
      localStorage.setItem("applied-theme",state.user.info.theme);
    },
    setTheme:(state,action)=>{
        if(action.payload){
            state.user.info.theme = action.payload;
        }else{
            localStorage.setItem("applied-theme",'light')
        }
    }
  },
});

export const { toggleTheme , setTheme } = UserSlice.actions;

export default UserSlice.reducer;
