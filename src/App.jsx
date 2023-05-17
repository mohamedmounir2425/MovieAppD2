import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Item from './Components/Item'
import People from './Components/People'
import Tv from './Components/Tv'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import NotFound from './Components/NotFound'
import About from './Components/About'
import { Offline } from 'react-detect-offline'
import Disconnected from './Components/Disconnected'
import MovieDetails from './Components/MovieDetails'
import AuthLayout from './Layouts/AuthLayout'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import ProtectedRoute from './Components/ProtectedRoute'


const routes = createBrowserRouter([
  {path:'/', element:<RootLayout/>,children:[
    {index:true,element: <ProtectedRoute><Home/></ProtectedRoute>  },
    {path:'home',element: <ProtectedRoute> <Home/> </ProtectedRoute>},
    {path:'about',element: <ProtectedRoute> <About/> </ProtectedRoute>},
    {path:'tv',element: <ProtectedRoute> <Tv/> </ProtectedRoute>},
    {path:'details/:id/:media',element: <ProtectedRoute> <MovieDetails/> </ProtectedRoute>},
    {path:'movies',element: <ProtectedRoute> <Movies/> </ProtectedRoute>},
    {path:'people',element: <ProtectedRoute> <People/> </ProtectedRoute>},
    {path:'*',element: <ProtectedRoute> <NotFound/> </ProtectedRoute>},
  ]},
  {path:'/',element: <AuthLayout/> ,children:[
    {index:true,element: <Signin/> },
    {path:'/signin',element: <Signin/> },
    {path:'/signup',element: <Signup/> },
  ]}
])

export default function App() {
  return (
    <>
 
 <Offline><Disconnected/></Offline>
     <RouterProvider router={routes} />

    </>
  )
}
