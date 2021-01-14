window.onload = function(e) {
    var menu = document.getElementsByClassName('menu')[0];
    var container = document.getElementsByClassName('container')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
            container.style.paddingTop = '50px';
            menu.classList.add("menuAnimDown");
            menu.classList.remove("menuAnimUp");
        }else if (document.body.scrollTop < 500 ||document.documentElement.scrollTop < 500) {
            if (document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100) {
            container.style.paddingTop = '50px';
            menu.classList.add("menuAnimUp");
            menu.classList.remove("menuAnimDown");
            }else {
                container.style.paddingTop = '0px';
                menu.classList.remove("menuAnimUp");
            }
        }
    });
}