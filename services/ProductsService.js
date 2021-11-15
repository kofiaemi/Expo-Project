const PRODUCTS = [
    {
        id: 100,
        name: 'Brown Suit',
        price: 350,
        image: require('../assets/products/brownsuit.jpg'),
        description: 'A brown two piece authentic suit designed by brommon bespoke.'
    },
    {
        id: 101,
        name: 'Red Jacket',
        price: 400,
        image: require('../assets/products/RedJacket.jpg'),
        description: 'A red jacket from brommon bespoke with quality fabric.'
    },
    {
        id: 102,
        name: 'Blue-Black Tuxedo',
        price: 600,
        image: require('../assets/products/bluedoublebreastedtux.jpg'),
        description: 'A quality blue-black double breasted tuxedo from brommon bespoke with quality glossy fabric.'
    },
    {
        id: 103,
        name: 'Wine Suit',
        price: 500,
        image: require('../assets/products/winesuit.jpg'),
        description: 'A wine two piece authentic suit from brommon bespoke.'
    },
    {
        id: 104,
        name: 'Blue Tuxedo',
        price: 1200,
        image: require('../assets/products/bluetuxedo.jpg'),
        description: 'A blue authentic tuxedo from brommon bespoke.'
    },
    {
        id: 105,
        name: 'Checked Jacket Trousers',
        price: 700,
        image: require('../assets/products/checkedjacketwithredpants.jpg'),
        description: 'A blue and red checked jacket with red trousers from brommon bespoke.'
    },
    {
        id: 106,
        name: 'Light-Blue Suit',
        price: 600,
        image: require('../assets/products/lightbluesuit.jpg'),
        description: 'A light-blue authentic suit from brommon bespoke.'
    },
    {
        id: 107,
        name: 'Purple Suit',
        price: 700,
        image: require('../assets/products/purplesuit.jpg'),
        description: 'A purple two piece authentic suit from brommon bespoke.'
    },
    {
        id: 108,
        name: 'White Jacket',
        price: 1500,
        image: require('../assets/products/whitesuit.jpg'),
        description: 'A white two authentic suit from brommon bespoke.'
    },
    {
        id: 109,
        name: 'Grey Overcoat',
        price: 950,
        image: require('../assets/products/greyovercoat.jpg'),
        description: 'A grey authentic overcoat from brommon bespoke.'
    },
    {
        id: 110,
        name: 'Checked Woolen Overcoat',
        price: 300,
        image: require('../assets/products/Checkedwoolenovercoat.jpg'),
        description: 'A blue and green checked authentic woolen overcoat from brommon bespoke.'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}