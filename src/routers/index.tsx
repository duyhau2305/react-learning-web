import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CourseDetail from '../pages/CourseDetail'
import Courses from '../pages/Courses'
import HomePage from '../pages/Home/Home'
import Layout from '../layout'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import ResetPassword from '../pages/ResetPassword'
import SignUp from '../pages/SignUp'

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
            <Route path='/profile' element={<Profile />}/>
            <Route path='/reset-password' element={<ResetPassword />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}
