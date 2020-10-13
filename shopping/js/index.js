window.addEventListener('load', function () {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[2];
    var btns = focus.children[3].children;
    var width = focus.offsetWidth;
    var number = 0;

    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        li.style.cursor = 'pointer';
        li.setAttribute('data-index', i);
        if (i == 0) {
            li.className = 'current';
        }
        li.addEventListener('click', function () {
            for (var i = 0; i < btns.length; i++) {
                btns[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('data-index');
            number = index;
            console.log(width);
            console.log(index);
            animate(ul, -index * width);
        })
        focus.children[3].appendChild(li);
    }

    var img = ul.children[0].cloneNode(true);
    ul.appendChild(img);

    var timer = setInterval(function () {
        focus.children[1].click();
    }, 3000)

    focus.addEventListener('mouseover', function () {
        focus.children[0].style.display = 'block';
        focus.children[1].style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        focus.children[0].style.display = 'none';
        focus.children[1].style.display = 'none';
        timer = setInterval(function () {
            focus.children[1].click();
        }, 3000)
    })


    focus.children[0].addEventListener('click', function () {
        if (number > 0) {
            number--;
            console.log(number);
            animate(ul, -number * width);
        }
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = '';
        }
        btns[number].className = 'current';

    })
    focus.children[1].addEventListener('click', function () {
        number++;
        if (number == ul.children.length - 1) {
            number = 0;
        }
        animate(ul, -number * width, function () {
            if (number == ul.children.length - 1) {
                ul.style.left = 0;
            }
        })
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = '';
        }
        btns[number].className = 'current';
    })


})
