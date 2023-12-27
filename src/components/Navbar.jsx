import { MdOutlineLogout } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { LiaHandshake } from 'react-icons/lia';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { RiSettingsLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTheme } from '../utilies';
import { setTheme, toggleTheme } from '../slice/userSlice';

const Navbar = () => {
    const userInfo = useSelector((state) => state.user.info);
    const dispatch = useDispatch();

    useEffect(() => {
        const theme = getUserTheme();
        dispatch(setTheme(theme));
    });

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={` ${userInfo.theme}2 h-screen w-14 flex flex-col items-center justify-between`}>
              <div className="flex flex-col gap-8 items-center">
                <div className='relative rounded-full  my-2 shadow-sky-300  sd'>
            <img className='relative z-10'  src="/public/14EED69F-62D1-46EB-B34A-EA48F2E25922-removebg-preview.png" width={40} alt="SkillSwap" />
            {/* <div className='absolute z-0 gg bg-white h-10 w-10'></div> */}

                </div>          
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <GoHome className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/matchmaking" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <LiaHandshake className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <IoChatbubbleEllipsesOutline className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <FaRegUser className="m-[6px]" size="23px" />
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <RiSettingsLine className="m-[6px]" size="25px" />
                </NavLink>
                <button className={'p-3 text-white text-lg bg-blue-500 rounded-xl ' + userInfo.theme} onClick={handleThemeToggle}> {userInfo.theme == 'light'?'☼':'☾'}
            </button>
            </div>
            <MdOutlineLogout size="30px" className="rotate-180" />
           
        </div>
    );
};

export default Navbar;
