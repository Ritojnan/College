import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home.jsx'
import Contact, { contactAction } from './pages/help/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from './pages/careers/CareersError'
// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout.jsx'
import ChatLayout from './layouts/ChatLayout'

import AuthPage from "./pages/AuthPage"
import LoadingScreen from "./components/LoadingScreen"
import { RightPanel } from "./components/right-panel"
import ChatApp from "./components/ChatApp"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    
      <Route index element={<Home />} />
      <Route path="auth" element={<AuthPage />}/>
      <Route path="*" element={<NotFound />} />
      <Route path="chat" element={<LoadingScreen />} >
      <Route index element={<RightPanel />} />
      <Route
          path=":id"
          element={<ChatLayout/>}
        />
        </Route>
      
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App