import React from "react";

const account = {
  fullName: "William Smmith",
  avatar: "/public/assets/image/ava-big-author.jpg",
  email: "Smmith@email.com",
  phone: "0123456789",
  gender: "Male",
  job: "Assistant Teacher",
};

export default function Profile() {
  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Profile
        </p>
        <p className="text-base text-center">Home / Profile</p>
      </div>
      <div className="container max-w-[1340px] mx-auto px-4 py-28 flex gap-8">
        <div className="w-1/3 bg-white shadow p-10 flex flex-col items-center gap-4">
          <img src={account.avatar} className="max-w-[150px]" />
          <p className="text-2xl font-bold text-black">{account.fullName}</p>
          <p className="text-lg">{account.job}</p>
        </div>
        <div className="flex-1 bg-white shadow p-10">
            <div className="flex gap-48 border-b p-4 pl-0">
                <p className="text-black font-bold w-1/5">Full Name</p>
                <p className="font-bold">{account.fullName}</p>
            </div>
            <div className="flex gap-48 border-b p-4 pl-0">
                <p className="text-black font-bold w-1/5">Email</p>
                <p className="font-bold">{account.email}</p>
            </div>
            <div className="flex gap-48 border-b p-4 pl-0">
                <p className="text-black font-bold w-1/5">Phone number</p>
                <p className="font-bold">{account.phone}</p>
            </div>
            <div className="flex gap-48 p-4 pl-0">
                <p className="text-black font-bold w-1/5">Gender</p>
                <p className="font-bold">{account.gender}</p>
            </div>
        </div>
      </div>
    </>
  );
}
