let headerNavbar = document.querySelectorAll('a[data_link]');

headerNavbar.forEach( link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});