import ListCourses from "../components/ListCourses"

const courses = [
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  },
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 4.5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  },
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 3,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  },
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  },
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  },
  {
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: '/assets/image/course-image.jpg',
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: '/assets/image/ava-author.jpg'
  }
]

export default function Courses() {
  return (
    <div className='container w-2/3 mx-auto'>
      <ListCourses courses={courses}/>
    </div>
    
  )
}
