import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { toggleHidden } from "../../scripts/tools";
import { Cart } from "../index";

const Header = (props) => {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    const showMobileMenu = () => {
    (isMobileMenuOpen) ? setisMobileMenuOpen(false) : setisMobileMenuOpen(true)
}

    return (
        <div className="w-full h-12 bg-white text-black border-b-2 border-black items-center flex flex-row justify-between ">
            <div className=" brand-logo text-xl font-bold pl-2 ">
                <h2>Logo</h2>
            </div>
            <div className=" cart-and-menu flex items-center lg:pr-4">
                <ul className=" hidden menu-list lg:flex lg:flex-row text-base font-bold pr-3">
                    <li className="menu-list-item px-3 ">Home</li>
                    <li className="menu-list-item px-3 ">Adventures</li>
                    <li className="menu-list-item px-3 ">Culture</li>
                </ul>
                <AiOutlineShoppingCart
                  className=" w-10 h-10 pr-3 "
                  onClick={() => toggleHidden("cart")}
                />
                <button onClick={()=>{showMobileMenu()}}  className=" lg:hidden mobile-menu-button ">
                    {(isMobileMenuOpen) ? <AiOutlineClose className=" w-10 h-10 pr-3 " alt="close"/> : <AiOutlineMenu className=" w-10 h-10 pr-3 " alt="menu"/>}
                </button>
                {(isMobileMenuOpen) ? MobileMenu() : ''}
            </div>
            <Cart {...props} />
        </div>
    )

};

function MobileMenu(){
    return (
        <div className="top-12 absolute lg:hidden bg-black text-white z-10 right-0 overflow-x-hidden h-full w-full">
            <ul className=" menu-list flex flex-col text-base font-bold items-center">
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Home</li>
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Adventures</li>
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Culture</li>
                </ul>
        </div>
    )
}

export default Header;
