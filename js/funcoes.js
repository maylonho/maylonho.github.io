function redimensionar(){
    var logoNav = document.getElementsByClassName('logo-nav')[0];
    var contNav = document.getElementsByClassName('conteudoNav')[0];
    var imgLogo = document.getElementById("logo-nav");
    var container = document.getElementsByClassName('container')[0];
    var itemPort = document.querySelectorAll('div.itemPortfolio');
    var body = document.querySelector('body');
    var disBody = body.offsetWidth;
    if (disBody < 700) {
        container.classList.remove("tamContainerPc");
        container.classList.add("tamContainerMobile");
        logoNav.classList.remove("paddingL10");
        contNav.classList.remove("paddingR10");
        for (let i = 0; i < itemPort.length; i++) {
            itemPort[i].classList.add("itemPortMobile");
            itemPort[i].classList.remove("itemPortPc");
        }
    }else{
        container.classList.add("tamContainerPc");
        container.classList.remove("tamContainerMobile");
        logoNav.classList.add("paddingL10");
        contNav.classList.add("paddingR10");
        for (let i = 0; i < itemPort.length; i++) {
            itemPort[i].classList.remove("itemPortMobile");
            itemPort[i].classList.add("itemPortPc");
        }

    }

    if (disBody < 550){
        imgLogo.style.display = 'none';
    }else{
        imgLogo.style.display = 'initial';
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
    //redimensionar();
}

window.onresize = function(){
    //redimensionar();
}

window.onscroll = function(){
    animMenu();
}
