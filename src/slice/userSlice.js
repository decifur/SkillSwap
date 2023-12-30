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
  chats: [
    {
      id: "1",
      users: ["jessica420", "Emma Dima"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hey, how's it going?",
        },
        {
          sender: "Emma",
          message: "Not bad, just finished a coding challenge. What about you?",
        },
        {
          sender: "jessica420",
          message:
            "Nice! I'm debugging my JavaScript project. Tricky bugs, you know?",
        },
        {
          sender: "Emma",
          message: "Oh, I feel you. Debugging can be a puzzle sometimes.",
        },
        {
          sender: "jessica420",
          message: "Absolutely! But solving",
        },
      ],
    },
    {
      id: "2",
      users: ["jessica420", "Chris Chok"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hello, what's up?",
        },
        {
          sender: "Chris",
          message:
            "Hey! Just started learning JavaScript. Any tips for a beginner?",
        },
        {
          sender: "jessica420",
          message:
            "Awesome! Practice consistently and build small projects. It really helps.",
        },
        {
          sender: "Chris",
          message:
            "Thanks, I'll keep that in mind. How did you start your programming journey?",
        },
        {
          sender: "jessica420",
          message:
            "I started with basic web development and gradually dived into more complex stuff.",
        },
      ],
    },
    {
      id: "3",
      users: ["jessica420", "Olivia Oil"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hey there! What's on your mind?",
        },
        {
          sender: "Olivia",
          message:
            "Not much, just contemplating whether to learn React or Vue. Any suggestions?",
        },
        {
          sender: "jessica420",
          message:
            "Both are great, but I'd recommend React. It's widely used and has a large community.",
        },
        {
          sender: "Olivia",
          message:
            "Thanks! I'll give React a shot. Any resources you found helpful?",
        },
        {
          sender: "jessica420",
          message:
            "Check out the official documentation and some online tutorials. They're gold.",
        },
      ],
    },
    {
      id: "4",
      users: ["jessica420", "Daniel Dani"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hello! What are you up to?",
        },
        {
          sender: "Daniel",
          message:
            "Hey! Just finished a hackathon. It was intense but exciting!",
        },
        {
          sender: "jessica420",
          message: "That sounds amazing! What was your project about?",
        },
        {
          sender: "Daniel",
          message: "We built a collaborative coding platform. It was a blast!",
        },
        {
          sender: "jessica420",
          message: "Impressive! Collaborative coding is the future.",
        },
      ],
    },
    {
      id: "5",
      users: ["jessica420", "Aria Pota"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hey, how's your day going?",
        },
        {
          sender: "Aria",
          message:
            "Pretty good! Just deployed my first web app. Exciting stuff!",
        },
        {
          sender: "jessica420",
          message: "Congratulations! What's the app about?",
        },
        {
          sender: "Aria",
          message: "It's a task management app. Simple but effective.",
        },
        {
          sender: "jessica420",
          message:
            "That's awesome! Building and deploying is always a big achievement.",
        },
      ],
    },
    {
      id: "6",
      users: ["jessica420", "Mia Khali"],
      conversation: [
        {
          sender: "jessica420",
          message: "Hello! Anything interesting happening?",
        },
        {
          sender: "Mia",
          message:
            "Not much, just exploring some new JavaScript libraries. Any favorites?",
        },
        {
          sender: "jessica420",
          message:
            "I'm currently loving the simplicity and power of D3.js for data visualization.",
        },
        {
          sender: "Mia",
          message:
            "Ah, D3.js is on my list! I'll check it out. Thanks for the recommendation.",
        },
        {
          sender: "jessica420",
          message: "You're welcome! Enjoy exploring!",
        },
      ],
    },
  ],
};
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
      localStorage.setItem("applied-theme", state.theme);
    },
    setTheme: (state, action) => {
      if (action.payload) {
        state.theme = action.payload;
      } else {
        localStorage.setItem("applied-theme", state.theme);
      }
    },
  },
//   updateUserInfo: (state, action) => {
//     state.user.info = { ...state.user.info, ...action.payload };
//   },
//   updateUserSkills: (state, action) => {
//     let matchFound = false;
//     state.user.skills.forEach((e, i) => {
//       e.name == action.payload.name &&
//         ((state.user.skills[i] = {
//           ...state.user.skills[i],
//           ...action.payload,
//         }),
//         (matchFound = true));
//     });
//     !matchFound && state.user.skills.push(action.payload);
//   },
});

export const { toggleTheme, setTheme, updateUserSkills, updateUserInfo } =
  UserSlice.actions;

export default UserSlice.reducer;
