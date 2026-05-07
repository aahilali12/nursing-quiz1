const questions = [
    { q: "Basic Human Needs Model was proposed by:", a: ["Florence Nightingale", "Dufferin", "Abraham Maslow", "Travis"], correct: 2 },
    { q: "Which need comes as level 5 in Maslow’s Hierarchy?", a: ["Physiological", "Self-esteem", "Self-Actualization", "Safety"], correct: 2 },
    { q: "Neutral point in Illness-wellness continuum indicates:", a: ["Disability", "No discernable illness/wellness", "Complete health", "Requires treatment"], correct: 1 },
    { q: "Which need is the most basic in Maslow’s Hierarchy?", a: ["Self-Actualization", "Self-esteem", "Physiological", "Safety"], correct: 2 },
    { q: "Which is a physiological cause of illness?", a: ["Life experiences", "Socio economic factor", "Broken family", "Abnormal growth of tissues"], correct: 3 },
    { q: "An environmental risk factor for illness is:", a: ["Air pollution", "Tumors", "Trauma", "Infection"], correct: 0 }
];

let currentQ = 0;
let score = 0;
let studentName = "";

function startApp() {
    studentName = document.getElementById('username').value;
    if(!studentName) return alert("Please enter your name");
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const qData = questions[currentQ];
    document.getElementById('q-title').innerText = `${currentQ + 1}. ${qData.q}`;
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    qData.a.forEach((opt, index) => {
        container.innerHTML += `
            <label class="option-label">
                <input type="radio" name="quiz-opt" value="${index}"> ${opt}
            </label>
        `;
    });
    
    const progress = ((currentQ) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";
}

function nextQuestion() {
    const selected = document.querySelector('input[name="quiz-opt"]:checked');
    if(!selected) return alert("Please select an answer!");

    if(parseInt(selected.value) === questions[currentQ].correct) {
        score++;
    }

    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-name').innerText = studentName + ", your result:";
    document.getElementById('final-score').innerText = score + " / " + questions.length;

    if(score === questions.length) {
        document.getElementById('celebration-emoji').classList.remove('hidden');
    }
}