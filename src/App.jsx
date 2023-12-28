import { Outlet, Route, Routes,  } from "react-router-dom"
import { Navbar } from "./components"
import { Home, Matchmaking, Profile, Setting, Chat } from "./pages"

function Layout() {
  return (
      <div className="flex h-screen">
          <Navbar />
          <Outlet />
      </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/matchmaking" element={<Matchmaking/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Setting/>}/>
      </Route>
    </Routes>
  )
}

export default App