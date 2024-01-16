const getPriceOfProduct = (product) => (product.isDiscounted ? product.dPrice : product.price);

const sortProducts = (products, order) => {
    switch (order) {
        case 0:
            return products;
        case 1:
            return [...products].sort((a, b) => getPriceOfProduct(a) - getPriceOfProduct(b));
        case 2:
            return [...products].sort((a, b) => getPriceOfProduct(b) - getPriceOfProduct(a));
        default:
            return products;
    }
};

export { getPriceOfProduct, sortProducts };
