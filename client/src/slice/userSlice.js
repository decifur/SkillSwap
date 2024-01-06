import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        info: {
            firstName: "Jessica",
            lastName: "Sympson",
            username: "jessica420",
            designation: "software Engineer",
            country: "India",
            imageLink: "https://img.freepik.com/premium-photo/girl-red-sweater-with-red-top_81048-3567.jpg?size=626&ext=jpg",
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
            state.user.info.theme = state.user.info.theme === "light" ? "dark" : "light";
            localStorage.setItem("applied-theme", state.user.info.theme);
        },
        setTheme: (state, action) => {
            if (action.payload) {
                state.user.info.theme = action.payload;
            } else {
                localStorage.setItem("applied-theme", "light");
            }
        },
        updateUserInfo: (state, action) => {
            state.user.info = { ...state.user.info, ...action.payload };
        },
        updateUserSkills: (state, action) => {
            let matchFound = false;
            state.user.skills.forEach((e, i) => {
                e.name == action.payload.name && ((state.user.skills[i] = { ...state.user.skills[i], ...action.payload }), (matchFound = true));
            });
            !matchFound && state.user.skills.push(action.payload);
        },
    },
});

export const { toggleTheme, setTheme, updateUserSkills, updateUserInfo } = UserSlice.actions;

export default UserSlice.reducer;
