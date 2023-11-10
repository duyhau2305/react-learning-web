import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterestP, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto p-14 px-20 flex flex-col gap-y-5 shadow rounded bg-white">
        <p className="text-3xl font-bold text-center">Register Now</p>
        <div className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="input w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="input w-full"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="input w-full"
          />
        </div>
        <button className="button">Get Started Now</button>
        <p className="text-center">
          Are you a member?
          <span>
            <Link to='/'> Login</Link>
          </span>
        </p>
        <div className="flex flex-col items-center gap-5">
          <div className="w-9 h-9 rounded-full primary-bg flex items-center justify-center">
            <p className="text-white">OR</p>
          </div>
          <p className="font-bold text-xl">Login With Social Media</p>
          <div className="flex gap-2">
            <div className="social-icon bg-[#3b5998]">
              <FaFacebookF style={{ color: "#fff" }} />
            </div>
            <div className="social-icon bg-[#55acee]">
              <FaTwitter style={{ color: "#fff" }} />
            </div>
            <div className="social-icon bg-[#007bb5]">
              <FaLinkedin style={{ color: "#fff" }} />
            </div>
            <div className="social-icon bg-[#e4405f]">
              <FaInstagram style={{ color: "#fff" }} />
            </div>
            <div className="social-icon bg-[#bd081c]">
              <FaPinterestP style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
