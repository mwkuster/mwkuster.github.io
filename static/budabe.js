/* Define functions */

function highlight_category(category, topcategory) {
    $('#cat_' + topcategory).css(
	{
	    //'background-color' : '#F7B97F',
	    'color': 'white',
	    'font-weight' : 'bold'
	}
    );
    var links = $('#sidebar-cat_' + category).css(
	{
	    //'background-color' : '#F7B97F',
	    'color': 'white',
	    'font-weight' : 'bold'
	}
    );
    links.next('ul').css('font-weight', 'bold');
}

function _get_cat_id(elem) {
    var id = elem.attr('id');
    var cat_id = id.split("_")[1]; //structure is e.g. cat_1 or sidebar-cat_1
    return cat_id;
}

function register_handler() {
    $("a.category,a.subcategory").hover(
	function () {
	    var cat_id = _get_cat_id($(this));
	    $("#cat_" + cat_id).css('text-decoration', 'underline');
	    $("#sidebar-cat_" + cat_id).css('text-decoration', 'underline');
	},
	function () {
	    var cat_id = _get_cat_id($(this));
	    $("#cat_" + cat_id).css('text-decoration', 'none');
	    $("#sidebar-cat_" + cat_id).css('text-decoration', 'none');
	});
}

register_handler();
