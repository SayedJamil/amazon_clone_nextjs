import Product from "./Product";
import 'styles/tailwind.css'

function ProductFeed({ products }) {
    return (
        <div className="text-gray-800">
            <h1 className="text-red-700">Products</h1>
            {products.map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    id={id}
                    image={image}
                />

            ))}
            {/* {console.log(products)} */}
        </div>
    );
}

export default ProductFeed
