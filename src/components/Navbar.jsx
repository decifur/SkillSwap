import { MdOutlineLogout } from 'react-icons/md';
import { LiaHomeSolid } from "react-icons/lia";
import { PiHandshakeLight } from "react-icons/pi";
import { PiChatTextLight } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
    return (
        <div className="bg-[#EBF2FF] h-screen w-[4rem] p-2 shadow-[0px_1px_4px_#00000070] flex flex-col items-center justify-start gap-12">
            <img src={logo} alt="SkillSwap" className='mt-[2rem] h-10 w-10' />
            <div className="flex flex-col gap-4 items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#1db7f7]' : '')}>
                    <LiaHomeSolid className="m-[6px]" size="35px" />
                </NavLink>
                <NavLink to="/matchmaking" className={({ isActive }) => (isActive ? 'text-[#1db7f7]' : '')}>
                    {/* <LiaHandshake className="m-[6px]" size="35px" /> */}
                    <PiHandshakeLight className="m-[6px]" size="35px" />
                </NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? 'text-[#1db7f7]' : '')}>
                    <PiChatTextLight className="m-[6px]" size="32px" />
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'text-[#1db7f7]' : '')}>
                    <BsPerson className="m-[6px]" size="32px" />
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? 'text-[#1db7f7]' : '')}>
                    <IoSettingsOutline className="m-[6px]" size="32px" style={{fontWeight: "light"}} />
                </NavLink>
            </div>
            <MdOutlineLogout size="30px" className="rotate-180 absolute bottom-10" />
        </div>
    );
};

export default Navbar;