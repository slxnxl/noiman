import "../styles/globals.css";
// import React, { useEffect, useRef } from "react";
// import { Scrollbar } from "smooth-scrollbar-react";

function MyApp({ Component, pageProps }) {
  // const scrollbar = useRef();
  //
  // useEffect(() => {
  //   console.log("scrollbar: ", scrollbar.current);
  // }, []);

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     position: "fixed",
    //     height: "100vh",
    //     // width: "100vw",
    //   }}
    // >
    //     test smooth-scroll
    //   <Scrollbar
    //     // style={{ margin-led: "auto" }}
    //     damping={0.05}
    //     thumbMinSize={40}
    //     renderByPixels={true}
    //     continuousScrolling={false}
    //     ref={scrollbar}
    //     plugins={{
    //       overscroll: {
    //         effect: "bounce",
    //       },
    //     }}
    //   >
    <Component {...pageProps} />
    //   </Scrollbar>
    // </div>
  );
}

export default MyApp;
