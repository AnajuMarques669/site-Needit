// ----- HOME / PESQUISA -----
function gerarAvaliacoes(produto) {
    const nomes = ["Ana Clara", "João Martins", "Gabriel Souza", "Mariana Lopes", "Ricardo Alves", "Beatriz Faria", "Lucas Henrique", "Carla Mendes"];
    const frasesPos = ["Excelente compra!", "Ótimo custo-benefício", "Vale muito a pena", "Superou minhas expectativas", "Qualidade impressionante"];
    const frasesNeg = ["Não vale o preço", "Decepcionante", "Problemas constantes", "Experiência ruim", "Não recomendo"];
    const frasesNeut = ["É razoável", "Cumpre o que promete", "Nada demais", "Funciona bem", "Poderia ser melhor"];

    const comentariosPos = [
        `Comprei o ${produto} e estou surpreso com a qualidade. Recomendo!`,
        `O ${produto} me ajudou no dia a dia, resistente e bem acabado.`,
        `Usando diariamente e sem problemas, totalmente satisfeito.`,
        `Gostei bastante! O ${produto} funciona melhor que outros similares.`,
        `Chegou bem embalado e tudo funcionando perfeitamente.`
    ];

    const comentariosNeg = [
        `O ${produto} não entregou o que prometia. Defeitos logo no início.`,
        `Material frágil e desempenho abaixo do esperado.`,
        `Veio com problemas desde o início. Não compraria novamente.`,
        `Desempenho ruim pelo preço.`,
        `Funcionou nos primeiros dias, depois começou a travar.`
    ];

    const comentariosNeut = [
        `O ${produto} é ok. Cumpre o básico.`,
        `Produto mediano, atende sem impressionar.`,
        `Razoável pelo preço, mas não surpreende.`,
        `Funciona bem, mas poderia ter qualidade melhor.`,
        `Atende o essencial, sem mais.`
    ];

    let avaliacoes = [];

    for (let i = 0; i < 5; i++) {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const tipo = Math.random();
        let nota, frase, comentario;

        if(tipo < 0.45) {
            nota = Math.floor(Math.random() * 2) + 4;
            frase = frasesPos[Math.floor(Math.random() * frasesPos.length)];
            comentario = comentariosPos[Math.floor(Math.random() * comentariosPos.length)];
        } else if(tipo < 0.75) {
            nota = Math.floor(Math.random() * 2) + 1;
            frase = frasesNeg[Math.floor(Math.random() * frasesNeg.length)];
            comentario = comentariosNeg[Math.floor(Math.random() * comentariosNeg.length)];
        } else {
            nota = 3;
            frase = frasesNeut[Math.floor(Math.random() * frasesNeut.length)];
            comentario = comentariosNeut[Math.floor(Math.random() * comentariosNeut.length)];
        }

        avaliacoes.push({nome, nota, frase, comentario});
    }

    return avaliacoes;
}

// ----- PESQUISA -----
document.getElementById('buscarBtn')?.addEventListener('click', () => {
    const produtos = document.getElementById('produtoInput').value.split(',').map(p => p.trim()).filter(p => p);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';
    if(produtos.length === 0) return alert("Digite ao menos um produto.");

    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        produtos.forEach(produto => {
            const avaliacoes = gerarAvaliacoes(produto);
            const prodDiv = document.createElement('div');
            prodDiv.classList.add('produto-avaliacoes');
            prodDiv.innerHTML = `<h3>${produto}</h3>` + avaliacoes.map(a => `
                <div class="avaliacao-card">
                    <strong>${a.nome}</strong> - Nota: ${a.nota}/5
                    <p><em>${a.frase}</em></p>
                    <p>${a.comentario}</p>
                </div>
            `).join('');
            resultadosDiv.appendChild(prodDiv);
        });
    }, 1000);
});

// ----- IA (analise.html) -----
const form = document.getElementById('videoForm');
const input = document.getElementById('videoLink');
const iframe = document.getElementById('iaFrame');
const questionario = document.getElementById('questionario');

form?.addEventListener('submit', function(e){
    e.preventDefault();
    const videoURL = encodeURIComponent(input.value.trim());
    if(videoURL){
        iframe.src = `https://video-shopper-ai.lovable.app/?video=${videoURL}`;
        questionario.style.display = 'block';
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }
});

document.getElementById('submitQuestionario')?.addEventListener('click', () => {
    const escolha = document.querySelector('input[name="reflexao"]:checked');
    if(escolha){
        alert("Obrigado! Sua resposta foi registrada: " + escolha.value);
        questionario.style.display = 'none';
        input.value = '';
    } else {
        alert("Por favor, selecione uma opção.");
    }
});
