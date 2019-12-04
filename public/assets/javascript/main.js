function domReady() {
    document.body.className += ' javascript';
    // code goes here
    
    const copyright = () => `© ${new Date().getFullYear()} Derek Hutton`;

    $("#copyright").html(copyright);

}
// Mozilla, Opera, Webkit
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        domReady();
    },
        false);
    // If IE event model is used
} else if (document.attachEvent) {
    // ensure firing before onload
    document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') {
            document.detachEvent('onreadystatechange', arguments.callee);
            domReady();
        }
    });
}