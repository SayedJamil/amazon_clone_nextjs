import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52">
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
