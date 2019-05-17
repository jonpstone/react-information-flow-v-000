
import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const initialChildColor = getReducedColor(initialColor)
    const initialGrandChildColor = getReducedColor(initialChildColor)
    this.state = {
      color: initialColor,
      childColor: initialChildColor,
      grandChildColor: initialGrandChildColor,
    }
    this.clickOnTier = this.clickOnTier.bind(this)
  }

  clickOnTier = (event) => {
    let rando = getRandomColor();
    let single = getReducedColor(rando);
    let double = getReducedColor(single);

    if (event.target.className === 'tier3') {
       this.setState({
        grandChildColor: rando,
      })
    } else if(event.target.className ==='tier2') {
        this.setState({
        childColor: rando,
        grandChildColor: single,
      })
    } else {
        this.setState({
        color: rando,
        childColor: single,
        grandChildColor: double,
      })
    };
  }

  render() {
    return (
      <div 
        onClick={this.clickOnTier} 
        className="tier1" 
        style={{backgroundColor: this.state.color, color: this.state.color}}
      >
        <Tier2 
          clickOnTier={this.clickOnTier} 
          color={this.state.color} 
          childColor={this.state.childColor}grandChildColor={this.state.grandChildColor}
        />
        <Tier2 
          clickOnTier={this.clickOnTier} 
          color={this.state.color} 
          childColor={this.state.childColor} 
          grandChildColor={this.state.grandChildColor}
        />
      </div>
    )
  }
}