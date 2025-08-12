document.getElementById('btn-sim').addEventListener('click', () => {
    const msg = document.getElementById('mensagem');
    msg.innerHTML = "🚀 Pois então prepare-se para uma aventura incrível! Um dia repleto de adrenalina, natureza e muita emoção te espera em Pires do Rio - GO!";
    msg.style.display = "block";

    document.getElementById('som-sim').play();
});

document.getElementById('btn-nao').addEventListener('click', () => {
    const msg = document.getElementById('mensagem');
    msg.innerHTML = "😅 Infelizmente não tem como negar o convite :(";
    msg.style.display = "block";

    document.getElementById('som-nao').play();
});
