import React from "react";
import { log } from "console";

export default function Course({ item }: { item: any }) {
  console.log(item, "ppp");

  return (
    <div className="p-4 bg-white">
      <img src={item.courseImage} className="w-full" />
      <div className="w-[60px] h-[60px] primary-color rounded-full flex items-center justify-center text-white font-bold text-xl ml-auto -mt-[30px] relative">
        ${item.price}
      </div>
      <div className="flex flex-column"></div>
    </div>
  );
}
