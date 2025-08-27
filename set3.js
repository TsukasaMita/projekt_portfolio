const questions = [
    {
        "question": "If burndown charts are used to visualize progress, what do they track?",
        "answer": [
            {"text": "Accumulated business value delivered to the customer.", "correct": false},
            {"text": "Accumulated cost.", "correct": false},
            {"text": "Work remaining across time.", "correct": true},
            {"text": "Individual worker productivity.", "correct": false}
        ]
    },
    {
        "question": "Which statement best describes a Product Owner's responsibility?",
        "answer": [
            {"text": "Directing the Developers.", "correct": false},
            {"text": "Optimizing the value of the work the Scrum Team does.", "correct": true},
            {"text": "Ensuring that the work meets the commitments to the stakeholders.", "correct": false},
            {"text": "Keep stakeholders from distracting the Developers.", "correct": false}
        ]
    },
    {
        "question": "Which approach is best for Scrum Teams in order to produce valuable increments?",
        "answer": [
            {"text": "Each Developer works on the component where they feel that they can contribute.", "correct": false},
            {"text": "Each Scrum Team is accountable for developing functionality from beginning to end.", "correct": true},
            {"text": "Each Scrum Team works on an independent set of components.", "correct": false},
            {"text": "Each Scrum Member works only as an independent layer of the system.", "correct": false}
        ]
    },
    {
        "question": "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum?",
        "answer": [
            {"text": "Lead the discussions.", "correct": false},
            {"text": "Make sure that all 3 questions have been answered by each member of the team.", "correct": false},
            {"text": "Keep track of whether each Developer has a chance to speak.", "correct": false},
            {"text": "Teach the Developers to keep the Daily Scrum within 15 minutes.", "correct": true},
            {"text": "All of the above.", "correct": false}
        ]
    },
    {
        "question": "What factor should be considered when establishing the Sprint length?",
        "answer": [
            {"text": "The organization has mandated similar length sprints.", "correct": false},
            {"text": "The need for the team to learn based on doing work and measuring results.", "correct": true},
            {"text": "The frequency at which team formation can be changed.", "correct": false},
            {"text": "The organization's release schedule.", "correct": false}
        ]
    },
    {
        "question": "You are the Scrum Master on a newly formed Scrum Team. Which two of the following activities would probably help the team in starting up?",
        "answer": [
            {"text": "Ask the Product Owner to discuss the product, its vision, history, goals, and context, as well answer questions.", "correct": true},
            {"text": "Ensure the Scrum Team members have compatible personalities.", "correct": false},
            {"text": "Ensure the team understands they need a Definition of Done.", "correct": true},
            {"text": "Introduce a bonus system for the top performers in the team.", "correct": false},
            {"text": "Have the manager for each Developer introduce their direct reports and go over their responsibilities on the Scrum Team.", "correct": false}
        ]
    },
    {
        "question": "What are two responsibilities of testers in a Scrum Team?",
        "answer": [
            {"text": "Tracking quality metrics.", "correct": true},
            {"text": "The Developers are responsible for quality.", "correct": false},
            {"text": "Verifying the work of programmers.", "correct": false},
            {"text": "Finding bugs.", "correct": true},
            {"text": "Scrum has no \"tester\" role.", "correct": false}
        ]
    },
    {
        "question": "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas, and a Scrum Master to help guide the process.",
        "answer": [
            {"text": "True", "correct": true},
            {"text": "False", "correct": false}
        ]
    },
    {
        "question": "True or False: An Increment must be released to customers or users at the end of each Sprint.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "What is the timebox for the Sprint Review?",
        "answer": [
            {"text": "2 hours for a one-month Sprint.", "correct": false},
            {"text": "1 day.", "correct": false},
            {"text": "4 hours for a one-month Sprint.", "correct": true},
            {"text": "As long as needed.", "correct": false}
        ]
    },
    {
        "question": "Which output from Sprint Planning provides the Scrum Team with a target and overarching direction for the Sprint?",
        "answer": [
            {"text": "The Sprint Backlog.", "correct": false},
            {"text": "Sprint Review minutes.", "correct": false},
            {"text": "The release plan.", "correct": false},
            {"text": "The Sprint Goal.", "correct": true}
        ]
    },
    {
        "question": "When does a Sprint conclude?",
        "answer": [
            {"text": "When all Product Backlog items meet their Definition of Done.", "correct": false},
            {"text": "When the Sprint Retrospective is complete.", "correct": false},
            {"text": "When the Product Owner decides enough has been delivered to meet the Sprint Goal.", "correct": false},
            {"text": "When all the tasks are completed by the Developers.", "correct": true}
        ]
    },
    {
        "question": "The timebox for a Daily Scrum is:",
        "answer": [
            {"text": "15 minutes.", "correct": true},
            {"text": "4 hours.", "correct": false},
            {"text": "Two minutes per person.", "correct": false},
            {"text": "The same time of day every day.", "correct": false}
        ]
    },
    {
        "question": "A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding she is accountable for the Product Backlog. However, she is unsure about her responsibilities. Which of the following are responsibilities of a Product Owner on a Scrum Team?",
        "answer": [
            {"text": "Interacting with stakeholders.", "correct": true},
            {"text": "Ensuring that the most valuable functionality is produced first, at all times.", "correct": true},
            {"text": "Describing features as Use Cases.", "correct": false},
            {"text": "Creating detailed functional test cases.", "correct": false},
            {"text": "Providing the Developers with detailed specifications.", "correct": false}
        ]
    },
    {
        "question": "Developers are self-managing, which of the following do they manage?",
        "answer": [
            {"text": "Product Backlog ordering.", "correct": false},
            {"text": "When to release, based on its progress.", "correct": false},
            {"text": "Sprint Backlog.", "correct": true},
            {"text": "Stakeholders for the Sprint Review.", "correct": false},
            {"text": "Sprint length.", "correct": false}
        ]
    },
    {
        "question": "Who is accountable for tracking the remaining work toward the Sprint Goal?",
        "answer": [
            {"text": "The Product Owner.", "correct": false},
            {"text": "The Scrum Master.", "correct": false},
            {"text": "The Developers.", "correct": true},
            {"text": "The Project Manager.", "correct": false}
        ]
    },
    {
        "question": "A Sprint Retrospective should be held:",
        "answer": [
            {"text": "Only when the Scrum Team determines it needs one.", "correct": false},
            {"text": "At the end of each Sprint.", "correct": true},
            {"text": "At the end of the last Sprint in a project or a release.", "correct": false},
            {"text": "At the beginning of each Sprint.", "correct": false}
        ]
    },
    {
        "question": "True or False: Every Scrum Team must have a Product Owner and Scrum Master.",
        "answer": [
            {"text": "False. A Scrum Master is only required when asked for by the Scrum Team.", "correct": false},
            {"text": "True. Each must be 100% dedicated to the Scrum Team.", "correct": true},
            {"text": "False. A Product Owner can be replaced by a subject matter expert in the Scrum Team.", "correct": false},
            {"text": "True. Outcomes are affected by their participation and availability.", "correct": false}
        ]
    },
    {
        "question": "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
        "answer": [
            {"text": "Without a new vocabulary as a reminder of the change, very little change may actually happen.", "correct": true},
            {"text": "The organization may not understand what has changed within Scrum and the benefits of Scrum may be lost.", "correct": false},
            {"text": "Management may feel less anxious.", "correct": false},
            {"text": "All answers apply.", "correct": false}
        ]
    },
    {
        "question": "When multiple Scrum Teams are working on a single product, what best describes the Definition of Done?",
        "answer": [
            {"text": "Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint.", "correct": false},
            {"text": "The Scrum Masters from each Scrum Team define a common Definition of Done.", "correct": false},
            {"text": "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known.", "correct": false},
            {"text": "When multiple Scrum Teams are working together on a product, they must mutually define and comply with the same Definition of Done.", "correct": true}
        ]
    },
    {
        "question": "Why do the Developers need a Sprint Goal?",
        "answer": [
            {"text": "A Sprint Goal ensures that all of the Product Backlog items selected for the Sprint are implemented.", "correct": false},
            {"text": "The Developers are more focused with a common yet specific goal.", "correct": true},
            {"text": "A Sprint Goal only gives purpose to Sprint 0.", "correct": false},
            {"text": "Sprint Goals are not valuable. Everything is known from the Product Backlog.", "correct": false}
        ]
    },
    {
        "question": "True or False: The Product Owner makes sure the Developers select enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
        "answer": [
            {"text": "Maximizing velocity.", "correct": false},
            {"text": "Clear definition of requirements.", "correct": false},
            {"text": "Minimizing dependencies between teams.", "correct": true},
            {"text": "Making sure there is enough work for everyone on each team.", "correct": false},
            {"text": "Meeting original scope projections.", "correct": false}
        ]
    },
    {
        "question": "What does it mean for a Scrum Team to be cross-functional?",
        "answer": [
            {"text": "Developers on the Scrum Team work closely with business analysts, architects, developers, and testers who are not on the team.", "correct": false},
            {"text": "The Scrum Team includes skilled individuals who together have all the skills necessary to create value each Sprint.", "correct": true},
            {"text": "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, developers, and testers.", "correct": false},
            {"text": "The Scrum Team includes not only developers but also business analysts, architects, and testers.", "correct": false}
        ]
    },
    {
        "question": "What are three benefits of self-management?",
        "answer": [
            {"text": "Increased rule compliance.", "correct": false},
            {"text": "Increased commitment.", "correct": true},
            {"text": "Increased creativity.", "correct": true},
            {"text": "Increased accuracy of estimates.", "correct": false},
            {"text": "Increased self-accountability.", "correct": true}
        ]
    },
    {
        "question": "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master how to coordinate their work with the other teams. What should the Scrum Master do?",
        "answer": [
            {"text": "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.", "correct": false},
            {"text": "Teach them that it is their responsibility to work with the other teams to create an integrated Increment that is inclusive of all five team's work.", "correct": true},
            {"text": "Teach the Product Owner to work with the lead developers on ordering Product Backlog in a way to avoid too much overlap during a Sprint.", "correct": false},
            {"text": "Visit the five teams each day to inspect that their Sprint Backlogs are aligned.", "correct": false}
        ]
    },
    {
        "question": "Which statement best describes the Sprint Review?",
        "answer": [
            {"text": "It is a mechanism to control the Developers’ activities during a Sprint.", "correct": false},
            {"text": "It is used to congratulate the Developers if they complete their forecast or to punish the Developers if they fail to meet their forecast.", "correct": false},
            {"text": "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next.", "correct": true},
            {"text": "It is a demo at the end of the Sprint for everyone in the organization to check on the work done.", "correct": false}
        ]
    },
    {
        "question": "Which outcome is expected as a Scrum Team matures?",
        "answer": [
            {"text": "A Scrum Master is no longer needed since they are a mature team now.", "correct": false},
            {"text": "They will improve their Definition of Done to include more stringent criteria.", "correct": true},
            {"text": "There will be no need for a timeboxed Sprint.", "correct": false},
            {"text": "The Sprint Retrospectives will grow to be longer than 4 hours.", "correct": false},
            {"text": "Sprint Reviews will no longer be needed.", "correct": false}
        ]
    },
    {
        "question": "A Scrum Master is introducing Scrum to a new Team. The Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take?",
        "answer": [
            {"text": "Comply with the decision of the self-managing team.", "correct": false},
            {"text": "Consult with the Product Owner to see how they feel about the situation.", "correct": false},
            {"text": "Begin facilitating productive and useful Sprint Retrospectives.", "correct": true},
            {"text": "Call a meeting between the Scrum Team and senior management.", "correct": false}
        ]
    },
    {
        "question": "Which of the following are true about the Product Owner?",
        "answer": [
            {"text": "The Product Owner is accountable for ordering the Product Backlog.", "correct": true},
            {"text": "The Product Owner is one person.", "correct": true},
            {"text": "The Product Owner can be represented by a committee or a team of people.", "correct": false},
            {"text": "The Scrum Team can have multiple Product Owners.", "correct": false}
        ]
    },
    {
        "question": "For which of the following is the Scrum Master responsible?",
        "answer": [
            {"text": "Properly adopting and using the Scrum framework.", "correct": true},
            {"text": "Keeping track of resource allocation.", "correct": false},
            {"text": "Managing the performance of the Scrum Team.", "correct": false},
            {"text": "The meetings and the objectives that a Scrum Team sets for itself.", "correct": false}
        ]
    },
    {
        "question": "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
        "answer": [
            {"text": "The Scrum Team.", "correct": true},
            {"text": "The Project Manager.", "correct": false},
            {"text": "The Product Owner.", "correct": false},
            {"text": "The Developers.", "correct": false}
        ]
    },
    {
        "question": "What are two effective ways for a Scrum Team to ensure security concerns are satisfied?",
        "answer": [
            {"text": "Add security concerns to the Definition of Done.", "correct": true},
            {"text": "Have the Scrum Team create Product Backlog items for each concern.", "correct": true},
            {"text": "Add a Sprint to specifically resolve all security concerns.", "correct": false},
            {"text": "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items.", "correct": false},
            {"text": "Delegate the work to the security department.", "correct": false}
        ]
    },
    {
        "question": "A Scrum Team is experiencing a growing list of impediments. Which techniques would be most helpful in this situation?",
        "answer": [
            {"text": "Arrange a triage meeting with management.", "correct": false},
            {"text": "As a Scrum Team, prioritize the list and work on them in order.", "correct": true},
            {"text": "The Scrum Master discusses the impediments with the Scrum Team.", "correct": true},
            {"text": "The Product Owner should add the open impediments to the Product Backlog.", "correct": false}
        ]
    },
    {
        "question": "Which three of the following are true about Scrum?",
        "answer": [
            {"text": "Scrum is a framework for developing and sustaining complex products.", "correct": true},
            {"text": "Scrum is based on empiricism and lean thinking.", "correct": true},
            {"text": "Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment.", "correct": false},
            {"text": "Scrum implements self-management by replacing Project Managers with Scrum Masters.", "correct": false},
            {"text": "Each component of Scrum serves a specific purpose and is essential to Scrum's success and your usage of Scrum to develop complex products.", "correct": true}
        ]
    },
    {
        "question": "Which two things should the Scrum Team do during the first Sprint?",
        "answer": [
            {"text": "Make up a plan for the rest of the project.", "correct": false},
            {"text": "Create at least one valuable, useful Increment.", "correct": true},
            {"text": "Build at least one piece of valuable functionality.", "correct": true},
            {"text": "Define the major product features and a release plan architecture.", "correct": false},
            {"text": "Analyze, describe, and document the requirements for the subsequent Sprints.", "correct": false}
        ]
    },
    {
        "question": "The CEO asks the Developers to add a “very important” item to a Sprint that is in progress. What should the Developers do?",
        "answer": [
            {"text": "Inform the Product Owner so they can work with the CEO.", "correct": true},
            {"text": "Add the item to the current Sprint without any adjustments.", "correct": false},
            {"text": "Add the item to the next Sprint.", "correct": false},
            {"text": "Add the item to the current Sprint and drop an item of equal size.", "correct": false}
        ]
    },
    {
        "question": "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
        "answer": [
            {"text": "The Scrum Team and stakeholders.", "correct": true},
            {"text": "The Product Owner and the Developers.", "correct": false},
            {"text": "The Product Owner and management.", "correct": false},
            {"text": "The Developers and stakeholders.", "correct": false},
            {"text": "The Developers and management.", "correct": false},
            {"text": "The Product Owner and stakeholders.", "correct": false}
        ]
    },
    {
        "question": "Choose two responsibilities of self-managing Developers.",
        "answer": [
            {"text": "Reorder the Product Backlog.", "correct": false},
            {"text": "Pull Product Backlog items for the Sprint.", "correct": true},
            {"text": "Report daily progress to stakeholders.", "correct": false},
            {"text": "Increase velocity.", "correct": false},
            {"text": "Do the work planned in the Sprint Backlog.", "correct": true}
        ]
    },
    {
        "question": "Which Scrum Values are violated by building Product Backlog items that have low business value?",
        "answer": [
            {"text": "Respect.", "correct": false},
            {"text": "Earned Value.", "correct": false},
            {"text": "Courage.", "correct": true},
            {"text": "Focus.", "correct": true},
            {"text": "Economic Value Added.", "correct": false}
        ]
    },
    {
        "question": "True or False: A high-performance Scrum Team ensures that each Increment is complete by running a Release Sprint.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "Who can cancel a Sprint?",
        "answer": [
            {"text": "The Scrum Team.", "correct": false},
            {"text": "The Scrum Master.", "correct": false},
            {"text": "The Product Owner.", "correct": true},
            {"text": "The Stakeholders.", "correct": false}
        ]
    },
    {
        "question": "What enhances the transparency of an Increment?",
        "answer": [
            {"text": "Keeping track of and estimating all undone work to be completed in a \"hardening\" Sprint.", "correct": false},
            {"text": "Doing all work needed to meet the Definition of Done.", "correct": true},
            {"text": "Reporting Sprint progress to the stakeholders daily.", "correct": false},
            {"text": "Updating Sprint tasks properly in the electronic tracking tool.", "correct": false}
        ]
    },
    {
        "question": "Which of these may a Scrum Team deliver at the end of a Sprint?",
        "answer": [
            {"text": "A single document, if that is what management asked for.", "correct": false},
            {"text": "A valuable, useful Increment that meets the Definition of Done.", "correct": true},
            {"text": "Failing unit tests, to identify acceptance tests for the next Sprint.", "correct": false},
            {"text": "An Increment of software with minor known bugs in it.", "correct": false}
        ]
    }
]


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