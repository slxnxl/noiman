import * as THREE from "three";
import React, {
  Suspense,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/>,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

// TODO убрать setBg из функции
export default function Scene({ setBg }) {
  // TODO понять надо ли делать перерисовку сферы при уменьшении окна браузера (не через отзывчивое устройство)
  const pozSphere = (function () {
    return window?.screen.width < 767 ? [0, -1, 70] : [2, 0, 50];
  })();
  // set settings position sphere and camera for adaptive
  // TODO понять надо ли оно тут вообще
  const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () =>
      // TODO тут чета ругается
      setWidth(typeof window !== "undefined" && window.innerWidth);
    useCallback(() => {
      window.addEventListener("resize", handleResize);
      return () =>
        typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const handleResize = useCallback(
      () => setWindowSize(window.innerWidth),
      [setWindowSize]
    );

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return windowSize;
  };

  console.log("pz", pozSphere);
  console.log("useWidth ", useWindowSize());

  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? "none"
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="5" fill="black"/></svg>'
        )}'), auto`;
  }, [hovered]);

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  // TODO разобраться почему выдает ошибку
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    sphere.current.position.x = THREE.MathUtils.lerp(
      sphere.current.position.x,
      hovered ? state.mouse.x / 2 : 0,
      0.2
    );
    sphere.current.position.y = THREE.MathUtils.lerp(
      sphere.current.position.y,
      Math.sin(state.clock.elapsedTime / 1.5) / 6 +
        (hovered ? state.mouse.y / 2 : 0),
      0.2
    );
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.02 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.275 : 1,
      // color: hovered ? '#000000' : mode ? '#202020' : 'white',
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered]
  );

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[pozSphere[0], pozSphere[1], 4]}
        fov={pozSphere[2]}
      >
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="white"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble.to((w) => [w, w, w])}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          position={[0, 0, 0]}
          // onClick={() => {
          //   // Toggle mode between dark and bright
          //   setMode(!mode);
          //   // setBg({ background: !mode ? '#0d1010' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
          // }
          //}
        >
          <sphereBufferGeometry args={[1, 192, 192]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="warehouse" />
        {/*<ContactShadows rotation={[Math.PI / 2, 0, 0]} position={[0, -1.6, 0]} opacity={0.4} width={15} height={15} blur={2.5} far={1.6} />*/}
      </Suspense>
    </>
  );
}
