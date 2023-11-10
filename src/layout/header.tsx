import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsMessenger, BsSkype, BsTwitter, BsVimeo } from "react-icons/bs";
import { GiRss } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { menus } from "../configs/menu";
import { useEffect } from "react";

export default function Header() {

  const handleScroll = () => {
    const bottomHeader = document.querySelector(".header-section");
    const y = window.scrollY > 200;
    console.log('hehehee', window.scrollY)
  
    if (bottomHeader) {
      if (y && !bottomHeader.classList.contains("header-fixed")) {
        bottomHeader.classList.add("header-fixed");
      } else if (!y && bottomHeader.classList.contains("header-fixed")) {
        bottomHeader.classList.remove("header-fixed");
      }
    }
  };


  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll)
  })
  return (
    <>
    <header className="header header-section" id="header-main">
      <div className="top-header">
        <div className="top-header-container text-grey flex items-center justify-between px-6.25 border-b border-b-primary">
          <div className="tab-header-top-left flex items-center ">
            <Link
              className="tbl-phone flex items-center py-[15px] px-[25px] border-r border-r-[rgba(16,17,21,0.1)]"
              to="tel:0919538433"
            >
              <AiFillPhone size={16} />
              <span className="ml-[5px]">0919538433</span>
            </Link>
            <span className="tbl-phone flex items-center py-[15px] px-[25px]">
              <CiLocationOn size={16} />
              <span className="ml-[5px]">HUST - Hanoi, Vietnam</span>
            </span>
          </div>
          <div className="tab-header-top-right flex items-center">
            <div className="flex items-center gap-3">
              <span className="text-grey">Find us on: </span>
              <div className="flex items-center text-primary ">
                <Link
                  className="w-[50px] h-[50px] flex items-center justify-center"
                  to="https://fb.com/vuonghaodu"
                >
                  <BsMessenger size={16} />
                </Link>
                <Link
                  className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-primary"
                  to="https://x.com/vuonghaodu"
                >
                  <BsTwitter size={16} />
                </Link>
                <Link
                  className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-primary"
                  to="https://fb.com/vuonghaodu"
                >
                  <BsVimeo size={16} />
                </Link>
                <Link
                  className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-primary"
                  to="https://fb.com/vuonghaodu"
                >
                  <BsSkype size={16} />
                </Link>
                <Link
                  className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-primary"
                  to="https://fb.com/vuonghaodu"
                >
                  <GiRss size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="bottom-header-container px-6.25 py-5 flex items-center justify-between backdrop-blur-[20px]">
          <div className="logo-left max-h-[52px]">
            <Link className="inline-block w-full h-full" to="/">
              <img src="/assets/image/logo.png" alt="logo" />
            </Link>
          </div>
          <nav className="menu-right flex items-center gap-[30px]">
            <ul className="list-menu flex items-center ">
              {menus.map((e, i) => {
                const subMenu = e.subMenu.length > 0 ? e.subMenu : null;
                return (
                  <li
                    key={i}
                    className={`menu-item relative ${
                      subMenu ? "menu-item-has-children" : ""
                    }`}
                  >
                    <Link
                      to={e.link}
                      className={`font-semibold capitalize text-base py-3.75 px-5.5 realtive ${
                        subMenu
                          ? "before:absolute before:top-1/2 before:-translate-y-1/2 after:absolute before:h-[10px] before:w-0.5 before:right-1 after:bottom-1/2 after:w-[10px] after:h-0.5 after:translate-y-1/2 after:bg-black before:bg-black after:right-0"
                          : ""
                      } `}
                    >
                      {e.title}
                    </Link>
                    {subMenu && (
                      <ul className="menu-list-item-of-children absolute">
                        {subMenu.map((v, j) => (
                          <li
                            className="menu-item-of-children text-black hover:bg-primary hover:text-white"
                            key={`m${j}`}
                          >
                            <Link to={v.link}>{v.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="wrapper-button-account flex items-center text-base">
              <button
                className="login flex gap-1 items-center uppercase rounded-tl-[2px] rounded-bl-[2px] text-primary p-3.75 bg-white"
                type="button"
                name="btnLogin"
                data-test="login-test"
              >
                <AiOutlineUser size={16} />
                <span className="">Login</span>
              </button>
              <button
                className="signup flex gap-1 items-center uppercase rounded-tr-[2px] rounded-br-[2px] bg-primary text-white p-3.75"
                type="button"
                name="btnSignup"
                data-test="signup-test"
              >
                <IoIosPeople size={16} />
                <span className="">Sign Up</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  
    </>
  );
}
