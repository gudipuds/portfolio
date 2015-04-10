//= require_tree .

var APP = {

    /**
     * Init Function
     */
    init: function() {
        APP.menu();
        APP.collapsible();
    },
    /**
     * menu Function - contains events related to menu for mobile/desktop.
     */
    menu: function() {
        //On mobile MENU and BACK clicks
        $('.menu-link,.back-link').on('click', function() {
            $('.main section,.sub-menu').hide(); //hide body content and sub links.
            $('.menu,.mobile-link,.sub-back-link,.back-link').show(); //show menu.
        });
        //On mobile BACK link at second level.
        $('.sub-back-link').on('click', function() {
            $('.main section,.mobile-link,.sub-menu').hide();
            $('.menu,.back-link').show();
            $('.menu .sub-menu:eq(' + $(this).attr('list_index') + ')').show();
        });
        //On mobile menu specific link.
        $('.mobile-link').on('click', function() {
            $(this).parent().find('.sub-menu').show();
            $('.mobile-link,.sub-back-link').hide();
        });
    },
    /**
     * Collapsible sections (on Interests page)
     */
    collapsible: function() {
        $('.collapsible').addClass('collapsed').children('hgroup').click(function() {
            $(this).closest('.collapsible').children('div').stop().slideToggle().parent().toggleClass('collapsed');
        });
    }
};

$(document).ready(function() {
    APP.init();
});