let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let homeCount = 0
let guestCount = 0

homeScore.textContent = homeCount
guestScore.textContent = guestCount

function one()
{
    homeCount +=1
    homeScore.textContent = homeCount
    condition()
}
function two()
{
    homeCount +=2
    homeScore.textContent = homeCount
    condition()
}

function three()
{
    homeCount +=3
    homeScore.textContent = homeCount
    condition()
}
function scoreone()
{
    guestCount +=1
    guestScore.textContent = guestCount
    condition()
}
function scoretwo()
{
    guestCount +=2
    guestScore.textContent = guestCount
    condition()
}
function scorethree()
{
    guestCount +=3
    guestScore.textContent = guestCount
    condition()
}
function newgame() 
{
    homeCount = 0
    guestCount = 0
    homeScore.textContent= 0
    guestScore.textContent = 0
    guestScore.className = 'score'
    homeScore.className = 'score'
}
function condition()
{
    if (homeCount > guestCount) 
    {
        console.log('win')
        homeScore.className = 'myClass'
        guestScore.className = 'score'
    }
    else if (homeCount < guestCount)
     {
        guestScore.className = 'myClass'
        homeScore.className = 'score'
    }
    else 
    {
        guestScore.className = 'score'
        homeScore.className = 'score'
    }
}
