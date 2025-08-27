const questions = [
    {
        "question": "Who should make sure everyone on the Scrum Team does their tasks for the Sprint?",
        "answer": [
            {"text": "The Project Manager.", "correct": false},
            {"text": "The Product Owner.", "correct": false},
            {"text": "The Scrum Master.", "correct": true},
            {"text": "The Scrum Team.", "correct": false},
            {"text": "All of the above.", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an example of an Increment?",
        "answer": [
            {"text": "A plan for the overall product release.", "correct": false},
            {"text": "A mock-up of the product marketing materials.", "correct": false},
            {"text": "A design for the product.", "correct": false},
            {"text": "A product roll-out plan.", "correct": false},
            {"text": "A valuable, useful set of product features.", "correct": true},
            {"text": "All of the above.", "correct": false}
        ]
    },
    {
        "question": "Which best describes the Product Backlog?",
        "answer": [
            {"text": "It is allowed to grow and change as more is learned about the product and its customers.", "correct": true},
            {"text": "It contains all foreseeable tasks and requirements from which the Scrum Team can develop and maintain a complete project plan.", "correct": false},
            {"text": "It provides just enough information to enable a Scrum Team to start the design phase of a product.", "correct": false},
            {"text": "It is baselined to follow change management processes.", "correct": false}
        ]
    },
    {
        "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
        "answer": [
            {"text": "Just enough to understand design and architectural implications.", "correct": false},
            {"text": "Just enough tasks for the Scrum Master to be confident in the Developers' understanding of the Sprint.", "correct": false},
            {"text": "The entire Sprint Backlog must be identified and estimated by the end of Sprint Planning.", "correct": false},
            {"text": "Enough so the Developers can create their forecast of what work they can do.", "correct": true}
        ]
    },
    {
        "question": "Which two ways of creating Scrum Teams are consistent with Scrum’s values?",
        "answer": [
            {"text": "Managers personally re-assign current subordinates to new teams.", "correct": false},
            {"text": "The Chief Product Owner determines the new team structures and assignments.", "correct": false},
            {"text": "Managers collaborate to assign individuals to specific teams.", "correct": false},
            {"text": "Existing teams propose how they would like to go about organizing into the new structure.", "correct": false},
            {"text": "Bring all the people together and let them organize into Scrum Teams.", "correct": true}
        ]
    },
    {
        "question": "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers complain that work identified for the upcoming two Sprints will require full-time commitment from a specialist external to the teams. What should the Scrum Master consider in this situation?",
        "answer": [
            {"text": "The need to have enough work to keep all Developers busy.", "correct": false},
            {"text": "The benefit of Developers figuring out a solution for themselves.", "correct": true},
            {"text": "The desire to maintain a stable velocity.", "correct": false},
            {"text": "The ability of the Scrum Teams to produce integrated Increments.", "correct": true}
        ]
    },
    {
        "question": "A Developer takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
        "answer": [
            {"text": "Add security to the Definition of Done.", "correct": false},
            {"text": "Tell the Product Owner to stop further development of features until the issues are fixed.", "correct": false},
            {"text": "Create a Product Backlog item for security.", "correct": true},
            {"text": "Go check with the testers.", "correct": false},
            {"text": "Ask the Developer to share the concern with the team as soon as possible.", "correct": false}
        ]
    },
    {
        "question": "Who must attend the Daily Scrum?",
        "answer": [
            {"text": "The Scrum Master and Product Owner.", "correct": false},
            {"text": "The Developers and Scrum Master.", "correct": false},
            {"text": "The Developers.", "correct": true},
            {"text": "The Developers and Product Owner.", "correct": false},
            {"text": "The Scrum Team.", "correct": false}
        ]
    },
    {
        "question": "True or False: Cross-functional teams are optimized to work on one component or layer of a system only.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "Which topics should be discussed in the Sprint Review?",
        "answer": [
            {"text": "The Scrum process, and how it was used during the Sprint.", "correct": false},
            {"text": "Coding and engineering practices.", "correct": false},
            {"text": "The product Increment.", "correct": true},
            {"text": "All of the above.", "correct": false}
        ]
    },
    {
        "question": "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams building one product. Select two conditions you should strive for in this scenario.",
        "answer": [
            {"text": "There should be only one Product Owner.", "correct": true},
            {"text": "The product has one Product Backlog.", "correct": true},
            {"text": "Each Scrum Team should have a separate Product Backlog.", "correct": false},
            {"text": "There should be six Product Owners, reporting to a Chief Product Owner.", "correct": false},
            {"text": "There should be six Product Owners, one for each Scrum Team.", "correct": false}
        ]
    },
    {
        "question": "During the Sprint, the Scrum Master’s role is to do which two of the following?",
        "answer": [
            {"text": "Facilitate inspection and adaptation opportunities as requested or needed.", "correct": true},
            {"text": "Coaching the team members in self-management.", "correct": true},
            {"text": "Ensure the Product Owner attends all Scrum events.", "correct": false},
            {"text": "Escalate team conflicts to functional line managers.", "correct": false},
            {"text": "Monitor the progress of the Developers.", "correct": false},
            {"text": "Assign tasks with the Scrum Team.", "correct": false}
        ]
    },
    {
        "question": "Which two things are appropriate for a Scrum Master to do if the Scrum Team does not have the tools and environment to completely finish each selected Product Backlog item?",
        "answer": [
            {"text": "Coach the Scrum Team to improve its skills, tools and environment over time and adjust the Definition of Done accordingly.", "correct": true},
            {"text": "Refocus the current Sprint on establishing the Scrum Team's environment instead of delivering an Increment.", "correct": false},
            {"text": "Encourage the Product Owner to accept partially done Increments until the situation improves.", "correct": false},
            {"text": "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances.", "correct": true},
            {"text": "Declare the Scrum Team not ready for Scrum.", "correct": false}
        ]
    },
    {
        "question": "A Product Owner wants advice from the Scrum Master about estimating work in Scrum. What guidance should a Scrum Master give?",
        "answer": [
            {"text": "Estimates are made by the Product Owner, but are best checked with the Developers.", "correct": false},
            {"text": "Scrum forbids estimating.", "correct": false},
            {"text": "Estimates are made by the people doing the work.", "correct": true},
            {"text": "Estimates must be in relative units.", "correct": false},
            {"text": "Product Backlog items must be estimated in story points.", "correct": false}
        ]
    },
    {
        "question": "Which are appropriate topics for discussion in a Sprint Retrospective?",
        "answer": [
            {"text": "Arranging the Sprint Backlog for the next Sprint.", "correct": false},
            {"text": "The value of work currently represented in the Product Backlog.", "correct": false},
            {"text": "Definition of Done.", "correct": true},
            {"text": "Team relations.", "correct": true},
            {"text": "How the Scrum Team does its work.", "correct": true}
        ]
    },
    {
        "question": "Who is accountable for managing the progress of work during a Sprint?",
        "answer": [
            {"text": "The Developers.", "correct": true},
            {"text": "The most junior member of the team.", "correct": false},
            {"text": "The Scrum Master.", "correct": false},
            {"text": "The Product Owner.", "correct": false}
        ]
    },
    {
        "question": "When does the second Sprint start?",
        "answer": [
            {"text": "After the Product Backlog items for the second Sprint have been selected.", "correct": false},
            {"text": "Once the architectural changes for the second Sprint are approved by the senior architect.", "correct": false},
            {"text": "After the customer completes acceptance testing of the first Sprint.", "correct": false},
            {"text": "Immediately after the first Sprint.", "correct": true}
        ]
    },
    {
        "question": "Which of the following are the Developers accountable for?",
        "answer": [
            {"text": "Reporting productivity.", "correct": false},
            {"text": "Organizing the work required to meet the Sprint Goal.", "correct": true},
            {"text": "Creating a plan for the Sprint, the Sprint Backlog.", "correct": true},
            {"text": "Selecting the Product Owner.", "correct": false}
        ]
    },
    {
        "question": "Which of the following activities will a Product Owner engage in during a Sprint?",
        "answer": [
            {"text": "Answer questions from the Developers about items in the current Sprint.", "correct": true},
            {"text": "Prioritize the Developers' work on the Sprint Backlog.", "correct": false},
            {"text": "Run the Daily Scrum.", "correct": false},
            {"text": "Update management on what is being worked on.", "correct": false}
        ]
    },
    {
        "question": "True or False: A Scrum Master fulfills the same role as a traditional Project Manager.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "Which two things should a Scrum Team do during the first Sprint?",
        "answer": [
            {"text": "Make up a plan for the rest of the project.", "correct": false},
            {"text": "Define the major product features and a release plan architecture.", "correct": false},
            {"text": "Analyze, describe, and document the requirements for the subsequent Sprints.", "correct": false},
            {"text": "Build at least one piece of valuable functionality.", "correct": true},
            {"text": "Create at least one valuable, useful Increment.", "correct": true}
        ]
    },
    {
        "question": "What are the two primary ways a Scrum Master helps a Scrum Team work at its highest level of productivity?",
        "answer": [
            {"text": "By keeping high value features high in the Product Backlog.", "correct": false},
            {"text": "By facilitating Scrum Team decisions.", "correct": true},
            {"text": "By ensuring the meetings start and end at the proper time.", "correct": false},
            {"text": "By removing impediments that hinder the Scrum Team.", "correct": true}
        ]
    },
    {
        "question": "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take?",
        "answer": [
            {"text": "Coach the Product Owner in the values of Scrum and incremental delivery.", "correct": true},
            {"text": "Bring up the problem in the Sprint Retrospective.", "correct": true},
            {"text": "Nominate a proxy Product Owner.", "correct": false},
            {"text": "Inform the Product Owner's functional manager.", "correct": false},
            {"text": "Stop the Sprint, send the Product Owner to a course and restart.", "correct": false}
        ]
    },
    {
        "question": "How often should Scrum Team membership change?",
        "answer": [
            {"text": "As needed, while taking into account a short-term reduction in productivity.", "correct": true},
            {"text": "Every Sprint to promote shared learning.", "correct": false},
            {"text": "As needed, with no special allowance for changes in productivity.", "correct": false},
            {"text": "Never, it reduces productivity.", "correct": false}
        ]
    },
    {
        "question": "For the purpose of transparency, when does Scrum say a valuable and useful Increment must be available?",
        "answer": [
            {"text": "Before the Release Sprint.", "correct": false},
            {"text": "Every 3 Sprints.", "correct": false},
            {"text": "After the Acceptance Testing phase.", "correct": false},
            {"text": "At the end of every Sprint.", "correct": true},
            {"text": "When the Product Owner asks to create one.", "correct": false}
        ]
    },
    {
        "question": "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take?",
        "answer": [
            {"text": "Present the Product Owner with an ordered Product Backlog to use.", "correct": false},
            {"text": "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.", "correct": true},
            {"text": "Encourage the Product Owner to work with the Developers to see which items technically are fastest to implement.", "correct": false},
            {"text": "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.", "correct": false},
            {"text": "Suggest that the Developers order the Product Backlog to be sure that it is a feasible ordering of work.", "correct": false}
        ]
    },
    {
        "question": "What is the typical size for a Scrum Team?",
        "answer": [
            {"text": "7 plus or minus 3.", "correct": true},
            {"text": "At least 7.", "correct": false},
            {"text": "9.", "correct": false},
            {"text": "10 or fewer.", "correct": false}
        ]
    },
    {
        "question": "During a Sprint Retrospective, the Developers propose moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master to recommend?",
        "answer": [
            {"text": "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.", "correct": true},
            {"text": "Consider the request and decide on which days the Daily Scrum should occur.", "correct": false},
            {"text": "Learn why the Developers want this and work with them to improve the outcome of the Daily Scrum.", "correct": true},
            {"text": "Acknowledge and support the self-managing team's decision.", "correct": false},
            {"text": "Have the Developers vote.", "correct": false}
        ]
    },
    {
        "question": "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
        "answer": [
            {"text": "The Sprint length is unchanged and the Scrum Team continuously learns and adapts.", "correct": true},
            {"text": "The Sprint is extended and future Sprints use this new duration.", "correct": false},
            {"text": "The Sprint is extended temporarily. Lessons are taken to ensure it does not happen again.", "correct": false}
        ]
    },
    {
        "question": "How much work is required of the Developers to complete a Product Backlog item selected during the Sprint Planning?",
        "answer": [
            {"text": "A proportional amount of time on analysis, design, development, and testing.", "correct": false},
            {"text": "All development work and at least some testing.", "correct": false},
            {"text": "As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.", "correct": false},
            {"text": "As much as is required to meet the Scrum Team's Definition of Done.", "correct": true}
        ]
    },
    {
        "question": "What is the main reason for the Scrum Master to be at the Daily Scrum?",
        "answer": [
            {"text": "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.", "correct": false},
            {"text": "To gather status and progress information to report to management.", "correct": false},
            {"text": "To make sure every team member answers the three questions.", "correct": false},
            {"text": "They do not have to be there; they only need to ensure the Developers have a Daily Scrum.", "correct": true}
        ]
    },
    {
        "question": "What tactic should a Scrum Team use to divide a group of 100 people into multiple Scrum Teams?",
        "answer": [
            {"text": "Ask the people to divide themselves into teams.", "correct": false},
            {"text": "Create teams based on their skills across multiple layers (such as database, UI, etc.).", "correct": false},
            {"text": "Ask the Product Owner to assign the people to teams.", "correct": false},
            {"text": "Bring all the people together and let them organize themselves into teams.", "correct": true}
        ]
    },
    {
        "question": "When must a Scrum Team release each Increment?",
        "answer": [
            {"text": "When the Scrum Team finishes their work.", "correct": false},
            {"text": "After every Sprint, without exception.", "correct": false},
            {"text": "Whenever the product is free of defects.", "correct": false},
            {"text": "When it makes sense to release it.", "correct": true}
        ]
    },
    {
        "question": "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. The Scrum Master should:",
        "answer": [
            {"text": "Tell the Scrum Team to figure it out themselves.", "correct": false},
            {"text": "Tell the Developers to fit the report into the Sprint Backlog.", "correct": false},
            {"text": "Ask the Product Owner to send the manager the report.", "correct": false},
            {"text": "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.", "correct": true},
            {"text": "Create and deliver the report to the manager herself.", "correct": false}
        ]
    },
    {
        "question": "Who is responsible for the sizing of Product Backlog items?",
        "answer": [
            {"text": "The Product Owner with input from the Developers.", "correct": false},
            {"text": "The Scrum Master.", "correct": false},
            {"text": "The Developers, alone.", "correct": false},
            {"text": "The Developers after clarifying requirements with the Product Owner.", "correct": true},
            {"text": "The most senior people in the organization, including architects and subject matter experts.", "correct": false}
        ]
    },
    {
        "question": "True or False: Multiple Scrum Teams working on the same product must have the same Sprint start date.",
        "answer": [
            {"text": "True", "correct": false},
            {"text": "False", "correct": true}
        ]
    },
    {
        "question": "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply?",
        "answer": [
            {"text": "Ask an external agile coach what they recommend.", "correct": false},
            {"text": "Ask team members to take the issue up with the company's Human Resources department.", "correct": false},
            {"text": "Involve the complete Scrum Team in making a decision.", "correct": true},
            {"text": "Use coaching techniques, such as open questions and active listening.", "correct": true}
        ]
    },
    {
        "question": "Who is responsible for collaboration with stakeholders?",
        "answer": [
            {"text": "The Developers.", "correct": false},
            {"text": "The Team Manager.", "correct": false},
            {"text": "The Project Manager.", "correct": false},
            {"text": "The Scrum Team.", "correct": true},
            {"text": "The Business Analyst.", "correct": false}
        ]
    },
    {
        "question": "Who owns the Sprint Backlog?",
        "answer": [
            {"text": "The Scrum Master.", "correct": false},
            {"text": "The Scrum Team.", "correct": false},
            {"text": "The Product Owner.", "correct": false},
            {"text": "The Developers.", "correct": true}
        ]
    },
    {
        "question": "What is the function or purpose of management in Scrum?",
        "answer": [
            {"text": "To identify and remove people that are not working hard enough.", "correct": false},
            {"text": "To present the Scrum Teams with insights and resources that help them improve.", "correct": true},
            {"text": "To monitor the productivity of the Developers.", "correct": false},
            {"text": "To continually monitor staffing levels of the Scrum Team.", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a Sprint Review?",
        "answer": [
            {"text": "To review the Scrum Team's activities and processes during the Sprint.", "correct": false},
            {"text": "To inspect the product Increment with the stakeholders and collect feedback on next steps.", "correct": true},
            {"text": "To build team spirit.", "correct": false},
            {"text": "To take time to judge the validity of the project.", "correct": false}
        ]
    },
    {
        "question": "What does it mean to say that an event has a timebox?",
        "answer": [
            {"text": "The event can take no more than a maximum amount of time.", "correct": true},
            {"text": "The event must happen by a given time.", "correct": false},
            {"text": "The event must take at least a minimum amount of time.", "correct": false},
            {"text": "The event must happen at a set time.", "correct": false}
        ]
    },
    {
        "question": "What is the timebox for the Sprint Planning event?",
        "answer": [
            {"text": "4 hours for a one-month Sprint.", "correct": false},
            {"text": "Monthly.", "correct": false},
            {"text": "8 hours for a one-month Sprint.", "correct": true},
            {"text": "Whenever it is done.", "correct": false}
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