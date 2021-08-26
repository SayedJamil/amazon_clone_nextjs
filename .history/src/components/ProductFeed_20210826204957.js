import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52 mx-auto">
            {products
                .slice(0, 4)
                .map(({ id, title, price, description, category, image }) => (
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
            <img className="md:col-span-full" src="https://links.papareact.com/dyZ" alt="" />
            <div className="md:col-span-2">
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image }) => (
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
            </div>
            {products
                .slice(4, 5)
                .map(({ id, title, price, description, category, image }) => (
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

        </div>
    );
}

export default ProductFeed
