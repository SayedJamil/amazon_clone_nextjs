import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline';
function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue flex-grow py-2">
                <div className="relative h-[40px] w-[150px] sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" className="curson-pointer" />
                </div>
                {/* Search */}
                <div className="">
                    <input type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
            </div>
            {/* Bottom nav */}
            <div>

            </div>
        </header>

    )
}

export default Header
