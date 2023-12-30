import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, toggleTheme } from './slice/userSlice';
import { useColorMode } from '@chakra-ui/react';




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
    <div className='h-full w-full'>
      <strong className='text-2xl block'>Technologies</strong><br />
      <ul className='list-disc pl-5'>
        <li>Tailwind CSS</li>
        <li>Chakra-UI</li>
        <li>Redux-Toolkit</li>
      </ul>
      <button className={'py-2 px-4 m-3 text-white bg-blue-500 rounded-xl '+ userInfo.theme } onClick={handleThemeToggle}>{userInfo.theme} theme</button>
    </div>
  )
}

export default App