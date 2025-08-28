const questions = [

{
        question: "What are the five Scrum Values?",
        answer: [
            {text: "Commitment, Courage, Focus, Openness, and Respect", correct: true},
            {text: "Honesty, Trust, Dedication, Excellence, and Teamwork", correct: false},
            {text: "Quality, Speed, Efficiency, Innovation, and Collaboration", correct: false},
            {text: "Planning, Execution, Monitoring, Control, and Improvement", correct: false}
        ]
    },
    {
        question: "Which Scrum Value is demonstrated when team members share their challenges openly?",
        answer: [
            {text: "Commitment", correct: false},
            {text: "Courage", correct: false},
            {text: "Openness", correct: true},
            {text: "Focus", correct: false}
        ]
    },
    {
        question: "Which Scrum Value supports the team in doing the right thing and working on tough problems?",
        answer: [
            {text: "Respect", correct: false},
            {text: "Courage", correct: true},
            {text: "Focus", correct: false},
            {text: "Commitment", correct: false}
        ]
    },
    {
        question: "Which Scrum Value helps the team concentrate on the Sprint work and Sprint Goal?",
        answer: [
            {text: "Openness", correct: false},
            {text: "Respect", correct: false},
            {text: "Focus", correct: true},
            {text: "Courage", correct: false}
        ]
    },
    {
        question: "Which Scrum Value is shown when team members acknowledge each other's skills and expertise?",
        answer: [
            {text: "Commitment", correct: false},
            {text: "Openness", correct: false},
            {text: "Respect", correct: true},
            {text: "Focus", correct: false}
        ]
    },
    {
        question: "What does commitment in Scrum mean?",
        answer: [
            {text: "Committing to fixed scope and deadlines", correct: false},
            {text: "Committing to achieving the goals and supporting each other", correct: true},
            {text: "Committing to work overtime when needed", correct: false},
            {text: "Committing to following all processes strictly", correct: false}
        ]
    },
    {
        question: "Why is transparency important in Scrum?",
        answer: [
            {text: "To satisfy management requirements", correct: false},
            {text: "To enable inspection and adaptation", correct: true},
            {text: "To create detailed documentation", correct: false},
            {text: "To assign blame when things go wrong", correct: false}
        ]
    },
    {
        question: "What does empirical process control mean?",
        answer: [
            {text: "Following detailed plans and procedures", correct: false},
            {text: "Making decisions based on observation and experimentation", correct: true},
            {text: "Using theoretical models to predict outcomes", correct: false},
            {text: "Relying on expert opinions and best practices", correct: false}
        ]
    },
    {
        question: "What is the purpose of inspection in Scrum?",
        answer: [
            {text: "To find fault and assign blame", correct: false},
            {text: "To detect undesirable variances and adapt accordingly", correct: true},
            {text: "To create detailed reports for management", correct: false},
            {text: "To ensure compliance with organizational standards", correct: false}
        ]
    },
    {
        question: "When should adaptation occur in Scrum?",
        answer: [
            {text: "Only at the end of the project", correct: false},
            {text: "As soon as possible when deviations are detected", correct: true},
            {text: "Only during Sprint Retrospectives", correct: false},
            {text: "When management approves changes", correct: false}
        ]
    },
    {
        question: "What is self-organization in Scrum?",
        answer: [
            {text: "Working without any guidance or structure", correct: false},
            {text: "Choosing how to best accomplish work within the Scrum framework", correct: true},
            {text: "Making decisions without consulting anyone", correct: false},
            {text: "Ignoring organizational policies and procedures", correct: false}
        ]
    },
    {
        question: "What does cross-functionality mean for a Development Team?",
        answer: [
            {text: "Each member can do every type of work", correct: false},
            {text: "The team collectively has all skills needed to create the Increment", correct: true},
            {text: "Team members work across multiple departments", correct: false},
            {text: "The team can work on multiple products simultaneously", correct: false}
        ]
    },
    {
        question: "Why does Scrum emphasize working software over comprehensive documentation?",
        answer: [
            {text: "Documentation is not important", correct: false},
            {text: "Working software provides more value to customers", correct: true},
            {text: "Documentation takes too much time", correct: false},
            {text: "Developers don't like writing documentation", correct: false}
        ]
    },
    {
        question: "What does 'individuals and interactions over processes and tools' mean in the Agile Manifesto?",
        answer: [
            {text: "Processes and tools are not needed", correct: false},
            {text: "People and communication are more important than rigid processes", correct: true},
            {text: "Only individual work matters", correct: false},
            {text: "Tools should be avoided completely", correct: false}
        ]
    },
    {
        question: "Why does Scrum favor responding to change over following a plan?",
        answer: [
            {text: "Plans are always wrong", correct: false},
            {text: "Change is inevitable and adaptation provides more value", correct: true},
            {text: "Planning is a waste of time", correct: false},
            {text: "Change keeps developers motivated", correct: false}
        ]
    },
    {
        question: "What is the principle behind 'customer collaboration over contract negotiation'?",
        answer: [
            {text: "Contracts should be avoided", correct: false},
            {text: "Working together creates better outcomes than adversarial relationships", correct: true},
            {text: "Customers should get everything they want", correct: false},
            {text: "Negotiation is always bad", correct: false}
        ]
    },
    {
        question: "How does Scrum support the principle of sustainable development?",
        answer: [
            {text: "By maintaining a constant pace that can be sustained indefinitely", correct: true},
            {text: "By working as many hours as possible", correct: false},
            {text: "By taking long breaks between Sprints", correct: false},
            {text: "By avoiding difficult work", correct: false}
        ]
    },
    {
        question: "What does 'potentially shippable increment' mean?",
        answer: [
            {text: "The increment must be shipped at the end of every Sprint", correct: false},
            {text: "The increment meets the Definition of Done and could be released", correct: true},
            {text: "The increment only needs to be partially complete", correct: false},
            {text: "The increment should be shipped to test environments", correct: false}
        ]
    },
    {
        question: "Why is face-to-face conversation preferred in Agile?",
        answer: [
            {text: "It's faster than written communication", correct: false},
            {text: "It's the most efficient and effective method of conveying information", correct: true},
            {text: "It prevents misunderstandings completely", correct: false},
            {text: "It's required by the Scrum framework", correct: false}
        ]
    },
    {
        question: "What does 'simplicity - the art of maximizing the amount of work not done' mean?",
        answer: [
            {text: "Do as little work as possible", correct: false},
            {text: "Focus on what's essential and avoid unnecessary work", correct: true},
            {text: "Simple solutions are always better", correct: false},
            {text: "Avoid complex technical implementations", correct: false}
        ]
    },
    {
        question: "How do self-organizing teams emerge?",
        answer: [
            {text: "Through management direction and control", correct: false},
            {text: "From teams that regularly reflect and adjust their behavior", correct: true},
            {text: "By following strict processes and procedures", correct: false},
            {text: "Through external coaching and training", correct: false}
        ]
    },
    {
        question: "What is the primary measure of progress in Scrum?",
        answer: [
            {text: "Lines of code written", correct: false},
            {text: "Working software/product increments", correct: true},
            {text: "Hours worked by the team", correct: false},
            {text: "Number of tasks completed", correct: false}
        ]
    },
    {
        question: "Why does Scrum welcome changing requirements?",
        answer: [
            {text: "Change keeps the work interesting", correct: false},
            {text: "Change can provide competitive advantage for the customer", correct: true},
            {text: "Change is inevitable anyway", correct: false},
            {text: "It makes planning unnecessary", correct: false}
        ]
    },
    {
        question: "What does continuous attention to technical excellence achieve?",
        answer: [
            {text: "Perfect code quality", correct: false},
            {text: "Enhanced agility and better design", correct: true},
            {text: "Faster delivery at any cost", correct: false},
            {text: "Reduced need for testing", correct: false}
        ]
    },
    {
        question: "How should business people and developers work together according to Agile principles?",
        answer: [
            {text: "In separate phases of the project", correct: false},
            {text: "Daily throughout the project", correct: true},
            {text: "Only during planning sessions", correct: false},
            {text: "Through formal documentation exchanges", correct: false}
        ]
    },
    {
        question: "What motivates individuals according to Agile principles?",
        answer: [
            {text: "Financial incentives and bonuses", correct: false},
            {text: "Trust, support, and the environment they need", correct: true},
            {text: "Detailed job descriptions and clear hierarchies", correct: false},
            {text: "Competition with other team members", correct: false}
        ]
    },
    {
        question: "How often should development teams deliver working software?",
        answer: [
            {text: "Only at the end of the project", correct: false},
            {text: "Frequently, with preference for shorter timescales", correct: true},
            {text: "When all features are complete", correct: false},
            {text: "According to the contract schedule", correct: false}
        ]
    },
    {
        question: "What is the highest priority in Agile?",
        answer: [
            {text: "Following the project plan", correct: false},
            {text: "Satisfying the customer through early and continuous delivery", correct: true},
            {text: "Completing all documented requirements", correct: false},
            {text: "Staying within budget and schedule", correct: false}
        ]
    },
    {
        question: "How does Scrum view failure?",
        answer: [
            {text: "As something to be avoided at all costs", correct: false},
            {text: "As a learning opportunity for improvement", correct: true},
            {text: "As a reason to blame individuals", correct: false},
            {text: "As a sign of poor planning", correct: false}
        ]
    },
    {
        question: "What does servant leadership mean for a Scrum Master?",
        answer: [
            {text: "Doing whatever the team asks", correct: false},
            {text: "Serving the team by removing impediments and facilitating their success", correct: true},
            {text: "Being subordinate to all team members", correct: false},
            {text: "Avoiding any leadership responsibilities", correct: false}
        ]
    },
    {
        question: "Why is collective ownership important in Scrum?",
        answer: [
            {text: "It prevents individual accountability", correct: false},
            {text: "It encourages shared responsibility and collaboration", correct: true},
            {text: "It makes work distribution easier", correct: false},
            {text: "It reduces the need for documentation", correct: false}
        ]
    },
    {
        question: "What does 'Done' mean in Scrum?",
        answer: [
            {text: "Code is written and compiled", correct: false},
            {text: "Work meets the shared understanding of completion criteria", correct: true},
            {text: "Product Owner has approved the work", correct: false},
            {text: "All planned tasks are finished", correct: false}
        ]
    },
    {
        question: "How does Scrum handle uncertainty and complexity?",
        answer: [
            {text: "By creating detailed plans upfront", correct: false},
            {text: "Through iterative development and frequent inspection", correct: true},
            {text: "By avoiding uncertain requirements", correct: false},
            {text: "By assigning uncertainty to specialists", correct: false}
        ]
    },
    {
        question: "What is the role of trust in Scrum Teams?",
        answer: [
            {text: "It's nice to have but not essential", correct: false},
            {text: "It's fundamental for effective collaboration and self-organization", correct: true},
            {text: "It eliminates the need for processes", correct: false},
            {text: "It's mainly between team members and management", correct: false}
        ]
    },
    {
        question: "Why does Scrum emphasize collaboration over individual heroics?",
        answer: [
            {text: "Individual performance doesn't matter", correct: false},
            {text: "Team collaboration produces better outcomes than individual efforts alone", correct: true},
            {text: "It's easier to manage teams than individuals", correct: false},
            {text: "Individual heroics are disruptive", correct: false}
        ]
    },
    {
        question: "What does continuous improvement mean in Scrum?",
        answer: [
            {text: "Constantly changing the process", correct: false},
            {text: "Regularly reflecting and adapting to become more effective", correct: true},
            {text: "Always adding new features", correct: false},
            {text: "Continuously increasing work pace", correct: false}
        ]
    },
    {
        question: "How should conflicts be handled in self-organizing teams?",
        answer: [
            {text: "Escalated to management immediately", correct: false},
            {text: "Resolved through open discussion and mutual respect", correct: true},
            {text: "Ignored until they resolve themselves", correct: false},
            {text: "Avoided by having strict processes", correct: false}
        ]
    },
    {
        question: "What is the importance of timeboxes in Scrum?",
        answer: [
            {text: "They create urgency and pressure", correct: false},
            {text: "They provide structure and ensure regular inspection points", correct: true},
            {text: "They make planning easier", correct: false},
            {text: "They satisfy management reporting needs", correct: false}
        ]
    },
    {
        question: "Why is working at a sustainable pace important?",
        answer: [
            {text: "To comply with labor laws", correct: false},
            {text: "To maintain quality and team well-being over the long term", correct: true},
            {text: "To reduce costs for the organization", correct: false},
            {text: "To prevent burnout complaints", correct: false}
        ]
    },
    {
        question: "What does emergent architecture mean in Scrum?",
        answer: [
            {text: "No architectural planning is needed", correct: false},
            {text: "Architecture evolves as understanding grows through development", correct: true},
            {text: "Architecture is designed by external architects", correct: false},
            {text: "Architecture is only considered at the end", correct: false}
        ]
    },
    {
        question: "How does Scrum view detailed upfront planning?",
        answer: [
            {text: "It's essential for project success", correct: false},
            {text: "It should be avoided completely", correct: false},
            {text: "Some planning is valuable but detailed plans can become obsolete", correct: true},
            {text: "It's only needed for large projects", correct: false}
        ]
    },
    {
        question: "What is the value of short feedback loops in Scrum?",
        answer: [
            {text: "They create more meetings", correct: false},
            {text: "They enable rapid learning and course correction", correct: true},
            {text: "They satisfy customer demands", correct: false},
            {text: "They reduce development time", correct: false}
        ]
    },
    {
        question: "Why does Scrum prefer working solutions over comprehensive documentation?",
        answer: [
            {text: "Documentation has no value", correct: false},
            {text: "Working solutions provide immediate value and feedback", correct: true},
            {text: "Documentation is too expensive", correct: false},
            {text: "Customers don't read documentation", correct: false}
        ]
    },
    {
        question: "What is the principle behind whole team responsibility?",
        answer: [
            {text: "Everyone does everything", correct: false},
            {text: "The team collectively owns the success and failure", correct: true},
            {text: "No individual accountability exists", correct: false},
            {text: "Work is distributed equally among all members", correct: false}
        ]
    },
    {
        question: "How does Scrum handle changing priorities?",
        answer: [
            {text: "Changes are not allowed once Sprint starts", correct: false},
            {text: "Priorities are regularly reassessed and adapted", correct: true},
            {text: "Only the Product Owner can change priorities", correct: false},
            {text: "Changes require formal approval processes", correct: false}
        ]
    },
    {
        question: "What does 'inspect and adapt' mean in practice?",
        answer: [
            {text: "Constantly changing everything", correct: false},
            {text: "Regularly examining results and adjusting approach based on learnings", correct: true},
            {text: "Only looking at problems when they occur", correct: false},
            {text: "Following a predetermined improvement schedule", correct: false}
        ]
    },
    {
        question: "Why is customer satisfaction the highest priority in Agile?",
        answer: [
            {text: "Customers pay for the product", correct: false},
            {text: "Satisfied customers are the ultimate measure of value delivered", correct: true},
            {text: "It's easier than satisfying stakeholders", correct: false},
            {text: "It's required by Agile certification", correct: false}
        ]
    },
    {
        question: "What role does experimentation play in Scrum?",
        answer: [
            {text: "It's discouraged as it wastes time", correct: false},
            {text: "It's essential for learning and adaptation in complex environments", correct: true},
            {text: "It's only for research and development projects", correct: false},
            {text: "It should only be done outside of Sprints", correct: false}
        ]
    },
    {
        question: "How does Scrum balance structure and flexibility?",
        answer: [
            {text: "By having rigid processes with no flexibility", correct: false},
            {text: "By providing a framework that enables adaptation within boundaries", correct: true},
            {text: "By having no structure at all", correct: false},
            {text: "By changing the framework based on team preferences", correct: false}
        ]
    },
    {
        question: "What is the ultimate goal of Scrum practices?",
        answer: [
            {text: "To follow all Scrum rules perfectly", correct: false},
            {text: "To deliver valuable products that delight customers", correct: true},
            {text: "To create efficient development processes", correct: false},
            {text: "To satisfy management reporting requirements", correct: false}
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