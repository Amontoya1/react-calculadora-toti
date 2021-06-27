import React from 'react';
import Btn from '../../components/btn';
/* import { useState, useEffect } from "react"; */
import NumberFormat from "react-number-format";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: { buttom: [ 
          ['AC' , 'btn light-gray', 'reset' ],
          ['+/-', 'btn light-gray', 'minusPlus' ],
          ['%', 'btn light-gray', 'percent' ],
          ['÷', 'btn operador', 'operatorType'],
          ['7', 'btn', 'inputNum'],
          ['8', 'btn', 'inputNum'],
          ['9', 'btn', 'inputNum'],
          ['x', 'btn operador', 'operatorType'],
          ['4', 'btn', 'inputNum'],
          ['5', 'btn', 'inputNum'],
          ['6', 'btn', 'inputNum'],
          ['-', 'btn operador', 'operatorType'],
          ['1', 'btn', 'inputNum'],
          ['2', 'btn', 'inputNum'],
          ['3', 'btn', 'inputNum'],
          ['+', 'btn operador', 'operatorType'],
          ['0', 'btn zero', 'inputNum'],
          ['.', 'btn', 'inputNum'],
          ['=', 'btn purple', 'equals'],
    ],
      preState: "",
      setPreState: "",
      curState: "",
      setCurState: "",
      input: "0",
      setInput: "0",
      operator: null,
      setOperator: null,
      total: false,
      setTotal: false,
      }
    }
    }
    
      
      /*const [preState, setPreState] = useState("");
      const [curState, setCurState] = useState("");
      const [input, setInput] = useState("0");
      const [operator, setOperator] = useState(null);
      const [total, setTotal] = useState(false);  */

      inputNum = (e) => {
        if (this.state.data.curState.includes(".") && e.target.innerText === ".") return;
    
        if (this.state.data.total) {
          this.state.data.setPreState("");
        }
    
        this.state.data.curState
          ? this.state.data.setCurState((pre) => pre + e.target.innerText)
          : this.state.data.setCurState(e.target.innerText);
          this.state.data.setTotal(false);
      };
    
/*       useEffect = () => {
        this.state.data.setInput(this.state.data.curState);
      }, [this.state.data.curState]);
      } */
      
    
      useEffect = (() => {
        this.state.data.setInput("0");
      }, []);
      
      operatorType = (e) => {
        this.state.data.setTotal(false);
        this.state.data.setOperator(e.target.innerText);
        if (this.state.data.curState === "") return;
        if (this.state.data.preState !== "") {
          this.state.data.equals();
        } else {
          this.state.data.setPreState(this.state.data.curState);
          this.state.data.setCurState("");
        }
      };
    
      equals = (e) => {
        if (e?.target.innerText === "=") {
          this.state.data.setTotal(true);
        }
        let cal;
        switch (this.state.data.operator) {
          case "÷":
            cal = String(parseFloat(this.state.data.preState) / parseFloat(this.state.data.curState));
            break;
    
          case "+":
            cal = String(parseFloat(this.state.data.preState) + parseFloat(this.state.data.curState));
            break;
          case "x":
            cal = String(parseFloat(this.state.data.preState) * parseFloat(this.state.data.curState));
            break;
          case "-":
            cal = String(parseFloat(this.state.data.preState) - parseFloat(this.state.data.curState));
            break;
          default:
            return;
        }
        this.state.data.setInput("");
        this.state.data.setPreState(cal);
        this.state.data.setCurState("");
      };
    
      minusPlus = () => {
        if (this.state.data.curState.charAt(0) === "-") {
          this.state.data.setCurState(this.state.data.curState.substring(1));
        } else {
          this.state.data.setCurState("-" + this.state.data.curState);
        }
      };
    
      percent = () => {
        this.state.data.preState
          ? this.state.data.setCurState(String((parseFloat(this.state.data.curState) / 100) * this.state.data.preState))
          : this.state.data.setCurState(String(parseFloat(this.state.data.curState) / 100));
      };
    
      reset = () => {
        this.state.data.setPreState("");
        this.state.data.setCurState("");
        this.state.data.setInput("0");
      };
      render(){
        return (
          <div className='container'>
            <div className='wrapper'>
              <div className='screen'>
                {this.state.data.input !== "" || this.state.data.input === "0" ? (
                  <NumberFormat
                    value={this.state.data.input}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  <NumberFormat
                    value={this.state.data.preState}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                )}
              </div>
              <Btn cont={this.state.data.buttom} ></Btn>
            </div>
          </div>
        );
      }
}


export default Main;
