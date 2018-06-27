maxWindow();

function maxWindow() {
    window.moveTo(0, 0);


    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    }

    else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}

function Division(target){
    
    var parent = document.getElementsByClassName(target);
    var createDiv = document.createElement('div')

    this.createElement = (className)=>{
        let element = parent[0].appendChild(createDiv);
        element.className = className;
        return element;
    }

}
function Calculations(){
    this.result = 0;
    this.currentNumber = null;
    this.operator = null;

    this.setCurrentNumber = (input)=>{
        if( !this.currentNumber ){
            this.currentNumber = input;
            console.log(`first number:${this.currentNumber}`);
        }
        else if(this.currentNumber){
            this.currentNumber = this.currentNumber+input
            console.log(`Current number:${this.currentNumber}`);
        }
        setDisplay(this.currentNumber);
    }

    this.setOperator = (input)=>{
        if(!this.currentNumber){
            alert('please enter a number first')
        }
        else if(this.currentNumber){
            this.operator = input;
            this.result = this.currentNumber;
            this.currentNumber = null;
        }
    }

    this.evaluateResult =()=>{
        switch(this.operator){
            case '+':
                this.result = Number(this.result)+Number(this.currentNumber);
                break;
            case '-':
                this.result =  Number(this.result)- Number(this.currentNumber);
                break;
            case 'x':
                this.result =  Number(this.result)*Number(this.currentNumber);
                break;
            case '/':
                this.result =  Number(this.result)/ Number(this.currentNumber);
                break;
        }
        this.currentNumber = null;
        this.operator = null;
        var res = this.result;
        this.result = 0;
        return res;
    }

    this.startCalculations = (input)=>{
        switch(input){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':   
            case '.':
                    this.setCurrentNumber(input);
                    break;
            case '+':
            case '-':
            case '/':
            case 'x':
                    this.setOperator(input);
                    break;
            case '=':
                    display.innerText = this.evaluateResult();
                    break;

        }
    }
}
var calObj = new Calculations();

var data = [];


var screen = new Division('calculator');
var display = screen.createElement('screen');
display.innerText = 0;
function setDisplay(val){
    display.innerText = val;
}

var buttonsGroup = new Division('calculator');
var btnGrp = buttonsGroup.createElement('btnGrp');

var buttonGroup = []
for(var i=0;i<16;i++){
    buttonGroup[i] = new Division('btnGrp');
    let btn = buttonGroup[i].createElement(`btn${i}`);
    btn.className += ' btn'

    switch(i){
        case 0:
            btn.innerText = 0;
            break;
        case 1:
            btn.innerText = 1;
            break;
        case 2:
            btn.innerText = 2;
            break;
        case 3:
            btn.innerText = 3;
            break;
        case 4:
            btn.innerText = 4;
            break;
        case 5:
            btn.innerText = 5;
            break;
        case 6:
            btn.innerText = 6;
            break;
        case 7:
            btn.innerText = 7;
            break;
        case 8:
            btn.innerText = 8;
            break;
        case 9:
            btn.innerText = 9;
            break;
        case 10:
            btn.innerText = '.';
            break;
        case 11:
            btn.innerText = '/';
            break;
        case 12:
            btn.innerText = '*';
            break;
        case 13:
            btn.innerText = '-';
            break;
        case 14:
            btn.innerText = '+';
            break;
        case 15:
            btn.innerText = '='
            break;

    }
}

var buttons = catchElements('btn');
function catchElements(name){
    var buttons = document.getElementsByClassName(name)
    return buttons;
}
for(index in buttons){
    buttons[index].addEventListener('click',function(){
        calObj.startCalculations(this.innerText);
    })
}


