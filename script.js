function Timer() {
  const from = new Date('December 17, 2020 00:00:00');
  this.getCurrentDate = ()=>{
    return new Date();
  }
  this.getTime = ()=>{
    //return Math.round((this.getCurrentDate() - from)/(1000*60*60*24));
    let ms = this.getCurrentDate() - from;
    let days = Math.floor(ms/(1000*60*60*24));
    let hours = Math.floor(ms/(1000*60*60)-24*days);
    let minutes = Math.floor(ms/(1000*60)-hours*60-days*24*60);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
    }
  }
}

window.addEventListener('load', main, false);

function main() {
  const timer = new Timer();
  const timerSpan = document.getElementById('timer');
  let days = ()=>{
    let d = time.days % 10;
    if (time.days>10 && time.days<20) return 'дней';
    if (d==1) return 'день';
    if (d==2 || d==3 || d==4) return 'дня';
    return 'дней';
  }
  let hours = ()=>{
    let d = time.hours % 10;
    if (time.hours>10 && time.hours<20) return 'часов';
    if (d==1) return 'час';
    if (d==2 || d==3 || d==4) return 'часа';
    return 'часов';
  }
  let minutes = ()=>{
    let d = time.minutes % 10;
    if (time.minutes>10 && time.minutes<20) return 'минут';
    if (d==1) return 'минута';
    if (d==2 || d==3 || d==4) return 'минуты';
    return 'минут';
  }
  let time = timer.getTime();
  document.title = `${time.days} ${days()} без Ле-Захарова`;
  timerSpan.innerHTML = `${time.days} ${days()} ${time.hours} ${hours()} ${time.minutes} ${minutes()}`




  setInterval(
    ()=>{
      let time = timer.getTime();
      timerSpan.innerHTML = `${time.days} ${days()} ${time.hours} ${hours()} ${time.minutes} ${minutes()}`
    }, 1000
  )
}
