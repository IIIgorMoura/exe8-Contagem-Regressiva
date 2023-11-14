const tempoRestante = document.getElementById('tempoRestante');
const dataRestante = document.getElementById('dataRestante');

// data final
const dataAlvo = new Date('2023-11-27 00:00:00').getTime();

// função para atualizar a contagem regressiva e a barra de progresso
function atualizarContagem() {
    const agora = new Date().getTime();

    // diferenca em milissegundos
    const diferenca = dataAlvo - agora;

    // conversao
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // inserir tempo restante
    dataRestante.textContent = `${dias} Dias`;
    tempoRestante.textContent = `${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;

    // update barra de progresso
    const progresso = ((dataAlvo - agora) / (dataAlvo - new Date('2023-11-27 00:00:00').getTime())) * 100;
    document.getElementById('progresso').style.width = progresso + '%';

    // parar contagem
    if (diferenca < 0) {
        clearInterval(intervalo);
        console.log('Fim');
    }
}

// chama a função inicialmente para iniciar a contagem
atualizarContagem();

// atualiza a cada segundo
const intervalo = setInterval(atualizarContagem, 1000);
