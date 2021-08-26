import Image from "next/image"
function Header() {
    return (
        <div>
            <div className="relative h-[40px] w-[150px]">
                <Image src="https://links.papareact.com/f90" layout="fill" objectFit="contain" className=""/>
            </div>
        </div>
    )
}

export default Header
