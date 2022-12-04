//---------- headerFunctions

// Function for seting active class on header link
export const setActiveHeaderLink = (links) => {
    const active_page = window.location.pathname;

    links.forEach(link => {
        if (link.href.includes(active_page)) {
            link.classList.remove('link-header--bg-green-tr');
            link.classList.add('link-header--active');
        }
        else {
            link.classList.remove('link-header--active');
        }
    })
}

// Function for setting hamburger and navigation view
export const setHamburgerAndNavView = (hamburger_view, set_hamburger_view, set_nav_view) => {
    if (hamburger_view === '') {
        set_hamburger_view('btn-hamburger--close');
        set_nav_view('');
    }
    else {
        set_hamburger_view('');
        set_nav_view('header__center--hide');
    }
}