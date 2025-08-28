const questions = [

    {
        question: "When multiple Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
        answer: [
            {text: "Yes, in order to accurately inspect what is done.", correct: true},
            {text: "No, each Scrum Team stands alone.", correct: false},
            {text: "Yes, but only for Scrum Teams whose work has dependencies.", correct: false},
            {text: "No, that is far too hard and must be done in a hardening Sprint.", correct: false}
        ]
    },
    {
        question: "What is the main accountability of the Scrum Master?",
        answer: [
            {text: "Managing the Development Team's performance", correct: false},
            {text: "Establishing Scrum as defined in the Scrum Guide", correct: true},
            {text: "Keeping stakeholders from distracting the Development Team", correct: false},
            {text: "Ensuring the Product Owner writes good User Stories", correct: false}
        ]
    },
    {
        question: "What is Scrum?",
        answer: [
            {text: "A methodology for developing complex products", correct: false},
            {text: "A framework within which people can address complex adaptive problems", correct: true},
            {text: "A defined process for software development", correct: false},
            {text: "A project management technique", correct: false}
        ]
    },
    {
        question: "What comprises Scrum?",
        answer: [
            {text: "Events, Roles, Artifacts, and Rules", correct: true},
            {text: "Events, Documents, Reports, and Meetings", correct: false},
            {text: "Ceremonies, Practices, and Tools", correct: false},
            {text: "Phases, Milestones, and Deliverables", correct: false}
        ]
    },
    {
        question: "Scrum is founded on which theory?",
        answer: [
            {text: "Lean Thinking", correct: false},
            {text: "Empirical Process Control Theory", correct: true},
            {text: "Agile Methodology", correct: false},
            {text: "Systems Thinking", correct: false}
        ]
    },
    {
        question: "What are the three pillars of empiricism in Scrum?",
        answer: [
            {text: "Transparency, Inspection, and Adaptation", correct: true},
            {text: "Planning, Monitoring, and Controlling", correct: false},
            {text: "Commitment, Focus, and Openness", correct: false},
            {text: "Vision, Strategy, and Execution", correct: false}
        ]
    },
    {
        question: "Who is responsible for managing the Product Backlog?",
        answer: [
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Stakeholders", correct: false}
        ]
    },
    {
        question: "What is the maximum size of a Development Team?",
        answer: [
            {text: "7", correct: false},
            {text: "9", correct: true},
            {text: "11", correct: false},
            {text: "No maximum size", correct: false}
        ]
    },
    {
        question: "What is the minimum size of a Development Team?",
        answer: [
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "4", correct: false},
            {text: "5", correct: false}
        ]
    },
    {
        question: "The Scrum Team consists of:",
        answer: [
            {text: "Product Owner, Development Team, and Project Manager", correct: false},
            {text: "Product Owner, Development Team, and Scrum Master", correct: true},
            {text: "Scrum Master, Development Team, and Stakeholders", correct: false},
            {text: "Product Manager, Development Team, and Technical Lead", correct: false}
        ]
    },
    {
        question: "What are the characteristics of a Development Team?",
        answer: [
            {text: "Self-organizing and cross-functional", correct: true},
            {text: "Hierarchical and specialized", correct: false},
            {text: "Manager-led and single-skilled", correct: false},
            {text: "Process-driven and documentation-focused", correct: false}
        ]
    },
    {
        question: "Who has the authority to cancel a Sprint?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Stakeholders", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Sprint Goal?",
        answer: [
            {text: "To provide guidance to the Development Team on why it is building the Increment", correct: true},
            {text: "To define all the features that must be completed", correct: false},
            {text: "To establish a deadline for the Sprint", correct: false},
            {text: "To measure team velocity", correct: false}
        ]
    },
    {
        question: "Who participates in Sprint Planning?",
        answer: [
            {text: "The entire Scrum Team", correct: true},
            {text: "Only the Development Team", correct: false},
            {text: "Product Owner and Scrum Master only", correct: false},
            {text: "Stakeholders and Product Owner only", correct: false}
        ]
    },
    {
        question: "What is the time-box for the Daily Scrum?",
        answer: [
            {text: "30 minutes", correct: false},
            {text: "15 minutes", correct: true},
            {text: "45 minutes", correct: false},
            {text: "It depends on team size", correct: false}
        ]
    },
    {
        question: "Who is responsible for conducting the Daily Scrum?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The Team Lead", correct: false}
        ]
    },
    {
        question: "What is the result of the Sprint Review?",
        answer: [
            {text: "A revised Product Backlog", correct: true},
            {text: "A performance evaluation of the team", correct: false},
            {text: "A detailed project status report", correct: false},
            {text: "A list of bugs to be fixed", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Sprint Retrospective?",
        answer: [
            {text: "To inspect how the last Sprint went and create a plan for improvements", correct: true},
            {text: "To review the product increment", correct: false},
            {text: "To plan the next Sprint", correct: false},
            {text: "To evaluate individual team member performance", correct: false}
        ]
    },
    {
        question: "What percentage of capacity should be spent on Product Backlog refinement?",
        answer: [
            {text: "5%", correct: false},
            {text: "10%", correct: true},
            {text: "20%", correct: false},
            {text: "25%", correct: false}
        ]
    },
    {
        question: "What are the Scrum Artifacts?",
        answer: [
            {text: "Product Backlog, Sprint Backlog, and Increment", correct: true},
            {text: "Vision, Roadmap, and Release Plan", correct: false},
            {text: "Requirements, Design, and Code", correct: false},
            {text: "Epics, Stories, and Tasks", correct: false}
        ]
    },
    {
        question: "Who owns the Sprint Backlog?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The entire Scrum Team", correct: false}
        ]
    },
    {
        question: "When can the Development Team modify the Sprint Backlog?",
        answer: [
            {text: "Only during Sprint Planning", correct: false},
            {text: "Throughout the Sprint", correct: true},
            {text: "Only with Product Owner approval", correct: false},
            {text: "Only during the Daily Scrum", correct: false}
        ]
    },
    {
        question: "What is the Definition of Done?",
        answer: [
            {text: "A shared understanding of what it means for work to be complete", correct: true},
            {text: "A list of tasks for each Sprint", correct: false},
            {text: "The completion criteria set by the Product Owner", correct: false},
            {text: "The acceptance criteria for User Stories", correct: false}
        ]
    },
    {
        question: "Can the Definition of Done be changed during a Sprint?",
        answer: [
            {text: "Yes, anytime during the Sprint", correct: false},
            {text: "No, it cannot be changed", correct: false},
            {text: "Yes, but only during Sprint Retrospective", correct: true},
            {text: "Only with stakeholder approval", correct: false}
        ]
    },
    {
        question: "What is the role of the Scrum Master during the Daily Scrum?",
        answer: [
            {text: "To lead the meeting and ask questions", correct: false},
            {text: "To ensure the meeting happens and stays within 15 minutes", correct: true},
            {text: "To take notes and track progress", correct: false},
            {text: "To assign tasks to team members", correct: false}
        ]
    },
    {
        question: "What is the primary purpose of Sprint Planning?",
        answer: [
            {text: "To plan the work to be performed in the Sprint", correct: true},
            {text: "To review the previous Sprint", correct: false},
            {text: "To estimate the entire Product Backlog", correct: false},
            {text: "To assign tasks to team members", correct: false}
        ]
    },
    {
        question: "Who is responsible for ordering the Product Backlog?",
        answer: [
            {text: "The Development Team", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The Stakeholders", correct: false}
        ]
    },
    {
        question: "What happens to incomplete Product Backlog items at the end of a Sprint?",
        answer: [
            {text: "They are automatically carried over to the next Sprint", correct: false},
            {text: "They are removed from the Product Backlog", correct: false},
            {text: "They are returned to the Product Backlog for re-prioritization", correct: true},
            {text: "They must be completed in overtime", correct: false}
        ]
    },
    {
        question: "What is empiricism?",
        answer: [
            {text: "Making decisions based on experience and observation", correct: true},
            {text: "Following a predefined plan", correct: false},
            {text: "Using theoretical models", correct: false},
            {text: "Relying on expert opinions", correct: false}
        ]
    },
    {
        question: "What is the maximum duration for Sprint Planning for a one-month Sprint?",
        answer: [
            {text: "4 hours", correct: false},
            {text: "6 hours", correct: false},
            {text: "8 hours", correct: true},
            {text: "12 hours", correct: false}
        ]
    },
    {
        question: "Who is responsible for estimating Product Backlog items?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The Stakeholders", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Product Backlog?",
        answer: [
            {text: "To serve as the single source of requirements for any changes to be made to the product", correct: true},
            {text: "To track team velocity", correct: false},
            {text: "To document technical specifications", correct: false},
            {text: "To manage project risks", correct: false}
        ]
    },
    {
        question: "Is the Product Backlog ever complete?",
        answer: [
            {text: "Yes, when all requirements are gathered", correct: false},
            {text: "No, it is never complete", correct: true},
            {text: "Yes, at the end of the project", correct: false},
            {text: "Only for small products", correct: false}
        ]
    },
    {
        question: "What does it mean for a Development Team to be cross-functional?",
        answer: [
            {text: "Team members can work in multiple departments", correct: false},
            {text: "The team has all skills necessary to create a product Increment", correct: true},
            {text: "Team members have multiple job titles", correct: false},
            {text: "The team works on multiple products simultaneously", correct: false}
        ]
    },
    {
        question: "What does it mean for a Development Team to be self-organizing?",
        answer: [
            {text: "They choose how to accomplish their work", correct: true},
            {text: "They work without any management oversight", correct: false},
            {text: "They can change the Scrum framework", correct: false},
            {text: "They report directly to stakeholders", correct: false}
        ]
    },
    {
        question: "During the Sprint, who can add items to the Sprint Backlog?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "Stakeholders", correct: false}
        ]
    },
    {
        question: "What is the Sprint Backlog?",
        answer: [
            {text: "The set of Product Backlog items selected for the Sprint plus a plan for delivering them", correct: true},
            {text: "All Product Backlog items", correct: false},
            {text: "A list of tasks for the Development Team", correct: false},
            {text: "The Definition of Done", correct: false}
        ]
    },
    {
        question: "Who decides the duration of the Sprint?",
        answer: [
            {text: "The Product Owner", correct: false},
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: true},
            {text: "The organization", correct: false}
        ]
    },
    {
        question: "What is the maximum duration of a Sprint?",
        answer: [
            {text: "2 weeks", correct: false},
            {text: "3 weeks", correct: false},
            {text: "1 month", correct: true},
            {text: "6 weeks", correct: false}
        ]
    },
    {
        question: "What happens when a Sprint's horizon is too long?",
        answer: [
            {text: "The Sprint Goal may become invalid", correct: true},
            {text: "The team becomes more productive", correct: false},
            {text: "Planning becomes easier", correct: false},
            {text: "Stakeholders are more satisfied", correct: false}
        ]
    },
    {
        question: "Can Scrum Teams use practices not described in the Scrum Guide?",
        answer: [
            {text: "No, only Scrum Guide practices are allowed", correct: false},
            {text: "Yes, if they help achieve the Sprint Goal", correct: true},
            {text: "Only with Scrum Master approval", correct: false},
            {text: "Only certified practices", correct: false}
        ]
    },
    {
        question: "What is the purpose of the Increment?",
        answer: [
            {text: "To provide a potentially releasable product increment", correct: true},
            {text: "To test the Development Team's skills", correct: false},
            {text: "To satisfy stakeholder requirements", correct: false},
            {text: "To measure team velocity", correct: false}
        ]
    },
    {
        question: "When is an Increment created?",
        answer: [
            {text: "Only at the end of the Sprint", correct: false},
            {text: "Whenever Product Backlog items meet the Definition of Done", correct: true},
            {text: "Only during the Sprint Review", correct: false},
            {text: "When the Product Owner approves it", correct: false}
        ]
    },
    {
        question: "What must an Increment be at the end of a Sprint?",
        answer: [
            {text: "Tested", correct: false},
            {text: "Done", correct: true},
            {text: "Approved by stakeholders", correct: false},
            {text: "Documented", correct: false}
        ]
    },
    {
        question: "Who is responsible for tracking progress toward the Product Goal?",
        answer: [
            {text: "The Scrum Master", correct: false},
            {text: "The Development Team", correct: false},
            {text: "The Product Owner", correct: true},
            {text: "The entire Scrum Team", correct: false}
        ]
    },
    {
        question: "What is the Product Goal?",
        answer: [
            {text: "The long-term objective for the Scrum Team", correct: true},
            {text: "The current Sprint objective", correct: false},
            {text: "The Product Owner's personal goal", correct: false},
            {text: "The organization's business goal", correct: false}
        ]
    },
    {
        question: "How many Product Owners can a product have?",
        answer: [
            {text: "As many as needed", correct: false},
            {text: "One per Development Team", correct: false},
            {text: "One", correct: true},
            {text: "Two for redundancy", correct: false}
        ]
    },
    {
        question: "What does the Product Owner do if they cannot attend Sprint Planning?",
        answer: [
            {text: "Cancel the Sprint Planning", correct: false},
            {text: "Send a representative", correct: false},
            {text: "The Sprint Planning should be rescheduled", correct: true},
            {text: "The Scrum Master takes their place", correct: false}
        ]
    },
    {
        question: "What is the Scrum Master's role in relation to the Product Owner?",
        answer: [
            {text: "To serve the Product Owner by helping with Product Backlog management", correct: true},
            {text: "To manage the Product Owner", correct: false},
            {text: "To replace the Product Owner when needed", correct: false},
            {text: "To approve Product Owner decisions", correct: false}
        ]
    },
    {
        question: "Can the same person be both Scrum Master and Product Owner?",
        answer: [
            {text: "Yes, always recommended", correct: false},
            {text: "No, never allowed", correct: false},
            {text: "Yes, but not recommended due to potential conflicts", correct: true},
            {text: "Only in small teams", correct: false}
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