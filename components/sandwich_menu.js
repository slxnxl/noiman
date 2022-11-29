import Image from "next/image";
import useOnclickOutside from "react-cool-onclickoutside";
import React, {Suspense, useEffect, useState, useRef, useCallback} from 'react';


export default function Sandwich () {

    const [open, setOpen] = useState(false);
    const node = useRef(null);
    const close = () => setOpen(false);

    useOnclickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <div open={open} className={"z-20 -md:hidden menu " + (open? "open" : '')}>
                <p className="menu-item">Bella Noiman</p>
                <p onClick={() => close()} className="underline menu-item">hello@noimanbella.com</p>
                <button onClick={() => close()} className="menu-item">Works</button>
                <button onClick={() => close()} className="menu-item">Contact
                    {<Image src="/Arrow_header.svg"
                            alt="arrow"
                            width={11}
                            height={0}
                            className="ml-[12px]"/>}
                </button>
            </div>
            <div onClick={() => setOpen(!open)} className={"z-20 -md:hidden burger " + (open? "open" : '')}></div>
        </div>
    );
}