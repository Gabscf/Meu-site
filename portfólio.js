function menuShow(){
    let menuMobile = document.querySelector('.mobileMenu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menuIcon').src = "icomoon (3)/PNG/menu.png"
    } 
    else{menuMobile.classList.add('open');
        document.querySelector('.menuIcon').src = "icomoon (3)/PNG/x.png"
    }
}

