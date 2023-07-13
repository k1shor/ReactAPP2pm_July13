import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Pages/Home'
import Register from './components/Pages/Register'
import FAQs from './components/Pages/FAQs'
import Contact from './components/Pages/Contact'
import Cart from './components/Pages/Cart'
import Deals from './components/Pages/Deals'
import Counter from './Hooks/Counter'
import ComponentB from './Hooks/ComponentB'
import Welcome from './Hooks/Welcome'
import DataFetch from './Hooks/DataFetch'
import Post from './Hooks/Post'
import Count from './redux/Count'
import Game from './redux/Game'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                   <Route index element={<Home/>}/>
                   <Route path='register' element = {<Register/>}/>
                   <Route path='faq' element = {<FAQs/>}/>
                   <Route path='contact' element={<Contact/>}/>
                   <Route path='cart' element={<Cart/>}/>
                   <Route path='deals' element={<Deals/>}/>


                   {/* Hooks */}
                   <Route path='/counter' element={<Counter/>}/>
                   <Route path='/component' element={<ComponentB/>}/>
                   <Route path='/welcome/:name' element = {<Welcome/>}/>
                   <Route path='/data' element={<DataFetch/>}/>

                   <Route path= '/post/:id' element={<Post/>}/>

                   {/* redux */}
                   <Route path='/count' element={<Count/>}/>
                   <Route path='/game' element={<Game/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes