import React, { Component } from 'react';
import Dice from './Dice';
import './rolldice.css';

class RollDice extends Component {
  static defaultProps = {
    dieFace: ["one", "two", "three", "four", "five", "six"]
  };
  // using an array in defaultProps to hold the strings for the integer-to-string conversion(randomNumber()) makes for less code - smart
  state = { num1: "one", num2: "two", rolling: false}; 
  // rolling bool used to make animation 

  randomNumber = (e) => {
    // arrow function removes need to bind function up top
    let rand1 = Math.floor(Math.random() * this.props.dieFace.length);
    const randOne = this.props.dieFace[rand1];
    // shove anything you can into variables - this is my practice

    let rand2 = Math.floor(Math.random() * this.props.dieFace.length);
    const randTwo = this.props.dieFace[rand2];    

    this.setState({num1: randOne, num2: randTwo, rolling: true});
    // my solution is not that elegant - adding dice means adding yet another variable to hold a random number
    // if changing multiple states in one function, you only need to call setState once - separate state changes with commas

    setTimeout(() => {
      this.setState({rolling: false});
    }, 1000);
    // setTimeout takes args, the last of which is a time(ms) and runs after that time has passed
  }

  render(){    
    
    return(
      <div className="RollDice">
          <Dice dieNum={this.state.num1} rolling={this.state.rolling} />
          <Dice dieNum={this.state.num2} rolling={this.state.rolling} />
          <div className="break"></div>
          {/* nice solution to line break in flex w/o using something like bootstrap - see css */}
        <button className="RollDice-button" onClick={this.randomNumber} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
        {/* DISABLED attribute disables events on the button if a condition is met */}
      </div>
    );
  }
}

export default RollDice;
