import Image from "next/image";
// TODO выбрать как будет выглядеть картинка на мобилках
export default function DescImage({ project }) {
  console.log("pr: ", project);
  if (project.type === "image") {
    return (
      <Image
        src={project.src}
        rel="preload"
        className=" object-cover w-100% h-[90vh] max-h-[700px] md:h-[50vh] mb-5"
        alt="project1"
        width="1440"
        height="561"
      ></Image>
    );
  } else {
    return <div>123</div>;
  }
}
