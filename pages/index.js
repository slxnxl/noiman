import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import TitleText from "../components/title_text";
import InfoBlock from "../components/Info_block";
import ProfileBlock from "../components/profile_block";
import ProjectBlock from "../components/project_peview";
import InfoBlockGrid from "../components/Info_block_grid";
import HeaderGrid from "../components/header_grid";
import TitleTextGrid from "../components/title_text_grid";
import SliderProjects from "../components/slider_projects";
import Footer from "../components/footer";

export default function Home() {
  //   тестовый прелоад изображений
  const casheImage = (async () => {
    const img_list = ["./grad.jpeg", "./sample.svg"];
    img_list.map((item) => {
      const img = new Image();
      img.src = item;
    });
  })();
  return (
    <div className={styles.container}>
      <Head>
        <title>Noiman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  TODO переместить header выше*/}
      {/* <Header></Header> */}
      <HeaderGrid />
      <main className="h-[80vh] flex p-0 flex-1 flex-col justify-center items-end relative md:h-[60vh] md:justify-end md:pb-12">
        {/* <TitleText></TitleText> */}
        <TitleTextGrid />
      </main>
      <InfoBlockGrid />
      {/*<ProjectBlock></ProjectBlock>*/}
      <SliderProjects></SliderProjects>
      <Footer></Footer>
      {/*<footer className={styles.footer}>футер</footer>*/}
    </div>
  );
}
