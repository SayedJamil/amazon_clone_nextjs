
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currec

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div>
            <p>{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4>{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5" />
                    ))}

            </div>
            {/* {hasPrime && <Image src={"http://assets.stickpng.com/images/5f7f75fa3dd424000436e50e.png"} height={50} width={50} objectFit="contain" className="z-5" />
            } */}
            <p>{description}</p>
            <div>

            </div>
        </div>
    )
}

export default Product
