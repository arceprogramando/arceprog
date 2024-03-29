import { useState } from "react";
import { headerUrl } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState("Home")
    return (
        <>
            <nav className='w-full flex py-2 z-50 mb-4'>
                <Link to={`./`}>
                    <h1 className='text-[24px] text-white font-poppins uppercase'>ArceProg</h1>
                </Link>
                <ul className="sm:flex justify-end items-center flex-1">
                    {headerUrl.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] 
                            ${active === nav.title
                                    ? "text-white"
                                    : "text-dimWhite"} 
                            ${index === headerUrl - 1
                                    ? "mr-0"
                                    : "mr-10"} `}
                            onClick={() => setActive(nav.title)}
                        >
                            <Link to={`./${nav.id}`}>{nav.title}</Link>

                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar