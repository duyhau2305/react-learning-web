import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CourseDetail from '../pages/CourseDetail'
import Courses from '../pages/Courses'
import Layout from '../layout'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import HomePage from '../pages/Home/Home'

export default function Routers() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/course-detail/:id' element={<CourseDetail />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}
