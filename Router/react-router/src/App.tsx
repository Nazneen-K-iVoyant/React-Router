import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UsersDetails from './components/UsersDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import { AuthProvider } from './components/Auth'
const LazyAbout = React.lazy(() => import('./components/About'))  //---> Lazy loading


function App() {


  return (
    <>
      <AuthProvider>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} > </Route>
        {/* <Route path='about' element={<About />} ></Route> */}
        <Route path='about' element={
          <React.Suspense  fallback='Loading...' ><LazyAbout /></React.Suspense>
        } ></Route>

        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />

        {/* Nested Routes Products*/}
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} ></Route>
          <Route path='featured' element={<FeaturedProducts />} ></Route>
          <Route path='new' element={<NewProducts />} ></Route>
        </Route>

        {/* Nested routes for User */}
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UsersDetails />} />
          <Route path='admin' element={<Admin />} /> 
        </Route>

        <Route path='profile' element={<Profile/>} >
           </Route>

           <Route  path='login' element={<Profile/>} ></Route>
           
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
