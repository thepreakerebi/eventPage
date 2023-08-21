const openMenu = () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navLinks = document.querySelector('#nav-links');
    let mainIcon = menuIcon.firstElementChild;
    
    let imgSource = mainIcon.getAttribute('src');

    if (imgSource === './assets/hamburger.svg') {
        mainIcon.setAttribute('src', './assets/close.svg');
        navLinks.style.display = 'block';
    } else {
        mainIcon.setAttribute('src', './assets/hamburger.svg');
        navLinks.style.display = 'none';
    }

}
