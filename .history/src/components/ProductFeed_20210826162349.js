
function ProductFeed({ products }) {
    return (
        <div>
            <h1>Products</h1>
            {products.map(({ id, title, price, description, category, image }) => (
                <Prod
            ))}
            {/* {console.log(products)} */}
        </div>
    );
}

export default ProductFeed
