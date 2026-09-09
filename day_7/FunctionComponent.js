const root = ReactDOM.createRoot(document.getElementById('root'));



const GetProductData = async () => {

    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();

    console.log(data.products);

    return data.products;
};



const HeaderComponent = () => {
    return (
        <div className="header">
            <h1>E-Commerce Webpage</h1>
        </div>
    );
};



const ProductComponent = ({ products }) => {
    return (
        <div className="products">

            {products.map((product) => (
                <div className="product" key={product.id}>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <h3>{product.title}</h3>

                    <p>${product.price}</p>

                </div>
            ))}

        </div>
    );
};



const FooterComponent = () => {
    return (
        <div className="footer">
            <p>© 2026 E-Commerce Webpage. All Rights Reserved.</p>
        </div>
    );
};



const appRender = async () => {

    const products = await GetProductData();

    const reactElement = (
        <>
            <HeaderComponent />

            <ProductComponent products={products} />

            <FooterComponent />
        </>
    );

    root.render(reactElement);
};

appRender();