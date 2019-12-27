import React, { Component } from 'react';

class SetCard extends Component {
  RGBs = {
    green: "rgb(0, 178, 89)",
    red: "rgb(239, 62, 66)",
    purple: "rgb(73, 47, 146)"
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
  shape: 'diamond',
  number: 3,
  color: 'purple',
  shading: 'striped'
}

export default SetCard;

