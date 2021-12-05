// Hours querySelector Variables
const workHours = document.querySelector(".work-hours"), 
exerciseHours = document.querySelector(".exercise-hours"), 
playHours = document.querySelector(".play-hours"), 
socialHours = document.querySelector(".social-hours"), 
studyHours = document.querySelector(".study-hours"),
selfHours = document.querySelector(".self-hours");
// Previous hours selectors
const prevWork = document.querySelector(".prev-work"),
prevExercise = document.querySelector(".prev-exercise"),
prevPlay = document.querySelector(".prev-play"),
prevSocial = document.querySelector(".prev-social"),
prevStudy = document.querySelector(".prev-study"),
prevSelf = document.querySelector(".prev-self");
// period querySelector Variables
const dailySelect = document.querySelector(".daily"), 
weeklySelect = document.querySelector(".weekly"), 
monthlySelect = document.querySelector(".monthly");
// all cards
const allCards = document.querySelectorAll(".info-card");

// Fetch the hours for each card
function fetchHours(periodTime) {
  fetch("data.json")
  .then(response => response.json())
  .then(data => {
    workHours.textContent = `${data[0]["timeframes"][periodTime].current}hrs`
    exerciseHours.textContent = `${data[3]["timeframes"][periodTime].current}hrs`
    playHours.textContent = `${data[1]["timeframes"][periodTime].current}hrs`
    socialHours.textContent = `${data[4]["timeframes"][periodTime].current}hrs`
    studyHours.textContent = `${data[2]["timeframes"][periodTime].current}hrs`
    selfHours.textContent = `${data[5]["timeframes"][periodTime].current}hrs`
  })
}

// check the periodTime and return the correct previous hours for the card
function periodChecker(periodTime) {
  fetch("data.json")
  .then(response => response.json())
  .then(data => {
    if(periodTime === "daily") {
      prevWork.textContent = `Yesterday - ${data[0]["timeframes"][periodTime].previous}hrs`
      prevExercise.textContent = `Yesterday - ${data[3]["timeframes"][periodTime].previous}hrs`
      prevPlay.textContent = `Yesterday - ${data[1]["timeframes"][periodTime].previous}hrs`
      prevSocial.textContent = `Yesterday - ${data[4]["timeframes"][periodTime].previous}hrs`
      prevStudy.textContent = `Yesterday - ${data[2]["timeframes"][periodTime].previous}hrs`
      prevSelf.textContent = `Yesterday - ${data[5]["timeframes"][periodTime].previous}hrs`
    } else if (periodTime === "weekly") {
      prevWork.textContent = `Last Week - ${data[0]["timeframes"][periodTime].previous}hrs`
      prevExercise.textContent = `Last Week - ${data[3]["timeframes"][periodTime].previous}hrs`
      prevPlay.textContent = `Last Week - ${data[1]["timeframes"][periodTime].previous}hrs`
      prevSocial.textContent = `Last Week - ${data[4]["timeframes"][periodTime].previous}hrs`
      prevStudy.textContent = `Last Week - ${data[2]["timeframes"][periodTime].previous}hrs`
      prevSelf.textContent = `Last Week - ${data[5]["timeframes"][periodTime].previous}hrs`
    } else if (periodTime === "monthly") {
      prevWork.textContent = `Last Month - ${data[0]["timeframes"][periodTime].previous}hrs`
      prevExercise.textContent = `Last Month - ${data[3]["timeframes"][periodTime].previous}hrs`
      prevPlay.textContent = `Last Month - ${data[1]["timeframes"][periodTime].previous}hrs`
      prevSocial.textContent = `Last Month - ${data[4]["timeframes"][periodTime].previous}hrs`
      prevStudy.textContent = `Last Month - ${data[2]["timeframes"][periodTime].previous}hrs`
      prevSelf.textContent = `Last Month - ${data[5]["timeframes"][periodTime].previous}hrs`
    }
  })
}

// Event listener for Daily button
dailySelect.addEventListener("click", () => {
  let periodTime = "daily";
  fetchHours(periodTime);
  periodChecker(periodTime);
})

// Event listener for weekly button
weeklySelect.addEventListener("click", () => {
  let periodTime = "weekly";
  fetchHours(periodTime);
  periodChecker(periodTime)
})

// Event listener for monthly button
monthlySelect.addEventListener("click", () => {
  let periodTime = "monthly";
  fetchHours(periodTime);
  periodChecker(periodTime);
});