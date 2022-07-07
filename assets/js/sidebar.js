
const openNav = () => {
    document.querySelector('.open-menu').style.display = 'none';
    document.querySelector('.close-menu').style.display = 'inline';
    document.querySelector('.sidebar-menu').style.transform = 'translateX(0)';
}

const closeNav = () => {
    document.querySelector('.open-menu').style.display = 'inline';
    document.querySelector('.close-menu').style.display = 'none';
    document.querySelector('.sidebar-menu').style.transform = 'translateX(-100%)';
}