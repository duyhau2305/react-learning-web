import { FaPhotoVideo, FaStar, FaStarHalf } from "react-icons/fa";

export default function Course({ item }: { item: any }) {
  const renderStars = (rating: any) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar className="primary-color" />);
    }
    if (rating - fullStars >= 0.5) {
      stars.push(<FaStarHalf className="primary-color" />);
    }

    return stars;
  };
  return (
    <div className="p-4 bg-white">
      <img src={item.courseImage} className="w-full" />
      <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] primary-bg rounded-full flex items-center justify-center text-white font-bold text-xl ml-auto mr-[20px] -mt-[30px] relative">
        ${item.price}
      </div>
      <div className="flex flex-col px-[15px] gap-4">
        <div className="flex gap-3">
          <div className="primary-bg py-1 px-4 rounded text-white font-bold flex items-center">
            <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
            Adobe XD
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">{renderStars(item.rating)}</div>
            <p>{item.reviewAmount} reviews</p>
          </div>
        </div>
        <p className="text-2xl font-bold">{item.nameCourse}</p>
        <div className="flex justify-between">
          <div className="flex items-center"><FaPhotoVideo className="primary-color"/><p className="text-base">{item.lessonAmount}X Lesson</p></div>
        </div>
      </div>
    </div>
  );
}
