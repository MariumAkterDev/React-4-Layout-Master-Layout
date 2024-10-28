import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Services from './Pages/Services'
import LayoutOne from './Components/Layout/LayoutOne'
import LayoutTwo from './Components/Layout/LayoutTwo'
import Help from './Pages/Help'
import LayoutThree from './Components/Layout/LayoutThree'
import Gallery from './Pages/Gallery'
import Blog from './Pages/Blog'



function App() {
 const myPath = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      {/* ========================= Layout One ====================== */}
      <Route path='/' element={<LayoutOne/>}>
        <Route index            element={<Home/>}      />
        <Route path='/about'    element={<About/>}     />
        <Route path='/contact'  element={<Contact/>}   />
        <Route path='*'         element={<NotFound/>}  />
      </Route>
      {/* ========================= Layout Two ====================== */}
      <Route path='/LayoutTwo' element={<LayoutTwo/>}>
        <Route index element={<Services />}             />
        <Route path='/LayoutTwo/help' element={<Help/>} />
      </Route>
      {/* ========================= Layout Three ====================== */}
      <Route path='/LayoutThree' element={<LayoutThree/>}>
        <Route index element={<Gallery/>} />
        <Route path='/LayoutThree/blog' element={<Blog/>} />
      </Route>

    </Route>
  )
 )

  return (
    <>
     
     <RouterProvider router={myPath} />

    </>
  )
}

export default App

