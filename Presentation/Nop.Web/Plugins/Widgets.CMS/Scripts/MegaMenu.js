jQuery(document).ready(function () {

    jQuery('li#CMSMegaMenu').hover(function () {
        jQuery('div', this).stop(true, true).fadeIn(300);
    }, function () {
        jQuery('div', this).stop(true, true).fadeOut(300);
    });
});