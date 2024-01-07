import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Chat from './Pages/chat/Chat';
import Navbar from './components/Navbar';
import Matchmaking from './Pages/Matchmaking';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, toggleTheme } from './slice/userSlice';
import { useColorMode } from '@chakra-ui/react';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';



function Layout() {
    return (
        <div className="flex h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
}

const App = () => {
    const userInfo = useSelector((state => state.user))
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        dispatch(setTheme(colorMode))
    });

    const handleThemeToggle = () => {
        dispatch(toggleTheme())
        toggleColorMode()
    }
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/matchmaking" element={<Matchmaking />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default App;
