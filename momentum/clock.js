const clockContainer = document.querySelector('.clock'),
  clockTitle = clockContainer.querySelector('.title');

const title = document.querySelectorAll(
  '#clickEffect1, #clickEffect2, #clickEffect3'
);
const CLICKED_CLASS = 'clicked';

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function handleClick() {
  title.forEach((item) => {
    item.classList.toggle(CLICKED_CLASS);
  });
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  title.forEach((item) => {
    item.addEventListener('click', handleClick);
  });
}
init();
