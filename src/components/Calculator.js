import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'
import ClearButton from './ClearButton'


///dont put this.state.operator 
//always use this.set.state
//no reason to clear input
// add in decimal
// ^*

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state = {
            input: '',
            previousNumber: '',
            operator: '',
        };
    }

    //parse string here so you dont have to parse it everytime in the other code
    addToInput = val => {
        this.setState({input: this.state.input + val});
    }

    addZeroToInput = val => {
        if (this.state.input !== ''){
            this.setState({ input: this.state.input + val })
        }
    }

    addDecimal = val => {
        if (this.state.input.indexOf(".") === -1){
            this.setState({ input: this.state.input + val})
        }
    }

   clearInput = () => {
       this.setState({ input: '' })
   }

   add = () => {
       this.setState({
            previousNumber: this.state.input,
            input: "",
            operator: "plus",
        })
      
   }

   subtract = () => {
       this.setState({ 
           previousNumber: this.state.input,
           input: "",
           operator: "subtract",
        })
   }

   multiply = () => {
        this.setState({
            previousNumber: this.state.input,
            input: "",
            operator: "multiply", 
        })
   }

   divide = () => {
       this.setState({
            previousNumber: this.state.input,
            input: "",
            operator: "divide"
        })
   }

   evaluate = () => {
        this.setState({
           currentNumber: this.state.input
        })
        if (this.state.operator === "plus"){
            this.setState({
                input: parseInt(this.state.previousNumber) +
                parseInt(this.state.currentNumber)
            })
        } else if (this.state.operator === "subtract"){
            this.setState({
                input: parseInt(this.state.previousNumber) -
                parseInt(this.state.currentNumber)
            })
        }
        else if (this.state.operator === "multiply"){
            this.setState({
                input: parseInt(this.state.previousNumber) *
                parseInt(this.state.currentNumber)
            })
        }
        else if (this.state.operator === "divide"){
            this.setState({
                input: parseInt(this.state.previousNumber)/
                parseInt(this.state.currentNumber)
            })
        }
   }

    render(){
        return(
            <div>
                <h1>Calculator</h1>
                <div className="calculator-wrapper">
                    <div className="row">
                        <Input>{this.state.input}</Input>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.divide}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.multiply}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.add}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addDecimal}>.</Button>
                        <Button handleClick={this.addZeroToInput}>0</Button>
                        <Button handleClick={this.evaluate}>=</Button>
                        <Button handleClick={this.subtract}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator