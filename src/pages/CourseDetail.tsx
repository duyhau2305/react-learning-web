const course = {
  idCourse: 6,
  nameCourse: "Fundamentals of Adobe XD Theory Learn New",
  decrip:
    "The most impressive is collection of share me online college courses",
  courseImage: "/assets/image/course-image.jpg",
  price: 89,
  rating: 5,
  reviewAmount: 3,
  lessonAmount: 18,
  classType: "Online",
  author: "William Smmith",
  authorImage: "/assets/image/ava-author.jpg",
  overview:
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
  learnedSkill: [
    "Ready to begin working on real-world data modeling projects",
    "Expanded responsibilities as part of an existing role",
    "Be able to create Flyers, Brochures, Advertisements",
    "Find a new position involving data modeling.",
    "Work with color and Gradients and Grids",
  ],
  learned:
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course \n By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
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
  ],
};

export default function CourseDetail() {
  return (
    <div className="w-full">
      <div
        className="h-[600px] py-10"
        style={{
          backgroundImage: `url('/public/assets/image/banner-detail.jpg')`,
        }}
      >
        <div className="container max-w-[1320px] mx-auto">
          <div className="flex flex-col">
            <div className="flex">
              <div className="bg-[#26c976] py-1 px-4 rounded text-white font-bold flex items-center">
                <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
                Adobe XD
              </div>
              <div className="primary-bg py-1 px-4 rounded text-white font-bold flex items-center">
                <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
