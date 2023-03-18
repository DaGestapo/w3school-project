let headerNavLinks = document.querySelectorAll('a[data-link]');
let headerNavBar = document.querySelector('.header__nav');

let articles = document.querySelectorAll('article');

let cheker = true;
articles.forEach( elm =>  {
    if( !(elm instanceof(HTMLElement)) ) {
        cheker = false;
    };
});

if(cheker) {
    headerNavBar?.addEventListener( 'click', goToElement);
}

headerNavLinks.forEach( link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});


function goToElement(event: Event){
    if( !(event.target instanceof(HTMLElement)) ) return;

    let target = event.target.closest('a[data-link]');
    if(!( target instanceof(HTMLElement) )) return;

    console.log(articles[0].getBoundingClientRect().top);
    switch (target.dataset.link) {
        case "home":
            window.scrollTo(0, 0);
            break;
        
        case "about":
            window.scrollTo( 0, articles[0].offsetTop - 70 );
            break;

        case "photos":
            window.scrollTo( 0, articles[1].offsetTop - 70 );
            break;

        case "contact":
            window.scrollTo( 0, articles[2].offsetTop - 70 );
            break;
    }
}