const tempoRestante = document.getElementById('tempoRestante');
const dataRestante = document.getElementById('dataRestante');
const preparando = document.getElementById('preparando')

// data final
const dataAlvo = new Date('2023-11-27 00:00:00').getTime();

// atualizar tempo
const relogio = setInterval(() => {
    const agora = new Date().getTime();

    // diferenca em milissegundos
    const diferenca = dataAlvo - agora;

    // conversao
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    console.log(`${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);

    // inserir tempo restante
    dataRestante.textContent = `${dias} Dias`;
    tempoRestante.textContent = `${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;

    // update barra de progresso
    const tempoTotal = dataAlvo - new Date('2023-11-27 00:00:00').getTime();
    const tempoDecorrido = tempoTotal - diferenca;
    const progresso = (tempoDecorrido / tempoTotal) * 100;
    document.getElementById('progresso').style.width = progresso + '%';

    // parar contagem
    if (diferenca < 0) {
        clearInterval(relogio);
        
        dataRestante.textContent = `Acesse agora`
        tempoRestante.textContent = `Aproveite todos os descontos`
        preparando.textContent = `Tudo pronto`
    }
}, 1000);
