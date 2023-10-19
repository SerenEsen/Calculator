const inputText = document.querySelector('.input-text');
const buttons = document.querySelectorAll('.buttons button');

// Butonlara click event listener ekleyerek tıklandıkça yansıtacağım.
buttons.forEach(button => {
    button.addEventListener('click', function() {
       // Tıklanan butonun içeriğini input alanına yansıt
       // inputText.value += this.textContent;
       if(this.textContent === '='){
          inputText.value = calculate();
       }
       else if(this.textContent === 'AC'){
          inputText.value='';
       }
       else if(this.textContent === '+'||this.textContent ==='-'||this.textContent==='*'||this.textContent==='/'||this.textContent ==='%'||this.textContent==='!'){
          inputText.value += ` ${this.textContent} `; //inputText'in değerine bu operatörü ve bir boşluk karakterini ( ) ekler.??????????????????
       }
       else{
          inputText.value += this.textContent; //Tıklanan butonun içeriğini(textContent) input kısmına(inputText) atar.
        }
    });
});
function factorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}
function calculate(){
    const expression = inputText.value.split(' ');
    const firstNum = parseFloat(expression[0]);
    const secondNum = parseFloat(expression[2]);
    
    if(expression[1] === '+'){
        return firstNum + secondNum;
    }
    else if(expression[1] === '-'){
        return firstNum - secondNum;
    }
    else if(expression[1] === '*'){
        return firstNum * secondNum;
    }
    else if(expression[1] === '/'){
        return firstNum / secondNum;
    }
    else if(expression[1] === '%'){
        return firstNum % secondNum;
    }
    else if(expression[1] === '!'){ 
        return factorial(firstNum);
    }
    else{
        return 'Error';
    }
}
_eventListener();