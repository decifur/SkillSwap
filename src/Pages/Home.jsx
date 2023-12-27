import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTheme } from '../utilies';
import { setTheme, toggleTheme } from '../slice/userSlice';

const Home = () => {
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
        <div className="p-5">
            <strong className="text-2xl block">Technologies</strong>
            <br />
            <ul className="list-disc pl-5">
                <li>Tailwind CSS</li>
                <li>Chakra-UI</li>
                <li>Redux-Toolkit</li>
            </ul>
            <button className={'py-2 px-4 m-3 text-white bg-blue-500 rounded-xl ' + userInfo.theme} onClick={handleThemeToggle}>
                {userInfo.theme} theme
            </button>
        </div>
    );
};

export default Home;
