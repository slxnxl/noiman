import Sphere from "./sphere";

export default function TitleText() {
    return(
        <div className="max-w-5xl flex flex-row justify-end">
            <div className="">
                <Sphere className="static"></Sphere>
            <h1 className="text-6xl text-left font-light content_animate z-10 relative">Designer & art director creating scalable design solutions in branding, packaging and web design, striving for clarity, simplicity & logic.</h1>
            </div>
        </div>
    )
}