import { BiAbacus } from "react-icons/bi";
import ListCourses from "../components/ListCourses";
import { courses, filters } from "../configs/fakeData";

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
              {filters
                .find((f) => f.type == "skills")
                ?.options.map((o, i) => (
                  <option key={i}>{o}</option>
                ))}
            </select>
          </div>
        </div>
        <ListCourses courses={courses} />
      </div>
    </>
  );
}
