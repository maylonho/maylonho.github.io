function redimensionar(){
    var imgLogo = document.getElementById("logo-nav");
    var divLogo = document.getElementById("logo-div");
    var container = document.getElementsByClassName('container')[0];
    var itemPort = document.querySelectorAll('div.itemPortfolio');
    var distanciaLogo = divLogo.offsetLeft;
    if (distanciaLogo < 60) {
        imgLogo.style.display = 'none';
        container.classList.remove("tamContainerPc");
        container.classList.add("tamContainerMobile");
        for (let i = 0; i < itemPort.length; i++) {
            itemPort[i].classList.add("itemPortMobile");
            itemPort[i].classList.remove("itemPortPc");
        }
    }else if (distanciaLogo > 60){
        imgLogo.style.display = 'initial';
        container.classList.add("tamContainerPc");
        container.classList.remove("tamContainerMobile");
        for (let i = 0; i < itemPort.length; i++) {
            itemPort[i].classList.remove("itemPortMobile");
            itemPort[i].classList.add("itemPortPc");
        }

    }
}

function animMenu(){
    var menu = document.getElementsByClassName('menu')[0];
    var container = document.getElementsByClassName('container')[0];
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
}

window.onload = function() {
    redimensionar();
}

window.onresize = function(){
    redimensionar();
}

window.onscroll = function(){
    animMenu();
}
