import React from "react";
import SetCard from "./SetCard";
import h2c from "./HTML2Canvas";
import c2i from "./Canvas2Image";
// import static list of cards
import cards from "./Cards";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setCardRef = React.createRef();
    this.state = {
      currentCardIndex: 0
    };
  }

  definitionMap = {
    squiggles: "squiggle",
    ovals: "oval",
    diamonds: "diamond",
    one: 1,
    two: 2,
    three: 3,
    red: "red",
    purple: "purple",
    green: "green",
    striped: "striped",
    outlined: "outlined",
    solid: "solid"
  };

  async downloadSetCards(index = 0) {
    if (index < cards.length) {
      this.setState({ currentCardIndex: index }, async () => {
        c2i({ 
          canvas: await h2c(this.setCardRef.current),
          filename: `${index+1}.jpeg`,
          cb: ()=> this.downloadSetCards(index + 1)
        });
      });
    }
  }

  getPropsForSetCard(card) {
    return {
      shape: this.definitionMap[card[1]],
      color: this.definitionMap[card[2]],
      number: this.definitionMap[card[3]],
      shading: this.definitionMap[card[0]]
    };
  }

  render() {
    const card = cards[this.state.currentCardIndex]
    return (
      <section>
        <ul id="card" ref={this.setCardRef} className="set-board spaced-cards fit-3">
          <SetCard {...this.getPropsForSetCard(card)} />
        </ul>
        <div>
          <button onClick={() => this.downloadSetCards()}>
            Download cards
          </button>
        </div>
      </section>
    );
  }
}

export default App;
