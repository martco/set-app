import React, { Component } from 'react';

class SetCard extends Component {
  RGBs = {
    green: "rgb(0, 178, 89)"
  } 
  getFill({shading, color}) {
    const shadingSet = c=> `url(#${c}-stripes)`

    if(shading === 'striped') {
      return shadingSet(color);
    }

    if(shading === 'solid') {
      return this.RGBs[color];
    }

    else return "none";
  }

  render() {

    const {
      shape,
      number,
      color,
      shading
    } = this.props;

    return (
      <li className="set-board-card" style={{order: 0}}>
        <div className="set-card">
          {[...Array(number)].map(()=> {
            return (
              <svg viewBox="-7 -7 82 164" className="squiggle">
                <use href={`#${shape}-shape`} fill={this.getFill({shading, color})} stroke={this.RGBs[color]} strokeWidth="7"> </use>
              </svg>)
            })
          }
        </div>
      </li>
    );
  };
}

SetCard.defaultProps = {
  shape: 'oval',
  number: 3,
  color: 'green',
  shading: 'empty'
}

export default SetCard;

