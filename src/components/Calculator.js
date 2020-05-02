import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'
import ClearButton from './ClearButton'

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state = {
            input: '',
            previousNumber: '',
            operator: '',
        };
    }

    addToInput = (val) => {
        this.setState({input: this.state.input + val});
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
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>/</Button>
                    </div>
                    <div className="row">
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>*</Button>
                    </div>
                    <div className="row">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                    </div>
                    <div className="row">
                    <Button>.</Button>
                    <Button>0</Button>
                    <Button>=</Button>
                    <Button>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator