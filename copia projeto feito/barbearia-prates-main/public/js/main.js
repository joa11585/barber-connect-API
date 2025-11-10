const areaAgendamento = document.getElementById('areaAgendamento');
const formBox = document.getElementById('formBox');
const successBox = document.getElementById('successBox');
const abrirAgendamento = document.getElementById('abrirAgendamento');
const abrirAgendamento2 = document.getElementById('abrirAgendamento2');
const btnFechar = document.getElementById('btnFechar');
const btnAgendar = document.getElementById('btnAgendar');
const voltarBtn = document.getElementById('voltarBtn');
const resposta = document.getElementById('resposta');
const servicoSelect = document.getElementById('servico'); // Adicionei a referência ao select

// Seleciona todos os cartões de serviço
const serviceCards = document.querySelectorAll('.card'); 

// 1. abrir a caixa pelo botão do topo ou hero
[abrirAgendamento, abrirAgendamento2].forEach(btn => {
  btn.addEventListener('click', () => {
    // Ao abrir, garante que o select de serviço não esteja pré-preenchido
    servicoSelect.value = ''; 
    areaAgendamento.style.display = 'flex';
  });
});

// 2. abrir a caixa pelo clique no cartão de serviço
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    const servicoEscolhido = card.getAttribute('data-servico');
    
    // Abre a caixa de agendamento
    areaAgendamento.style.display = 'flex';
    
    // Pré-seleciona o serviço no formulário
    servicoSelect.value = servicoEscolhido;
    
    // Reseta a mensagem de erro/sucesso anterior
    resposta.textContent = '';
  });
});


// fechar no X
btnFechar.addEventListener('click', () => {
  areaAgendamento.style.display = 'none';
  formBox.style.display = 'block';
  successBox.style.display = 'none';
  resposta.textContent = '';
});

// agendar
btnAgendar.addEventListener('click', async () => {
  const nome = document.getElementById('nome').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const servico = servicoSelect.value; // Pega o valor do select

  // . VERIFICA SE OS CAMPOS ESTÃO PREENCHIDOS
  if (!nome || !data || !hora || !servico) {
    resposta.textContent = 'Por favor, preencha todos os campos.';
    return; // Para a execução aqui
  }

  // . SIMULAÇÃO DE SUCESSO (Versão SEM BACKEND)
  resposta.textContent = 'Agendamento feito com sucesso!';
  
  // . mMOSTRA A CAIXA DE SUCESSO
  if (resposta.textContent.toLowerCase().includes('sucesso')) {
    formBox.style.display = 'none';
    successBox.style.display = 'block';
    document.getElementById('logoSucesso').style.display = 'block';
  }
});

// voltar
voltarBtn.addEventListener('click', () => {
  successBox.style.display = 'none';
  formBox.style.display = 'block';
  resposta.textContent = '';
});