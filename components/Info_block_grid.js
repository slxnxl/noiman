import Image from "next/image";

export default function InfoBlockGrid () {
    return(

        <div className="grid lg:grid-cols-4 gap-4 font-normal text-xl gap-8 lg:gap-x-5 lg:gap-y-16 sm:gap-y-6 grid-flow-dense sm:grid-cols-1 text-lg" >
            <p className="">Information</p>
            <p className="">Bella Noiman <br/> Designer / Art director<br/><br/>
                hello@bellanoiman.com</p>
            <p>I use design as a tool to improve businesses. My aim is to deliver meaningful and intelligent of digital products.</p>
            <a href="#" className="underline">Get in touch</a>
            {/* ----- */}
            <p className="">Skills & Tools</p>
            <p>
            User Experience Designv<br/>
            User Interface Design<br/>
            Visual Design<br/>
            User Testing<br/>
            Wireframing<br/>
            Interaction Design<br/>
            Prototyping<br/>
            </p>
            <p>
            Figma / Sketch<br/>
            Adobe Ps / Adobe Ae<br/>
            Webflow<br/>
            InVision Studio<br/>
            Origami Studio<br/>
            ProtoPie<br/>
            Miro<br/>
            <p className="text-[#BFBFBF]">etc.</p><br/>
            </p>
            <p></p>
            {/* ----- */}
            <p>Project Name<br/>
            <p className="text-[#BFBFBF]">Website</p>
            <p className="text-[#BFBFBF]">Digital Experience</p>
            <p className="text-[#BFBFBF]">Identity</p>
            </p>
            <p>
            <p className="text-[#BFBFBF]">My role</p>
            Concept<br/>
            Branding<br/>
            Design<br/>
            Art Direction<br/>
            </p>
            <p>
            Working with Project name team to conceive and create a new digital experience that immerses consumers in the brand, products and services. During the process we explore concepts for digital brand experience, phygical experiences, ecommerce and customer experience, personalization/data.
            </p>
            <p className="text-[#BFBFBF]">Work in progress</p>
            
        </div>
    )
}