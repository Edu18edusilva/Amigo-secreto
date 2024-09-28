let amigos = [];

function adicionar() {
    //pegar o nome do amigo e colocar dentro de um array
    let nomeDoAmigo = document.getElementById ('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    amigos.push (nomeDoAmigo);
    if (lista.textContent == '') {
        lista.textContent = nomeDoAmigo;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeDoAmigo;
    };
    console.log(amigos);
    document.getElementById ('nome-amigo').value = '';
};

function sortear() {
    //escrever um código que embaralha esse array, algoritmo de Fisher-Yates
    embaralhar(amigos);
    console.log(amigos);
    let listaSorteio = document.getElementById ('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            //<br> é para quebrar uma linha
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        };
    };
};

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    };
};

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById ('lista-sorteio').innerHTML = '';
    amigos = [];
};