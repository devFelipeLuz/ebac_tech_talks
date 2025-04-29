AOS.init();

const dataEvento = new Date("Dec 25, 2025 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60;
    const segundoMs = 1000;

    const diasAteEvento = Math.floor(distanciaEvento / diaMs);
    const horasAteEvento = Math.floor((distanciaEvento % diaMs) / horaMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horaMs) / minutoMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoMs) / segundoMs);

    $('#contador').html(`${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`);

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        $('#contador').html(`Evento expirado`);
    }

}, 1000);