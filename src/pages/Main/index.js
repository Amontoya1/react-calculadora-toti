/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import Btn from '../../components/btn';
import Input from "../../components/Input";

class Main extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        data: { 'buttom': [ 
            ['AC' , 'btn light-gray', 'reset' ],
            ['+/-', 'btn light-gray', 'minusPlus' ],
            ['%', 'btn light-gray', 'percent' ],
            ['÷', 'btn operador', 'divide'],
            ['7', 'btn', 'inputNum'],
            ['8', 'btn', 'inputNum'],
            ['9', 'btn', 'inputNum'],
            ['x', 'btn operador', 'divide'],
            ['4', 'btn', 'inputNum'],
            ['5', 'btn', 'inputNum'],
            ['6', 'btn', 'inputNum'],
            ['-', 'btn operador', 'subtract'],
            ['1', 'btn', 'inputNum'],
            ['2', 'btn', 'inputNum'],
            ['3', 'btn', 'inputNum'],
            ['+', 'btn operador', 'add'],
            ['0', 'btn zero', 'addZeroToInput'],
            ['.', 'btn', 'inputNum'],
            ['=', 'btn purple', 'equals'],
      ],
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
      }
    }
    }

    inputNum = val => {
      this.setState({ input: this.state.input + val });
    };

    addDecimal = val => {
      // only add decimal if there is no current decimal point present in the input area
      if (this.state.input.indexOf(".") === -1) {
        this.setState({ input: this.state.input + val });
      }
    };
  
    addZeroToInput = val => {
      // if this.state.input is not empty then add zero
      if (this.state.input !== "") {
        this.setState({ input: this.state.input + val });
      }
    };
  
    reset = () => {
      this.setState({ input: "" });
    };
  
    add = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input: "" });
      this.state.operator = "plus";
    };
  
    subtract = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input: "" });
      this.state.operator = "subtract";
    };
    
    multiply = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input: "" });
      this.state.operator = "multiply";
    };
  
    divide = () => {
      this.state.previousNumber = this.state.input;
      this.setState({ input: "" });
      this.state.operator = "divide";
    };
  
    equals= () => {
      this.state.currentNumber = this.state.input;
  
      if (this.state.operator === "plus") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber)
        });
      } else if (this.state.operator === "subtract") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) -
            parseInt(this.state.currentNumber)
        });
      } else if (this.state.operator === "multiply") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber)
        });
      } else if (this.state.operator === "divide") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        });
      }
    };
    render() {
      return (
        <div className="container">
          <div className="wrapper">
            <div className="screen">
              <Input>{this.state.input}</Input>
            </div>     
              <Btn cont={this.state.data.buttom} ></Btn>
            </div>
          </div>

      );
    }
  }
    
    
       
export default Main;


 
