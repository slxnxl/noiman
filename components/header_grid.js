import Image from "next/image";

// TODO добавить правильные шрифты и убрать маргин у почты, заменить на флексы
export default function HeaderGrid () {
    return(
        <div className="grid lg:grid-cols-4 gap-4 font-normal text-xl gap-8 lg:gap-x-5 lg:gap-y-16 sm:gap-y-6 grid-flow-dense sm:grid-cols-1 text-lg" >
            <p>Bella Noiman</p>
            <p className="underline">hello@noimanbella.com</p>
            <p></p>
            <div className="flex items-center justify-end">
                <button>Works</button>
                <button className="flex items-center ml-[48px]">Contact
                    {<Image src="/Arrow_header.svg"
                            alt="arrow"
                            width={11}
                            height={0}
                            className="ml-[12px]"/>}
                </button>
            </div>
        </div>
    )
}