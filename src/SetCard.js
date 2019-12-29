import React, { Component } from "react";

class SetCard extends Component {
  RGBs = {
    green: "rgb(0, 178, 89)",
    red: "rgb(239, 62, 66)",
    purple: "rgb(73, 47, 146)"
  };
  getFill({ shading, color }) {
    const shadingSet = c => `url(#${c}-stripes)`;

    if (shading === "striped") {
      return shadingSet(color);
    }

    if (shading === "solid") {
      return this.RGBs[color];
    } else return "white";
  }

  getStripedImage({ shape, color }) {
    return (
      <img
        width={210}
        alt={shape + color}
        src={`https://i.ibb.co/cFmpQ5g/green-oval-1.png`}
      />
    );
  }

  getPathForShape({ shape, shading, color, children, props }) {
    if (shading === "striped") {
      return this.getStripedImage({ shape, color });
    }
    return {
      diamond: (
        <svg viewBox="-7 -7 82 164">
          <path {...props} id="diamond-shape" d="M1 74L35 2l36 73-36 74z">
            {children}
          </path>
        </svg>
      ),
      oval: (
        <svg viewBox="-7 -7 82 164">
          <path
            {...props}
            id="oval-shape"
            d="M36 149c-19 0-34-15-34-33V35C2 16 17 1 36 1s34 15 34 34v81c0 18-15 33-34 33z"
          >
            {children}
          </path>
        </svg>
      ),
      squiggle: (
        <svg viewBox="-7 -7 82 164">
          <path
            {...props}
            id="squiggle-shape"
            d="M9.64,77.38C15.73,63.23,19.46,50.9,12,33.71,6.57,21.25-3.54,13.79,1.84,6.76c7.06-9.19,31.8-10.89,50.79,6.9,18.12,17,13.77,49.45,6.14,64.12-7,13.55-4.38,29.55,8.37,48.23C79.21,143.69,46,156.12,20.42,141.67-1.76,129.1-2.46,105.54,9.64,77.38Z"
          >
            {children}
          </path>
        </svg>
      )
    }[shape];
  }

  render() {
    const { shape, number, color, shading } = this.props;

    return (
      <li className="set-board-card" style={{ order: 0 }}>
        <div className="set-card">
            {[...Array(number)].map(() => {
              const children = this.shading === "striped" ? [] : [];
              return this.getPathForShape({
                shape,
                props: {
                  stroke: this.RGBs[color],
                  fill: this.getFill({ shading, color }),
                  strokeWidth: "7"
                },
                children
              });
            })}
        </div>
      </li>
    );
  }
}

export default SetCard;
