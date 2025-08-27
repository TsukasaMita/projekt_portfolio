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
        question: "When is the Sprint Backlog created?",
        answer: [
            {text: "During Sprint Planning.", correct: true},
            {text: "Prior to Sprint Planning.", correct: false},
            {text: "During refinement.", correct: false},
            {text: "During the Sprint Retrospective.", correct: false}
        ]
    },
    {
        question: "Several Sprints into a project, the Product Owner tells the Scrum Master that a key stakeholder just started using the product. The stakeholder is unhappy with the quality of the product. What are two good options for the Scrum Master?",
        answer: [
            {text: "Wait to bring this up until the Sprint Retrospective.", correct: false},
            {text: "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.", correct: true},
            {text: "Explain to the Product Owner that it is up to the Developers to decide on acceptable quality standards.", correct: false},
            {text: "Bring the concern to the testers to improve how the Product is verified.", correct: false},
            {text: "Coach the Product Owner on how to talk with the Developers about this concern.", correct: true}
        ]
    },
    {
        question: "When does the next Sprint begin?",
        answer: [
            {text: "The Monday following the Sprint Review.", correct: false},
            {text: "Immediately after the conclusion of the previous Sprint.", correct: true},
            {text: "Immediately following the next Sprint Planning.", correct: false},
            {text: "When the Product Owner is ready.", correct: false}
        ]
    },
    {
        question: "Which statement best describes Scrum?",
        answer: [
            {text: "A framework to generate value through adaptive solutions for complex problems.", correct: true},
            {text: "A complete methodology that defines how to develop software.", correct: false},
            {text: "A cookbook that defines best practices for software development.", correct: false},
            {text: "A defined and predictive process that conforms to the principles of Scientific Management.", correct: false}
        ]
    },
    {
        question: "The Product Backlog is ordered by:",
        answer: [
            {text: "Random assignment.", correct: false},
            {text: "Size, where small items are at the top and large items are at the bottom.", correct: false},
            {text: "The Product Owner, with the most valuable items placed at the top.", correct: true},
            {text: "Risk, where safer items are at the top, and riskier items are at the bottom.", correct: false}
        ]
    },
    {
        question: "When must the Product Owner participate in the Daily Scrum?",
        answer: [
            {text: "When the Product Owner is actively working on items on the Sprint Backlog; however, they participate as a Developer.", correct: true},
            {text: "When the Product Owner needs to represent the stakeholders' point of view to the Developers.", correct: false},
            {text: "When there are impediments to discuss.", correct: false},
            {text: "When the Scrum Master asks the Product Owner to attend.", correct: false}
        ]
    },
    {
        question: "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
        answer: [
            {text: "Focus", correct: false},
            {text: "Respect", correct: false},
            {text: "Openness", correct: false},
            {text: "Courage", correct: false},
            {text: "Commitment", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "Which statement best describes the Sprint Backlog as the output of the Sprint Planning?",
        answer: [
            {text: "Each task is estimated in hours.", correct: false},
            {text: "Every item has a designated owner.", correct: false},
            {text: "It is the Developers plan for the Sprint.", correct: true},
            {text: "It is a complete list of all work to be done in a Sprint.", correct: false},
            {text: "It is ordered by the Product Owner.", correct: false}
        ]
    },
    {
        question: "A new Developer is having continuing conflicts with existing members of the Scrum Team, which is impacting the delivery of the Increment. If necessary, who is responsible for removing the Developer from the Scrum Team?",
        answer: [
            {text: "The Scrum Master is responsible, they remove impediments.", correct: false},
            {text: "The Product Owner is responsible, they control the return on investment (ROI).", correct: false},
            {text: "The hiring manager is responsible, they hired the Developer.", correct: false},
            {text: "The Scrum Team is responsible.", correct: true}
        ]
    },
    {
        question: "The Definition of Done serves which three purposes?",
        answer: [
            {text: "Guide the Developers on how many Product Backlog items to select for the Sprint.", correct: true},
            {text: "Describe the work that must be mostly done before the Sprint is allowed to end.", correct: false},
            {text: "Increase transparency.", correct: true},
            {text: "Describe the purpose, objective, and timebox of each Scrum event.", correct: false},
            {text: "Create a shared understanding of when work is complete.", correct: true}
        ]
    },
    {
        question: "The length of a Sprint should be:",
        answer: [
            {text: "Short enough to keep the business risk acceptable to the Product Owner.", correct: false},
            {text: "Short enough to be able to synchronize the development work with other business events.", correct: false},
            {text: "No more than one calendar month.", correct: false},
            {text: "All of the above.", correct: true}
        ]
    },
    {
        question: "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog item?",
        answer: [
            {text: "Review the item, add the done part of the estimate to the velocity and create a Story for the remaining work.", correct: false},
            {text: "If the stakeholders agree, the Product Owner can accept it and release it to the users.", correct: false},
            {text: "Do not include the item in the Increment this Sprint.", correct: true},
            {text: "Put it on the Product Backlog for the Product Owner to decide what to do with it.", correct: true}
        ]
    },
    {
        question: "When can Developers cancel a Sprint?",
        answer: [
            {text: "When a technical dependency cannot be resolved.", correct: false},
            {text: "They cannot. Only Product Owners can cancel Sprints.", correct: true},
            {text: "When the Product Owner is absent too often.", correct: false},
            {text: "When the selected Product Backlog items for the Sprint become unachievable.", correct: false},
            {text: "When functional expectations are not well understood.", correct: false}
        ]
    },
    {
        question: "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate?",
        answer: [
            {text: "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog.", correct: false},
            {text: "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.", correct: false},
            {text: "The Scrum Team may add the items to the Sprint Backlog for the next Sprint.", correct: false},
            {text: "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.", correct: true}
        ]
    },
    {
        question: "Which of the following are appropriate topics for discussion during a Sprint Retrospective?",
        answer: [
            {text: "Identifying high priority process improvements for the next Sprint.", correct: true},
            {text: "How the team collaborates.", correct: true},
            {text: "The order of items in the Product Backlog.", correct: false},
            {text: "Documenting acceptance criteria for items in the next Sprint.", correct: false}
        ]
    },
    {
        question: "Which three behaviors demonstrate that a Scrum Team is self-managing?",
        answer: [
            {text: "The Scrum Team members are working within the boundaries of their functional description and nicely handing off work from analyst to developer to tester to integration.", correct: false},
            {text: "The Scrum Master is no longer needed.", correct: false},
            {text: "The Developers create their own Sprint Backlog, reflecting all work that is part of the Definition of Done.", correct: true},
            {text: "Developers collaboratively selecting their own work during the Sprint.", correct: true},
            {text: "The Scrum Team has all the skills needed to create an Increment.", correct: true},
            {text: "Stakeholders are attending the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.", correct: false}
        ]
    },
    {
        question: "What are three ways Scrum promotes self-management?",
        answer: [
            {text: "By being a lightweight framework.", correct: true},
            {text: "By the Scrum Team deciding what work to do in a Sprint.", correct: true},
            {text: "By removing titles for Scrum Team members.", correct: true},
            {text: "By having the Scrum Master protect the Scrum Team.", correct: false}
        ]
    },
    {
        question: "What may be included in the Sprint Backlog?",
        answer: [
            {text: "User Stories.", correct: false},
            {text: "Tasks.", correct: false},
            {text: "Use Cases.", correct: false},
            {text: "Tests.", correct: false},
            {text: "Any of the above (or others) which are a decomposition of the selected Product Backlog items.", correct: true}
        ]
    },
    {
        question: "When might a Sprint be cancelled?",
        answer: [
            {text: "When it becomes clear that not everything will be finished by the end of the Sprint.", correct: false},
            {text: "When the Sprint Goal becomes obsolete.", correct: true},
            {text: "When the Developers determine the product plan is infeasible.", correct: false},
            {text: "When the sales department has an important new opportunity.", correct: false}
        ]
    },
    {
        question: "Which of the following are true about the length of the Sprint?",
        answer: [
            {text: "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Scrum Team can deliver what is to be accomplished in the upcoming Sprint.", correct: false},
            {text: "All Sprints must be one month or less.", correct: true},
            {text: "Sprint length is determined during Sprint Planning, and should hold the time it will take to build the planned features in the upcoming Sprint, but does not include time for any testing.", correct: false},
            {text: "The length of the Sprint should be proportional to the work that is done in between Sprints.", correct: false}
        ]
    },
    {
        question: "The Scrum Team should have all the skills needed to:",
        answer: [
            {text: "Do all of the development work, except for specialized testing that requires additional tools and environments.", correct: false},
            {text: "Turn Product Backlog items into a valuable, useful Increment.", correct: true},
            {text: "Complete the project within the date and cost as calculated by the Product Owner.", correct: false}
        ]
    },
    {
        question: "Who is on the Scrum Team?",
        answer: [
            {text: "Scrum Master.", correct: true},
            {text: "Product Owner.", correct: true},
            {text: "Developers.", correct: true},
            {text: "Project Manager.", correct: false},
            {text: "None of the above.", correct: false}
        ]
    },
    {
        question: "Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.",
        answer: [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        question: "Which three of the following are timeboxed events in Scrum?",
        answer: [
            {text: "Sprint Planning", correct: true},
            {text: "Daily Scrum", correct: true},
            {text: "Sprint Retrospective", correct: true},
            {text: "Sprint Testing", correct: false},
            {text: "Release Planning", correct: false},
            {text: "Release Retrospective", correct: false},
            {text: "Sprint 0", correct: false}
        ]
    },
    {
        question: "What are two effective ways for the Scrum Team to make non-functional requirements visible?",
        answer: [
            {text: "Add them to the Definition of Done so the work is taken care of every Sprint.", correct: true},
            {text: "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.", correct: false},
            {text: "Put them on a separate list on the Scrum board, available for all to see.", correct: false},
            {text: "Add them to the Product Backlog to ensure transparency.", correct: true}
        ]
    },
    {
        question: "Scrum has a role called 'Project Manager'.",
        answer: [
            {text: "True", correct: false},
            {text: "False", correct: true}
        ]
    },
    {
        question: "What is the accountability of the Product Owner during Sprint 0?",
        answer: [
            {text: "Make sure enough Product Backlog items are refined to fill the first 3 Sprints.", correct: false},
            {text: "There is no such thing as Sprint 0.", correct: true},
            {text: "Determine the composition of the Scrum Team to meet the release plan.", correct: false},
            {text: "Gathering, eliciting, and analyzing the requirements to build the Product Backlog.", correct: false},
            {text: "Create the overall release plan to ensure that organizational goals are met.", correct: false}
        ]
    },
    {
        question: "When should a Sprint Goal be created?",
        answer: [
            {text: "It should have been created in the previous Sprint during Product Backlog refinement.", correct: false},
            {text: "During Sprint Planning.", correct: true},
            {text: "At any time during the Sprint.", correct: false},
            {text: "A Sprint Goal is not mandatory in Scrum.", correct: false},
            {text: "It must be established before Sprint Planning in order to begin planning.", correct: false}
        ]
    },
    {
        question: "Every Scrum Team should have:",
        answer: [
            {text: "At least one representative from each major department, such as, Quality Assurance, Development, and Marketing.", correct: false},
            {text: "One Lead Developer and no more than 8 other members.", correct: false},
            {text: "The competencies and skills needed to deliver an Increment in a Sprint.", correct: true}
        ]
    },
    {
        question: "The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
        answer: [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        question: "Which answer best describes the topics covered in Sprint Planning?",
        answer: [
            {text: "What can be done, how to do it, and why to do it.", correct: true},
            {text: "How conditions have changed and how the Product Backlog should evolve.", correct: false},
            {text: "Who is on the team and what team member roles will be.", correct: false},
            {text: "What went wrong in the last Sprint and what to do differently this Sprint.", correct: false},
            {text: "What to do and who will do it.", correct: false}
        ]
    },
    {
        question: "How should a Scrum Team deal with non-functional requirements?",
        answer: [
            {text: "Manage them during the Integration Sprint prior to the Release Sprint.", correct: false},
            {text: "Assign them to the lead developers on the team.", correct: false},
            {text: "Ensure every Increment meets them.", correct: true},
            {text: "Make sure the release department understands these requirements, but it is not the Scrum Team's responsibility.", correct: false}
        ]
    },
    {
        question: "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
        answer: [
            {text: "Each Scrum Team takes an equal number of items.", correct: false},
            {text: "The Developers pull in work in agreement with the Product Owner.", correct: true},
            {text: "The Scrum Team with the highest velocity pulls Product Backlog items first.", correct: false},
            {text: "The Product Owner should provide each team with its own Product Backlog.", correct: false},
            {text: "The Product Owner decides.", correct: false}
        ]
    },
    {
        question: "How is management that is external to the Scrum Team involved in the Daily Scrum?",
        answer: [
            {text: "Management gives an update at the start of each Daily Scrum.", correct: false},
            {text: "Managers are not required at the Daily Scrum.", correct: true},
            {text: "The Product Owner represents their opinions.", correct: false},
            {text: "The Scrum Master speaks on their behalf.", correct: false}
        ]
    },
    {
        question: "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
        answer: [
            {text: "Never. The entire Scrum Team is accountable for creating value every Sprint.", correct: true},
            {text: "During the Daily Scrum.", correct: false},
            {text: "Whenever a team member can accommodate more work.", correct: false},
            {text: "At the Sprint Planning Event.", correct: false}
        ]
    },
    {
        question: "Which three of the following are feedback loops in Scrum?",
        answer: [
            {text: "Release Planning.", correct: false},
            {text: "Refinement Meeting.", correct: false},
            {text: "Sprint Retrospective.", correct: true},
            {text: "Sprint Review.", correct: true},
            {text: "Daily Scrum.", correct: true}
        ]
    },
    {
        question: "When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
        answer: [
            {text: "True", correct: false},
            {text: "False", correct: true}
        ]
    },
    {
        question: "As the Developers start work during the Sprint, they realize they have selected too much work to finish in the Sprint. What should they do?",
        answer: [
            {text: "Reduce the Definition of Done and get all of the Product Backlog items done by the new definition.", correct: false},
            {text: "Find another Scrum Team to give the excess work to.", correct: false},
            {text: "Inform the Product Owner at the Sprint Review, but prior to the demonstration.", correct: false},
            {text: "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items.", correct: true}
        ]
    },
    {
        question: "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
        answer: [
            {text: "During the Daily Scrum after the Developers approve it.", correct: false},
            {text: "As soon as possible after it is identified.", correct: true},
            {text: "When the Product Owner identifies new work.", correct: false},
            {text: "When the Scrum Master has time to enter it.", correct: false}
        ]
    },
    {
        question: "Which two of the following are true about the Scrum Master?",
        answer: [
            {text: "The Scrum Master teaches the Scrum Team to use timeboxes.", correct: true},
            {text: "The Scrum Master is responsible for updating the Sprint Burndown.", correct: false},
            {text: "The Scrum Master assigns tasks to Developers when they need work.", correct: false},
            {text: "The Scrum Master helps those outside the team interact with the Scrum Team.", correct: true},
            {text: "At the Sprint Review, the Scrum Master identifies what work is done and not done.", correct: false}
        ]
    },
    {
        question: "Who starts the Daily Scrum?",
        answer: [
            {text: "The Scrum Master. This ensures that the Developers have the event, and it stays within the timebox.", correct: false},
            {text: "The person coming in last. This encourages people to be on time and helps to stay within the timebox.", correct: false},
            {text: "The Product Owner.", correct: false},
            {text: "Whoever the Developers decide should start.", correct: true},
            {text: "The person who has the token.", correct: false}
        ]
    },
    {
        question: "What is the Product Owner responsible for during the Sprint Retrospective?",
        answer: [
            {text: "Summarizing and reporting the discussions to the stakeholders that they represent in the Scrum Team.", correct: false},
            {text: "The Product Owner should not take part in Sprint Retrospective.", correct: false},
            {text: "Participating as a Scrum Team member.", correct: true},
            {text: "Capturing requirements for the Product Backlog.", correct: false}
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