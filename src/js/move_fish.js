const max_number = 20;
const fishes = ["bluetang","surgeon","clown","compressa"];
const directions = ["move_front","move_front_up","move_front_down"];
const fishes_info = {
    "bluetang":[
        "./src/img/Blue_tang.jpg",
        "Cirurgião-patela",
        "É um peixe de tamanho médio, colorido e que vive em recifes. Pertence à família Acanthuridae, sendo o único membro do gênero Paracanthurus. É popular entre os peixes de aquário, sendo muito conhecido por ser a personagem Dory dos filmes Procurando Nemo e Procurando Dory, da Pixar, e dos Episódios de Pedrinho e Sua Turma.",
        "Vive em águas transparentes, em zonas de corrente, adjacentes ao recife de coral. São encontrados ao longo do Indo-Pacífico. Pode ser visto nos recifes do Leste da África, Havaí, Japão, Samoa, Nova Caledônia, e na Grande Barreira de Coral.",
        "São omnívoros, alimentando-se principalmente de plâncton enquanto jovens.Quando adultos complementam essa dieta com algas. No aquário a sua alimentação pode incluir artémias, pequenas fatias de lulas, brócolis e ervilhas.",
    ],
    "surgeon":[
        "./src/img/zebrasoma.jpg",
        "Cirurgião Amarelo",
        "O cirurgião-amarelo tem um ferrão na cauda para sua defesa (ele nada de ré e ferroa seus inimigos). Normalmente não é agressivo com peixes de outras espécies, mas pode eventualmente atacar um peixe da mesma espécie se este for mais fraco. O cirurgião-amarelo podem medir a 20 centímetros no comprimento, e 1 a 2 centímetros na espessura. Os machos adultos tendem a ser maiores do que fêmeas adultas. Todos desta espécie são de um tom amarelo brilhante. Na noite, a coloração amarela desvanece-se ligeiramente e torna-se no meio com uma faixa branca horizontal. Ao amanhecer ele recupera a sua cor amarela brilhante.",
        "É originário do Havaí.",
        "Alimenta-se de algas, artêmia e flocos. "
    ],
    "clown":[
        "./src/img/clown_fish.jpg",
        "Peixe Palhaço",
        "É uma espécie de peixe anêmona encontrada principalmente na Grande Barreira de Corais da Austrália, mas também em locais próximos no Pacífico Ocidental. O nome da espécie 'akindynos' é grego, significando 'seguro' ou 'sem perigo' em referência à segurança oferecida entre os tentáculos de sua anêmona hospedeira.",
        "Grande Barreira de Corais da Austrália, mas também em locais próximos no Pacífico Ocidental.",
        "Consiste principalmente em algas (algas marinhas) e zooplâncton. O par dominante na hierarquia social tende a se distanciar da anêmona hospedeira para encontrar comida. A anêmona hospedeira pode se beneficiar com pequenos pedaços de comida que os peixes anêmona deixam cair ao se alimentar."
    ],
    "compressa":[
        "./src/img/Hypseleotriscompressa.jpg",
        "Imperador Gudgeon",
        "H. compressa tem um corpo alongado que pode ter até 12 cm (4,7 pol.) De comprimento. Os machos são maiores do que as fêmeas. O peixe não tem linha lateral, mas tem escamas ctenóides. Sua cor varia, mas o peixe geralmente tem uma cabeça bronzeada amarelada a marrom-dourada, embora possa ocasionalmente ser um marrom escuro. Seu abdome geralmente é vermelho-esbranquiçado. A barbatana caudal tem uma cor 'escura' e as barbatanas peitorais e pélvicas não têm cor. As espécies podem mudar rapidamente de cor conforme necessário.",
        "Principalmente concentrado nas porções norte e leste da Austrália e centro-sul da Nova Guiné. Também foi encontrado no Estreito de Torres, ao redor de Muralag e Ilha do Chifre.",
        "Onívoro, pegando principalmente pequenos crustáceos e insetos, mas também consome algas e plantas aquáticas."
    ]
}

function structurize_info(name){
    let html = '<img src="'+fishes_info[name][0]+'" class="icon-fish">';
    html += "<h2>"+fishes_info[name][1]+"</h2>";
    html += "<p>"+fishes_info[name][2]+"</p>";
    html +=  "<p><strong>Habitat:</strong>"+fishes_info[name][3]+"</p>";
    html +=  "<p><strong>Alimentação:</strong>"+fishes_info[name][4]+"</p>";

    return html;
}

function show_details(event){
    const id = event.target.id;

    if(document.getElementById("card") == null){
        const div = document.getElementById("info");

        const card = document.createElement("div");
        card.id = "card";
        card.innerHTML = structurize_info(id);
        div.appendChild(card);
    }
    else{
        const card = document.getElementById("card");
        card.innerHTML = "";
        card.innerHTML = structurize_info(id);
    }
}

function choice_fishes(){
    const amount = Math.floor(Math.random() * max_number)+1;

    const tank = document.getElementById("tank");
    console.log(tank);

    for(let i = 0; i < amount; i++){
        let posy = Math.floor(Math.random() * 1200)+1;
        let id = Math.floor(Math.random() * fishes.length);
        let duration = Math.floor(Math.random() * 25)+5;
        let direction = Math.floor(Math.random() * directions.length);
        
        let fish = document.createElement("div");
        fish.className = "fish";
        fish.id = fishes[id];
        fish.top = posy;
        fish.style.animationName = directions[direction];
        fish.style.animationDuration = duration.toString()+"s";
        fish.onclick = show_details;

        tank.appendChild(fish);
    }
    console.log(amount);
}
choice_fishes();