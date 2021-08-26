import Image from "next/image"
function Header() {
    return (
        <div className="flex items-center bg-amazon_blue flex-grow py-2">
            <div className="relative h-[40px] w-[150px] sm:">
                <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" className="curson-pointer" />
            </div>
        </div>
    )
}

export default Header
