import { React, useEffect } from "react";
import Image from "next/image";

export default function SliderProjects() {
  // const [project, setProject] = React.useState();

  // useEffect(() => {}, [project]);

  // console.log("target ", project);
  //onClick={(index) => setTarget(index)
  return (
    <div className="mt-5 mb-5">
      <hr className="mb-5" />
      <div className="flex justify-between md:flex-col">
        <div className="about flex flex-col md:flex-row justify-between md:mb-5">
          <p>
            Project Name
            <br />
            <p className="text-[#BFBFBF]">Website</p>
            <p className="text-[#BFBFBF]">Digital Experience</p>
            <p className="text-[#BFBFBF]">Identity</p>
          </p>
          <p>
            <p className="text-[#BFBFBF]">My role</p>
            Concept
            <br />
            Branding
            <br />
            Design
            <br />
            Art Direction
            <br />
          </p>
        </div>
        <Image
          src="/sample.svg"
          className="ml-auto mb-3"
          alt="project1"
          width="842"
          height="361"
        />
      </div>
      <div className="flex justify-between max-w-[260px] ml-auto md:mr-auto">
        <button
          className="h-12 w-28 border-solid border-2 border-black hover:bg-[url('/grad.jpeg')] hover:bg-cover hover:border-none rounded-full hover:text-white outline-offset-2"
          onClick={() => console.log("go next")}
        >
          <div className="text-3xl ">&larr;</div>
        </button>
        <button
          className="h-12 w-28 border-solid border-2 border-black hover:bg-[url('/grad.jpeg')] hover:bg-cover hover:border-none rounded-full hover:text-white outline-offset-2"
          onClick={() => console.log("go next")}
        >
          <div className="text-3xl ">&rarr;</div>
        </button>
      </div>
    </div>
  );
}
