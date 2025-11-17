function gerarAvaliacoes(produto) {
    const nomes = ["Ana Clara","João Martins","Gabriel Souza","Mariana Lopes","Ricardo Alves","Beatriz Faria","Lucas Henrique","Carla Mendes","Fernanda Rocha","Thiago Duarte","Lívia Torres","Pedro Azevedo"];

    const frasesPos = ["Excelente compra!","Ótimo custo-benefício","Vale muito a pena","Superou minhas expectativas","Qualidade impressionante"];
    const frasesNeg = ["Não vale o preço","Decepcionante","Problemas constantes","Experiência ruim","Não recomendo"];
    const frasesNeut = ["É razoável","Cumpre o que promete","Nada demais","Funciona bem","Poderia ser melhor"];

    const comentariosPos = [
        `Comprei o ${produto} e estou surpreso com a qualidade.`,
        `O ${produto} me ajudou muito no dia a dia.`,
        `Estou usando o ${produto} diariamente e até agora sem problemas.`,
        `Gostei bastante! O ${produto} funciona melhor que outros que já testei.`,
        `O ${produto} tem uma qualidade muito boa.`
    ];
    const comentariosNeg = [
        `Infelizmente o ${produto} não entregou o que promete.`,
        `A qualidade do ${produto} deixou a desejar.`,
        `Não sei se tive azar, mas o ${produto} veio com problemas.`,
        `O desempenho do ${produto} ficou abaixo do esperado.`,
        `O ${produto} funcionou bem nos primeiros dias, mas depois travou.`
    ];
    const comentariosNeut = [
        `O ${produto} é ok, funciona normalmente.`,
        `É um produto mediano, cumpre o que promete.`,
        `Achei o ${produto} razoável.`,
        `Funciona direitinho, mas poderia ter qualidade melhor.`,
        `Nada demais, atende o básico.`
    ];

    let avaliacoes = [];

    for (let i = 0; i < 5; i++) {
        const nome = nomes[Math.floor(Math.random()*nomes.length)];
        const tipo = Math.random();
        let nota, frase, comentario, classeCard, classeAvatar;

        if(tipo<0.45){
            nota = Math.floor(Math.random()*2)+4;
            frase = frasesPos[Math.floor(Math.random()*frasesPos.length)];
            comentario = comentariosPos[Math.floor(Math.random()*comentariosPos.length)];
            classeCard="card-positiva";
            classeAvatar="avatar-positiva";
        } else if(tipo<0.75){
            nota = Math.floor(Math.random()*2)+1;
            frase = frasesNeg[Math.floor(Math.random()*frasesNeg.length)];
            comentario = comentariosNeg[Math.floor(Math.random()*comentariosNeg.length)];
            classeCard="card-negativa";
            classeAvatar="avatar-negativa";
        } else{
            nota=3;
            frase = frasesNeut[Math.floor(Math.random()*frasesNeut.length)];
            comentario = comentariosNeut[Math.floor(Math.random()*comentariosNeut.length)];
            classeCard="card-neutra";
            classeAvatar="avatar-neutra";
        }

        avaliacoes.push({nome,nota,frase,comentario,classeCard,classeAvatar});
    }
    return avaliacoes;
}

document.getElementById('buscarBtn').addEventListener('click', function(){
    const input = document.getElementById('produtoInput');
    const produtos = input.value.split(',').map(p=>p.trim()).filter(p=>p!=="");
    const resultadosDiv = document.getElementById('resultados');
    const loading = document.getElementById('loading');

    resultadosDiv.innerHTML="";
    if(produtos.length===0) return alert("Digite pelo menos um produto.");

    loading.style.display="block";

    setTimeout(()=>{
        loading.style.display="none";
        produtos.forEach(produto=>{
            const avaliacoes = gerarAvaliacoes(produto);
            avaliacoes.forEach(av=>{
                const card = document.createElement('div');
                card.className="card-avaliacao "+av.classeCard;
                card.innerHTML=`<div class="card-user"><div class="avatar ${av.classeAvatar}">${av.nome[0]}</div><h3>${av.nome}</h3></div><p><strong>${av.frase}</strong><br>${av.comentario}</p><div class="stars">${"⭐".repeat(av.nota)}</div>`;
                resultadosDiv.appendChild(card);
            });
        });
    }, 800);
});
