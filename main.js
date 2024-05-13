const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const congrat = document.getElementById('congrat')

const formatNum = num => num < 10 ? `0${num}` : num;

let timer = setInterval(() => {
    let date = new Date();
    let alisher = new Date(2024, 9, 20);
    let difference = Date.parse(alisher) - Date.parse(date)
    
    if (difference > 0) {
        let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
        let hoursValue = Math.floor((difference / 1000 / 60 / 60) % 24);
        let minutesValue = Math.floor((difference / 1000 / 60) % 60);
        let secondsValue = Math.floor((difference / 1000) % 60);
        
        days.textContent = formatNum(daysValue);
        hours.textContent = formatNum(hoursValue);
        minutes.textContent = formatNum(minutesValue);
        seconds.textContent = formatNum(secondsValue);
        
        congrat.style.display = 'none'
    } else {
        let daysValue = 0;
        let hoursValue = 0;
        let minutesValue = 0;
        let secondsValue = 0;

        days.textContent = formatNum(daysValue);
        hours.textContent = formatNum(hoursValue);
        minutes.textContent = formatNum(minutesValue);
        seconds.textContent = formatNum(secondsValue);
        clearInterval(timer)
        congrat.style.display = 'block'
    }
}, 1000)