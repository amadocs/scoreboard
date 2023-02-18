let tBluePoints=document.getElementById("t-blue-points")
 let blueTeamCount=0
 let tGreenPoints=document.getElementById("t-green-points")
 let greenTeamCount=0

// Creating green team fuctions

function addBlueOnePoint() {
    blueTeamCount = blueTeamCount +1
    tBluePoints.innerText = blueTeamCount
}

function addBlueTwoPoints() {
    blueTeamCount = blueTeamCount +2
    tBluePoints.innerText = blueTeamCount
}

function addBlueThreePoints() {
    blueTeamCount = blueTeamCount +3
    tBluePoints.innerText = blueTeamCount
}

// Creating blue team fuctions

function addGreenOnePoint() {
    greenTeamCount = greenTeamCount +1
    tGreenPoints.innerText = greenTeamCount

}

function addGreenTwoPoints() {
    greenTeamCount = greenTeamCount +2
    tGreenPoints.innerText = greenTeamCount

}

function addGreenThreePoints() {
    greenTeamCount = greenTeamCount +3
    tGreenPoints.innerText = greenTeamCount

}

