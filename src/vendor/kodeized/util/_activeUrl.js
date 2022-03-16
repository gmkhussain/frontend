function activeUrl( navSelector = '.link' ) {
    var current = location.pathname;
    if (current === "") return;
    var menuItems = document.querySelectorAll( navSelector );
    for (var i = 0, len = menuItems.length; i < len; i++) {
        // console.log( menuItems[i].getAttribute("href").indexOf(current) )
        if ( menuItems[i].getAttribute("href")?.indexOf(current) !== -1 ) {
             menuItems[i].className += " is-active";
        }
    }
};

export default activeUrl;