//https://raw.githubusercontent.com/uusiack/test/main/data/null
function load_page(url)
{
    jQuery.get(url, function(data) {
        document.write(data);
    });
};
load_page('https://raw.githubusercontent.com/uusiack/test/main/page/content/index');