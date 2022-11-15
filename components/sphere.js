import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    AccumulativeShadows,
    GradientTexture,
    MeshDistortMaterial, MeshReflectorMaterial, RandomizedLight,
    Sphere
} from "@react-three/drei";

//TODO может усложить потом + радиус для мобилок
function MyRotatingBox() {
  // const sphere = React.useRef();
  // let p = sphere.vertices;
  // console.log(sphere);
  // useFrame(({ clock }) => {
  //     const time = performance.now() * 0.0017;
  //     sphere.current.rotation.x = clock.getElapsedTime();
  //     const k = 1;
  //     for (let i = 0; i < p.length(); i++) {
  //         p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
  //     }
  //         sphere.geometry.computeVertexNormals();
  //         sphere.geometry.normalsNeedUpdate = true;
  //         sphere.geometry.verticesNeedUpdate = true;
  // });

  return (
    <Sphere visible position={[0, 0, 0]} args={[1.7, 200, 200]}>
      <MeshDistortMaterial
          castShadow
          receiveShadow
        color=""
        attach="material"
        distort={0.2} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
        roughness={0.3}
      >
        <GradientTexture
          stops={[0.2, 0.6, 1]} // As many stops as you want
          colors={['#12c2e9', '#c471ed', '#f64f59']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />

    {/*      <MeshReflectorMaterial*/}
    {/*          blur={[0, 0]} // Blur ground reflections (width, heigt), 0 skips blur*/}
    {/*          mixBlur={0} // How much blur mixes with surface roughness (default = 1)*/}
    {/*          mixStrength={1} // Strength of the reflections*/}
    {/*          mixContrast={1} // Contrast of the reflections*/}
    {/*          resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower*/}
    {/*          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors*/}
    {/*          depthScale={0} // Scale the depth factor (0 = no depth, default = 0)*/}
    {/*          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)*/}
    {/*          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)*/}
    {/*          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture*/}
    {/*          distortion={1} // Amount of distortion based on the distortionMap texture*/}
    {/*          // distortionMap={distortionTexture} // The red channel of this texture is used as the distortion map. Default is null*/}
    {/*          debug={0} /* Depending on the assigned value, one of the following channels is shown:*/}
    {/*  0 = no debug*/}
    {/*  1 = depth channel*/}
    {/*  2 = base channel*/}
    {/*  3 = distortion channel*/}
    {/*  4 = lod channel (based on the roughness)*/}
    */
    {/*          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)*/}
    {/*      />*/}

      </MeshDistortMaterial>

      {/*<sphereGeometry args={[2, 128, 128]} />*/}
      {/*<boxGeometry attach="geometry" args={[1, 1, 1]} />*/}
      {/*<meshNormalMaterial></meshNormalMaterial>*/}
    </Sphere>
  );
}

export default function Sphere1() {
  return (
    <div className="absolute inset-0 z-0 content_animate">
      <Canvas shadows>
        <MyRotatingBox autoRotate />
          <ambientLight intensity={0.8} />
         <directionalLight  />
      </Canvas>
    </div>
  );
}


// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame, extend } from '@react-three/fiber'
//
// function mySphere() {
//     let sphere = React.useRef();
//     useFrame(({ clock }) => {
//         const a = clock.getElapsedTime();
//         sphere.current.rotation.x = a;
//         console.log(a)
//     });
//
//     return(
//                 <mesh ref={sphere}>
//                     <sphereGeometry args={[2, 128, 128]} />
//                     <meshNormalMaterial></meshNormalMaterial>
//                 </mesh>
//     )
// }
//
// export default function Sphere() {
//     return(
//         <div id="canvas-container" className="absolute inset-0 z-0 content_animate">
//         <Canvas>
//             <mySphere>
//             </mySphere>
//         </Canvas>
//         </div>
//     )
// }

//
// const renderer = new THREE.WebGLRenderer({ canvas : document.getElementById('canvas'), antialias:true});
// // default bg canvas color //
// renderer.setClearColor(0x7b7b7b);
// //  use device aspect ratio //
// renderer.setPixelRatio(window.devicePixelRatio);
// // set size of canvas within window //
// renderer.setSize(window.innerWidth, window.innerHeight);
//
//
//
//
// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
// camera.position.z = 5;
//
//
// const sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
// const material = new THREE.MeshNormalMaterial();
//
// const sphere = new THREE.Mesh(sphere_geometry, material);
// scene.add(sphere);
//
//
// const update = function() {
//
//     // change '0.003' for more aggressive animation
//     const time = performance.now() * 0.0017;
//     //console.log(time)
//
//     //go through vertices here and reposition them
//
//     // change 'k' value for more spikes
//     const k = 1;
//     for (var i = 0; i < sphere.geometry.vertices.length; i++) {
//         var p = sphere.geometry.vertices[i];
//         p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
//     }
//     sphere.geometry.computeVertexNormals();
//     sphere.geometry.normalsNeedUpdate = true;
//     sphere.geometry.verticesNeedUpdate = true;
//
// }
//
// function animate() {
//     //sphere.rotation.x += 0.01;
//     //sphere.rotation.y += 0.01;
//
//     update();
//     /* render scene and camera */
//     renderer.render(scene,camera);
//     requestAnimationFrame(animate);
// }
//
//
// requestAnimationFrame(animate);
//
// // return(
// //     <canvas id="canvas"></canvas>
// // )