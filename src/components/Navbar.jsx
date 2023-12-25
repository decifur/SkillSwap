import { MdOutlineLogout } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { LiaHandshake } from 'react-icons/lia';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { RiSettingsLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="accent-bg h-screen w-14 p-2 shadow-[0px_1px_4px_#00000070] flex flex-col items-center justify-between">
            <img src="logo.jpg" alt="SkillSwap" />
            <div className="flex flex-col gap-4 items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    <GoHome className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/matchmaking" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    <LiaHandshake className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    <IoChatbubbleEllipsesOutline className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    <FaRegUser className="m-[6px]" size="23px" />
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    <RiSettingsLine className="m-[6px]" size="25px" />
                </NavLink>
            </div>
            <MdOutlineLogout size="30px" className="rotate-180" />
        </div>
    );
};

export default Navbar;
