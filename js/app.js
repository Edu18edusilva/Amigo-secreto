let amigos = [];

function adicionar() {
    //pegar o nome do amigo e colocar dentro de um array
    let nomeDoAmigo = document.getElementById ('nome-amigo').value;
    //Para deixarmos uma palavra toda em letra maiúscula em um array, usamos o .toUpperCase()!
    nomeDoAmigo = nomeDoAmigo.toUpperCase();
    if (nomeDoAmigo == '') {
        alert ('Informe o nome do amigo!');
        //Queremos parar o código aqui, iremos usar o "return". Poderíamos usar o "else" também!
        return;
    };

    if (amigos.includes(nomeDoAmigo)) {
        //Queremos verificar se o nome já está adicionado neste array!
        alert ('Informe o sobrenome para que não haja nomes iguais!');
        return;
    };

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
    //Para descobrirmos o valor total de um array, usamos o .length!
    if (amigos.length < 4) {
        alert ('Adicione pelo menos 4 amigos!');
        return;
    }

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