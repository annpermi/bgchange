const btn = document.querySelector('#btn');
const colorName = document.querySelector('#colorName');
const bgColorWrapper = document.querySelector('#wrapper');

//index.html
let bgCol = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'bisque', 'tomato', 'pink', 'aqua', 'coral'];

function randomCol(){
    let color = [];
      for(let i = 0; i < bgCol.length; i++){
         colorNum = (Math.random().toString() * (bgCol.length-1)).toFixed();
        //  console.log(colorNum)
         color.push(bgCol[colorNum])
         break;
      }
      bgColorWrapper.style.backgroundColor = color.join();
      colorName.innerText = color.join();
  }

// hex.html
function randomColor(){
    let color = '#'; //color starting from #
    const randomNum = Math.random().toString(16).slice(2,8); //find random 6 decimals for our color
    // .toString(16) - 16 decimal number letters and numbers (1-9, a-z)
    color += randomNum;
    bgColorWrapper.style.backgroundColor = color;
    console.log(color)
    colorName.innerText = color;
    console.log(randomNum);
}

