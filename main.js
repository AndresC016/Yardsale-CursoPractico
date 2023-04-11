const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu');
const shoppingCartMenu = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-cart');

navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive');
}