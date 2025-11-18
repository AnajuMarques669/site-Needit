// Cadastro
document.getElementById('cadastroForm')?.addEventListener('submit', async function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    alert("Cadastro simulado: " + nome + " - " + email);
    window.location.href = 'login.html';
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', async function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    alert("Login simulado: " + email);
    window.location.href = 'conta.html';
});

// Análise de vídeo e questionário
const form = document.getElementById('videoForm');
const input = document.getElementById('videoLink');
const iframe = document.getElementById('iaFrame');
const questionario = document.getElementById('questionario');
const submitQ = document.getElementById('submitQuestionario');

form?.addEventListener('submit', function(e){
    e.preventDefault();
    const videoURL = encodeURIComponent(input.value.trim());
    if(videoURL){
        iframe.src = `https://video-shopper-ai.lovable.app/?video=${videoURL}`;
        questionario.style.display = 'block';
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }
});

submitQ?.addEventListener('click', function(){
    const escolha = document.querySelector('input[name="reflexao"]:checked');
    if(escolha){
        alert("Obrigado! Sua resposta foi registrada: " + escolha.value);
        questionario.style.display = 'none';
        input.value = '';
    } else {
        alert("Por favor, selecione uma opção.");
    }
    // Ativar o link do menu atual
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

// Banner e cards com fade-in
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

// Análise e questionário
const form = document.getElementById('videoForm');
const questionario = document.getElementById('questionario');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        questionario.style.display = 'block';
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

if (document.getElementById('finalizar')) {
    document.getElementById('finalizar').addEventListener('click', () => {
        alert("Reflexão concluída! Continue consumindo com consciência. 💡");
        questionario.style.display = 'none';
    });
}

});

