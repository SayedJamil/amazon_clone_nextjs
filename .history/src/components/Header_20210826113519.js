import Image from "next/image"
function Header() {
    return (
        <div>
            <div className="relative h-[40px]">
                <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Header
