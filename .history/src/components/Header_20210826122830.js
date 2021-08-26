import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline';
function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue flex-grow py-2">
                {/* Left */}
                <div className="relative h-[40px] w-[150px] sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" className="curson-pointer" />
                </div>
                {/* Search */}
                <div className="flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer hidden sm:inline-flex flex-grow">
                    <input type="text" className="flex-grow p-2 h-full w-6 rounded-l-md flex-shrink outline-none" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right */}
                <div>

                </div>
            </div>
            {/* Bottom nav */}
            <div>
                <div>

                </div>
                <div>
                    
                </div>
                <div></div>
            </div>
        </header>

    )
}

export default Header
