import Image from "next/image";

function Product({ id, title, price, description, category, image }) {
    return (
        <div>
            <p>{category}</p>
            <Image src={image} layout=
        </div>
    )
}

export default Product
