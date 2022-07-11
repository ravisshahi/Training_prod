var cart = [
    {
        productId: 1,
        brand: "Redmi",
        Price: 13450,
        qty: 3,
    },
    {
        productId: 1,
        brand: "Redmi",
        Price: 13450,
        qty: 3,
    },
    {
        productId: 1,
        brand: "Redmi",
        Price: 13450,
        qty: 3,
    },
    {
        productId: 1,
        brand: "Redmi",
        Price: 13450,
        qty: 3,
    },
]

var total = 0;
function getCartTotal(data) {
    for (product of data) {
        var itotal = 0;
        itotal = product.price * product.qty;
        console.log("quantity=", product.qty, "total amount", itotal);
        total += product.price * product.qty;
    }
    console.log("total amouny, total");
    return total;
}
getCartTotal(cart)