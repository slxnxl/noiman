import Image from "next/image";

export default function ProjectBlock() {
  const project = {
    name: "project1",
  };

  return (
    <div>
      <hr className="mb-5" />
      <div className="grid grid-cols-4 gap-4 font-normal text-xl gap-8 gap-x-5 gap-y-16 md:gap-y-6 grid-flow-dense md:grid-cols-1 text-lg">
        {/* ----- */}
        <p>
          Project Name
          <br />
          <p className="text-[#BFBFBF]">Website</p>
          <p className="text-[#BFBFBF]">Digital Experience</p>
          <p className="text-[#BFBFBF]">Identity</p>
        </p>
        <p>
          <p className="text-[#BFBFBF]">My role</p>
          Concept
          <br />
          Branding
          <br />
          Design
          <br />
          Art Direction
          <br />
        </p>
        <p>
          Working with Project name team to conceive and create a new digital
          experience that immerses consumers in the brand, products and
          services. During the process we explore concepts for digital brand
          experience, phygical experiences, ecommerce and customer experience,
          personalization/data.
        </p>
        <p className="text-[#BFBFBF]">Work in progress</p>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <hr className="mb-5" />
  //     <div className="flex flex-row justify-between">
  //       <div>
  //         <p>Project Name</p>
  //         <p>Website / Identity</p>
  //       </div>
  //       <div className="max-w-5xl grow">
  //         <p>
  //           My role
  //           <br />
  //           Branding
  //           <br />
  //           Design
  //           <br />
  //           Art Direction
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
}
