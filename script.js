/* ==========================================================================
   1. BOTÃO "VOLTAR AO TOPO"
   ========================================================================== */

// Seleciona o botão no HTML usando o ID que criamos
const btnTopo = document.getElementById("btnTopo");

// Esconde o botão logo que a página carrega
btnTopo.style.display = "none";

// Fica "escutando" a rolagem da página
window.addEventListener("scroll", function() {
    // Se a página rolar mais de 300 pixels para baixo, mostra o botão
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        // Se estiver no topo, esconde o botão
        btnTopo.style.display = "none";
    }
});

// Quando o botão for clicado, executa esta função
btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0, // Vai para a posição zero (topo absoluto)
        behavior: "smooth" // Faz o movimento de subida ser suave
    });
});

/* ==========================================================================
   2. ROLAGEM SUAVE DOS LINKS DO MENU
   ========================================================================== */

// Seleciona todos os links do menu de navegação que começam com "#"
const linksMenu = document.querySelectorAll('nav ul li a[href^="#"]');

// Para cada link encontrado, adicionamos uma ação
linksMenu.forEach(link => {
    link.addEventListener("click", function(evento) {
        // Impede o comportamento padrão do HTML de "pular" direto para a seção
        evento.preventDefault();
        
        // Pega o valor do href (ex: "#tecnologias")
        const idDaSecao = this.getAttribute("href");
        
        // Encontra a seção correspondente no HTML
        const secaoDestino = document.querySelector(idDaSecao);
        
        // Faz a rolagem suave até a seção encontrada
        secaoDestino.scrollIntoView({
            behavior: "smooth",
            block: "start" // Alinha o topo da seção com o topo da tela
        });
    });
});