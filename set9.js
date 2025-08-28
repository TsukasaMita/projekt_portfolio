const questions = [

{
        question: "What should a Scrum Team do if they consistently cannot meet their Sprint Goals?",
        answer: [
            {text: "Work longer hours to catch up", correct: false},
            {text: "Reflect on the causes and adapt their approach in the Sprint Retrospective", correct: true},
            {text: "Reduce the Definition of Done to deliver faster", correct: false},
            {text: "Ask for more team members", correct: false}
        ]
    },
    {
        question: "How should the team handle a situation where the Product Owner is frequently unavailable?",
        answer: [
            {text: "Continue without Product Owner input", correct: false},
            {text: "Have the Scrum Master act as Product Owner", correct: false},
            {text: "Address this as an organizational impediment", correct: true},
            {text: "Make assumptions and proceed", correct: false}
        ]
    },
    {
        question: "What is the best approach when stakeholders demand detailed project timeline predictions?",
        answer: [
            {text: "Create a detailed Gantt chart", correct: false},
            {text: "Use empirical data and explain the uncertainty inherent in complex work", correct: true},
            {text: "Refuse to provide any timeline estimates", correct: false},
            {text: "Give them what they want to avoid conflict", correct: false}
        ]
    },
    {
        question: "How should a team deal with a Product Owner who constantly changes priorities mid-Sprint?",
        answer: [
            {text: "Ignore the changes and continue with original plan", correct: false},
            {text: "Coach the Product Owner on the impact and help them understand the Sprint commitment", correct: true},
            {text: "Automatically implement all changes", correct: false},
            {text: "Escalate to senior management", correct: false}
        ]
    },
    {
        question: "What should be done when a team member consistently misses Daily Scrums?",
        answer: [
            {text: "Report them to HR", correct: false},
            {text: "Continue without them", correct: false},
            {text: "Address it as a team collaboration issue", correct: true},
            {text: "Remove them from the team immediately", correct: false}
        ]
    },
    {
        question: "How should external dependencies that block Sprint work be handled?",
        answer: [
            {text: "Wait until dependencies are resolved", correct: false},
            {text: "Escalate to the Scrum Master to remove the impediment", correct: true},
            {text: "Work on other unrelated tasks", correct: false},
            {text: "Cancel the Sprint", correct: false}
        ]
    },
    {
        question: "What is the appropriate response when stakeholders want to attend all Scrum events?",
        answer: [
            {text: "Allow them to attend everything", correct: false},
            {text: "Exclude them from all events", correct: false},
            {text: "Educate them on which events are appropriate for their participation", correct: true},
            {text: "Let the Product Owner decide", correct: false}
        ]
    },
    {
        question: "How should a team handle technical debt that is slowing down development?",
        answer: [
            {text: "Ignore it and focus on new features", correct: false},
            {text: "Include technical debt work in Sprint planning and Definition of Done", correct: true},
            {text: "Schedule a separate Sprint for technical debt", correct: false},
            {text: "Ask for permission from the Product Owner for every technical task", correct: false}
        ]
    },
    {
        question: "What should be done when team members have significantly different skill levels?",
        answer: [
            {text: "Separate them into different teams", correct: false},
            {text: "Encourage knowledge sharing and pair programming", correct: true},
            {text: "Assign work based only on individual expertise", correct: false},
            {text: "Replace less skilled members", correct: false}
        ]
    },
    {
        question: "How should a distributed team handle time zone challenges for Daily Scrums?",
        answer: [
            {text: "Hold multiple Daily Scrums", correct: false},
            {text: "Skip Daily Scrums for distributed teams", correct: false},
            {text: "Find a time that works for most and use asynchronous updates for others", correct: true},
            {text: "Only have local team members attend", correct: false}
        ]
    },
    {
        question: "What should the team do if they discover the Sprint Goal is no longer relevant?",
        answer: [
            {text: "Continue with the original goal", correct: false},
            {text: "Discuss with the Product Owner and potentially cancel the Sprint", correct: true},
            {text: "Change the goal without consultation", correct: false},
            {text: "Wait until the Sprint Review to address it", correct: false}
        ]
    },
    {
        question: "How should conflicting priorities from different stakeholders be resolved?",
        answer: [
            {text: "The Development Team decides", correct: false},
            {text: "The Scrum Master mediates", correct: false},
            {text: "The Product Owner makes the final decision", correct: true},
            {text: "Hold a stakeholder vote", correct: false}
        ]
    },
    {
        question: "What is the best approach when the Definition of Done conflicts with organizational standards?",
        answer: [
            {text: "Use the team's Definition of Done", correct: false},
            {text: "Follow organizational standards as the minimum", correct: true},
            {text: "Negotiate a compromise", correct: false},
            {text: "Escalate to senior management", correct: false}
        ]
    },
    {
        question: "How should a team handle a situation where they finish all Sprint Backlog items early?",
        answer: [
            {text: "Take a break for the rest of the Sprint", correct: false},
            {text: "Collaborate with Product Owner to pull in more work or improve existing work", correct: true},
            {text: "Start working on next Sprint's items", correct: false},
            {text: "Focus only on documentation", correct: false}
        ]
    },
    {
        question: "What should be done when a critical production bug is discovered during a Sprint?",
        answer: [
            {text: "Ignore it until the next Sprint", correct: false},
            {text: "Assess impact with Product Owner and potentially adjust Sprint scope", correct: true},
            {text: "Automatically add it to current Sprint", correct: false},
            {text: "Create a separate team to handle it", correct: false}
        ]
    },
    {
        question: "How should the team respond when asked to provide individual performance metrics?",
        answer: [
            {text: "Provide detailed individual tracking", correct: false},
            {text: "Refuse to provide any metrics", correct: false},
            {text: "Focus on team metrics and educate on collective accountability", correct: true},
            {text: "Only provide metrics for underperforming members", correct: false}
        ]
    },
    {
        question: "What is the appropriate action when the Product Owner wants to micromanage how the work is done?",
        answer: [
            {text: "Allow it to keep the Product Owner satisfied", correct: false},
            {text: "Coach the Product Owner on the team's self-organizing nature", correct: true},
            {text: "Ignore the Product Owner's instructions", correct: false},
            {text: "Replace the Product Owner", correct: false}
        ]
    },
    {
        question: "How should a team handle scope creep during a Sprint?",
        answer: [
            {text: "Accept all additional scope", correct: false},
            {text: "Reject all changes", correct: false},
            {text: "Evaluate impact on Sprint Goal and negotiate with Product Owner", correct: true},
            {text: "Add extra time to the Sprint", correct: false}
        ]
    },
    {
        question: "What should be done when team velocity varies significantly between Sprints?",
        answer: [
            {text: "Set velocity targets for the team", correct: false},
            {text: "Investigate causes and focus on improving predictability", correct: true},
            {text: "Replace inconsistent team members", correct: false},
            {text: "Ignore velocity and focus only on features", correct: false}
        ]
    },
    {
        question: "How should the team handle a situation where they cannot demonstrate anything in Sprint Review?",
        answer: [
            {text: "Cancel the Sprint Review", correct: false},
            {text: "Hold the Sprint Review and discuss what was learned and impediments faced", correct: true},
            {text: "Demonstrate work in progress", correct: false},
            {text: "Extend the Sprint until something is Done", correct: false}
        ]
    },
    {
        question: "What is the best response when senior management wants daily status reports?",
        answer: [
            {text: "Provide detailed daily reports", correct: false},
            {text: "Refuse to provide any reports", correct: false},
            {text: "Offer Sprint Reviews and other Scrum artifacts for transparency", correct: true},
            {text: "Have the Scrum Master create reports", correct: false}
        ]
    },
    {
        question: "How should a team deal with a Product Owner who rarely attends Sprint events?",
        answer: [
            {text: "Continue without the Product Owner", correct: false},
            {text: "Replace the Product Owner immediately", correct: false},
            {text: "Address the impediment and work with organization to resolve it", correct: true},
            {text: "Have the Scrum Master represent the Product Owner", correct: false}
        ]
    },
    {
        question: "What should be done when multiple teams are working on the same product but using different Definitions of Done?",
        answer: [
            {text: "Let each team keep their own definition", correct: false},
            {text: "Align on a shared Definition of Done", correct: true},
            {text: "Use the loosest Definition of Done", correct: false},
            {text: "Use the strictest Definition of Done", correct: false}
        ]
    },
    {
        question: "How should a team handle pressure to commit to unrealistic Sprint Goals?",
        answer: [
            {text: "Commit anyway to avoid conflict", correct: false},
            {text: "Use empirical data to explain capacity and negotiate realistic goals", correct: true},
            {text: "Refuse to commit to any goals", correct: false},
            {text: "Agree but plan to miss the goal", correct: false}
        ]
    },
    {
        question: "What is the appropriate response when stakeholders bypass the Product Owner to make requests directly to the team?",
        answer: [
            {text: "Accept all stakeholder requests", correct: false},
            {text: "Ignore stakeholder requests", correct: false},
            {text: "Direct stakeholders to work through the Product Owner", correct: true},
            {text: "Have the Scrum Master filter all requests", correct: false}
        ]
    },
    {
        question: "How should a team handle a situation where Sprint Retrospective improvements are never implemented?",
        answer: [
            {text: "Stop doing Sprint Retrospectives", correct: false},
            {text: "Focus on smaller, more achievable improvements and track progress", correct: true},
            {text: "Escalate all improvements to management", correct: false},
            {text: "Only discuss problems, not solutions", correct: false}
        ]
    },
    {
        question: "What should be done when the Development Team and Product Owner have fundamentally different views on product direction?",
        answer: [
            {text: "Let the Development Team decide", correct: false},
            {text: "Facilitate discussion and align on shared product vision", correct: true},
            {text: "Escalate to senior management immediately", correct: false},
            {text: "Continue with conflicting directions", correct: false}
        ]
    },
    {
        question: "How should a team respond to requests for detailed documentation of all development activities?",
        answer: [
            {text: "Provide all requested documentation", correct: false},
            {text: "Refuse to create any documentation", correct: false},
            {text: "Focus on valuable documentation and educate on agile principles", correct: true},
            {text: "Create documentation only after all development is complete", correct: false}
        ]
    },
    {
        question: "What is the best approach when team members want to specialize and avoid cross-functional work?",
        answer: [
            {text: "Allow complete specialization", correct: false},
            {text: "Force everyone to do everything", correct: false},
            {text: "Encourage gradual skill sharing while respecting individual strengths", correct: true},
            {text: "Reorganize into specialist teams", correct: false}
        ]
    },
    {
        question: "How should a team handle a Product Owner who never says no to stakeholder requests?",
        answer: [
            {text: "Accept all requests", correct: false},
            {text: "Have the Development Team filter requests", correct: false},
            {text: "Coach the Product Owner on prioritization and saying no", correct: true},
            {text: "Ignore excess requests", correct: false}
        ]
    },
    {
        question: "What should be done when Sprint Planning consistently takes longer than the time-box?",
        answer: [
            {text: "Extend the time-box officially", correct: false},
            {text: "Stop planning when time runs out", correct: false},
            {text: "Improve planning techniques and preparation", correct: true},
            {text: "Split Sprint Planning into multiple sessions", correct: false}
        ]
    },
    {
        question: "How should a team deal with a Scrum Master who tries to control all team decisions?",
        answer: [
            {text: "Accept the control to avoid conflict", correct: false},
            {text: "Ignore the Scrum Master", correct: false},
            {text: "Coach the Scrum Master on servant leadership and self-organization", correct: true},
            {text: "Replace the Scrum Master immediately", correct: false}
        ]
    },
    {
        question: "What is the appropriate response when the organization wants to standardize all teams' processes?",
        answer: [
            {text: "Accept all standardization", correct: false},
            {text: "Reject all standardization attempts", correct: false},
            {text: "Work within Scrum framework while allowing team adaptation", correct: true},
            {text: "Implement different processes for each team", correct: false}
        ]
    },
    {
        question: "How should a team handle persistent technical disagreements between team members?",
        answer: [
            {text: "Let the senior developer decide", correct: false},
            {text: "Escalate to management", correct: false},
            {text: "Use time-boxed experiments and empirical evidence to resolve", correct: true},
            {text: "Avoid the disagreement", correct: false}
        ]
    },
    {
        question: "What should be done when stakeholders want to attend Daily Scrums to get status updates?",
        answer: [
            {text: "Allow them to attend and participate", correct: false},
            {text: "Ban them from attending", correct: false},
            {text: "Allow attendance but educate them on the purpose and their role", correct: true},
            {text: "Create separate status meetings", correct: false}
        ]
    },
    {
        question: "How should a team respond when asked to estimate all work in hours?",
        answer: [
            {text: "Provide detailed hour estimates", correct: false},
            {text: "Refuse to provide any estimates", correct: false},
            {text: "Use relative sizing and educate on estimation uncertainty", correct: true},
            {text: "Convert story points to hours", correct: false}
        ]
    },
    {
        question: "What is the best approach when the team discovers they misunderstood a Product Backlog item mid-Sprint?",
        answer: [
            {text: "Continue with the misunderstood version", correct: false},
            {text: "Start over completely", correct: false},
            {text: "Collaborate with Product Owner to clarify and adapt approach", correct: true},
            {text: "Wait until next Sprint to address it", correct: false}
        ]
    },
    {
        question: "How should a team handle a situation where they need skills not currently available in the team?",
        answer: [
            {text: "Outsource the work", correct: false},
            {text: "Skip work requiring those skills", correct: false},
            {text: "Learn the skills or bring in temporary help while building capability", correct: true},
            {text: "Wait for hiring new team members", correct: false}
        ]
    },
    {
        question: "What should be done when the Product Owner wants to add new acceptance criteria after Sprint Planning?",
        answer: [
            {text: "Automatically add the new criteria", correct: false},
            {text: "Reject all new criteria", correct: false},
            {text: "Assess impact and negotiate with Product Owner", correct: true},
            {text: "Add criteria but extend Sprint timeline", correct: false}
        ]
    },
    {
        question: "How should a team respond to criticism that they're not delivering fast enough?",
        answer: [
            {text: "Work longer hours", correct: false},
            {text: "Lower quality standards", correct: false},
            {text: "Focus on removing impediments and improving flow", correct: true},
            {text: "Blame external factors", correct: false}
        ]
    },
    {
        question: "What is the appropriate action when team members consistently interrupt each other during Daily Scrums?",
        answer: [
            {text: "Let interruptions continue naturally", correct: false},
            {text: "Have the Scrum Master control speaking order", correct: false},
            {text: "Address communication norms and respect in Sprint Retrospective", correct: true},
            {text: "Separate team members physically", correct: false}
        ]
    },
    {
        question: "How should a team handle requests to provide predictability for long-term planning?",
        answer: [
            {text: "Promise fixed deliverables and dates", correct: false},
            {text: "Refuse to participate in long-term planning", correct: false},
            {text: "Use empirical data to provide ranges and probabilities", correct: true},
            {text: "Create detailed multi-Sprint plans", correct: false}
        ]
    },
    {
        question: "What should be done when the Definition of Done is consistently not met by Sprint end?",
        answer: [
            {text: "Lower the Definition of Done standards", correct: false},
            {text: "Extend Sprints to meet the definition", correct: false},
            {text: "Analyze impediments and improve processes", correct: true},
            {text: "Ignore the Definition of Done", correct: false}
        ]
    },
    {
        question: "How should a team deal with a Product Owner who provides unclear or changing acceptance criteria?",
        answer: [
            {text: "Implement based on team's interpretation", correct: false},
            {text: "Wait for perfect clarity before starting", correct: false},
            {text: "Collaborate continuously to clarify and refine understanding", correct: true},
            {text: "Escalate to stakeholders for clarity", correct: false}
        ]
    },
    {
        question: "What is the best response when management wants to track individual developer productivity?",
        answer: [
            {text: "Provide individual metrics", correct: false},
            {text: "Refuse to provide any productivity data", correct: false},
            {text: "Focus on team outcomes and educate on collective performance", correct: true},
            {text: "Track individuals secretly", correct: false}
        ]
    },
    {
        question: "How should a team handle the situation where Sprint Reviews become just status meetings?",
        answer: [
            {text: "Continue with status-focused reviews", correct: false},
            {text: "Skip Sprint Reviews", correct: false},
            {text: "Re-focus reviews on inspecting increment and adapting product backlog", correct: true},
            {text: "Replace reviews with written reports", correct: false}
        ]
    },
    {
        question: "What should be done when external quality assurance wants to test all work before it's considered Done?",
        answer: [
            {text: "Include QA testing time in Sprint planning", correct: false},
            {text: "Skip external QA to maintain Sprint cadence", correct: false},
            {text: "Work with QA to integrate testing into Definition of Done", correct: true},
            {text: "Do QA testing after Sprint ends", correct: false}
        ]
    },
    {
        question: "How should a team respond when asked to guarantee Sprint deliverables?",
        answer: [
            {text: "Provide guarantees to satisfy requestors", correct: false},
            {text: "Refuse to make any commitments", correct: false},
            {text: "Explain forecasting nature and commit to Sprint Goal", correct: true},
            {text: "Only commit to what they're absolutely certain about", correct: false}
        ]
    },
    {
        question: "What is the appropriate action when Sprint Retrospectives become complaint sessions without improvement?",
        answer: [
            {text: "Stop doing retrospectives", correct: false},
            {text: "Ban complaints from retrospectives", correct: false},
            {text: "Focus on actionable improvements and track implementation", correct: true},
            {text: "Have management attend to hear complaints", correct: false}
        ]
    },
    {
        question: "How should a team handle pressure from management to skip Sprint Retrospectives to save time?",
        answer: [
            {text: "Skip retrospectives to appease management", correct: false},
            {text: "Hold secret retrospectives", correct: false},
            {text: "Educate management on the value of continuous improvement", correct: true},
            {text: "Reduce retrospective time to a minimum", correct: false}
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