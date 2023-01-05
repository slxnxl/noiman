// https://placidosalazar.cargo.site/ - sample view
import HeaderGrid from "../../components/header_grid";
import SmoothScroll from "../../utils/smooth_scroll";
import styles from "../../styles/Home.module.css";
import ProjectBlock from "../../components/project_peview";
import DescImage from "../../components/project_desc_image_video";
import Footer from "../../components/footer";

// TODO разобраться почему не срабатывает перенос header в апп

// заменить позже на запрос из json
export default function projectPage({ name_project }) {
  const project = [
    { type: "image", src: "/grad.jpeg" },
    { type: "image", src: "/sample.svg" },
    { type: "image", src: "/grad.jpeg" },
    { type: "image", src: "/sample.svg" },
    { type: "image", src: "/grad.jpeg" },
    { type: "image", src: "/sample.svg" },
  ];

  return (
    <SmoothScroll>
      <div className={styles.container}>
        <HeaderGrid />
        <div className="project_description flex flex-col justify-center">
          <ProjectBlock></ProjectBlock>
          {project.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <DescImage project={item}></DescImage>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </SmoothScroll>
  );
}
