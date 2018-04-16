function initSearchUL(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                document.body.className = 'ok';
                var json = JSON.parse(request.responseText);
                json.items.forEach(function (item) {

                    var ul = document.getElementById("searchUL");

                    var s = '<li><a href="#">' + item.name + '</a></li>';
                    var temp = document.createElement('div');
                    temp.innerHTML = s;
                    var htmlTag = temp.firstChild;

                    ul.appendChild(htmlTag);
                });
            } else {
                console.log("Error while requesting url");
            }
        }
    };
    request.open("GET", url, true);
    request.send(null);
}

function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchUL");
    ul.innerHTML = '';
    if(filter) {
        initSearchUL("http://api.walmartlabs.com/v1/search?query=" + filter + "&format=json&apiKey=g22uh7v7uzfmbyvjd8m4z3xt");
    }
}