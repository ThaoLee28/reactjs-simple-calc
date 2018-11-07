import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state={
      val1: '',
      val2: '',
      result: '',
    }
  }
  handleAdd = () => {
    const add = parseFloat(this.state.val1) + parseFloat(this.state.val2)
    this.setState({
      result: add,
    })
  }
  handleSubtract = () => {
    const subtract = parseFloat(this.state.val1) - parseFloat(this.state.val2)
    this.setState({
      result: subtract,
    })
  }
  handleMultiply = () => {
    const multiply = parseFloat(this.state.val1) * parseFloat(this.state.val2)
    this.setState({
      result: multiply,
    })
  }
  handleDivide = () => {
    const divide = parseFloat(this.state.val1) / parseFloat(this.state.val2)
    this.setState({
      result: divide,
    })
  }
  render(){
    return(
      <div className="container mx-auto h-full border border-solid rounded mt-5 bg-grey-light" style={{ maxWidth: 700}}>
        <div className="flex justify-center item-center my-5">
          <h2>Simple Calculator</h2>
        </div>
        <div className="mx-5">
          <div className="flex flex-row">
            <input 
              className="border border-solid flex-1 mr-2 h-10 rounded p-5"
              placeholder="NUMBER e.g. 1337"
              type="text"
              pattern="[-+]?[0-9]*\.?[0-9]*."
              value={this.state.val1}
              onChange={(e) => {
                const a = (e.target.validity.valid) ? e.target.value : this.state.val1;
                this.setState({ val1: a });
              }}
            />
            <input 
              className="border border-solid flex-1 ml-2 h-10 rounded p-5"
              placeholder="NUMBER e.g. 2108"
              type="text"
              pattern="[-+]?[0-9]*\.?[0-9]*."
              value={this.state.val2}
              onChange={(e) => {
                const b = (e.target.validity.valid) ? e.target.value : this.state.val2;
                this.setState({ val2: b });
              }}
            />
          </div>
          <div className="flex flex-row mt-10">
            <button 
              className="flex-1 focus:outline-none bg-blue text-white font-bold py-1 px-5 rounded mr-5" 
              type="button"
              onClick={this.handleAdd}
            >
              + Add
            </button>
            <button 
              className="flex-1 focus:outline-none bg-blue text-white font-bold py-1 px-5 rounded mr-5" 
              type="button"
              onClick={this.handleSubtract}
            >
              - Subtract
            </button>
            <button 
              className="flex-1 focus:outline-none bg-blue text-white font-bold py-1 px-5 rounded mr-5" 
              type="button"
              onClick={this.handleDivide}
            >
              / Divide
            </button>
            <button 
              className="flex-1 focus:outline-none bg-blue text-white font-bold py-1 px-5 rounded" 
              type="button"
              onClick={this.handleMultiply}
            >
              * Multiply
            </button>
          </div>
          <div className="flex flex-row my-5">
            <input
              className="border border-solid rounded h-12 flex-auto p-5 mr-5"
              placeholder="Result"
              value={this.state.result}
              onChange={(e)=> this.setState({result: e.target.value})}
              readOnly
            />
            <button 
              className="bg-red text-white font-bold py-2 px-10 rounded focus:outline-none" 
              type="button"
              onClick={()=> this.setState({val1: '', val2: '', result: ''})}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator