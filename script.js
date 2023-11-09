document.querySelector('.pngwing-4-icon').addEventListener('click', function() {
  var link = this.getAttribute('data-link');
  if (link) {
    window.location.href = link;
  }
});

document.getElementById('ofertas-do-dia').addEventListener('click', function() {
  window.location.href = 'https://www.amazon.com.br/deals?ref_=nav_cs_gb';
});

document.getElementById('cartoes').addEventListener('click', function() {
  window.location.href = 'https://www.amazon.com.br/cobrandcard/product/B0BJSHJK1H/';
});

document.getElementById('cadastre-se').addEventListener('click', function() {
  window.location.href = 'https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=3600&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=pt_BR&pageId=amzn_psr_desktop_br2&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fspr%2Freturns&prevRID=N8TEKT1G8AC9HVX8TCDT&openid.assoc_handle=amzn_psr_desktop_br2&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0';
});

document.getElementById('login-button').addEventListener('click', function() {
  window.location.href = 'https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fspr%2Freturns&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_br2&openid.mode=checkid_setup&language=pt_BR&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0';
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.getElementById('image-container');
  const btnAnterior = document.getElementById('prev-button');
  const btnProximo = document.getElementById('next-button');
  const sliders = document.querySelectorAll('.slider');

  let slideAtual = 0;

  function ocultarSliders() {
    sliders.forEach(item => item.classList.remove('on'))
  }

  function exibirSlider() {
    sliders[slideAtual].classList.add('on')
  }

  function proximoSlider() {
    ocultarSliders()
    if (slideAtual === sliders.length - 1) {
      slideAtual = 0
    } else {
      slideAtual++
    }
    exibirSlider()
  }

  function anteriorSlider() {
    ocultarSliders()
    if (slideAtual === 0) {
      slideAtual = sliders.length - 1
    } else {
      slideAtual--
    }
    exibirSlider()
  }

  btnProximo.addEventListener('click', proximoSlider);
  btnAnterior.addEventListener('click', anteriorSlider);

  function autoSlide() {
    var slides = document.querySelectorAll('.slider');
    var slideAtual = Array.from(slides).findIndex(function (slide) {
      return slide.classList.contains('on');
    });
    slides[slideAtual].classList.remove('on');
    var proximoSlide = (slideAtual + 1) % slides.length;
    slides[proximoSlide].classList.add('on');
  }

  setInterval(autoSlide, 5000);

  // Adicionar evento de clique ao contêiner de sliders
  sliderContainer.addEventListener('click', function (event) {
    // Verificar se o clique ocorreu dentro de uma imagem
    if (event.target.classList.contains('slider')) {
      // Obter o link específico da imagem clicada
      var linkDaImagem = event.target.getAttribute('data-link');
      // Verificar se o link é válido antes de redirecionar
      if (linkDaImagem) {
        window.location.href = linkDaImagem;
      }
    }
  });
});




window.addEventListener('DOMContentLoaded', (event) => {
  const imagens = document.querySelectorAll('.captura-de-tela-2023-10-13-095-parent img');

  imagens.forEach(imagem => {
      imagem.addEventListener('click', function() {
          const link = imagem.getAttribute('data-link');
          if (link) {
              window.location.href = link;
          }
      });
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyDs7H3bGotLFSg4bCXEPuOF9ZSHlGKmmtA",
  authDomain: "fir-80818.firebaseapp.com",
  databaseURL: "https://fir-80818-default-rtdb.firebaseio.com",
  projectId: "fir-80818",
  storageBucket: "fir-80818.appspot.com",
  messagingSenderId: "478628254720",
  appId: "1:478628254720:web:d112084e6ce27b31cbf4e5",
  measurementId: "G-10TK07TEZS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const pesquisasRef = db.ref('pesquisas');

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('autocomplete-suggestions');

searchInput.addEventListener('input', function () {
  const term = searchInput.value.toLowerCase();
  exibirSugestoes(term);
});

searchInput.addEventListener('focus', function () {
  const term = searchInput.value.toLowerCase();
  exibirSugestoes(term);
});

function exibirSugestoes(term) {
  // Simulando sugestões (substitua pelo seu código Firebase)
  const sugestoes = [
    "Acessórios para Casa",
    "Acessórios Tech",
    "Alimentos e Bebidas",
    "Amazon Devices",
    "Ar Condicionado",
    "Artes e Artesanato",
    "Automotivo",
    "Bebês e Mamães",
    "Beleza e Cuidado Pessoal",
    "Bebidas",
    "Brinquedos e Jogos",
    "Café e Chá",
    "Camping e Aventura",
    "Calçados",
    "Calçados Esportivos",
    "Carros e Motos",
    "Casa e Cozinha",
    "Computadores",
    "Cuidados com os Olhos",
    "Decoração de Interiores",
    "Eletrodomésticos",
    "Eletrônicos",
    "Eletrônicos para Carro",
    "Eletrônicos para Casa",
    "Esportes e Atividades ao Ar Livre",
    "Filmes e TV",
    "Ferramentas e Construção",
    "Fones de Ouvido",
    "Fones de Ouvido Sem Fio",
    "Fotografia",
    "Gadgets Inovadores",
    "Instrumentos Musicais",
    "Jardinagem",
    "Jogos",
    "Livros",
    "Livros Técnicos",
    "Maquiagem e Cosméticos",
    "Materiais de Limpeza",
    "Moda Feminina",
    "Moda Infantil",
    "Moda Íntima",
    "Moda Masculina",
    "Moda Plus Size",
    "Móveis",
    "Móveis para Jardim",
    "Ofertas do Dia",
    "Perfumes e Fragrâncias",
    "Papelaria e Escritório",
    "Pet Shop",
    "Produtos de Luxo",
    "Produtos de Segurança",
    "Produtos de Tecnologia",
    "Produtos Orgânicos",
    "Produtos para Animais de Estimação",
    "Produtos para Cabelo",
    "Produtos para Cozinha",
    "Produtos para Dormir",
    "Produtos para o Banheiro",
    "Produtos para o Inverno",
    "Produtos para o Outono",
    "Produtos para o Verão",
    "Produtos para a Primavera",
    "Produtos Sustentáveis",
    "Relógios",
    "Roupas",
    "Saúde e Cuidados com o Corpo",
    "Smartphones",
    "Smartwatches",
    "Televisões",
    "Viagem e Aventura",
    "Vestuário Casual",
    "Vestuário Esportivo",
    "Sapatos",
    "Segurança e Proteção",
    "Suplementos Alimentares",
    "Tênis",
    "Utensílios de Cozinha",
    "Viagem e Aventura",
    "Vinhos e Bebidas Alcoólicas",
    "Vestidos",
    "Vestuário Esportivo",
    "Vestuário Infantil",
    "Vestuário Masculino",
    "Vestuário Feminino",
    "Xícaras e Canecas",
    "Yoga e Pilates",
    "Zeladoria e Limpeza",
    "Zapatos",
    "Zíperes e Acessórios de Costura"
      ];


  // Limpa o conteúdo anterior
  suggestionsContainer.innerHTML = '';

  sugestoes.forEach(sugestao => {
    if (sugestao.toLowerCase().includes(term)) {
      const sugestaoElement = document.createElement('div');
      sugestaoElement.className = 'suggestion';
      sugestaoElement.textContent = sugestao;
      sugestaoElement.addEventListener('click', function () {
        searchInput.value = sugestao;
        realizarPesquisa();
      });
      suggestionsContainer.appendChild(sugestaoElement);
    }
  });

  // Mostra ou esconde o container de sugestões
  suggestionsContainer.style.display = term.length > 0 ? 'block' : 'none';
}

function realizarPesquisa() {
  var searchTerm = searchInput.value;

  // Envia as informações para o banco de dados Firebase
  pesquisasRef.push().set({
    termo: searchTerm,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });

  // Redireciona para o site oficial da Amazon com o termo de pesquisa
  window.location.href = "https://www.amazon.com.br/s?k=" + encodeURIComponent(searchTerm);
}

// Adiciona um listener para a tecla "Enter"
searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    realizarPesquisa();
  }
});

document.querySelector('.pngwing-4-icon').addEventListener('click', function() {
  var link = this.getAttribute('data-link');
  if (link) {
    window.location.href = link;
  }

  // Recupera as pesquisas do banco de dados Firebase
  pesquisasRef.limitToLast(5).once('value').then(function(snapshot) {
    const pesquisasAnteriores = [];

    snapshot.forEach(function(childSnapshot) {
      const termo = childSnapshot.val().termo;
      pesquisasAnteriores.push(termo);
    });

    exibirSugestoes(pesquisasAnteriores);
  });
});

document.querySelector('.pngwing-4-icon').addEventListener('click', function() {
  var link = this.getAttribute('data-link');
  if (link) {
    window.location.href = link;
  }

  // Recupera as pesquisas do banco de dados Firebase
  pesquisasRef.limitToLast(5).once('value').then(function(snapshot) {
    const pesquisasAnteriores = [];

    snapshot.forEach(function(childSnapshot) {
      const termo = childSnapshot.val().termo;
      pesquisasAnteriores.push(termo);
    });

    exibirSugestoes(pesquisasAnteriores);
  });
});

searchInput.addEventListener('input', function () {
  const term = searchInput.value.toLowerCase();
  exibirSugestoes(term);
});

function exibirSugestoes(term) {
  // Simulando sugestões (substitua pelo seu código Firebase)
  const sugestoes = [
    "Acessórios para Casa",
    "Acessórios Tech",
    "Alimentos e Bebidas",
    "Amazon Devices",
    "Ar Condicionado",
    "Artes e Artesanato",
    "Automotivo",
    "Bebês e Mamães",
    "Beleza e Cuidado Pessoal",
    "Bebidas",
    "Brinquedos e Jogos",
    "Café e Chá",
    "Camping e Aventura",
    "Calçados",
    "Calçados Esportivos",
    "Carros e Motos",
    "Casa e Cozinha",
    "Computadores",
    "Cuidados com os Olhos",
    "Decoração de Interiores",
    "Eletrodomésticos",
    "Eletrônicos",
    "Eletrônicos para Carro",
    "Eletrônicos para Casa",
    "Esportes e Atividades ao Ar Livre",
    "Filmes e TV",
    "Ferramentas e Construção",
    "Fones de Ouvido",
    "Fones de Ouvido Sem Fio",
    "Fotografia",
    "Gadgets Inovadores",
    "Instrumentos Musicais",
    "Jardinagem",
    "Jogos",
    "Livros",
    "Livros Técnicos",
    "Maquiagem e Cosméticos",
    "Materiais de Limpeza",
    "Moda Feminina",
    "Moda Infantil",
    "Moda Íntima",
    "Moda Masculina",
    "Moda Plus Size",
    "Móveis",
    "Móveis para Jardim",
    "Ofertas do Dia",
    "Perfumes e Fragrâncias",
    "Papelaria e Escritório",
    "Pet Shop",
    "Produtos de Luxo",
    "Produtos de Segurança",
    "Produtos de Tecnologia",
    "Produtos Orgânicos",
    "Produtos para Animais de Estimação",
    "Produtos para Cabelo",
    "Produtos para Cozinha",
    "Produtos para Dormir",
    "Produtos para o Banheiro",
    "Produtos para o Inverno",
    "Produtos para o Outono",
    "Produtos para o Verão",
    "Produtos para a Primavera",
    "Produtos Sustentáveis",
    "Relógios",
    "Roupas",
    "Saúde e Cuidados com o Corpo",
    "Smartphones",
    "Smartwatches",
    "Televisões",
    "Viagem e Aventura",
    "Vestuário Casual",
    "Vestuário Esportivo",
    "Sapatos",
    "Segurança e Proteção",
    "Suplementos Alimentares",
    "Tênis",
    "Utensílios de Cozinha",
    "Viagem e Aventura",
    "Vinhos e Bebidas Alcoólicas",
    "Vestidos",
    "Vestuário Esportivo",
    "Vestuário Infantil",
    "Vestuário Masculino",
    "Vestuário Feminino",
    "Xícaras e Canecas",
    "Yoga e Pilates",
    "Zeladoria e Limpeza",
    "Zapatos",
    "Zíperes e Acessórios de Costura"
      ];

  // Filtra sugestões com base na letra digitada
  const sugestoesFiltradas = sugestoes.filter(sugestao => sugestao.toLowerCase().startsWith(term));

  // Limpa o conteúdo anterior
  suggestionsContainer.innerHTML = '';

  sugestoesFiltradas.forEach(sugestao => {
    const sugestaoElement = document.createElement('div');
    sugestaoElement.className = 'suggestion';
    sugestaoElement.textContent = sugestao;
    sugestaoElement.addEventListener('click', function () {
      searchInput.value = sugestao;
      realizarPesquisa();
    });
    suggestionsContainer.appendChild(sugestaoElement);
  });

  // Mostra ou esconde o container de sugestões
  suggestionsContainer.style.display = term.length > 0 ? 'block' : 'none';
}

// Restante do código permanece inalterado


