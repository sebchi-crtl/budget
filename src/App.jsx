import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Budget from './pages/Budget'
// import Profile from './pages/Profile'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="budget" element={<Budget />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App