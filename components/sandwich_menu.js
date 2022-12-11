import Image from "next/image";
import useOnclickOutside from "react-cool-onclickoutside";
import React, {
  Suspense,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

export default function Sandwich() {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const close = () => setOpen(false);

  useOnclickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <div
        open={open}
        className={"z-20 -md:hidden menu " + (open ? "open" : "")}
      >
        <p className="menu-item font-light ">Bella Noiman</p>
        <button
          onClick={() => close()}
          className="menu-item text-3xl mt-3 font-light"
        >
          Home
        </button>
        <button
          onClick={() => close()}
          className="menu-item text-3xl font-light"
        >
          Works
        </button>
        <button onClick={() => close()} className="menu-item mt-3 font-light">
          Contact me
          {/*{*/}
          {/*  <Image*/}
          {/*    src="/Arrow_header.svg"*/}
          {/*    alt="arrow"*/}
          {/*    width={11}*/}
          {/*    height={0}*/}
          {/*    className="ml-[12px]"*/}
          {/*  />*/}
          {/*}*/}
        </button>
        <p
          onClick={() => close()}
          className="underline menu-item text-3xl font-light"
        >
          hello@noimanbella.com
        </p>
        <p className="menu-item mt-3  font-light">Follow me</p>
        <button className="menu-item text-3xl font-light flex items-center">
          Instagram{" "}
          {
            <Image
              src="/Arrow_header_white.svg"
              alt="arrow"
              width={17}
              height={0}
              className="ml-[8px] pt-[9px]"
            />
          }
        </button>
        <button className="menu-item text-3xl font-light flex items-center">
          Behance
          {
            <Image
              src="/Arrow_header_white.svg"
              alt="arrow"
              width={17}
              height={0}
              className="ml-[8px] pt-[9px]"
            />
          }
        </button>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={"z-20 -md:hidden burger " + (open ? "open" : "")}
      ></div>
    </div>
  );
}
