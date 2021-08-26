import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className=">
            <h1 className="">Products</h1>
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
