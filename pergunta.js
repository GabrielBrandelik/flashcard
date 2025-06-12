// Banco de perguntas para o quiz
const questions = [
    {
        question: "Qual é o principal produto que o campo fornece para as cidades?",
        options: [
            "Eletrônicos",
            "Alimentos",
            "Roupas",
            "Combustível"
        ],
        answer: 1,
        explanation: "O campo é responsável pela produção da maioria dos alimentos consumidos nas cidades."
    },
    {
        question: "Como se chama o sistema que conecta produtores rurais diretamente com consumidores urbanos?",
        options: [
            "Agricultura industrial",
            "Feira livre",
            "CSA (Comunidade que Sustenta a Agricultura)",
            "Agropecuária extensiva"
        ],
        answer: 2,
        explanation: "O CSA é um modelo onde consumidores urbanos se associam diretamente com produtores rurais."
    },
    {
        question: "Qual destes é um problema causado pelo êxodo rural?",
        options: [
            "Aumento da produção agrícola",
            "Redução do desemprego nas cidades",
            "Superlotação dos centros urbanos",
            "Aumento da qualidade de vida no campo"
        ],
        answer: 2,
        explanation: "O êxodo rural leva muitas pessoas para as cidades, causando superlotação e pressão sobre infraestrutura urbana."
    },
    {
        question: "O que significa 'agricultura urbana'?",
        options: [
            "Agricultura praticada apenas em grandes propriedades",
            "Cultivo de alimentos dentro das cidades",
            "Produção exclusiva para exportação",
            "Uso intensivo de máquinas agrícolas"
        ],
        answer: 1,
        explanation: "Agricultura urbana é o cultivo de plantas e criação de animais dentro ou nos arredores das áreas urbanas."
    },
    {
        question: "Qual destas NÃO é uma vantagem da conexão campo-cidade?",
        options: [
            "Alimentos mais frescos para os urbanos",
            "Melhor remuneração para os produtores rurais",
            "Aumento do desmatamento",
            "Preservação de saberes tradicionais"
        ],
        answer: 2,
        explanation: "Uma boa conexão campo-cidade deve promover práticas sustentáveis, não o desmatamento."
    },
    {
        question: "O que é turismo rural?",
        options: [
            "Viagens internacionais de agricultores",
            "Atividades turísticas em propriedades rurais",
            "Exportação de produtos agrícolas",
            "Migração temporária para o campo"
        ],
        answer: 1,
        explanation: "Turismo rural são atividades recreativas, de entretenimento ou pedagógicas realizadas no meio rural."
    },
    {
        question: "Qual porcentagem aproximada da população brasileira vive em áreas urbanas?",
        options: [
            "30%",
            "50%",
            "70%",
            "90%"
        ],
        answer: 3,
        explanation: "Segundo o IBGE, cerca de 90% dos brasileiros vivem em áreas urbanas."
    },
    {
        question: "O que são 'cinturões verdes' em torno das cidades?",
        options: [
            "Parques urbanos",
            "Áreas de preservação ambiental",
            "Zonas agrícolas que abastecem a cidade",
            "Florestas plantadas"
        ],
        answer: 2,
        explanation: "Cinturões verdes são áreas agrícolas próximas às cidades que fornecem alimentos frescos para a população urbana."
    },
    {
        question: "Qual destes é um exemplo de conexão campo-cidade?",
        options: [
            "Feiras de produtores rurais na cidade",
            "Indústrias automobilísticas",
            "Shopping centers",
            "Torres de celular"
        ],
        answer: 0,
        explanation: "Feiras de produtores são um excelente exemplo de conexão direta entre campo e cidade."
    },
    {
        question: "Como as cidades podem apoiar o desenvolvimento rural?",
        options: [
            "Consumindo produtos diretamente dos agricultores",
            "Investindo em educação no campo",
            "Desenvolvendo políticas de preços justos",
            "Todas as alternativas acima"
        ],
        answer: 3,
        explanation: "Todas essas ações ajudam a fortalecer a agricultura familiar e o desenvolvimento rural sustentável."
    }
];

// Funções para gerenciar as perguntas
let currentQuestionIndex = 0;
let shuffledQuestions = [];

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function getCurrentQuestion() {
    return shuffledQuestions[currentQuestionIndex];
}

function moveToNextQuestion() {
    currentQuestionIndex++;
}

function resetQuestions() {
    currentQuestionIndex = 0;
    shuffleQuestions();
}

// Exportar funções necessárias
export { 
    shuffleQuestions,
    getCurrentQuestion,
    moveToNextQuestion,
    resetQuestions,
    questions 
};