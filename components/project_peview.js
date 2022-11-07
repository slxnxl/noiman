import Image from "next/image";

export default function ProjectBlock() {
    const project = {
        name: 'project1'

    }

    return(
        <div>
        <hr className="mb-5"/>
        <div className="flex flex-row justify-between">
            <div>
                <p>
                    Project Name
                </p>
                <p>
                    Website / Identity
                </p>
            </div>
            <div className="max-w-5xl grow">
                <p>
                    My role<br/>
                    Branding<br/>
                    Design<br/>
                    Art Direction
                </p>
                <Image src="/sample.svg" alt="project1"
                       width="1042"
                height="561"
                />
            </div>
        </div>
        </div>
    )
}