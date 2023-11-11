import {
  FaCheck,
  FaPlay,
  FaRegPlayCircle,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { animated, useSpring } from "react-spring";

import { useState } from "react";

const course = {
  idCourse: 6,
  nameCourse: "Fundamentals of Adobe XD Theory Learn New",
  saleOff: 30,
  descrip:
    "The most impressive is collection of share me online college courses",
  courseImage: "/assets/image/course-detail.jpg",
  price: 89,
  rating: 5,
  reviewAmount: 3,
  lessonAmount: 18,
  classType: "Online",
  author: "William Smmith",
  authorImage: "/assets/image/ava-author.jpg",
  authorDescrip:
    "I'm an Afro-Latina digital artist originally from Long Island, NY. I love to paint design and photo manpulate in Adobe Photoshop while helping others learn too. Follow me on Instagram or tweet me",
  authorJob: "Assistant Teacher",
  overview:
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
  learnedSkill: [
    "Ready to begin working on real-world data modeling projects",
    "Expanded responsibilities as part of an existing role",
    "Be able to create Flyers, Brochures, Advertisements",
    "Find a new position involving data modeling.",
    "Work with color and Gradients and Grids",
  ],
  learned: [
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course",
    "By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
  ],
  content: [
    {
      name: "Introduction",
      lessons: 5,
      totalTime: "17:35",
      videos: [
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "How to set up your photoshop workspace",
          timeLesson: "08:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
      ],
    },
    {
      name: "Introduction",
      lessons: 4,
      totalTime: "30:35",
      videos: [
        {
          nameLesson: "Welcome to the course",
          timeLesson: "20:30",
        },
        {
          nameLesson: "How to set up your photoshop workspace",
          timeLesson: "08:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
      ],
    },
  ],
  listComments: [
    {
      id: 1,
      author: "Linsa Faith",
      authorAvatar: "/public/assets/image/ava-1.jpg",
      date: "Jun 5, 2022",
      time: "12:41 pm",
      rating: 5,
      contentComment:
        "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth",
    },
    {
      id: 2,
      author: "Mahdi Mahmud",
      authorAvatar: "/public/assets/image/ava-1.jpg",
      date: "Jun 5, 2022",
      time: "12:41 pm",
      rating: 4.5,
      contentComment:
        "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth",
    },
  ],
};

const categories = [
  {
    nameCategory: "Personal Development",
    amount: 30,
  },
  {
    nameCategory: "Photography",
    amount: 73,
  },
  {
    nameCategory: "Teaching and Academics",
    amount: 52,
  },
  {
    nameCategory: "Art and Design",
    amount: 35,
  },
  {
    nameCategory: "Business",
    amount: 57,
  },
  {
    nameCategory: "Data Science",
    amount: 36,
  },
  {
    nameCategory: "Finance",
    amount: 25,
  },
  {
    nameCategory: "Marketing",
    amount: 15,
  },
];

export default function CourseDetail() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: any) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderStars = (rating: any) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="primary-color" />);
    }
    if (rating - fullStars >= 0.5) {
      stars.push(<FaStarHalf className="primary-color" />);
    }
    return stars;
  };

  const animation = useSpring({
    height: expandedIndex != -1 ? "auto" : 0,
    opacity: expandedIndex != -1 ? 1 : 0,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="w-full">
      <div
        className="h-[600px] pt-[200px]"
        style={{
          backgroundImage: `url('/public/assets/image/banner-detail.jpg')`,
        }}
      >
        <div className="container max-w-[1340px] mx-auto px-4 flex justify-between">
          <div className="flex flex-col w-2/5 gap-4 pt-14">
            <div className="flex gap-2">
              <div className="bg-[#26c976] py-1 px-4 rounded text-white font-bold flex items-center">
                <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
                Adobe XD
              </div>
              <div className="primary-bg py-1 px-4 rounded text-white flex items-center">
                {course.saleOff}% Off
              </div>
            </div>
            <p className="text-4xl font-bold">{course.nameCourse}</p>
            <p className="text-[18px] text-[#555]">{course.descrip}</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={course.authorImage}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-medium text-base">{course.author}</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {renderStars(course.rating)}
                </div>
                <p>{course.reviewAmount} reviews</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 p-3 bg-white rounded-md relative">
            <img src={course.courseImage} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <FaPlay className="primary-color" size={26} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-28">
        <div className="container max-w-[1340px] mx-auto px-4 flex">
          <div className="flex flex-col w-3/5 gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-3xl">Course Overview</p>
              <p className="text-lg">{course.overview}</p>
              <p className="font-bold text-2xl">
                What You'll Learn in This Course:
              </p>
              <div className="flex flex-col gap-1">
                {course.learnedSkill.map((item: any, index: any) => (
                  <div className="flex items-center gap-2" key={index}>
                    <FaCheck className="primary-color" />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {course.learned.map((item: any, index: any) => (
                  <p className="text-lg" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Course Content</p>
              <div
                className="flex flex-col gap-1 accordion"
                id="accordionExample"
              >
                {course.content.map((c: any, i: any) => (
                  <div key={i} className="accordion-item">
                    <button
                      className={`w-full bg-[#26c976] p-4 flex justify-between ${
                        expandedIndex === i ? "" : "collapsed"
                      }`}
                      aria-expanded={expandedIndex === i}
                      onClick={() => handleClick(i)}
                    >
                      <p className="text-lg text-white font-bold">
                        {i + 1}.{c.name}
                      </p>
                      <p className="text-lg text-white font-medium">
                        {c.lessons} lesson, {c.totalTime}
                      </p>
                    </button>
                    {/* {expandedIndex === i && ( */}
                    <div
                      aria-labelledby="accordion01"
                      data-bs-parent="#accordionExample"
                      className={`accordion-collapse collapse ${
                        expandedIndex === i ? "show" : ""
                      }`}
                    >
                      {c.videos.map((vid: any, idx: any) => (
                        <div
                          className={`w-full p-4 flex justify-between items-center ${
                            idx % 2 !== 0 ? "bg-white" : ""
                          }`}
                        >
                          <p className="text-base text-[#555]">
                            {i + 1}.{idx + 1} {vid.nameLesson} {vid.timeLesson}
                          </p>
                          <FaRegPlayCircle size={16} />
                        </div>
                      ))}
                    </div>
                    {/* )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
