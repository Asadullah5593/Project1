export const addToCart = (product) => {
    var storedProduct = JSON.parse(localStorage.getItem(`product-${product.product_id}`));
    if (!storedProduct) {
        window.localStorage.setItem(`product-${product.product_id}`, JSON.stringify({...product, "quantity": 1}))
    } else {
        var updatedProduct = {...storedProduct, "quantity": parseInt(storedProduct.quantity + 1)};
        window.localStorage.setItem(`product-${product.product_id}`, JSON.stringify(updatedProduct));
    }
}

export const removeFromCart = (product) => {
    var storedProduct = JSON.parse(localStorage.getItem(`product-${product.product_id}`));
    if (storedProduct) {
        var productCount = storedProduct.quantity;
        if (parseInt(productCount) === 1) {
            window.localStorage.removeItem(`product-${product.product_id}`);
        } else {
            var updatedProduct = {...storedProduct, "quantity": parseInt(storedProduct.quantity - 1)};
            window.localStorage.setItem(`product-${product.product_id}`, JSON.stringify(updatedProduct));
        }
    }
}

export const clearCart = () => {
    const localStore = Object.keys(localStorage);
    localStore.forEach((entry) => {
        if (entry.includes("product")) {
            localStorage.removeItem(entry)
        }
    });
}