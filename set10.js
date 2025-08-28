const questions= [

{
        question: "When multiple Scrum Teams work on the same product, what should they share?",
        answer: [
            {text: "Only the Product Backlog", correct: false},
            {text: "Product Backlog, Product Goal, and Definition of Done", correct: true},
            {text: "Everything including Sprint Backlogs", correct: false},
            {text: "Nothing, they should be completely independent", correct: false}
        ]
    },
    {
        question: "How should dependencies between multiple Scrum Teams be managed?",
        answer: [
            {text: "Through a separate coordination team", correct: false},
            {text: "Through frequent communication and joint planning", correct: true},
            {text: "By avoiding dependencies completely", correct: false},
            {text: "Through detailed documentation", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for integrating work from multiple teams?",
        answer: [
            {text: "Integrate only at the end of the project", correct: false},
            {text: "Integrate frequently, ideally every Sprint", correct: true},
            {text: "Integrate monthly", correct: false},
            {text: "Let each team integrate independently", correct: false}
        ]
    },
    {
        question: "How should multiple teams handle a shared Definition of Done?",
        answer: [
            {text: "Each team should have their own", correct: false},
            {text: "Use the least strict definition", correct: false},
            {text: "Align on a shared definition that ensures integration", correct: true},
            {text: "Use separate definitions for different components", correct: false}
        ]
    },
    {
        question: "What is the best practice for Sprint synchronization across multiple teams?",
        answer: [
            {text: "All teams must have identical Sprint schedules", correct: false},
            {text: "Teams should synchronize Sprints when working on the same product", correct: true},
            {text: "Teams should never synchronize", correct: false},
            {text: "Only synchronize Sprint Reviews", correct: false}
        ]
    },
    {
        question: "How should cross-team impediments be resolved?",
        answer: [
            {text: "Each team resolves their own impediments", correct: false},
            {text: "Through Scrum Masters collaborating", correct: true},
            {text: "Escalate all impediments to management", correct: false},
            {text: "Ignore cross-team impediments", correct: false}
        ]
    },
    {
        question: "When should teams working on the same product conduct joint Sprint Reviews?",
        answer: [
            {text: "Never, teams should review separately", correct: false},
            {text: "When they have integrated increments to demonstrate", correct: true},
            {text: "Only at the end of releases", correct: false},
            {text: "All teams must always review together", correct: false}
        ]
    },
    {
        question: "How should Product Backlog refinement be handled with multiple teams?",
        answer: [
            {text: "Each team refines independently", correct: false},
            {text: "Only the Product Owner refines", correct: false},
            {text: "Teams collaborate on refinement with Product Owner facilitation", correct: true},
            {text: "Create separate backlogs for each team", correct: false}
        ]
    },
    {
        question: "What is the role of architects in scaled Scrum environments?",
        answer: [
            {text: "They should make all technical decisions", correct: false},
            {text: "They should be embedded in teams or collaborate closely", correct: true},
            {text: "They should work separately from Scrum Teams", correct: false},
            {text: "Architecture is not needed in Scrum", correct: false}
        ]
    },
    {
        question: "How should technical standards be maintained across multiple teams?",
        answer: [
            {text: "Through detailed documentation", correct: false},
            {text: "Through communities of practice and collaboration", correct: true},
            {text: "Each team sets their own standards", correct: false},
            {text: "Through a central architecture committee", correct: false}
        ]
    },
    {
        question: "When multiple teams share team members, what is the recommended approach?",
        answer: [
            {text: "It's always acceptable", correct: false},
            {text: "It should be minimized as it reduces team effectiveness", correct: true},
            {text: "Members should split time equally", correct: false},
            {text: "It's the best way to share knowledge", correct: false}
        ]
    },
    {
        question: "How should release planning be conducted with multiple Scrum Teams?",
        answer: [
            {text: "Each team plans releases independently", correct: false},
            {text: "Collaborative planning with all teams and Product Owner", correct: true},
            {text: "Only the Product Owner does release planning", correct: false},
            {text: "Release planning is not compatible with Scrum", correct: false}
        ]
    },
    {
        question: "What is the best approach for knowledge sharing between teams?",
        answer: [
            {text: "Formal training sessions only", correct: false},
            {text: "Communities of practice, pairing, and informal collaboration", correct: true},
            {text: "Detailed documentation", correct: false},
            {text: "Teams shouldn't share knowledge", correct: false}
        ]
    },
    {
        question: "How should testing be coordinated across multiple teams?",
        answer: [
            {text: "Each team tests in isolation", correct: false},
            {text: "Integrate testing practices and coordinate test execution", correct: true},
            {text: "Use a separate testing team", correct: false},
            {text: "Test only after all development is complete", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for managing technical debt across multiple teams?",
        answer: [
            {text: "Each team manages their own debt", correct: false},
            {text: "Coordinate debt management and share learnings", correct: true},
            {text: "Ignore technical debt in scaled environments", correct: false},
            {text: "Create a dedicated debt team", correct: false}
        ]
    },
    {
        question: "How should component teams evolve in a Scrum scaling context?",
        answer: [
            {text: "Maintain component teams permanently", correct: false},
            {text: "Gradually move toward feature teams", correct: true},
            {text: "Create more component teams", correct: false},
            {text: "Component teams are incompatible with Scrum", correct: false}
        ]
    },
    {
        question: "When should teams be split or merged in scaling scenarios?",
        answer: [
            {text: "Based on organizational convenience", correct: false},
            {text: "Based on product boundaries and team effectiveness", correct: true},
            {text: "Teams should never be changed", correct: false},
            {text: "Based solely on team size", correct: false}
        ]
    },
    {
        question: "How should user research and design be integrated with multiple Scrum Teams?",
        answer: [
            {text: "Have a separate UX team", correct: false},
            {text: "Embed UX in teams or have close collaboration", correct: true},
            {text: "Do all UX work upfront", correct: false},
            {text: "Skip UX in scaled environments", correct: false}
        ]
    },
    {
        question: "What is the role of Product Owners when scaling Scrum?",
        answer: [
            {text: "Have multiple Product Owners per product", correct: false},
            {text: "One Product Owner per product, possibly with delegation", correct: true},
            {text: "Product Owners are not needed in scaled Scrum", correct: false},
            {text: "Each team should have their own Product Owner", correct: false}
        ]
    },
    {
        question: "How should continuous integration be implemented across multiple teams?",
        answer: [
            {text: "Each team has separate CI/CD", correct: false},
            {text: "Shared CI/CD pipeline with frequent integration", correct: true},
            {text: "Integration only at release time", correct: false},
            {text: "Manual integration processes", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for handling large-scale refactoring?",
        answer: [
            {text: "Stop all feature development", correct: false},
            {text: "Coordinate across teams and integrate into regular Sprint work", correct: true},
            {text: "Each team refactors independently", correct: false},
            {text: "Avoid refactoring in scaled environments", correct: false}
        ]
    },
    {
        question: "How should performance and scalability concerns be addressed across teams?",
        answer: [
            {text: "Only address at the end", correct: false},
            {text: "Build performance considerations into Definition of Done", correct: true},
            {text: "Have a separate performance team", correct: false},
            {text: "Ignore performance until issues arise", correct: false}
        ]
    },
    {
        question: "What is the best approach for managing shared infrastructure across teams?",
        answer: [
            {text: "Each team builds their own infrastructure", correct: false},
            {text: "Collaborate on shared infrastructure and platform teams", correct: true},
            {text: "Outsource all infrastructure", correct: false},
            {text: "Avoid shared infrastructure", correct: false}
        ]
    },
    {
        question: "How should compliance and regulatory requirements be handled in scaled Scrum?",
        answer: [
            {text: "Handle compliance separately from Scrum", correct: false},
            {text: "Integrate compliance activities into Definition of Done", correct: true},
            {text: "Have a separate compliance team", correct: false},
            {text: "Address compliance only at release", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for managing external vendor relationships?",
        answer: [
            {text: "Isolate vendors from Scrum teams", correct: false},
            {text: "Integrate vendors into collaborative planning and execution", correct: true},
            {text: "Use traditional contracts with vendors", correct: false},
            {text: "Avoid vendors in Scrum environments", correct: false}
        ]
    },
    {
        question: "How should budget and financial tracking be handled across multiple teams?",
        answer: [
            {text: "Track detailed budgets for each team", correct: false},
            {text: "Focus on value delivery and outcome-based budgeting", correct: true},
            {text: "Use traditional project accounting", correct: false},
            {text: "Don't track budgets in Scrum", correct: false}
        ]
    },
    {
        question: "What is the best practice for handling security across multiple teams?",
        answer: [
            {text: "Have a separate security team", correct: false},
            {text: "Embed security practices in all teams", correct: true},
            {text: "Address security only at the end", correct: false},
            {text: "Security is not compatible with agile", correct: false}
        ]
    },
    {
        question: "How should documentation be managed in scaled Scrum environments?",
        answer: [
            {text: "Create comprehensive documentation for everything", correct: false},
            {text: "Focus on living documentation and just enough documentation", correct: true},
            {text: "Avoid all documentation", correct: false},
            {text: "Each team documents independently", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for managing different time zones in scaled Scrum?",
        answer: [
            {text: "Force all teams to work the same hours", correct: false},
            {text: "Optimize overlap time and use asynchronous collaboration", correct: true},
            {text: "Avoid distributed teams", correct: false},
            {text: "Each time zone works independently", correct: false}
        ]
    },
    {
        question: "How should organizational change be managed when scaling Scrum?",
        answer: [
            {text: "Implement all changes immediately", correct: false},
            {text: "Use an iterative approach with frequent feedback", correct: true},
            {text: "Plan all changes in detail upfront", correct: false},
            {text: "Avoid any organizational change", correct: false}
        ]
    },
    {
        question: "What is the role of management in scaled Scrum environments?",
        answer: [
            {text: "Manage teams directly", correct: false},
            {text: "Create enabling constraints and remove organizational impediments", correct: true},
            {text: "Stay completely out of the way", correct: false},
            {text: "Make all technical decisions", correct: false}
        ]
    },
    {
        question: "How should skill development be coordinated across multiple teams?",
        answer: [
            {text: "Each team develops skills independently", correct: false},
            {text: "Coordinate skill development and share learning opportunities", correct: true},
            {text: "Use only external training", correct: false},
            {text: "Focus only on individual skill development", correct: false}
        ]
    },
    {
        question: "What is the best approach for handling different team maturity levels?",
        answer: [
            {text: "Keep all teams at the same maturity level", correct: false},
            {text: "Support each team's growth while encouraging knowledge sharing", correct: true},
            {text: "Focus only on the most mature teams", correct: false},
            {text: "Replace less mature teams", correct: false}
        ]
    },
    {
        question: "How should tooling be standardized across multiple teams?",
        answer: [
            {text: "Enforce identical tooling across all teams", correct: false},
            {text: "Balance standardization with team autonomy", correct: true},
            {text: "Let each team choose completely different tools", correct: false},
            {text: "Use only one tool for everything", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for handling large Product Backlogs?",
        answer: [
            {text: "Split into multiple Product Backlogs", correct: false},
            {text: "Use hierarchical backlog structure with clear priorities", correct: true},
            {text: "Assign backlog items randomly to teams", correct: false},
            {text: "Avoid large backlogs completely", correct: false}
        ]
    },
    {
        question: "How should capacity planning be done across multiple teams?",
        answer: [
            {text: "Plan capacity in detail for each team", correct: false},
            {text: "Use empirical data and focus on flow rather than capacity", correct: true},
            {text: "Assume all teams have equal capacity", correct: false},
            {text: "Don't plan capacity in Scrum", correct: false}
        ]
    },
    {
        question: "What is the best practice for managing dependencies in complex products?",
        answer: [
            {text: "Eliminate all dependencies", correct: false},
            {text: "Make dependencies visible and manage them actively", correct: true},
            {text: "Ignore dependencies", correct: false},
            {text: "Create detailed dependency documentation", correct: false}
        ]
    },
    {
        question: "How should retrospectives be conducted in scaled environments?",
        answer: [
            {text: "Only conduct team-level retrospectives", correct: false},
            {text: "Conduct retrospectives at multiple levels (team, program, organization)", correct: true},
            {text: "Skip retrospectives in large organizations", correct: false},
            {text: "Only conduct organization-level retrospectives", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for handling technical communities of practice?",
        answer: [
            {text: "Avoid communities of practice", correct: false},
            {text: "Foster communities of practice for knowledge sharing and standards", correct: true},
            {text: "Make communities of practice mandatory", correct: false},
            {text: "Replace teams with communities of practice", correct: false}
        ]
    },
    {
        question: "How should innovation and experimentation be encouraged across teams?",
        answer: [
            {text: "Focus only on planned features", correct: false},
            {text: "Allocate time and space for innovation within Sprint work", correct: true},
            {text: "Have separate innovation teams", correct: false},
            {text: "Innovation is not compatible with Scrum", correct: false}
        ]
    },
    {
        question: "What is the best approach for managing customer feedback across multiple teams?",
        answer: [
            {text: "Each team collects their own feedback", correct: false},
            {text: "Coordinate feedback collection and share insights across teams", correct: true},
            {text: "Only the Product Owner collects feedback", correct: false},
            {text: "Avoid customer feedback in scaled environments", correct: false}
        ]
    },
    {
        question: "How should metrics and measurement be implemented across multiple teams?",
        answer: [
            {text: "Use identical metrics for all teams", correct: false},
            {text: "Focus on flow metrics and value delivery outcomes", correct: true},
            {text: "Avoid metrics in scaled Scrum", correct: false},
            {text: "Only measure individual team performance", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for handling conflicting team priorities?",
        answer: [
            {text: "Let teams resolve conflicts themselves", correct: false},
            {text: "Use Product Owner and stakeholder collaboration to align priorities", correct: true},
            {text: "Escalate all conflicts to management", correct: false},
            {text: "Avoid having team priorities", correct: false}
        ]
    },
    {
        question: "How should continuous improvement be fostered across multiple teams?",
        answer: [
            {text: "Mandate improvement practices", correct: false},
            {text: "Create a culture of experimentation and learning", correct: true},
            {text: "Assign improvement quotas to teams", correct: false},
            {text: "Improvement is automatic in Scrum", correct: false}
        ]
    },
    {
        question: "What is the best practice for managing technical standards across teams?",
        answer: [
            {text: "Enforce rigid standards", correct: false},
            {text: "Collaborate on standards while allowing team adaptation", correct: true},
            {text: "Each team sets completely different standards", correct: false},
            {text: "Standards are not needed in Scrum", correct: false}
        ]
    },
    {
        question: "How should product discovery activities be coordinated across teams?",
        answer: [
            {text: "Each team does discovery independently", correct: false},
            {text: "Coordinate discovery activities and share insights", correct: true},
            {text: "Only the Product Owner does discovery", correct: false},
            {text: "Discovery is not part of Scrum", correct: false}
        ]
    },
    {
        question: "What is the recommended approach for handling legacy system integration?",
        answer: [
            {text: "Avoid integrating with legacy systems", correct: false},
            {text: "Plan integration work into Sprints and Definition of Done", correct: true},
            {text: "Handle legacy integration separately", correct: false},
            {text: "Replace all legacy systems immediately", correct: false}
        ]
    },
    {
        question: "How should quality assurance be managed across multiple teams?",
        answer: [
            {text: "Have a separate QA department", correct: false},
            {text: "Embed quality practices in all teams with coordination", correct: true},
            {text: "Each team handles quality independently", correct: false},
            {text: "Quality is not needed in Scrum", correct: false}
        ]
    },
    {
        question: "What is the best approach for managing stakeholder engagement in scaled environments?",
        answer: [
            {text: "Each team engages stakeholders independently", correct: false},
            {text: "Coordinate stakeholder engagement through Product Owner", correct: true},
            {text: "Avoid stakeholder engagement", correct: false},
            {text: "Only management engages stakeholders", correct: false}
        ]
    },
    {
        question: "How should the scaling of Scrum be measured for success?",
        answer: [
            {text: "By the number of teams using Scrum", correct: false},
            {text: "By value delivered and organizational effectiveness", correct: true},
            {text: "By adherence to Scrum rules", correct: false},
            {text: "By speed of delivery only", correct: false}
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