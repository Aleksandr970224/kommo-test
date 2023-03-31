/* ## Задание 1
Напишите реализацию наиболее точного таймера.

Шаг анимации таймера 1 секунда.

Форматирование таймера “hh:mm:ss”.

Например 01:12:59 - один час, 12 минут, 59 секунд. */



const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
// const timerEl = document.querySelector('span');

let hours = document.querySelector('#hh');
let minutes = document.querySelector('#mm');
let seconds = document.querySelector('#ss');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let date = new Date();

  (date.getHours() < 10) ? hours.innerText = `0${date.getHours()}:` : hours.innerText = date.getHours() + ':';

  (date.getMinutes() < 10) ? minutes.innerText = `0${date.getMinutes()}:` : minutes.innerText = date.getMinutes() + ':';

  (date.getSeconds() < 10) ? seconds.innerText = `0${date.getSeconds()}` : seconds.innerText = date.getSeconds();
  return setInterval(createTimerAnimator)
  // return (seconds) => { };
};

// const animateTimer = createTimerAnimator();


inputEl.addEventListener('input', (event) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if(String(+event.data).length < 2) {
    inputEl.value += event.data.split('').slice(1, 1) ;
  } else {inputEl.value = ''};
});

buttonEl.addEventListener('click', () => {
  // const seconds = Number(inputEl.value);

  // animateTimer(seconds);
  const animateTimer = createTimerAnimator();
  (animateTimer);

  inputEl.value = '';
});
