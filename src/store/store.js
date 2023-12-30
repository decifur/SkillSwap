import {   configureStore } from "@reduxjs/toolkit";
import user from "../slice/userSlice";
import matches from "../slice/matchSlice";


export const store = configureStore({
    reducer:{
        user:user,
        matches:matches,
    }})