  // Função para rolar suavemente para a seção desejada
  function scrollPara(elemento) {
    document.querySelector(elemento).scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Seleciona todos os links do navbar e adiciona um evento de clique
  document.querySelectorAll('.navbarFilho a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Previne o comportamento padrão de clicar no link

      const destino = this.getAttribute('href'); // Obtém o valor do atributo href

      scrollPara(destino); // Chama a função scrollPara com o destino
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  containers.forEach(function (container) {
    // Adiciona a classe "show" após um pequeno atraso
    setTimeout(function () {
      container.classList.add("show");
    }, 5); // Ajuste esse valor para alterar o tempo de atraso
  });
});
