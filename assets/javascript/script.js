var quizSection = document.querySelector("#quizsection")
var highScoreSection = document.querySelector("#highscoresection")
var timeleft = 60
var timer = document.querySelector("#timer")
var questions = [
    {
        question: "What punctuation is used to start your HTML?",
        answer1: "!",
        answer2: "?",
        answer3: "@",
        answer4: "%"
    },



    {
        question: "What are the names of the friends in the show F.R.I.E.N.D.S.?",
        answer1: "Joey, Dwight, Pam, Rachael, Michael, Kevin",
        answer2: "Dwight, Michael, Pam, Jim, Ryan, Oscar",
        answer3: "Rachel, Ross, Monica, Joey, Pheobe, Chandler",
        answer4: "Janice, Richard, Gunther, Emily, Mike, Ursula"
    },


    {
        question: "What section do you select in your browser to view the JavaScript once you inspect?",
        answer1: "Console",
        answer2: "Sources",
        answer3: "Network",
        answer4: "Memory"
    }
]

var questionIndex = -1

document.querySelector("#StartBtn").addEventListener("click", function () {
    document.querySelector("#startsection").style = "display:none"
    quizSection.style = "display:block"
    startquiz()
})

function startquiz() {
    setInterval(function () {
        if (timeleft > 0) {
            timeleft--
            timer.textContent = timeleft
        } else {
            timeleft = 0
            timer.textContent = timeleft
        }

    }, 1000)
    nextQuestion()

    document.querySelector("#answerbtn1").addEventListener("click", nextQuestion)
    document.querySelector("#answerbtn2").addEventListener("click", nextQuestion)
    document.querySelector("#answerbtn3").addEventListener("click", nextQuestion)
    document.querySelector("#answerbtn4").addEventListener("click", nextQuestion)
}

function nextQuestion() {
    questionIndex++
    if (questionIndex >= questions.length) {
        quizSection.style = "display:none"
        highScoreSection.style = "display:block"
        var initials = prompt("Enter Your Initials")
        var li = document.createElement("li")
        li.textContent = initials + ": " + timeleft
        document.querySelector("ol").appendChild(li)
    } else {
        document.querySelector("#Questions").textContent = questions[questionIndex].question
        document.querySelector("#answerbtn1").textContent = questions[questionIndex].answer1
        document.querySelector("#answerbtn2").textContent = questions[questionIndex].answer2
        document.querySelector("#answerbtn3").textContent = questions[questionIndex].answer3
        document.querySelector("#answerbtn4").textContent = questions[questionIndex].answer4
    }
}
