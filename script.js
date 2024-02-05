const hourElem = document.querySelector('.hour')
const minuteElem = document.querySelector('.minute')
const secondElem = document.querySelector('.second')
const timeElem = document.querySelector('.time')
const dateElem = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hoursForClock = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // try not to copy paste ; or transform
    hourElem.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteElem.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondElem.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeElem.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

setTime()

setInterval(setTime, 1000)
