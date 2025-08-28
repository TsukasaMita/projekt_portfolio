const questions = [ 
    
    {
        question: "What are the Scrum Events?",
        answer: [
            {text: "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective", correct: true},
            {text: "Planning, Development, Testing, Review, Deployment", correct: false},
            {text: "Initiation, Planning, Execution, Monitoring, Closure", correct: false},
            {text: "Requirements, Design, Code, Test, Release", correct: false}
        ]
    },
    {
        question: "What is the maximum duration of Sprint Planning for a 2-week Sprint?",
        answer: [
            {text: "2 hours", correct: false},
            {text: "4 hours", correct: true},
            {text: "6 hours", correct: false},
            {text: "8 hours", correct: false}
        ]
    },
    {
        question: "What questions does Sprint Planning answer?",
        answer: [
            {text: "What can be delivered and how will the work be achieved", correct: true},
            {text: "Who will do what and when", correct: false},
            {text: "What went wrong in the last Sprint", correct: false},
            {text: "How much will it cost and when will it be done", correct: false}
        ]
    },
    {
        question: "Who can attend Sprint Planning besides the Scrum Team?",
        answer: [
            {text: "No one else can attend", correct: false},
            {text: "Anyone the Development Team invites for technical or domain advice", correct: true},
            {text: "All stakeholders must attend", correct: false},
            {text: "Only the Product Manager", correct: false}
        ]
    },
    {
        question: "What is the input to Sprint Planning?",
        answer: [
            {text: "Product Backlog, latest Increment, team capacity, and past performance", correct: true},
            {text: "Only the Product Backlog", correct: false},
            {text: "Project requirements and timeline", correct: false},
            {text: "Stakeholder feedback and market analysis", correct: false}
        ]
    },
    {
        question: "When does the Daily Scrum happen?",
        answer: [
            {text: "At the same time and place every day of the Sprint", correct: true},
            {text: "Whenever the team feels like meeting", correct: false},
            {text: "Only when there are impediments", correct: false},
            {text: "At different times based on team availability", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Daily Scrum?",
        answer: [
            {text: "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog", correct: true},
            {text: "To report status to the Scrum Master", correct: false},
            {text: "To assign tasks for the day", correct: false},
            {text: "To solve all impediments", correct: false}
        ]
    },
    {
        question: "Can stakeholders attend the Daily Scrum?",
        answer: [
            {text: "Yes, but they cannot participate", correct: true},
            {text: "No, it's only for the Development Team", correct: false},
            {text: "Yes, and they can actively participate", correct: false},
            {text: "Only if invited by the Product Owner", correct: false}
        ]
    },
    {
        question: "What happens if the Development Team cannot finish all Sprint Backlog items?",
        answer: [
            {text: "The Sprint must be extended", correct: false},
            {text: "The team must work overtime", correct: false},
            {text: "The Sprint ends on time with completed items", correct: true},
            {text: "The Sprint is cancelled", correct: false}
        ]
    },
    {
        question: "Who attends the Sprint Review?",
        answer: [
            {text: "Scrum Team and stakeholders", correct: true},
            {text: "Only the Development Team", correct: false},
            {text: "Only the Product Owner and stakeholders", correct: false},
            {text: "Everyone in the organization", correct: false}
        ]
    },
    {
        question: "What is the maximum duration of the Sprint Review for a 4-week Sprint?",
        answer: [
            {text: "2 hours", correct: false},
            {text: "4 hours", correct: true},
            {text: "6 hours", correct: false},
            {text: "8 hours", correct: false}
        ]
    },
    {
        question: "What is demonstrated during the Sprint Review?",
        answer: [
            {text: "Only completed and Done Product Backlog items", correct: true},
            {text: "All work done during the Sprint", correct: false},
            {text: "Work in progress", correct: false},
            {text: "Team performance metrics", correct: false}
        ]
    },
    {
        question: "Who is responsible for inviting stakeholders to the Sprint Review?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Development Team", correct: false},
            {text: "The Project Manager", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Sprint Retrospective?",
        answer: [
            {text: "To inspect how the last Sprint went and plan improvements", correct: true},
            {text: "To review the product increment", correct: false},
            {text: "To plan the next Sprint", correct: false},
            {text: "To evaluate team member performance", correct: false}
        ]
    },
    {
        question: "Who attends the Sprint Retrospective?",
        answer: [
            {text: "The Scrum Team", correct: true},
            {text: "The Scrum Team and stakeholders", correct: false},
            {text: "Only the Development Team", correct: false},
            {text: "The entire organization", correct: false}
        ]
    },
    {
        question: "What is the maximum duration of the Sprint Retrospective for a 4-week Sprint?",
        answer: [
            {text: "1.5 hours", correct: false},
            {text: "3 hours", correct: true},
            {text: "4 hours", correct: false},
            {text: "6 hours", correct: false}
        ]
    },
    {
        question: "When does the Sprint Retrospective occur?",
        answer: [
            {text: "At the beginning of each Sprint", correct: false},
            {text: "After the Sprint Review and before the next Sprint Planning", correct: true},
            {text: "During the Sprint", correct: false},
            {text: "Only when there are problems", correct: false}
        ]
    },
    {
        question: "Can the Sprint length be changed during the project?",
        answer: [
            {text: "No, it must remain constant", correct: false},
            {text: "Yes, but it should be consistent once established", correct: true},
            {text: "Only by the Product Owner", correct: false},
            {text: "Only with stakeholder approval", correct: false}
        ]
    },
    {
        question: "What is the Sprint?",
        answer: [
            {text: "A container for all other Scrum events", correct: true},
            {text: "Just the development phase", correct: false},
            {text: "Only the time when code is written", correct: false},
            {text: "The testing phase of development", correct: false}
        ]
    },
    {
        question: "When can a new Sprint start?",
        answer: [
            {text: "Only after a break between Sprints", correct: false},
            {text: "Immediately after the previous Sprint ends", correct: true},
            {text: "After stakeholder approval", correct: false},
            {text: "When the Product Owner decides", correct: false}
        ]
    },
    {
        question: "What happens to undone work when a Sprint is cancelled?",
        answer: [
            {text: "It is discarded", correct: false},
            {text: "It is re-estimated and put back on the Product Backlog", correct: true},
            {text: "It automatically goes to the next Sprint", correct: false},
            {text: "It is completed in overtime", correct: false}
        ]
    },
    {
        question: "Who can cancel a Sprint?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: false},
            {text: "Only the Product Owner", correct: true},
            {text: "Any member of the Scrum Team", correct: false}
        ]
    },
    {
        question: "Under what circumstances might a Sprint be cancelled?",
        answer: [
            {text: "When the Sprint Goal becomes obsolete", correct: true},
            {text: "When the team is behind schedule", correct: false},
            {text: "When stakeholders are unhappy", correct: false},
            {text: "When there are too many bugs", correct: false}
        ]
    },
    {
        question: "What should the Development Team do if they finish all Sprint Backlog items early?",
        answer: [
            {text: "Start the next Sprint early", correct: false},
            {text: "Work with the Product Owner to select additional items", correct: true},
            {text: "Take a break until the Sprint ends", correct: false},
            {text: "Focus only on improving code quality", correct: false}
        ]
    },
    {
        question: "Can additional meetings be held during the Sprint?",
        answer: [
            {text: "No, only Scrum events are allowed", correct: false},
            {text: "Yes, if they facilitate achieving the Sprint Goal", correct: true},
            {text: "Only with Scrum Master approval", correct: false},
            {text: "Only if all team members agree", correct: false}
        ]
    },
    {
        question: "What is the primary outcome of Sprint Planning?",
        answer: [
            {text: "A Sprint Goal and Sprint Backlog", correct: true},
            {text: "Task assignments for each team member", correct: false},
            {text: "A detailed project schedule", correct: false},
            {text: "Risk assessment for the Sprint", correct: false}
        ]
    },
    {
        question: "How often should Product Backlog refinement occur?",
        answer: [
            {text: "Only during Sprint Planning", correct: false},
            {text: "Ongoing throughout the Sprint", correct: true},
            {text: "Only at the end of each Sprint", correct: false},
            {text: "Once per month", correct: false}
        ]
    },
    {
        question: "Who facilitates Scrum events?",
        answer: [
            {text: "Always the Scrum Master", correct: false},
            {text: "The Scrum Master when requested or needed", correct: true},
            {text: "The Product Owner", correct: false},
            {text: "Rotating team members", correct: false}
        ]
    },
    {
        question: "Can the Daily Scrum be skipped if nothing has changed?",
        answer: [
            {text: "Yes, if there's nothing to discuss", correct: false},
            {text: "No, it should happen every day", correct: true},
            {text: "Only if the Scrum Master approves", correct: false},
            {text: "Only if all team members agree", correct: false}
        ]
    },
    {
        question: "What is the focus of the Daily Scrum?",
        answer: [
            {text: "Progress toward the Sprint Goal", correct: true},
            {text: "Individual task updates", correct: false},
            {text: "Problem solving", correct: false},
            {text: "Status reporting to management", correct: false}
        ]
    },
    {
        question: "When should impediments discussed in the Daily Scrum be resolved?",
        answer: [
            {text: "During the Daily Scrum", correct: false},
            {text: "After the Daily Scrum", correct: true},
            {text: "Only in the Sprint Retrospective", correct: false},
            {text: "At the end of the Sprint", correct: false}
        ]
    },
    {
        question: "What is the recommended approach if the Daily Scrum goes over 15 minutes?",
        answer: [
            {text: "Continue until everyone has spoken", correct: false},
            {text: "Take conversations offline", correct: true},
            {text: "Schedule a longer meeting next time", correct: false},
            {text: "Skip some team members", correct: false}
        ]
    },
    {
        question: "Who owns the Definition of Done?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Scrum Team", correct: true},
            {text: "The organization", correct: false}
        ]
    },
    {
        question: "When can the Definition of Done be updated?",
        answer: [
            {text: "Only at project start", correct: false},
            {text: "During the Sprint Retrospective", correct: true},
            {text: "Only at project end", correct: false},
            {text: "Anytime during the Sprint", correct: false}
        ]
    },
    {
        question: "What happens if organizational standards conflict with the team's Definition of Done?",
        answer: [
            {text: "The team's Definition of Done takes precedence", correct: false},
            {text: "The organizational standards take precedence", correct: true},
            {text: "They negotiate a compromise", correct: false},
            {text: "The Scrum Master decides", correct: false}
        ]
    },
    {
        question: "Can the Sprint Review be cancelled if there is no Done work?",
        answer: [
            {text: "Yes, there's nothing to review", correct: false},
            {text: "No, the Sprint Review should still be held", correct: true},
            {text: "Only if stakeholders agree", correct: false},
            {text: "Only if the Product Owner decides", correct: false}
        ]
    },
    {
        question: "What is the main purpose of Sprint Review?",
        answer: [
            {text: "To inspect the Increment and adapt the Product Backlog", correct: true},
            {text: "To evaluate team performance", correct: false},
            {text: "To plan the next Sprint", correct: false},
            {text: "To get stakeholder approval", correct: false}
        ]
    },
    {
        question: "Is the Sprint Review a demo session?",
        answer: [
            {text: "Yes, it's just a demo", correct: false},
            {text: "No, it's a working session for collaboration", correct: true},
            {text: "Only if stakeholders request it", correct: false},
            {text: "It depends on the Product Owner", correct: false}
        ]
    },
    {
        question: "Who decides what to demonstrate in the Sprint Review?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The stakeholders", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Development Team", correct: false}
        ]
    },
    {
        question: "What should be the outcome of the Sprint Retrospective?",
        answer: [
            {text: "A list of problems", correct: false},
            {text: "Identified improvements for the next Sprint", correct: true},
            {text: "Individual performance reviews", correct: false},
            {text: "A new project plan", correct: false}
        ]
    },
    {
        question: "Can external facilitators be used for Sprint Retrospectives?",
        answer: [
            {text: "No, only the Scrum Master can facilitate", correct: false},
            {text: "Yes, when beneficial for the team", correct: true},
            {text: "Only if the Scrum Master is unavailable", correct: false},
            {text: "Only with Product Owner approval", correct: false}
        ]
    },
    {
        question: "What is the Sprint Heart Beat?",
        answer: [
            {text: "The rhythm of Scrum events", correct: true},
            {text: "The team's working hours", correct: false},
            {text: "The velocity of the team", correct: false},
            {text: "The Product Owner's availability", correct: false}
        ]
    },
    {
        question: "Should all Scrum events be time-boxed?",
        answer: [
            {text: "Yes, except the Sprint", correct: false},
            {text: "Yes, all events including the Sprint", correct: true},
            {text: "No, only formal meetings", correct: false},
            {text: "Only Sprint Planning and Review", correct: false}
        ]
    },
    {
        question: "What is the benefit of time-boxing Scrum events?",
        answer: [
            {text: "It ensures efficiency and focus", correct: true},
            {text: "It allows for more meetings", correct: false},
            {text: "It satisfies management requirements", correct: false},
            {text: "It prevents team collaboration", correct: false}
        ]
    },
    {
        question: "Can Scrum events be extended beyond their time-box?",
        answer: [
            {text: "Yes, if needed to reach consensus", correct: false},
            {text: "No, they should end when time-boxed", correct: true},
            {text: "Only with team agreement", correct: false},
            {text: "Only Sprint Planning can be extended", correct: false}
        ]
    },
    {
        question: "What happens if a Scrum event is not held?",
        answer: [
            {text: "Nothing, it's not required", correct: false},
            {text: "It results in reduced transparency and lost opportunities to inspect and adapt", correct: true},
            {text: "The Sprint can continue normally", correct: false},
            {text: "Only the Scrum Master is affected", correct: false}
        ]
    },
    {
        question: "Who determines the agenda for Sprint Planning?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: false},
            {text: "It's predefined in the Scrum Guide", correct: true},
            {text: "The Development Team", correct: false}
        ]
    },
    {
        question: "Can Sprint Planning be done in phases?",
        answer: [
            {text: "No, it must be done in one session", correct: false},
            {text: "Yes, it can address 'what' and 'how' separately", correct: true},
            {text: "Only for long Sprints", correct: false},
            {text: "Only if the team is distributed", correct: false}
        ]
    },
    {
        question: "What is the main deliverable of Sprint Planning?",
        answer: [
            {text: "Sprint Backlog", correct: true},
            {text: "Task list", correct: false},
            {text: "Time estimates", correct: false},
            {text: "Resource allocation plan", correct: false}
        ]
    },
    {
        question: "Can the Scrum Team modify the Sprint Goal during the Sprint?",
        answer: [
            {text: "Yes, anytime they want", correct: false},
            {text: "No, the Sprint Goal is immutable", correct: false},
            {text: "Yes, if they negotiate with the Product Owner and it doesn't endanger the Sprint Goal", correct: true},
            {text: "Only the Product Owner can modify it", correct: false}
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