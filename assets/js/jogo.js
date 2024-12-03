const situations = [
    {
        text: "Seus amigos ofereceram uma substância durante uma festa. O que você faz?",
        choices: [
            { text: "Aceitar e experimentar", effects: { mental: -40, physical: -30, support: -20 } },
            { text: "Recusar educadamente", effects: { mental: 10, physical: 0, support: 0 } },
            { text: "Sair da festa", effects: { mental: 0, physical: 0, support: -20 } },
        ]
    },
    {
        text: "Você está se sentindo muito estressado no trabalho. O que faz?",
        choices: [
            { text: "Procurar ajuda profissional", effects: { mental: 10, physical: 10, support: 10 } },
            { text: "Ignorar o problema", effects: { mental: -40, physical: -30, support: 0 } },
            { text: "Usar algo para relaxar", effects: { mental: -40, physical: -30, support: -30 } },
        ]
    },
    {
        text: "Você está andando pelos corredores de sua unversidade, e um amigo seu se aproxima, dizendo que descobriu o milagre para focar nos estudos, ele tira alguns comprimidos do bolso e te oferece, o que você faz?",
        choices: [
            { text: "Recusa educadamente", effects: { mental: 10, physical: 0, support: 0 } },
            { text: "Aceita, pois você anda muito cansado com tantos trabalhos", effects: { mental: -40, physical: -30, support: 10 } },
            { text: "Diz para ele parar com essas coisas", effects: { mental: 0, physical: 0, support: -50 } },
        ]
    },
    {
        text: "Durante um encontro com alguns conhecidos, você percebe que todos estão usando coisas ilícitas. Qual sua reação?",
        choices: [
            { text: "Assiste tudo calado", effects: { mental: -30, physical: -30, support: 0 } },
            { text: "Pede para se juntar para não ficar excluído", effects: { mental: -40, physical: -30, support: 10 } },
            { text: "Vai embora", effects: { mental: 0, physical: 0, support: -40 } },
        ]
    },
    {
        text: "Um amigo próximo está passando por um momento difícil e decide usar drogas. O que você faz?",
        choices: [
            { text: "Nada, deixa ele se virar", effects: { mental: 0, physical: 0, support: -60 } },
            { text: "Ajuda ele levando para um profissional", effects: { mental: 10, physical: 0, support: 40 } },
            { text: "Começa a usar drogas junto com ele", effects: { mental: -40, physical: -30, support: 0 } },
        ]
    },
];

let currentSituation = 0;
let stats = { mental: 100, physical: 100, support: 100 };

function updateBars() {
    document.getElementById("mental-bar").style.width = `${stats.mental}%`;
    document.getElementById("physical-bar").style.width = `${stats.physical}%`;
    document.getElementById("support-bar").style.width = `${stats.support}%`;
}

function showSituation() {
    if (stats.mental <= 20 || stats.physical <= 20 || stats.support <= 20) {
        document.getElementById("situation").innerText = "Você perdeu! Tente tomar melhores decisões na próxima vez.";
        document.getElementById("choices").innerHTML = "";
        return;
    }

    if (currentSituation >= situations.length) {
        document.getElementById("situation").innerText = "Parabéns! Você tomou boas decisões e venceu o jogo.";
        document.getElementById("choices").innerHTML = "";
        return;
    }

    const situation = situations[currentSituation];
    document.getElementById("situation").innerText = situation.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    situation.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => makeChoice(index);
        choicesDiv.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    const effects = situations[currentSituation].choices[choiceIndex].effects;
    stats.mental = Math.max(0, stats.mental + effects.mental);
    stats.physical = Math.max(0, stats.physical + effects.physical);
    stats.support = Math.max(0, stats.support + effects.support);

    currentSituation++;
    updateBars();
    showSituation();
}

updateBars();
showSituation();