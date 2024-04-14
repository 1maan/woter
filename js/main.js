function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
function removeCursorFromLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].style.cursor = 'none';
    }
}
if (isMobileDevice()) {
    removeCursorFromLinks();
}


