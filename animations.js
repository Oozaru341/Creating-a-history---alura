// Função para alternar a visibilidade da div de ajuda
function toggleHelp() {
    var helpTooltip = document.getElementById("helpTooltip");
    if (helpTooltip.style.display === "none" || helpTooltip.style.display === "") {
        helpTooltip.style.display = "block";
    } else {
        helpTooltip.style.display = "none";
    }
}

// Função para ocultar a div de ajuda quando o botão "Iniciar o Jogo" é clicado
document.getElementById("startGame").addEventListener("click", function() {
    var helpTooltip = document.getElementById("helpTooltip");
    helpTooltip.style.display = "none";
});


const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})


//genericos
// Seleciona o botão e o div
const attackButton = document.getElementById('attackButton');
const helpTooltip = document.getElementById('warningzoro');

// Mostra o div quando o mouse passa por cima do botão
attackButton.addEventListener('mouseover', function() {
    helpTooltip.style.display = 'block';
});

// Oculta o div quando o mouse sai do botão
attackButton.addEventListener('mouseleave', function() {
    helpTooltip.style.display = 'none';
});

// Seleciona todos os checkboxes e o botão com a nova ID
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const secAttackButton = document.getElementById('secAttackButton');

// Função para verificar o estado dos checkboxes
function checkMoves() {
    // Verifica se os checkboxes específicos estão marcados
    const onlySelectedMoves = document.getElementById('mov1').checked && 
                              document.getElementById('mov5').checked && 
                              document.getElementById('mov6').checked;

    // Verifica se os outros checkboxes estão desmarcados
    const othersUnchecked = Array.from(checkboxes).every(checkbox => {
        return checkbox.checked === (checkbox.id === 'mov1' || checkbox.id === 'mov5' || checkbox.id === 'mov6');
    });

    // Habilita ou desabilita o botão com base nas condições
    if (onlySelectedMoves && othersUnchecked) {
        secAttackButton.disabled = false;
    } else {
        secAttackButton.disabled = true;
    }
}

// Adiciona o evento de mudança a todos os checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkMoves));


// lista de fundos

let bgimg = ['images/campo.png',
    'images/campo1.png',
    'images/campo2.png',
    'images/campo3.jpg',
    'images/cave1.png',
    'images/cave2.jpg',
    'images/caveentrace.png',
    'images/forest1.png',
    'images/forest2.jpg',
    'images/forest3.png',
    'images/forest4.png',
    'images/forest5.png',
    'images/exitcavern.png'];

function changebg(value) {
    if (value < 30) {
document.body.style.backgroundImage = `url('${bgimg[value]}')`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
} else {
document.body.style.backgroundImage = 'none';
}


};

//lista de musicas

const musicp = ['musics/explorando.mp3',
    'musics/mistery.mp3',
    'musics/battle.mp3',
'musics/cavern.mp3'];

let currentAudio = null;

function playSound(index){
    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(musicp[index]);
    currentAudio.play();
}