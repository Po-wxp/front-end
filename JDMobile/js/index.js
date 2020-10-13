window.addEventListener("load", function () {
    var app = document.querySelector(".app");
    var ul = app.querySelector('ul');
    ul.children[0].style.cursor = 'pointer';
    ul.children[0].addEventListener("click", function () {
        app.style.display = 'none';
    })

    window.addEventListener('scroll', function () {
        var searchWrap = document.querySelector('.search-wrap');
        console.log(pageYOffset);

        if (pageYOffset > 0) {
            searchWrap.style.top = 0;
        } else {
            searchWrap.style.top = null;
        }

    })
})
