var perguntas = 
[
    /*0*/"Quando vocês começaram a ficar?",
    /*1*/"Já foram pegos no flaga dando uns amassos",
    /*2*/"Ele pediu permissão para o seu pai?",
    /*3*/"Perderam a virgindade juntos?",
    /*4*/"Qual seu maior sonho?",
    /*5*/"Um dia na praia ou no campo?",
    /*6*/"O que faria se ganhasse na mega sena?",
    /*7*/"Prefere cidade grande ou interior?",
    /*8*/"Comida preferido?",
    /*9*/"Qual sue tipo de música preferido?",
    /*10*/"Viajar de: carro, barco, avião ou trem?",
    /*11*/"Gostaria de ter filhos? Se sim, quantos?",
    /*12*/"Preferia fazer uma festa de casamento ou viajar por mais tempo?",
    /*13*/"Como você se vê daqui a 10 anos?",
    /*14*/"Qual seu filme preferido de todos os tempos e sua cena predileta dele?",
    /*15*/"Qual foi sua melhor decisão?",
    /*16*/"Qual foi a maior loucura que você cometeu por um amor?",
    /*17*/"Uma loucura que você fez por algum ídolo?",
    /*18*/"Se te perguntassem em quem você gostaria de renascer, a resposta seria…?",
    /*19*/"Sua música preferida de todos os tempos e o porquê?",
    /*20*/"Você pode pensar em algo que queria muito quando criança e que te negaram?"
];

function numAleatorio(){
    var num = Math.floor(Math.random() * 20);
    return num;
}

function comecar(){
    var nomeY = document.getElementById("nomeY").value;
    var nomeX = document.getElementById("nomeX").value;

    var perg = document.getElementById("pergunta");
    perg.innerHTML = perguntas[numAleatorio()];
    //alert(numAleatorio());
    //alert(perguntas[2]);
    //alert("ELE: "+nomeY+ "ELA: "+nomeX);
}

