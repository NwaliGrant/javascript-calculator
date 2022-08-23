console.log("hello world")


class Calculator{ 
    constructor(previousOperandTextElement , currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
    clear(){
        this.previousOperandTextElement =" "
        this.currentOperandTextElement =" "
        this.operation =  undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.tostring().slice(0, -1)
    }
    appendNumber(number){
        if (number ==="." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.tostring() + number.tostring()
    };
    chooseOperation(operation){
        if (this.currentOperand ==="") return
        if (this.previousOperand !=="") { 
            this.compute()
        }
        this.operation = operation
        this.preiousOperand = this.currentOperand
        this.currentOperand = ""
    }
    conpute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current))return
        switch (this.operation){ 
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "*":
                computation = prev * current
                break
            case "/":
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.preiousOperand = " "
    }

    getDisplayNumber(number){ 
       const stringNumber = number.tostring()
       const integerDigits = parseFloat(stringNumber.split(".")[0])
       const decimalDigits = stringNumber.split(".")[1]
       let integerDisplay
       if (isNaN(floatNumber)) { 
        integerDisplay = " "
       } else { 
        integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0})
       }
       if (decimalDigits != null) { 
            return "${integerDisplay}. ${decimalDigits}"
       } else { 
        return integerDisplay
       }

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){ 
            this.previousOperandTextElement.innerText = 
            "${this.getDisplayNumber(this.previousOperand)} ${this.operation}"
        }
        
    } 

}



const numberButtons = document.querySelectorAll("[data-number]")
const numberOperation = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener("click",() =>{ 
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button =>{
    button.addEventListener("click",() =>{ 
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button =>{
    calculator.conpute()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click", button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button =>{
    calculator.delete()
    calculator.updateDisplay()
})


