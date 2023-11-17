import React from "react";
import { FaCalendarAlt, FaCommentAlt, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Blog() {
  const dataList = [
    {
      name: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      description:
        "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 3,
    },
    {
      name: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      description:
        "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 4,
    },
    {
      name: "Scottish Creatives To Receive Funded Business.",
      author: "Begrass Tyson",
      date: "April 23,2022",
      description:
        "Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe",
      comments: 6,
    },
  ];
  return (
    <section className="blog-section bg-secondary py-[110px]">
      <div className="container-content max-w-[1320px] px-3 w-full mx-auto">
        <div className="section-header text-center mb-[50px]">
          <span className="subtitle text-primary tracking-[5px] text-xl -translate-y-2 font-medium">
            FORM OUR BLOG POSTS
          </span>
          <h2 className="title text-[40px] font-bold text-black leading-[52px]">
            More Articles From Resource Library
          </h2>
        </div>
        <div className="blog-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataList.map((e, i) => (
            <div
              className="item-data p-3.75 transition-all duration-300 rounded bg-white hover:-translate-y-2 cursor-pointer"
              key={e.comments}
            >
              <div className="img-thumb w-full">
                <img
                  src={`/assets/image/blog/${i + 1}.jpg`}
                  className="w-full"
                />
              </div>
              <div className="item-data-content p-3.75 pt-5">
                <Link
                  to="#"
                  className="text-black text-2xl font-bold line-clamp-2 transtion-all duration-300"
                >
                  {e.name}
                </Link>
                <div className="meta-post flex items-center my-[15px]">
                  <span className="author flex items-center gap-1 mr-[15px]">
                    <FaUser size={16} className="text-primary" />
                    <span className="text-author text-base">{e.author}</span>
                  </span>
                  <span className="author flex items-center gap-1 mr-[15px]">
                    <FaCalendarAlt size={16} className="text-primary" />
                    <span className="text-date text-base">{e.date}</span>
                  </span>
                </div>
                <div className="text-description text-base">
                  <p className="">{e.description}</p>
                </div>
              </div>
              <div className="post-blog-footer mx-[15px] pt-3.75 border-t border-t-[#ecf0f3] flex items-center justify-between">
                <Link to="#readmored" className="flex items-center gap-1">
                  <span className="read-more-text text-lg text-black font-medium">
                    Read More
                  </span>
                  <FaExternalLinkAlt className="text-lg text-primary" />
                </Link>
                <div className="blog-comments relative">
                <FaCommentAlt className="text-lg" />
                <span className="count-comment absolute z-10 bg-primary font-semibold text-xs text-center text-white w-4 h-4 rounded-full -top-[10px] -right-[5px]">{e.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
