const questions = [
    
    {
        question: "What is the Product Owner accountable for?",
        answer: [
            {text: "Maximizing the value of the product", correct: true},
            {text: "Managing the Development Team", correct: false},
            {text: "Ensuring Scrum is implemented correctly", correct: false},
            {text: "Technical architecture decisions", correct: false}
        ]
    },
    {
        question: "Can the Product Owner delegate their responsibilities?",
        answer: [
            {text: "Yes, to anyone in the organization", correct: false},
            {text: "No, they must do everything personally", correct: false},
            {text: "Yes, but they remain accountable", correct: true},
            {text: "Only to the Scrum Master", correct: false}
        ]
    },
    {
        question: "What is the Development Team accountable for?",
        answer: [
            {text: "Creating a valuable, useful Increment every Sprint", correct: true},
            {text: "Following the Product Owner's detailed instructions", correct: false},
            {text: "Managing the Product Backlog", correct: false},
            {text: "Reporting to the Scrum Master", correct: false}
        ]
    },
    {
        question: "Who has the authority to change the Development Team composition?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: false},
            {text: "The Development Team itself", correct: true},
            {text: "Senior management", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if the Product Owner is not doing their job well?",
        answer: [
            {text: "Take over Product Owner responsibilities", correct: false},
            {text: "Report to management", correct: false},
            {text: "Coach and help the Product Owner understand their role", correct: true},
            {text: "Ignore the situation", correct: false}
        ]
    },
    {
        question: "Who is responsible for managing external stakeholders?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Development Team", correct: false},
            {text: "The Project Manager", correct: false}
        ]
    },
    {
        question: "Can a Development Team member also be the Product Owner?",
        answer: [
            {text: "Yes, it's recommended", correct: false},
            {text: "No, it's prohibited", correct: false},
            {text: "Yes, but it's not recommended", correct: true},
            {text: "Only in small organizations", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if asked to remove a team member?",
        answer: [
            {text: "Immediately remove the team member", correct: false},
            {text: "Discuss with the team first", correct: false},
            {text: "Coach the team on self-organization and conflict resolution", correct: true},
            {text: "Escalate to HR", correct: false}
        ]
    },
    {
        question: "Who decides how much work the Development Team takes on in a Sprint?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The stakeholders", correct: false}
        ]
    },
    {
        question: "What is the Scrum Master's primary focus?",
        answer: [
            {text: "Managing the team's daily activities", correct: false},
            {text: "Ensuring Scrum effectiveness", correct: true},
            {text: "Writing user stories", correct: false},
            {text: "Tracking project progress", correct: false}
        ]
    },
    {
        question: "Who is responsible for turning Product Backlog items into Increments?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "External contractors", correct: false}
        ]
    },
    {
        question: "Can the Scrum Master also be a developer?",
        answer: [
            {text: "No, never", correct: false},
            {text: "Yes, if they can fulfill both roles effectively", correct: true},
            {text: "Only in small teams", correct: false},
            {text: "Only with Product Owner approval", correct: false}
        ]
    },
    {
        question: "Who decides the technical approach for implementing Product Backlog items?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The technical architect", correct: false}
        ]
    },
    {
        question: "What should the Product Owner do if they disagree with the Development Team's estimates?",
        answer: [
            {text: "Override the estimates", correct: false},
            {text: "Negotiate and help the team understand trade-offs", correct: true},
            {text: "Escalate to management", correct: false},
            {text: "Find a new Development Team", correct: false}
        ]
    },
    {
        question: "Who is responsible for ensuring the Scrum Team adheres to Scrum theory and practices?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: true},
            {text: "Senior management", correct: false}
        ]
    },
    {
        question: "Can the Product Owner attend the Daily Scrum?",
        answer: [
            {text: "No, it's only for the Development Team", correct: false},
            {text: "Yes, but they cannot participate", correct: true},
            {text: "Yes, and they should lead it", correct: false},
            {text: "Only if invited by the Scrum Master", correct: false}
        ]
    },
    {
        question: "Who determines the Definition of Done if there's no organizational standard?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The stakeholders", correct: false}
        ]
    },
    {
        question: "What happens if the Development Team cannot complete the Sprint Goal?",
        answer: [
            {text: "The Sprint should be cancelled", correct: false},
            {text: "They should work overtime", correct: false},
            {text: "They should collaborate with the Product Owner to re-negotiate scope", correct: true},
            {text: "They should be replaced", correct: false}
        ]
    },
    {
        question: "Who is responsible for coaching the organization on Scrum adoption?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: true},
            {text: "External consultants", correct: false}
        ]
    },
    {
        question: "Can the Development Team refuse to implement a Product Backlog item?",
        answer: [
            {text: "No, they must implement whatever the Product Owner wants", correct: false},
            {text: "Yes, if it conflicts with the Definition of Done", correct: true},
            {text: "Only with Scrum Master approval", correct: false},
            {text: "Only if it's technically impossible", correct: false}
        ]
    },
    {
        question: "Who has the final say on the content and priority of the Product Backlog?",
        answer: [
            {text: "The stakeholders", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Scrum Master", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if the Development Team asks for help with technical problems?",
        answer: [
            {text: "Solve the problems directly", correct: false},
            {text: "Help them find solutions or remove impediments", correct: true},
            {text: "Tell them to figure it out themselves", correct: false},
            {text: "Escalate to management", correct: false}
        ]
    },
    {
        question: "Who is accountable for ensuring Product Backlog items conform to the Definition of Done?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "Quality Assurance team", correct: false}
        ]
    },
    {
        question: "Can the Product Owner change requirements during the Sprint?",
        answer: [
            {text: "Yes, anytime they want", correct: false},
            {text: "No, never during the Sprint", correct: false},
            {text: "Yes, through collaboration with the Development Team if it doesn't endanger the Sprint Goal", correct: true},
            {text: "Only with Scrum Master approval", correct: false}
        ]
    },
    {
        question: "What is the Development Team's responsibility regarding technical debt?",
        answer: [
            {text: "Ignore it to deliver faster", correct: false},
            {text: "Only address it when the Product Owner prioritizes it", correct: false},
            {text: "Manage it as part of their professional responsibility", correct: true},
            {text: "Wait for a separate technical debt Sprint", correct: false}
        ]
    },
    {
        question: "Who should handle impediments that the Development Team cannot solve?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "Senior management", correct: false},
            {text: "The Scrum Master", correct: true},
            {text: "External consultants", correct: false}
        ]
    },
    {
        question: "Can the Scrum Master make decisions for the Development Team?",
        answer: [
            {text: "Yes, that's their authority", correct: false},
            {text: "No, the Development Team is self-organizing", correct: true},
            {text: "Only in emergencies", correct: false},
            {text: "Only with Product Owner approval", correct: false}
        ]
    },
    {
        question: "Who determines if a Product Backlog item meets the Definition of Done?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The stakeholders", correct: false}
        ]
    },
    {
        question: "What should the Product Owner do if stakeholders want to add new items mid-Sprint?",
        answer: [
            {text: "Add them immediately to the Sprint Backlog", correct: false},
            {text: "Add them to the Product Backlog for future consideration", correct: true},
            {text: "Ignore the stakeholders", correct: false},
            {text: "Cancel the current Sprint", correct: false}
        ]
    },
    {
        question: "Who is responsible for the Scrum Team's effectiveness?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: true},
            {text: "Senior management", correct: false}
        ]
    },
    {
        question: "Can the Development Team add items to the Sprint Backlog during the Sprint?",
        answer: [
            {text: "No, only during Sprint Planning", correct: false},
            {text: "Yes, if needed to achieve the Sprint Goal", correct: true},
            {text: "Only with Product Owner approval", correct: false},
            {text: "Only during the Daily Scrum", correct: false}
        ]
    },
    {
        question: "Who decides when to release the Increment?",
        answer: [
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The stakeholders", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if the Product Owner is not available for Sprint Planning?",
        answer: [
            {text: "Proceed with Sprint Planning anyway", correct: false},
            {text: "Cancel Sprint Planning", correct: false},
            {text: "Help reschedule Sprint Planning", correct: true},
            {text: "Act as Product Owner for the session", correct: false}
        ]
    },
    {
        question: "Who is responsible for ensuring that Product Backlog items are transparent and understood?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "Business analysts", correct: false}
        ]
    },
    {
        question: "Can the Development Team work on items not in the Sprint Backlog?",
        answer: [
            {text: "Yes, if they have spare time", correct: false},
            {text: "No, only Sprint Backlog items", correct: false},
            {text: "Yes, if it helps achieve the Sprint Goal", correct: true},
            {text: "Only with Scrum Master permission", correct: false}
        ]
    },
    {
        question: "Who should the Development Team consult when they need clarification on Product Backlog items?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The stakeholders directly", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "Subject matter experts", correct: false}
        ]
    },
    {
        question: "What is the Scrum Master's role during Sprint Planning?",
        answer: [
            {text: "To assign tasks to team members", correct: false},
            {text: "To facilitate and ensure the event serves its purpose", correct: true},
            {text: "To make technical decisions", correct: false},
            {text: "To prioritize the Product Backlog", correct: false}
        ]
    },
    {
        question: "Can the Product Owner be part of multiple Scrum Teams?",
        answer: [
            {text: "No, one Product Owner per team only", correct: false},
            {text: "Yes, if the teams work on the same product", correct: true},
            {text: "Only with Scrum Master approval", correct: false},
            {text: "Only in small organizations", correct: false}
        ]
    },
    {
        question: "Who ensures that the Development Team understands the items in the Product Backlog?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team themselves", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "Business analysts", correct: false}
        ]
    },
    {
        question: "What should the Development Team do if they identify a better way to achieve the Sprint Goal?",
        answer: [
            {text: "Wait until the next Sprint to implement it", correct: false},
            {text: "Adapt their plan and inform the Product Owner", correct: true},
            {text: "Ask the Scrum Master for permission", correct: false},
            {text: "Continue with the original plan", correct: false}
        ]
    },
    {
        question: "Who has the authority to add new members to the Development Team?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: false},
            {text: "The Development Team with organizational support", correct: true},
            {text: "Senior management", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if two team members have a conflict?",
        answer: [
            {text: "Take sides and resolve it", correct: false},
            {text: "Ignore it and let them work it out", correct: false},
            {text: "Facilitate a resolution or help them find conflict resolution techniques", correct: true},
            {text: "Report it to management", correct: false}
        ]
    },
    {
        question: "Who decides the technical standards and practices for the Development Team?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The organization's technical lead", correct: false}
        ]
    },
    {
        question: "Can the Product Owner delegate Product Backlog ordering to the Development Team?",
        answer: [
            {text: "Yes, it's recommended", correct: false},
            {text: "No, the Product Owner must order it personally", correct: true},
            {text: "Only for technical items", correct: false},
            {text: "Only with Scrum Master approval", correct: false}
        ]
    },
    {
        question: "What is the Development Team's accountability regarding Sprint success?",
        answer: [
            {text: "Individual accountability for assigned tasks", correct: false},
            {text: "Collective accountability for Sprint success", correct: true},
            {text: "No accountability, only the Product Owner is accountable", correct: false},
            {text: "Accountability only to the Scrum Master", correct: false}
        ]
    },
    {
        question: "Who should make trade-off decisions between scope, quality, and time?",
        answer: [
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner with Development Team input", correct: true},
            {text: "The stakeholders", correct: false}
        ]
    },
    {
        question: "What should the Scrum Master do if the organization wants detailed progress reports?",
        answer: [
            {text: "Create the reports themselves", correct: false},
            {text: "Ask the Development Team to create reports", correct: false},
            {text: "Help the organization understand Scrum transparency and alternative metrics", correct: true},
            {text: "Refuse to provide any information", correct: false}
        ]
    },
    {
        question: "Who determines the skills needed in the Development Team?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team based on the work they need to do", correct: true},
            {text: "Human Resources", correct: false}
        ]
    },
    {
        question: "Can the Scrum Master assign tasks to Development Team members?",
        answer: [
            {text: "Yes, that's part of their role", correct: false},
            {text: "No, the Development Team self-organizes", correct: true},
            {text: "Only during Sprint Planning", correct: false},
            {text: "Only with Product Owner approval", correct: false}
        ]
    },
    {
        question: "Who is responsible for maximizing the value delivered by the Scrum Team?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The entire Scrum Team collectively", correct: false}
        ]
    },
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