import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Services from './pages/Services'

const App = () => {
  return (
    <Layout>
        <Routes>
          <Route  path='/'  element={<Home />}/>
          <Route  path='/about'  element={<About />}/>
          <Route  path='/contact'  element={<Contact />}/>
          <Route  path='/project'  element={<Projects />}/>
          <Route  path='/services'  element={<Services />}/>
        </Routes>
    </Layout>
  )
}

export default App
