const timerRef = document.querySelector('.timer');
const fieldRef = document.querySelector('.field');
const valueRef = document.querySelector('.value');
const labelRef = document.querySelector('.label');
console.log(valueRef);

const timer = {
    intervalId: null,
    isActive: false,
    start(){
        if (this.isActive){
            return;
        }
        this.isActive = true;
        const startTime = Date.now();
        updateClockface(0);
        this.intervalId = setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            // изменить тут!!!!!!!!!!!!
            updateClockface(deltaTime);
        },1000);
    },
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        updateClockface(0);
    }
};

// addEventListener();

 function updateClockface(time) {
  
//  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//  const hours = pad();
//  const mins = pad();
//  const secs = pad();
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

valueRef.textContent = `${days}`;
valueRef.textContent = `${hours}`;
valueRef.textContent = `${mins}`;
valueRef.textContent = `${secs}`;
 }
 function pad(value) {
     return String(value).padStart(2, '0');
 }






// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
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