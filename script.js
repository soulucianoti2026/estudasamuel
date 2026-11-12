const tests = [
  {
    id: 23,
    title: 'América Espanhola',
    subtitle: 'Conquista, sociedade, economia e trabalho na América colonial.',
    description: 'Aula 23 / Teste 1',
    accent: 'red',
    questions: [
      {
        text: 'A ideia de superioridade europeia usada para justificar a imposição cultural aos povos originários é chamada de:',
        options: [
          { text: 'A) Policitura.', correct: false },
          { text: 'B) Eurocentrismo.', correct: true },
          { text: 'C) Autonomia colonial.', correct: false },
          { text: 'D) Escambo.', correct: false }
        ]
      },
      {
        text: 'A chamada Conquista Insular espanhola concentrou-se principalmente:',
        options: [
          { text: 'A) No litoral brasileiro.', correct: false },
          { text: 'B) Nas colônias inglesas do norte.', correct: false },
          { text: 'C) Nas ilhas do Caribe.', correct: true },
          { text: 'D) No interior africano.', correct: false }
        ]
      },
      {
        text: 'Quais povos indígenas foram conquistados pelos espanhóis no processo de expansão continental apresentado na aula?',
        options: [
          { text: 'A) Asteca e Incas.', correct: true },
          { text: 'B) Romanos e babilônios.', correct: false },
          { text: 'C) Partugas e íngleses.', correct: false },
          { text: 'D) Persas e etruscos.', correct: false }
        ]
      },
      {
        text: 'Qual alternativa apresenta apenas cinco cidades da América Espanhola citadas no material?',
        options: [
          { text: 'A) Virgem e Massachussets.', correct: false },
          { text: 'B) Pernambuco e São Vicente.', correct: false },
          { text: 'C) Lima e Buenos Aires.', correct: false },
          { text: 'D) Nova Espanha e Peru.', correct: true }
        ]
      },
      {
        text: 'Quem eram os crioulos na sociedade colonial espanhola?',
        options: [
          { text: 'A) Espanhóis nascidos na Europa que chegavam para governar.', correct: false },
          { text: 'B) Descendentes de espanhóis nascidos na América.', correct: true },
          { text: 'C) Indígenas com direitos civis completos.', correct: false },
          { text: 'D) Africanos livres com cargos administrativos.', correct: false }
        ]
      },
      {
        text: 'Qual órgão participava das decisões mais importantes sobre a administração das colônias espanholas?',
        options: [
          { text: 'A) Câmara de São Vicente.', correct: false },
          { text: 'B) Conselho das Índias.', correct: true },
          { text: 'C) Governo-geral de Portugal.', correct: false },
          { text: 'D) Congresso nacional.', correct: false }
        ]
      },
      {
        text: 'Os cabildos eram instituições relacionadas principalmente:',
        options: [
          { text: 'A) À administração local, com funções semelhantes às das câmaras municipais.', correct: true },
          { text: 'B) À administração de tropas inglesas.', correct: false },
          { text: 'C) Ao governo do Império Romano.', correct: false },
          { text: 'D) À organização da igreja protestante.', correct: false }
        ]
      },
      {
        text: 'Qual atividade econômica foi destacada como a principal fonte de riqueza da América Espanhola?',
        options: [
          { text: 'A) Pesca.', correct: false },
          { text: 'B) Construção naval.', correct: false },
          { text: 'C) Extração de pau-brasil.', correct: false },
          { text: 'D) Mineração.', correct: true }
        ]
      },
      {
        text: 'Na encomienda, a exploração do trabalho e a cobrança de tributos eram associadas a:',
        options: [
          { text: 'A) Garantir a independência política dos comunidades indígenas.', correct: false },
          { text: 'B) Promover a educação dos indígenas.', correct: false },
          { text: 'C) Financiar a guerra contra os holandeses.', correct: false },
          { text: 'D) Enriquecer a metrópole e os colonizadores.', correct: true }
        ]
      },
      {
        text: 'Na América Espanhola, a mita colonial esteve especialmente associada a:',
        options: [
          { text: 'A) Ao trabalho forçado em minas de prata.', correct: true },
          { text: 'B) Ao comércio de escravos africanos.', correct: false },
          { text: 'C) À produção de açúcar nas plantações.', correct: false },
          { text: 'D) À produção de café.', correct: false }
        ]
      }
    ]
  },
  {
    id: 24,
    title: 'América Inglesa',
    subtitle: 'Puritanos, Trez Colônias, economia e relações de trabalho.',
    description: 'Aula 24 / Teste 2',
    accent: 'blue',
    questions: [
      {
        text: 'Os corsários autorizados pela rainha Elizabeth I atuavam principalmente:',
        options: [
          { text: 'A) Na criação de colônias nas Américas.', correct: false },
          { text: 'B) Na administração das capitanias portuguesas.', correct: false },
          { text: 'C) Em ataques e saques com a autorização da coroa inglesa.', correct: true },
          { text: 'D) Na colonização da África.', correct: false }
        ]
      },
      {
        text: 'Segundo o material, a coroa inglesa transferiu parte da iniciativa e do controle da colonização para:',
        options: [
          { text: 'A) Companhias de Comércio.', correct: true },
          { text: 'B) Câmaras municipais.', correct: false },
          { text: 'C) Conselhos locais.', correct: false },
          { text: 'D) Igrejas protestantes.', correct: false }
        ]
      },
      {
        text: 'Uma motivação importante para a migração dos puritanos que viajaram no Mayflower foi:',
        options: [
          { text: 'A) Trabalhar na extração do pau-brasil.', correct: false },
          { text: 'B) Administrar minas na América do Sul.', correct: false },
          { text: 'C) Expandir o poder da Igreja Católica.', correct: false },
          { text: 'D) Fugir de perseguições religiosas na Europa.', correct: true }
        ]
      },
      {
        text: 'A intenção dos chamados “pais peregrinos” de estabelecer moradia na América está associada ao conceito de:',
        options: [
          { text: 'A) Conquista militar.', correct: false },
          { text: 'B) Colonização de povoamento.', correct: true },
          { text: 'C) Economia de plantation.', correct: false },
          { text: 'D) Capitalismo industrial.', correct: false }
        ]
      },
      {
        text: 'As Treze Colônias inglesas localizavam-se principalmente:',
        options: [
          { text: 'A) No oeste do Canadá.', correct: false },
          { text: 'B) No interior da Europa.', correct: false },
          { text: 'C) Na costa leste dos Estados Unidos.', correct: true },
          { text: 'D) Nas ilhas caribenhas.', correct: false }
        ]
      },
      {
        text: 'A expressão “negligência salutary” refere-se a:',
        options: [
          { text: 'A) A visita automática colonial favorecida por uma política de pouca interferência.', correct: true },
          { text: 'B) A independência formal das colônias.', correct: false },
          { text: 'C) A proibição de comércio com a metrópole.', correct: false },
          { text: 'D) A concessão de direitos iguais para todos os colonos.', correct: false }
        ]
      },
      {
        text: 'Qual conjunto de características esteve associado às colônias do norte no material?',
        options: [
          { text: 'A) Latifúndio, monocultura e produção voltada à exportação.', correct: false },
          { text: 'B) Mineração e trabalho forçado em plantações.', correct: false },
          { text: 'C) Comércio, indústria e produção diversificada.', correct: true },
          { text: 'D) Plantação de cana e escravidão.', correct: false }
        ]
      },
      {
        text: 'Nas colônias do sul, o sistema de plantação caracterizava-se principalmente por:',
        options: [
          { text: 'A) Pequenas propriedades e produção para mercado local.', correct: false },
          { text: 'B) Grandes propriedades, monocultura e trabalho escravo.', correct: true },
          { text: 'C) Produção de metais preciosos e mineração intensiva.', correct: false },
          { text: 'D) Comércio marítimo em pequena escala.', correct: false }
        ]
      },
      {
        text: 'A servidão temporária mencionada na aula consistia em:',
        options: [
          { text: 'A) Um acordo de trabalho por um período determinado.', correct: true },
          { text: 'B) Uma forma de trabalho forçado permanente.', correct: false },
          { text: 'C) Trabalho de indígenas em troca de alimentos.', correct: false },
          { text: 'D) A contratação de soldados para a metrópole.', correct: false }
        ]
      },
      {
        text: 'Sobre as relações entre colonizadores ingleses e povos indígenas, o material destaca que:',
        options: [
          { text: 'A) Houve cooperação permanente entre as duas partes.', correct: false },
          { text: 'B) Existedem conflitos, expulsões e disputas por terras.', correct: true },
          { text: 'C) O comércio entre os grupos foi inexistente.', correct: false },
          { text: 'D) A metrópole proibiu qualquer contato com os indígenas.', correct: false }
        ]
      }
    ]
  },
  {
    id: 25,
    title: 'América Portuguesa',
    subtitle: 'Pau-brasil, capitanias hereditárias e administração colonial.',
    description: 'Aula 25 / Teste 3',
    accent: 'green',
    questions: [
      {
        text: 'Nos primeiros trinta anos após a chegada dos portugueses à América, o principal produto explorado foi:',
        options: [
          { text: 'A) Pau-brasil.', correct: true },
          { text: 'B) Ouro.', correct: false },
          { text: 'C) Açúcar.', correct: false },
          { text: 'D) Café.', correct: false }
        ]
      },
      {
        text: 'Qual atividade econômica se destacou no período pré-colonial brasileiro?',
        options: [
          { text: 'A) Mineração em grande escala.', correct: false },
          { text: 'B) Produção de açúcar.', correct: false },
          { text: 'C) Extração do pau-brasil.', correct: true },
          { text: 'D) Pecuária intensiva.', correct: false }
        ]
      },
      {
        text: 'Qual conjunto de fatores contribuiu para a decisão portuguesa de intensificar a colonização a partir de 1530?',
        options: [
          { text: 'A) A independência do Brasil e a expansão do café.', correct: false },
          { text: 'B) A busca por metais preciosos e a expansão comercial.', correct: true },
          { text: 'C) A criação de colônias espanholas na América.', correct: false },
          { text: 'D) A necessidade de defender o território contra a Inglaterra.', correct: false }
        ]
      },
      {
        text: 'Entre as missões de Martim Afonso de Sousa estavam:',
        options: [
          { text: 'A) Criar e organizar novas cidades no litoral brasileiro.', correct: true },
          { text: 'B) Explorar os rios do interior rumo ao Pacífico.', correct: false },
          { text: 'C) Fundar a primeira universidade no Brasil.', correct: false },
          { text: 'D) Negociar a independência do território.', correct: false }
        ]
      },
      {
        text: 'No sistema de capitanias hereditárias, os donatários:',
        options: [
          { text: 'A) Tomavam-se reis independentes de Portugal.', correct: false },
          { text: 'B) Recebiam o território sob determinadas condições e responsabilidades.', correct: true },
          { text: 'C) Recebiam títulos de nobreza para governar a metrópole.', correct: false },
          { text: 'D) Administravam apenas as cidades costeiras.', correct: false }
        ]
      },
      {
        text: 'Quais documentos regulamentavam a concessão de terras e o direito de uso das colônias?',
        options: [
          { text: 'A) Cartas de Doação e Foral.', correct: true },
          { text: 'B) Pactos de União.', correct: false },
          { text: 'C) Constituição e Lei das Duas Casas.', correct: false },
          { text: 'D) Alvarás de liberdade.', correct: false }
        ]
      },
      {
        text: 'Quais capitais são destacadas no material por sua importância no período colonial?',
        options: [
          { text: 'A) Maranhão e Ceará.', correct: false },
          { text: 'B) Porto Seguro e Salvador.', correct: true },
          { text: 'C) Pernambuco e Minas Gerais.', correct: false },
          { text: 'D) Santos e Curitiba.', correct: false }
        ]
      },
      {
        text: 'Qual alternativa associa corretamente o nome de uma cidade brasileira ao período colonial?',
        options: [
          { text: 'A) Rio de Janeiro – São Tomé.', correct: false },
          { text: 'B) Salvador – capital do Brasil colonial.', correct: true },
          { text: 'C) Belém – capital da região Sul.', correct: false },
          { text: 'D) São Paulo – primeiro centro administrativo da colônia.', correct: false }
        ]
      },
      {
        text: 'A participação dos chamados “homens bons” nas Câmaras Municipais evidenciava que o poder local colonial:',
        options: [
          { text: 'A) Era exercido igualmente por todos os moradores.', correct: false },
          { text: 'B) Era reservado aos trabalhadores escravizados.', correct: false },
          { text: 'C) Excluía os proprietários de terras.', correct: false },
          { text: 'D) Era concentrado em um grupo de elites locais.', correct: true }
        ]
      },
      {
        text: 'A atuação dos jesuítas na colônia portuguesa foi amplamente associada a:',
        options: [
          { text: 'A) A expansão do trabalho escravo e da mineração.', correct: false },
          { text: 'B) A catequização e a instrução de indígenas e colonos.', correct: true },
          { text: 'C) A destruição dos engenhos de açúcar.', correct: false },
          { text: 'D) A revolução industrial local.', correct: false }
        ]
      }
    ]
  }
];

const courseGrid = document.getElementById('course-grid');
const gabaritoGrid = document.getElementById('gabarito-grid');
const screenHome = document.getElementById('screen-home');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');
const screenGabarito = document.getElementById('screen-gabarito');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const progressDots = document.getElementById('progress-dots');
const questionLabel = document.getElementById('question-label');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const testHeaderMeta = document.getElementById('test-header-meta');
const testName = document.getElementById('test-name');
const testDescription = document.getElementById('test-description');
const resultBadge = document.getElementById('result-badge');
const scoreValue = document.getElementById('score-value');
const scoreMessage = document.getElementById('score-message');
const scoreDetail = document.getElementById('score-detail');
const reviewGrid = document.getElementById('review-grid');
const reviewList = document.getElementById('review-list');

let activeTestIndex = 0;
let currentQuestionIndex = 0;
let answers = [];
let selectedAnswers = {};

function getCurrentTest() {
  return tests[activeTestIndex];
}

function getOptionShape(index) {
  const palette = ['red', 'blue', 'gold', 'green'];
  return palette[index % palette.length];
}

function getOptionMark(type) {
  if (type === 'red' || type === 'blue' || type === 'green') {
    return 'circle';
  }
  return 'square';
}

function showScreen(name) {
  const screens = [screenHome, screenQuiz, screenResult, screenGabarito];
  screens.forEach((screen) => screen.classList.remove('active'));

  if (name === 'home') screenHome.classList.add('active');
  if (name === 'quiz') screenQuiz.classList.add('active');
  if (name === 'result') screenResult.classList.add('active');
  if (name === 'gabarito') screenGabarito.classList.add('active');
}

function renderHome() {
  courseGrid.innerHTML = tests.map((test, index) => {
    return `
      <article class="course-card variant-${test.accent}">
        <div class="course-top">
          <span class="label-badge">Aula ${test.id}</span>
        </div>
        <div class="course-number">${test.id}</div>
        <h3>${test.title}</h3>
        <p>${test.subtitle}</p>
        <div class="card-stats">10 questões • 10 pontos</div>
        <button class="start-btn" data-test-index="${index}">Começar teste →</button>
      </article>
    `;
  }).join('');

  courseGrid.querySelectorAll('[data-test-index]').forEach((button) => {
    button.addEventListener('click', () => {
      activeTestIndex = Number(button.dataset.testIndex);
      currentQuestionIndex = 0;
      answers = new Array(getCurrentTest().questions.length).fill(null);
      selectedAnswers = {};
      renderQuiz();
      showScreen('quiz');
    });
  });
}

function renderProgress() {
  const current = getCurrentTest();
  const answeredCount = answers.filter((value) => value !== null).length;
  const percent = (answeredCount / current.questions.length) * 100;

  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${answeredCount} de ${current.questions.length} respondidas`;

  progressDots.innerHTML = current.questions.map((_, index) => {
    let className = 'progress-dot';
    if (index === currentQuestionIndex) className += ' active';
    if (answers[index] !== null) className += ' correct';
    return `<span class="${className}"></span>`;
  }).join('');
}

function renderQuiz() {
  const current = getCurrentTest();
  const question = current.questions[currentQuestionIndex];

  testHeaderMeta.textContent = `AULA ${current.id} / TESTE ${current.id - 22}`;
  testName.textContent = current.title;
  testDescription.textContent = current.subtitle;
  questionLabel.textContent = `QUESTÃO ${String(currentQuestionIndex + 1).padStart(2, '0')}`;
  questionText.textContent = question.text;

  optionsContainer.innerHTML = question.options.map((option, optionIndex) => {
    const optionType = getOptionShape(optionIndex);
    const selected = selectedAnswers[currentQuestionIndex] === optionIndex;
    return `
      <button type="button" class="option ${optionType} ${selected ? 'selected' : ''}" data-option-index="${optionIndex}">
        <strong>
          ${option.text}
        </strong>
        <span class="${getOptionMark(optionType) === 'circle' ? 'option-circle' : 'option-square'}"></span>
      </button>
    `;
  }).join('');

  optionsContainer.querySelectorAll('[data-option-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const idx = Number(button.dataset.optionIndex);
      selectedAnswers[currentQuestionIndex] = idx;
      answers[currentQuestionIndex] = idx;
      renderQuiz();
    });
  });

  renderProgress();

  const submitButton = document.getElementById('submit-test');
  submitButton.textContent = currentQuestionIndex === current.questions.length - 1 ? 'Enviar respostas →' : 'Próxima →';
  submitButton.onclick = () => {
    if (currentQuestionIndex < current.questions.length - 1) {
      currentQuestionIndex += 1;
      renderQuiz();
      return;
    }
    renderResults();
    showScreen('result');
  };

  const backButton = document.getElementById('back-to-home');
  backButton.onclick = () => showScreen('home');
}

function renderResults() {
  const current = getCurrentTest();
  const correctCount = current.questions.reduce((sum, question, index) => {
    const userAnswer = answers[index];
    if (userAnswer !== null && question.options[userAnswer].correct) {
      return sum + 1;
    }
    return sum;
  }, 0);

  const total = current.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  scoreValue.textContent = `${correctCount} / ${total}`;
  resultBadge.textContent = `AULA ${current.id} / TESTE ${current.id - 22}`;

  if (percentage >= 80) {
    scoreMessage.textContent = 'Muito bem! Continue explorando.';
  } else if (percentage >= 50) {
    scoreMessage.textContent = 'Bom trabalho! Ainda dá para melhorar.';
  } else {
    scoreMessage.textContent = 'Você está no caminho certo.';
  }

  const reviewCount = total - correctCount;
  scoreDetail.textContent = `${correctCount} acertos • ${reviewCount} questões para revisar • ${percentage}% de aproveitamento`;

  reviewGrid.innerHTML = current.questions.map((_, index) => {
    const isCorrect = answers[index] !== null && current.questions[index].options[answers[index]].correct;
    const label = `Q${index + 1}`;
    const status = isCorrect ? 'Correta' : 'Revisar';
    const points = isCorrect ? '1 ponto' : '0 ponto';
    return `
      <div class="review-chip ${isCorrect ? 'correct' : 'wrong'}">
        <div class="chip-number">${label}</div>
        <div class="chip-status">${status}</div>
        <div class="chip-points">${points}</div>
      </div>
    `;
  }).join('');

  reviewList.innerHTML = current.questions.map((question, index) => {
    const userAnswer = answers[index];
    const selected = userAnswer !== null ? question.options[userAnswer] : null;
    const correctOption = question.options.find((option) => option.correct);
    const isCorrect = userAnswer !== null && selected.correct;

    return `
      <div class="review-item">
        <h4>Questão 0${index + 1} • ${question.text}</h4>
        <div class="subline">Sua resposta: ${selected ? selected.text : 'Não respondida'}</div>
        <span class="answer-line"><strong>Resposta correta:</strong> ${correctOption.text}</span>
        <p class="feedback">${isCorrect ? 'Você acertou esta questão.' : 'Revise o conteúdo associado e tente novamente no próximo teste.'}</p>
      </div>
    `;
  }).join('');
}

function renderGabarito() {
  gabaritoGrid.innerHTML = tests.map((test) => {
    const rows = test.questions.map((q, index) => {
      const correct = q.options.find((option) => option.correct);
      const letter = correct.text.charAt(0).toUpperCase();
      return `<li><span class="index">${String(index + 1).padStart(2, '0')}</span> <span class="answer">${letter}</span> <span>${correct.text.replace(/^[A-D]\)\s*/, '')}</span></li>`;
    }).join('');

    return `
      <article class="gabarito-card">
        <h3>${test.title}</h3>
        <ul class="gabarito-table">${rows}</ul>
      </article>
    `;
  }).join('');
}

document.getElementById('back-to-home').addEventListener('click', () => showScreen('home'));
document.getElementById('result-to-home').addEventListener('click', () => showScreen('home'));
document.getElementById('return-to-tests').addEventListener('click', () => showScreen('home'));
document.getElementById('gabarito-to-home').addEventListener('click', () => showScreen('home'));
document.getElementById('show-gabarito').addEventListener('click', () => {
  renderGabarito();
  showScreen('gabarito');
});

renderHome();
renderGabarito();
showScreen('home');
