import React, { Component } from 'react';
import './dice.css';

class Dice extends Component {
  
  render() {
    let iconClass = `fas fa-dice-${this.props.dieNum} ${this.props.rolling ? "shaking"  : ""}`;
    // interpolation is stupid
    let die = <i className={iconClass}></i>;
    // making variables like this means less crowded markup

    return(
      <div className="Dice">
        {die}
      </div>
    );
  }
}

export default Dice;