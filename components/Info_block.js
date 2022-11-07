import Image from "next/image";

export default function InfoBlock () {
    return(
        <div className="flex flex-row justify-between items-start pt-3 mb-20">
            <p className=" mr-5 font-normal text-xl">Information</p>

            <div className="flex flex-row flex-auto max-w-5xl items-start justify-between">
                <a className="font-normal text-xl">
                    <p className="mb-5">Bella Noiman<br/>
                        Designer / Art director
                    </p>
                    <p>
                        hello@bellanoiman.com<br/>
                        @bellanoiman
                    </p>
</a>
                    <p className="text-xl font-normal">Currently in Indonesia,<br/>
                        Bali</p>
                    <a className="flex flex-row items-center font-normal text-xl underline">
                        Get in touch
                    </a>
            </div>
        </div>
    )
}