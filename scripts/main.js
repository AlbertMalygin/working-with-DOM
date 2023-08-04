//Slider
const slider = document.querySelector('.slider__list');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
let stepsToRight = 0;

arrowRight.addEventListener('click', function() {
  if (stepsToRight < 5){    
    stepsToRight++;
    slider.style.transform = 'translateX(' + (stepsToRight * -5) + 'vmin)';
    
  }
});

arrowLeft.addEventListener('click', function() {
  if (stepsToRight > 0){    
    stepsToRight--;
    slider.style.transform = 'translateX(' + (stepsToRight * -5) + 'vmin)';
    
  }
});


//---------------------------------------------------------------

//Modal window
const btnOn = document.querySelector('.modal__btn--on');
const btnOff = document.querySelector('.modal__btn--off');
const modalWindow = document.querySelector('.modal-window');
let modalOn = false;

btnOn.addEventListener('click', () => {
  if (!modalOn) {
    modalWindow.style.display = 'flex';
    modalOn = true;
  }
});

btnOff.addEventListener('click', () => {
  if (modalOn) {
    modalWindow.style.display = 'none';
    modalOn = false;
  }
});

modalWindow.addEventListener('click', (e) => {
  if (modalOn && e.target == modalWindow) {
    console.log(e.target);
    modalWindow.style.display = 'none';
    modalOn = false;
  }
});

//---------------------------------------------------------------

//Blocks
const blockValue = document.querySelector('.blocks__value');
const blockColor = document.querySelector('.blocks__color');
const blocksArea = document.querySelector('.blocks-wrapper');
let blocks = [];
let order = 1;

blockValue.addEventListener('change', () => {
  blocks = [];
  blocksArea.innerHTML = '';
  for (let i = 0; i < blockValue.value; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.textContent = i+1;
    blocksArea.appendChild(block);
    blocks.push(block);
  }
});

blockColor.addEventListener('change', e => {
  console.log(e.target.value);
  blocks.forEach((block, index) => {
    if (index%2 == order) {
      block.style.background = e.target.value;
    } else {
      block.style.background = 'none';
    }
  });

  if (order == 0) {
    order = 1
  } else {
    order = 0;
  }
});

