import { useEffect, useState } from "react";

import Image from "next/image";

export default function SliderProjects() {
  const [project, setProject] = useState(0);
  const [disappearance, setIsDisappearance] = useState(false);

  // TODO может быть сделать бесконечную прокрутку
  //increase counter
  const increase = () => {
    if (project < pr_list.length - 1) {
      setIsDisappearance(false);
      setTimeout(() => {
        setProject((count) => count + 1);
      }, 500);
    }
  };

  //decrease counter
  const decrease = () => {
    if (project > 0) {
      setIsDisappearance(false);
      setTimeout(() => {
        setProject((count) => count - 1);
      }, 500);
    }
  };

  const pr_list = [
    {
      title: "project_0",
      discription: "asdasda sdasd asd asd asd asdasdkj asd akjsndkj anskjdn",
      role: ["one", "two", "three"],
      src_img: "./sample.svg",
    },
    {
      title: "project_1",
      discription: "asasda sdasd asd asd asd asdasdkj asd akjsndkj anskjdn",
      src_img: "./grad.jpeg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsDisappearance(true);
    });
  }, [project]);

  return (
    <div className="mt-5 mb-5">
      <hr className="mb-5" />
      <div
        className={
          "foo flex justify-between md:flex-col " +
          (disappearance
            ? "content_animate"
            : "" + (disappearance ? "" : "content_invisible"))
        }
      >
        <div className="about flex flex-col md:flex-row justify-between md:mb-5">
          <p>
            {pr_list[project].title}
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
        {/*TODO добавить фиксированный размер для изображения*/}
        <Image
          src={pr_list[project].src_img}
          className="ml-auto mb-3"
          alt="project1"
          width="842"
          height="361"
        />
      </div>
      <div className="flex justify-between max-w-[260px] ml-auto md:mr-auto">
        {/*TODO реализовать предзагрузку изображения фона кнопки*/}
        <button
          rel="preload"
          className="h-12 w-28 border-solid border-2 border-black hover:bg-[url('/grad.jpeg')] hover:bg-cover hover:border-none rounded-full hover:text-white outline-offset-2"
          onClick={() => decrease()}
        >
          <div className="text-3xl ">&larr;</div>
        </button>
        <button
          rel="preload"
          className="h-12 w-28 border-solid border-2 border-black hover:bg-[url('/grad.jpeg')] hover:bg-cover hover:border-none rounded-full hover:text-white outline-offset-2"
          onClick={() => increase()}
        >
          <div className="text-3xl ">&rarr;</div>
        </button>
      </div>
    </div>
  );
}
