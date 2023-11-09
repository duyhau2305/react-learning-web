import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Courses from '../pages/Courses'
import Layout from '../layout'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export default function Routers() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/courses' element={<Courses />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}
