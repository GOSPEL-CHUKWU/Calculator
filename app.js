'use strict';

const currentInput = document.querySelector('.current-input');
const answerScreen = document.querySelector('.answer-screen');
const clearAll = document.querySelector('.clear');
const erase = document.querySelector('.delete');
const buttons = document.querySelectorAll('.btn');
const equalTo = document.querySelector('.equal-to');
let realTimeScreenValue = [];

clearAll.addEventListener('click', () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.innerHTML = '';
  currentInput.className = 'current-input';
  answerScreen.className = 'answer-screen';
});

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    //when the click button is not rase button

    if (!btn.classList.contains('delete')) {
      //To display value on btn press
      realTimeScreenValue.push(btn.innerHTML);

      //   console.log(realTimeScreenValue);
      currentInput.innerHTML = realTimeScreenValue.join('');
    }
    //To evaluate answer in real time
    if (btn.classList.contains('btn-size')) {
      answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }

    //When erase button is clicked
    if (btn.classList.contains('delete')) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
      answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }

    //to prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
      answerScreen.innerHTML = 0;
    }
    if (btn.classList.contains('btn-size')) {
      currentInput.className = 'current-input';
      answerScreen.className = 'answer-screen';
    }
  });
});
equalTo.addEventListener('click', () => {
  //when clicked button is eqaulTo button
  realTimeScreenValue = [''];
  currentInput.className = 'answer-screen';
  answerScreen.className = 'current-input';
  currentInput.innerHTML = '';
  answerScreen.style.marginTop = '8px';
  answerScreen.style.color = 'white';
});
