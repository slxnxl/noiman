import Image from "next/image";

// TODO добавить правильные шрифты и убрать маргин у почты, заменить на флексы
export default function Header () {
    return(
        <div className="flex flex-row justify-between items-center pt-3">
                <p className="flex-none mr-5 font-normal text-xl">Bella Noiman</p>

            <div className="flex flex-row flex-auto max-w-5xl items-center justify-between">
                <a className="font-normal text-xl underline">hello@noimanbella.com</a>
                <div className="flex flex-row gap-x-10" >
                <button className="text-xl font-normal">Works</button>
                <button className="flex flex-row items-center font-normal text-xl">
                    Contact
                    {<Image src="/Arrow_header.svg"
                            alt="arrow"
                            width={11}
                            height={0}
                            className="ml-1"/>}
                </button>
            </div>
            </div>
        </div>
    )
}