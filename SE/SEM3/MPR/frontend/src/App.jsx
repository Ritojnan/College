import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
// layouts
import RootLayout from './layouts/RootLayout'
import ChatLayout from './layouts/ChatLayout'

import AuthPage from "./pages/AuthPage"
import LoadingScreen from "./components/LoadingScreen"
import { RightPanel } from "./components/right-panel"
import SettingsPage from "./pages/Settings.jsx"
import Multistep from "./components/Multistep"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home/>}/>
      <Route path="auth" element={<AuthPage />}/>
      <Route path="register" element={<Multistep />}/>

      <Route path="*" element={<NotFound />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="chat" element={<LoadingScreen />} >
        
      <Route index element={<RightPanel />} />
      <Route
          path=":id"
          element={<ChatLayout/>}
        />
        </Route>
        <Route path="*" element={<NotFound />} />      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App