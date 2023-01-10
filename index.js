let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0

function addOneHome() {
    countHome+=1
    homeScore.textContent = countHome
}

function addTwoHome() {
    countHome+=2
    homeScore.textContent = countHome
}

function addThreeHome() {
    countHome+=3
    homeScore.textContent = countHome
}

function addOneGuest() {
    countGuest+=1
    guestScore.textContent = countGuest
}

function addTwoGuest() {
    countGuest+=2
    guestScore.textContent = countGuest
}

function addThreeGuest() {
    countGuest+=3
    guestScore.textContent = countGuest
}