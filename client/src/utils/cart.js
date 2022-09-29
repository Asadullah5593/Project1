function addToCart(productId) {
    var productCount = localStorage.getItem(productId);
    if (!productCount) {
        window.localStorage.setItem(productId, 1)
    } else {
        window.localStorage.setItem(productId, parseInt(productCount) + 1);
    }
}

function removeProduct(productId) {
    var productCount = localStorage.getItem(productId);
    if (productCount) {
        if (parseInt(productCount) === 1) {
            window.localStorage.removeItem(productId);
        } else {
            window.localStorage.setItem(productId, parseInt(productCount) - 1);
        }
    }
}

module.exports = {addToCart, removeProduct}