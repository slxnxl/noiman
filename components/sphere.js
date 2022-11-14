import React from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {
    MeshDistortMaterial,
    MeshWobbleMaterial,
    Sphere
} from "@react-three/drei";

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
            <Sphere visible position={[3, 0, 0]} args={[1, 16, 200]}>
                <MeshDistortMaterial
                    color="#00A38"
                    attach="material"
                    distort={0.3} // Strength, 0 disables the effect (default=1)
                    speed={2} // Speed (default=1)
                    roughness={0}
                />
            {/*<sphereGeometry args={[2, 128, 128]} />*/}
            {/*<boxGeometry attach="geometry" args={[1, 1, 1]} />*/}
            {/*<meshNormalMaterial></meshNormalMaterial>*/}
            </Sphere>
    );
}

export default function Sphere1() {
    return (
        <div  className="absolute inset-0 z-0 content_animate">
            <Canvas>
                <MyRotatingBox />
                <ambientLight intensity={0.3} />
                <directionalLight />
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