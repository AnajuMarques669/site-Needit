// -----------------------------
// Geração de avaliações (Pesquisa)
// -----------------------------
function gerarAvaliacoes(produto) {
    const nomes = [
        "Ana Clara", "João Martins", "Gabriel Souza", "Mariana Lopes",
        "Ricardo Alves", "Beatriz Faria", "Lucas Henrique", "Carla Mendes",
        "Fernanda Rocha", "Thiago Duarte", "Lívia Torres", "Pedro Azevedo"
    ];

    const frasesPos = ["Excelente compra!", "Ótimo custo-benefício", "Vale muito a pena","Superou minhas expectativas","Qualidade impressionante"];
    const frasesNeg = ["Não vale o preço", "Decepcionante", "Problemas constantes","Experiência ruim","Não recomendo"];
    const frasesNeut = ["É razoável", "Cumpre o que promete", "Nada demais","Funciona bem","Poderia ser melhor"];

    const comentariosPos = [
        `Comprei o ${produto} faz algumas semanas e estou realmente surpreso com a qualidade. Não esperava que fosse tão bom pelo preço.`,
        `O ${produto} me ajudou muito no dia a dia. Achei resistente, bem acabado e com desempenho excelente.`,
        `Estou usando o ${produto} diariamente e até agora não tive nenhum problema. Atendeu totalmente minhas expectativas.`,
        `Gostei bastante! O ${produto} funciona melhor do que outros que já testei. Faria a compra novamente com certeza.`,
        `O ${produto} tem uma qualidade muito boa. Chegou bem embalado e tudo funcionando perfeitamente.`
    ];

    const comentariosNeg = [
        `Infelizmente o ${produto} não entregou o que promete. Começou a apresentar defeitos poucos dias depois do uso.`,
        `A qualidade do ${produto} deixou muito a desejar. O material parece frágil e me arrependo da compra.`,
        `Não sei se tive azar, mas o ${produto} veio com problemas desde o início. Não compraria novamente.`,
        `O desempenho do ${produto} ficou bem abaixo do esperado. Pelo valor, achei que seria bem melhor.`,
        `O ${produto} funcionou bem nos primeiros dias, mas depois começou a travar e perder eficiência. Fiquei decepcionado.`
    ];

    const comentariosNeut = [
        `O ${produto} é ok. Funciona normalmente, mas nada que impressione. Serve para quem não tem grandes exigências.`,
        `É um produto mediano. O ${produto} cumpre o que promete, mas não entrega nada além disso.`,
        `Achei o ${produto} razoável. Pelo preço, até compensa, mas não espere muita coisa.`,
        `O ${produto} funciona direitinho, mas poderia ter uma qualidade melhor. Ao menos cumpre seu papel.`,
        `Nada demais. O ${produto} atende o básico e pode ser suficiente dependendo do seu uso.`
    ];

    let avaliacoes = [];

    for (let i = 0; i < 5; i++) {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const tipo = Math.random();
        let nota, frase, comentario, classeCard, classeAvatar;

        if (tipo < 0.45) { 
            nota = Math.floor(Math.random() * 2) + 4;
            frase = frasesPos[Math.floor(Math.random() * frasesPos.length)];
            comentario = comentariosPos[Math.floor(Math.random() * comentariosPos.length)];
            classeCard = "card-positiva";
            classeAvatar = "avatar-positiva";
        } else if (tipo < 0.75) { 
            nota = Math.floor(Math.random() * 2) + 1;
            frase = frasesNeg[Math.floor(Math.random() * frasesNeg.length)];
            comentario = comentariosNeg[Math.floor(Math.random() * comentariosNeg.length)];
            classeCard = "card-negativa";
            classeAvatar = "avatar-negativa";
        } else { 
            nota = 3;
            frase = frasesNeut[Math.floor(Math.random() * frasesNeut.length)];
            comentario = comentariosNeut[Math.floor(Math.random() * comentariosNeut.length)];
            classeCard = "card-neutra";
            classeAvatar = "avatar-neutra";
        }

        avaliacoes.push({ nome, nota, frase, comentario, classeCard, classeAvatar });
    }

    return avaliacoes;
}

// Pesquisa - gerar avaliações
document.getElementById("buscarBtn")?.addEventListener("click", () => {
    const input = document.getElementById("produtoInput").value.trim();
    const resultados = document.getElementById("resultados");
    const loading = document.getElementById("loading");

    if(!input) return alert("Digite pelo menos um produto!");

    resultados.innerHTML = "";
    loading.style.display = "block";

    const produtos = input.split(",").map(p => p.trim()).filter(p => p);

    setTimeout(() => {
        produtos.forEach(produto => {
            const avaliacoes = gerarAvaliacoes(produto);
            avaliacoes.forEach(av => {
                const card = document.createElement("div");
                card.className = "card-avaliacao " + av.classeCard;
                card.innerHTML = `
                    <div class="card-user">
                        <div class="avatar ${av.classeAvatar}">${av.nome.charAt(0)}</div>
                        <strong>${av.nome}</strong>
                    </div>
                    <h3>${av.frase}</h3>
                    <div class="stars">${'⭐'.repeat(av.nota)}</div>
                    <p>${av.comentario}</p>
                `;
                resultados.appendChild(card);
            });
        });
        loading.style.display = "none";
    }, 500);
});

// -----------------------------
// Cadastro e Login Simulados
// -----------------------------
document.getElementById('cadastroForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    alert("Cadastro simulado: " + nome + " - " + email);
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    alert("Login simulado: " + email);
    window.location.href = 'conta.html';
});

// -----------------------------
// Página de Análise - IA Loveable
// -----------------------------
const videoForm = document.getElementById('videoForm');
const videoInput = document.getElementById('videoLink');
const iaFrame = document.getElementById('iaFrame');
const questionario = document.getElementById('questionario');
const submitQuestionario = document.getElementById('submitQuestionario');

videoForm?.addEventListener('submit', function(e){
    e.preventDefault();
    const videoURL = encodeURIComponent(videoInput.value.trim());
    if(videoURL){
        iaFrame.src = `https://video-shopper-ai.lovable.app/?video=${videoURL}`;
        questionario.style.display = 'block';
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }
});

submitQuestionario?.addEventListener('click', function(){
    const escolha = document.querySelector('input[name="reflexao"]:checked');
    if(escolha){
        alert("Obrigado! Sua resposta foi registrada: " + escolha.value);
        questionario.style.display = 'none';
        videoInput.value = '';
    } else {
        alert("Por favor, selecione uma opção.");
    }
});

// -----------------------------
// Menu ativo
// -----------------------------
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

// -----------------------------
// Animação inicial da Home
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.banner, .card, .form-container');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.transition = 'opacity 1s ease, transform 1s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        });
    }, 300);
});
