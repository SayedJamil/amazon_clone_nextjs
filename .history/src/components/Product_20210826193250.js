
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter"

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className=" flex flex-col relative m-5 bg-white z-30 p-10 ">
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

            <p>{description}</p>
            <div>
                <Currency quantity={price} currency="GBP" />
            </div>
            {hasPrime && (
                <div>
                    <img src="http://assets.stickpng.com/images/5f7f75fa3dd424000436e50e.png" objectFit="contain" className="" />
                    <p>FREE next day delivery</p>
                </div>
            )
            }
            <button>
                Add to basket
            </button>
        </div>
    )
}

export default Product
