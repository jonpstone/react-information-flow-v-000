import React, { Component } from 'react'
import Tier3 from './Tier3'

export default class Tier2 extends Component {

  render() {
    return (
      <div 
        onClick={this.props.clickOnTier} 
        className="tier2" 
        style={{backgroundColor: this.props.childColor, color: this.props.childColor}}
      >
        <Tier3 
          handleChildClick={this.props.clickOnTier} 
          color={this.props.grandChildColor}   
        />
        <Tier3 
          handleChildClick={this.props.clickOnTier} 
          color={this.props.grandChildColor} 
        />
      </div>
    )
  }
}