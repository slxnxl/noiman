import Sphere1 from "./sphere";
import Scene from "./new_sphere";
import {Canvas} from "@react-three/fiber";

export default function TitleText() {
    return(
        <div className="max-w-5xl flex flex-row justify-end">
            <div className="">
                {/*<Sphere1></Sphere1>*/}
                <div className="w-80 h-80 absolute inset-0 z-0">
                    <Canvas className="canvas " pixelRatio={[1, 2]}>
                    <Scene></Scene>
                </Canvas></div>

            <h1 className="text-6xl text-left font-light content_animate z-10 relative">Designer & art director creating scalable design solutions in branding, packaging and web design, striving for clarity, simplicity & logic.</h1>
            </div>
        </div>
    )
}