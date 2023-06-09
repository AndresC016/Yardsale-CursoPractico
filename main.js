const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu');
const shoppingCartMenu = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-cart');
const cardsContainer = document.querySelector('.cards-container');
const productBuyDetail = document.querySelector('.product-buy-detail');
const productCloseIcon = document.querySelector('.product-close');

const productList = [];

navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
productCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isProductBuyDetailClosed = productBuyDetail.classList.contains('inactive');
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    }
    if (!isProductBuyDetailClosed) {
        productBuyDetail.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductBuyDetailClosed = productBuyDetail.classList.contains('inactive');
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    }
    
    closeProductDetail();

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductBuyDetailClosed = productBuyDetail.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductBuyDetailClosed) {
        productBuyDetail.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive');
}

function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    }

    productBuyDetail.classList.remove('inactive');
}

function closeProductDetail() {
    productBuyDetail.classList.add('inactive');
}

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Computador',
    price: 620,
    image: "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts(pdc) {
    for(product of pdc) {
        const productCard = document.createElement('div');
        const imgCard = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        const productInfoFigure = document.createElement('figure');
        const productIconCart = document.createElement('img');
        
        productCard.classList.add('product-card');
        imgCard.setAttribute('src', product.image);
        imgCard.addEventListener('click', openProductDetail);
        productInfo.classList.add('product-info');
        productIconCart.setAttribute('src',  './Assets/Icons/bt_add_to_cart.svg');
    
        productPrice.innerText = "$" + product.price;
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productIconCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);