import { BiAbacus } from "react-icons/bi";
import ListCourses from "../components/ListCourses";

const courses = [
  {
    idCourse: 1,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
  {
    idCourse: 2,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 4.5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
  {
    idCourse: 3,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 3,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
  {
    idCourse: 4,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
  {
    idCourse: 5,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
  {
    idCourse: 6,
    nameCourse: "Fundamentals of Adobe XD Theory Learn New",
    courseImage: "/assets/image/course-image.jpg",
    price: 30,
    rating: 5,
    reviewAmount: 3,
    lessonAmount: 18,
    classType: "Online",
    author: "William Smmith",
    authorImage: "/assets/image/ava-author.jpg",
  },
];

const filters = [
  {
    type: "categories",
    options: [
      "All Categories",
      "Uncategorized",
      "Academy",
      "Agency",
      "App",
      "Bar",
      "Blog",
      "Business",
      "Cafe",
      "College",
      "Construction",
      "Education",
    ],
  },
  {
    type: "languages",
    options: ["All Languages", "PHP", "JAVASCRIPT", "JAVA", "HTML", "PYTHON"],
  },
  {
    type: "prices",
    options: ['All Prices',...Array.from({ length: 100 }, (_, i) => i + 1)],
  },
  {
    type: "skills",
    options: [
      "All Skills",
      "HTML",
      "CSS",
      "WORDPRESS",
      "JAVASCRIPT",
      "REACT",
      "ANGULAR",
      "VUE",
    ],
  },
];

export default function Courses() {
  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Archives: Courses
        </p>
        <p className="text-base text-center">Home / Course Page</p>
      </div>
      <div className="py-6 primary-bg">
        <div className="container max-w-[1340px] mx-auto px-4 md:flex gap-6">
          <div className="flex items-center gap-1">
            <BiAbacus size={20} className="text-white" />
            <p className="text-white text-lg">Filters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-2">
            {filters.map((f, i) => (
              <select key={i} className="rounded p-2.5 outline-none w-full">
                {f.options.map((o, ix) => (
                  <option key={ix}>{o}</option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-w-[1340px] mx-auto px-4 pt-28">
        <div className="flex w-full justify-between mb-6">
          <p>Showing 1-6 of 10 results</p>
          <div className="flex gap-1">
            <p>Sort by:</p>
            <select className="bg-secondary outline-none">
              {filters.find(f => f.type == 'skills')?.options.map((o,i) => <option key={i}>{o}</option>)}
            </select>
          </div>
        </div>
        <ListCourses courses={courses} />
      </div>
    </>
  );
}
