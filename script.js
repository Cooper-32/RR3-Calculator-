let x2 = false;
let calculateDistance = false;
document.getElementById("money").disabled = !calculateDistance;
let minutes = 0;
let hoursFloat = 0;
let hours = 0;
let minutesF = 0;
let acM = 0;
 
function calculate() {
  let mone = document.getElementById("money").value || 0;
  let money = parseFloat(mone);
  const earnings = document.getElementById("earnings").value;
  const bonus = document.getElementById("bonusday").value || 0;
  const laps = document.getElementById("laps").value || 1;
  let distanc = document.getElementById("distance").value || 0;
  let distance = parseFloat(distanc);
  let result2 = 0;
  let kmresult = distance*laps;
  let time = document.getElementById("time").value;
  
  if (calculateDistance) {
    result2 = x2 ? (money/(earnings*(1+bonus/100)))*(distance/2) : result2 = (money/(earnings*(1+bonus/100)))*distance; let intResult2 = Math.round(result2);
    minutes = (result2/distance*time)/60;
    hoursFloat = minutes/60;
    hours = Math.floor(hoursFloat);
    minutesF = hoursFloat-hours;
    acM = Math.round(minutesF*60);
document.getElementById("result").innerHTML = "Distance: "+intResult2+"km, Time: ~"+hours+"h "+acM+"min";
  } else {
    result = x2 ? (laps/distance)*earnings*(1+bonus/100)*2 : (laps/distance)*earnings*(1+bonus/100);
    minutes = (laps/distance*time)/60;
    hoursFloat = minutes/60;
    hours = Math.floor(hoursFloat);
    minutesF = hoursFloat-hours;
    acM = Math.round(minutesF*60);
    let intResult = Math.floor(result);
    document.getElementById("result").innerHTML = `Result: ${intResult.toLocaleString()} R$/Fame, Time: ~${hours}h ${acM}min`;
  }
}

document.getElementById("x2").addEventListener("change", function(){
  x2 = this.checked;
})

document.getElementById("caldis").addEventListener("change", function(){
  calculateDistance = this.checked;
document.getElementById("money").disabled = !calculateDistance;
  document.getElementById("laps").disabled = calculateDistance;
})

const day = new Date();
const today = day.getDate();
const rewards = [
  "",
  "10.000 R$",
  "3 Gold",
  "+20% Fame",
  "3 Gold",
  "15.000 R$", //5.
  "3 Gold",
  "+25% Fame",
  "4 Gold",
  "25.000 R$",
  "4 Gold", //10.
  "+30% Fame",
  "4 Gold",
  "+40% Fame",
  "5 Gold",
  "50.000 R$", //15.
  "5 Gold",
  "+50% Fame",
  "6 Gold",
  "75.000 R$",
  "7 Gold", //20.
  "+60% Fame",
  "7 Gold",
  "+70% Fame",
  "100.000 R$",
  "9 Gold", //25.
  "+170% R$",
  "10 Gold",
  "+180% R$",
  "10 Gold",
  "+100% Fame", //30.
"30 Gold"];
 const display = rewards[today] || "If you see this, something went wrong :(";
document.getElementById("dailyRewards").innerHTML = `Daily Reward: ${display}`;
