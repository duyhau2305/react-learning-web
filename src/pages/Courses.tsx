import ListCourses from "../components/ListCourses"
import { courses } from "../configs/fakeData"



export default function Courses() {
  return (
    <div className='container max-w-[1340px] mx-auto px-4'>
      <ListCourses courses={courses}/>
    </div>
  )
}
