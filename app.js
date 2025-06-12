import { 
    shuffleQuestions, 
    getCurrentQuestion, 
    moveToNextQuestion, 
    resetQuestions,
    questions 
} from './pergunta.js';

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const questionNumberElement = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const timerElement = document.getElementById('timer');

// Variáveis do jogo
let score = 0;
let timer;
let timeLeft = 30;

// Inicializar o quiz
function initQuiz() {
    resetQuestions();
    shuffleQuestions();
    score = 0;
    updateScore();
    showStartScreen();
}

// Mostrar tela inicial
function showStartScreen() {
    startScreen.classList.add('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
}

// Mostrar tela do quiz
function showQuizScreen() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resultsScreen.classList.remove('active');
    loadQuestion();
}

// Mostrar tela de resultados
function showResultsScreen() {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    finalScoreElement.textContent = score;
    
    // Mensagem personalizada baseada na pontuação
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage >= 80) {
        resultMessageElement.textContent = "Excelente! Você conhece muito bem a conexão entre campo e cidade!";
    } else if (percentage >= 50) {
        resultMessageElement.textContent = "Bom trabalho! Você sabe bastante, mas pode aprender mais sobre esse tema importante.";
    } else {
        resultMessageElement.textContent = "Continue aprendendo! A relação campo-cidade é fundamental para nosso futuro sustentável.";
    }
}

// Carregar pergunta
function loadQuestion() {
    resetTimer();
    startTimer();
    
    const currentQuestion = getCurrentQuestion();
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    
    questionNumberElement.textContent = `Pergunta ${questionNumber}/${totalQuestions}`;
    questionText.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
    
    nextBtn.disabled = true;
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
}

// Selecionar opção
function selectOption(selectedIndex) {
    clearInterval(timer);
    
    const currentQuestion = getCurrentQuestion();
    const options = document.querySelectorAll('.option-btn');
    
    // Desabilitar todos os botões de opção
    options.forEach(option => {
        option.disabled = true;
    });
    
    // Marcar a resposta correta
    options[currentQuestion.answer].classList.add('correct');
    
    // Verificar se a resposta está correta
    if (selectedIndex === currentQuestion.answer) {
        options[selectedIndex].classList.add('correct');
        feedbackElement.textContent = `Correto! ${currentQuestion.explanation}`;
        feedbackElement.classList.add('correct');
        score++;
        updateScore();
    } else {
        options[selectedIndex].classList.add('incorrect');
        feedbackElement.textContent = `Incorreto. ${currentQuestion.explanation}`;
        feedbackElement.classList.add('incorrect');
    }
    
    nextBtn.disabled = false;
}

// Próxima pergunta
function nextQuestion() {
    moveToNextQuestion();
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResultsScreen();
    }
}

// Atualizar pontuação
function updateScore() {
    scoreElement.textContent = score;
}

// Temporizador
function startTimer() {
    timeLeft = 30;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    timerElement.textContent = `Tempo: ${timeLeft}s`;
    
    // Mudar cor quando o tempo estiver acabando
    if (timeLeft <= 10) {
        timerElement.style.color = '#dc3545';
    } else {
        timerElement.style.color = '#555';
    }
}

function timeUp() {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        option.disabled = true;
    });
    
    const currentQuestion = getCurrentQuestion();
    document.querySelectorAll('.option-btn')[currentQuestion.answer].classList.add('correct');
    
    feedbackElement.textContent = `Tempo esgotado! ${currentQuestion.explanation}`;
    feedbackElement.classList.add('incorrect');
    
    nextBtn.disabled = false;
}

// Event Listeners
startBtn.addEventListener('click', showQuizScreen);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initQuiz);

// Iniciar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);