const questions = [
   {
  question: "Which of the following are topics for the Developers to discuss at the Daily Scrum as they inspect their progress toward the Sprint Goal?",
  answer: [
    {text: "What have we learned since yesterday, and how should we modify our plan to increase our ability to meet the Sprint Goal?", correct: true},
    {text: "What will I be working on tomorrow?", correct: false},
    {text: "How many hours did I spend on the project yesterday?", correct: false},
    {text: "Will today's work negatively impact our ability to meet the Sprint Goal for the Sprint following this one?", correct: false},
    {text: "Why were you late?", correct: false},
    {text: "Are there any impediments blocking progress toward the Sprint Goal?", correct: true},
    {text: "Are there any decisions that need to be made to maintain progress toward the Sprint Goal?", correct: true}
  ]
},
{
  question: "A Scrum Team is a cohesive unit of professionals that consists of which of the following?",
  answer: [
    {text: "Users.", correct: false},
    {text: "One Product Owner.", correct: true},
    {text: "Customers.", correct: false},
    {text: "Developers.", correct: true},
    {text: "One Scrum Master.", correct: true}
  ]
},
{
  question: "Why is the Daily Scrum held at the same time and same place?",
  answer: [
    {text: "The Product Owner demands it.", correct: false},
    {text: "Rooms are hard to book and must be booked in advance.", correct: false},
    {text: "The place can be named.", correct: false},
    {text: "The consistency reduces complexity.", correct: true}
  ]
},
{
  question: "A Scrum Master is working with a Scrum Team that has Developers in different physical locations. The Developers meet in a variety of meeting rooms and have much to do logistically (for example: reserve meeting rooms and set up conference calls) before the Daily Scrum. What action should the Scrum Master take?",
  answer: [
    {text: "Allow the Developers to self-manage and determine for themselves what to do.", correct: true},
    {text: "Ask the Developers to alternate who is responsible for meeting setup.", correct: false},
    {text: "Set up the meeting and tell the Scrum Team that is how it will be done.", correct: false},
    {text: "Inform management and ask them to solve it.", correct: false}
  ]
},
{
  question: "Who creates the Definition of Done?",
  answer: [
    {text: "The Scrum Team", correct: true},
    {text: "The Developers", correct: false},
    {text: "The Product Owner", correct: false},
    {text: "The Scrum Master", correct: false}
  ]
},
{
  question: "Why does the Product Owner want the Developers to adhere to its Definition of Done?",
  answer: [
    {text: "To predict the team's productivity over time.", correct: false},
    {text: "To have complete transparency into what has been done at the end of each Sprint.", correct: true},
    {text: "To know what the team will deliver over the next three Sprints.", correct: false},
    {text: "To be able to reprimand the team when they do not meet their velocity goal for the Sprint.", correct: false}
  ]
},
{
  question: "How much time is required after a Sprint to prepare for the next Sprint?",
  answer: [
    {text: "The break between Sprints is timeboxed to one-week for a one-month Sprint, and usually less for shorter Sprints.", correct: false},
    {text: "Enough time for the requirements for the next Sprint to be determined and documented.", correct: false},
    {text: "Enough time for the Developers to finish the testing from the last Sprint.", correct: false},
    {text: "None. A new Sprint starts immediately following the end of the previous Sprint.", correct: true},
    {text: "All of the above are allowed depending on the situation.", correct: false}
  ]
},
{
  question: "Who determines how many Product Backlog items the Developers select for a Sprint?",
  answer: [
    {text: "The stakeholders attending Sprint Planning.", correct: false},
    {text: "The Scrum Team", correct: false},
    {text: "The Product Owner.", correct: false},
    {text: "The Developers.", correct: true},
    {text: "The Scrum Master.", correct: false}
  ]
},
{
  question: "What are two ways that regulatory compliance issues are dealt with in Scrum?",
  answer: [
    {text: "They are addressed along with functional development of the product.", correct: true},
    {text: "They are addressed by a separate team who is responsible for compliance issues.", correct: false},
    {text: "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality, no matter how small.", correct: true},
    {text: "They are discussed, determined, and documented before the actual feature development Sprints.", correct: false}
  ]
},
{
  question: "Which phrase best describes a Product Owner?",
  answer: [
    {text: "Team manager.", correct: false},
    {text: "Requirements engineer.", correct: false},
    {text: "Value optimizer.", correct: true},
    {text: "Go-between for the Developers and the customers.", correct: false}
  ]
},
{
  question: "During Sprint Planning the Product Owner and the Developers are unable to reach an understanding about the highest order Product Backlog items. Because of this, the Developers are unable to determine how many Product Backlog items they can forecast for the upcoming Sprint. However, the Product Owner and the Developers are able to agree on a Sprint Goal. Which of the following actions should the Scrum Master support?",
  answer: [
    {text: "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint.", correct: false},
    {text: "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting.", correct: false},
    {text: "Continue the Sprint Planning event past its timebox until an adequate number of Product Backlog items are well enough understood for the Developers to make a complete forecast. Then start the Sprint.", correct: false},
    {text: "During the next Sprint Retrospective discuss why this happened and what changes will make it less likely to recur.", correct: true},
    {text: "Forecast the Product Backlog items that are most likely to meet the Sprint Goal and create the Sprint Backlog. Conclude Sprint Planning and start the development work. Continue to analyze, decompose, and create additional functionality during the Sprint.", correct: true}
  ]
}
];


const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

const FULL_DASH_ARRAY = 2 * Math.PI * 26; // Umfang des Kreises (r=26)
const timerCircle = document.querySelector("#circle-timer circle");
const timerText = document.getElementById("circle-timer-text");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let timerInterval;
let timeLeft = 50;
const maxTime = 50;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Antwort prüfen";
    showQuestion();
}

function showQuestion() {
    resetState();
    answered = false;
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Prüfen, wie viele richtige Antworten es gibt
    const correctCount = currentQuestion.answer.filter(a => a.correct).length;
    const inputType = correctCount > 1 ? "checkbox" : "radio";

    currentQuestion.answer.forEach((answer, idx) => {
        const label = document.createElement("label");
        label.style.display = "block";
        const input = document.createElement("input");
        input.type = inputType;
        input.name = "answer";
        input.value = idx;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + answer.text));
        answerButtons.appendChild(label);
    });
    nextButton.style.display = "block";
    nextButton.innerHTML = "Antwort prüfen";
    nextButton.onclick = selectAnswer;

    // Fortschrittsbalken und Text aktualisieren
    progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    // Timer starten
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = maxTime;
    updateCircleTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateCircleTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(true); // Timer abgelaufen, automatisch auswerten
        }
    }, 1000);
}

function updateCircleTimer() {
    // Kreis-Text
    timerText.textContent = timeLeft;

    // Kreis-Farbe
    let color = "#00c853"; // grün
    if (timeLeft <= maxTime * 0.3) {
        color = "#d50000"; // rot
    } else if (timeLeft <= maxTime * 0.6) {
        color = "#ff9800"; // orange
    }
    timerCircle.setAttribute("stroke", color);

    // Kreis-Fortschritt
    const progress = timeLeft / maxTime;
    timerCircle.setAttribute(
        "stroke-dasharray",
        `${progress * FULL_DASH_ARRAY} ${FULL_DASH_ARRAY}`
    );
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = "none";
    clearInterval(timerInterval); // Timer stoppen, wenn Frage gewechselt wird
}

function selectAnswer(timeout = false) {
    if (answered) return;
    answered = true;
    clearInterval(timerInterval);

    const inputs = answerButtons.querySelectorAll('input[name="answer"]');
    const correct = questions[currentQuestionIndex].answer.map(a => a.correct);

    const isMultiple = inputs.length > 0 && inputs[0].type === "checkbox";
    let isCorrect = false;

    if (isMultiple) {
        const selected = Array.from(inputs).map(input => input.checked);
        isCorrect = selected.every((val, idx) => val === correct[idx]);
    } else {
        const selectedIndex = Array.from(inputs).findIndex(input => input.checked);
        isCorrect = correct[selectedIndex] === true && correct.filter(c => c).length === 1;
    }

    if(isCorrect) score++;

    Array.from(inputs).forEach((input, idx) => {
        if (correct[idx]) {
            input.parentElement.style.background = "#90ee90";
        } else if (input.checked) {
            input.parentElement.style.background = "#ffcccb";
        } else {
            input.parentElement.style.background = "";
        }
        input.disabled = true;
    });

    if (timeout) {
        // Optional: Zeige Hinweis, dass die Zeit abgelaufen ist
        nextButton.innerHTML = "Zeit abgelaufen – Weiter";
    } else {
        nextButton.innerHTML = currentQuestionIndex < questions.length - 1 ? "Next" : "Show Score";
    }
    nextButton.onclick = handleNextButton;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Du hast ${score} von ${questions.length} Punkten erreicht!`;
    nextButton.innerHTML = "Nochmal spielen";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

startQuiz();