import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue flex-grow py-2">
                {/* Left */}
                <div className="relative h-[40px] w-[150px] sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" className="curson-pointer" />
                </div>
                {/* Search */}
                <div className=" items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer hidden sm:inline-flex flex-grow">
                    <input type="text" className="flex-grow p-2 h-full w-6 rounded-l-md flex-shrink outline-none" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right */}
                <div className="text-white flex items-center space-x-6 mx-6 font-semibold whitespace-nowrap ">
                    {/* Link is the custom utility class created in global.css */}
                    <div className="link">
                        <p className="text-xs md:text-sm">Hello, Guest</p>
                        <p className="font-extrabold text-s md:text-md">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p className="text-xs md:text-sm">Returns</p>
                        <p className="font-extrabold text-s md:text-md">& Orders</p>
                    </div>
                    <div className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="font-bold text-xs md:text-sm hidden md:inline-flex ">Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom nav */}
            <div>

            </div>
        </header>

    )
}

export default Header
