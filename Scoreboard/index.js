let homeCount = 0
let guestCount = 0
let timer = 0
let timerInterval = null
let timerStarted = false

function startTimer() {
    if (!timerStarted) {
        timerStarted = true
        timerInterval = setInterval(() => {
            timer++
            document.getElementById('timer').innerHTML = `Timer: ${timer}s`
        }, 1000)
    }
}

function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null
    timerStarted = false
    timer = 0
    document.getElementById('timer').innerHTML = `Timer: 0s`
}

function addHomeScore(n) {
    if (!timerStarted) startTimer()
    const incrementPoints = n
    homeCount += incrementPoints
    window.document.getElementById("home-points").innerHTML = homeCount
}

function addGuestScore(n) {
    if (!timerStarted) startTimer()
    const incrementPoints = n
    guestCount += incrementPoints
    window.document.getElementById("guest-points").innerHTML = guestCount
}

function newGame() {
    if (homeCount > guestCount) {
        alert("The home team has won!!!")
    } else if (homeCount < guestCount) {
        alert("The guest team has won!!!")
    } else {
        alert("Draw!!!")
    }
    homeCount = 0
    document.getElementById("home-points").innerHTML = 0
    guestCount = 0
    document.getElementById("guest-points").innerHTML = 0
    stopTimer()
}
