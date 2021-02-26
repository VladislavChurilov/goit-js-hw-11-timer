const valueRef = document.querySelectorAll('.value');
const daysRef = valueRef[0];
const hoursRef = valueRef[1];
const minsRef = valueRef[2];
const secsRef = valueRef[3];

timer();

function timer() {
const targetDate = new Date('Jul 17, 2021');
 setInterval(() => {
   const currentTime = Date.now();    
    const deltaTime = targetDate - currentTime;
    updateClockface(deltaTime);
  }, 1000);
} 
function updateClockface(time) {
  
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
 
 daysRef.textContent = `${days}`;
 hoursRef.textContent = `${hours}`;
 minsRef.textContent = `${mins}`;
 secsRef.textContent = `${secs}`;
  }
  // добить символы (два символа 01, а не 1);
  function pad(value) {
      return String(value).padStart(2, '0');
  }


  








// const timer = {
//     intervalId: null,
//     isActive: false,
//     start(){
//         if (this.isActive){
//             return;
//         }
//         this.isActive = true;
//         // const startTime = Date.now();
//         const targetDate= new Date('Jul 17, 2019');
//         console.log(targetDate);
//         updateClockface(0);
//         this.intervalId = setInterval(()=>{
//             const currentTime = Date.now();
//             const time = targetDate - currentTime;
//             // изменить тут!!!!!!!!!!!!
//             updateClockface(time);
//         },1000);
//     },
//     stop(){
//         clearInterval(this.intervalId);
//         this.intervalId = null;
//         this.isActive = false;
//         updateClockface(0);
//     }
// };



//  function updateClockface(time) {
  
//  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

// daysRef.textContent = `${days}`;
// hoursRef.textContent = `${hours}`;
// minsRef.textContent = `${mins}`;
// secsRef.textContent = `${secs}`;
//  }
//  // добить символы (два символа 01, а не 1);
//  function pad(value) {
//      return String(value).padStart(2, '0');
//  }






// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// CountdownTimer(timer);
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и 
// текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);






// function getTimeRemaining(endtime) {
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
//     return {
//       total,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//   }
  
//   function initializeClock(id, endtime) {
//     const clock = document.getElementById(id);
//     const daysSpan = clock.querySelector('.days');
//     const hoursSpan = clock.querySelector('.hours');
//     const minutesSpan = clock.querySelector('.minutes');
//     const secondsSpan = clock.querySelector('.seconds');
  
//     function updateClock() {
//       const t = getTimeRemaining(endtime);
  
//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }
  
//     updateClock();
//     const timeinterval = setInterval(updateClock, 1000);
//   }
  
//   const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//   initializeClock('clockdiv', deadline);