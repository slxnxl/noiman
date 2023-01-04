import "../styles/globals.css";
import HeaderGrid from "../components/header_grid";
import SmoothScroll from "../utils/smooth_scroll";
import { useEffect } from "react";
// import React, { useEffect, useRef } from "react";
// import { Scrollbar } from "smooth-scrollbar-react";

function MyApp({ Component, pageProps }) {
  // const scrollbar = useRef();
  //
  // useEffect(() => {
  //   console.log("scrollbar: ", scrollbar.current);
  // }, []);
  return (
    <div className="pt-8 px-5 mx-auto">
      <HeaderGrid />
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </div>
  );
}

export default MyApp;
