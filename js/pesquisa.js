function gerarAvaliacoes(produto) {
    const nomes = [
        "Ana Clara", "João Martins", "Gabriel Souza", "Mariana Lopes",
        "Ricardo Alves", "Beatriz Faria", "Lucas Henrique", "Carla Mendes",
        "Fernanda Rocha", "Thiago Duarte", "Lívia Torres", "Pedro Azevedo"
    ];

    // FRASES curtas realistas
    const frasesPos = [
        "Excelente compra!", "Ótimo custo-benefício", "Vale muito a pena",
        "Superou minhas expectativas", "Qualidade impressionante"
    ];
    const frasesNeg = [
        "Não vale o preço", "Decepcionante", "Problemas constantes",
        "Experiência ruim", "Não recomendo"
    ];
    const frasesNeut = [
        "É razoável", "Cumpre o que promete", "Nada demais",
        "Funciona bem", "Poderia ser melhor"
    ];

    // Comentários realistas, com variação natural
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

        // Decide tipo: positiva (45%), negativa (30%), neutra (25%)
        const tipo = Math.random();
        let nota, frase, comentario;

        if (tipo < 0.45) { 
            nota = Math.floor(Math.random() * 2) + 4; // 4–5
            frase = frasesPos[Math.floor(Math.random() * frasesPos.length)];
            comentario = comentariosPos[Math.floor(Math.random() * comentariosPos.length)];
        } else if (tipo < 0.75) { 
            nota = Math.floor(Math.random() * 2) + 1; // 1–2
            frase = frasesNeg[Math.floor(Math.random() * frasesNeg.length)];
            comentario = comentariosNeg[Math.floor(Math.random() * comentariosNeg.length)];
        } else { 
            nota = 3;
            frase = frasesNeut[Math.floor(Math.random() * frasesNeut.length)];
            comentario = comentariosNeut[Math.floor(Math.random() * comentariosNeut.length)];
        }

        avaliacoes.push({ nome, nota, frase, comentario });
    }

    return avaliacoes;
}
