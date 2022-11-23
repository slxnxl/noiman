import Sphere1 from "./sphere";
import Scene from "./new_sphere";
import { Canvas } from "@react-three/fiber";

export default function TitleTextGrid() {
    return (
        <div className="grid lg:grid-cols-4 gap-4 font-normal text-xl gap-8 lg:gap-x-5 lg:gap-y-16 sm:gap-y-6 grid-flow-dense sm:grid-cols-1 text-lg" >
            <div className="col-start-2 col-span-4">
                {/*<Sphere1></Sphere1>*/}
                <div className=" absolute inset-0 z-0">
                    <Canvas className="canvas " pixelRatio={[1, 2]}>
                        <Scene></Scene>
                    </Canvas></div>
                <h1 className="text-6xl text-left font-light content_animate z-10 relative">Designer & art director creating scalable design solutions in branding, packaging and web design, striving for clarity, simplicity & logic.</h1>
            </div>
        </div>
        // <div className="max-w-5xl flex flex-row justify-end">
        //     <div className="">
        //         {/*<Sphere1></Sphere1>*/}
        //         <div className=" absolute inset-0 z-0">
        //             <Canvas className="canvas " pixelRatio={[1, 2]}>
        //             <Scene></Scene>
        //         </Canvas></div>

        //     <h1 className="text-6xl text-left font-light content_animate z-10 relative">Designer & art director creating scalable design solutions in branding, packaging and web design, striving for clarity, simplicity & logic.</h1>
        //     </div>
        // </div>
    )
}