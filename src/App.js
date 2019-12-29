import React from "react";
import SetCard from "./SetCard";
import h2c from "./HTML2Canvas";
import c2i from "./Canvas2Image";
import saveFilesToFolder from "./Zip"

// import static list of cards
import cards from "./Cards";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setCardRef = React.createRef();
    this.state = {
      currentCardIndex: 0,
      rotationDegrees: 0
    };
  }

  async downloadSetCards(index = 0, treatment = "default") {
    if (index < cards.length) {
      this.setState({ currentCardIndex: index }, async () => {
        c2i({
          canvas: await h2c(this.setCardRef.current),
          index: index + 1,
          treatment,
          cb: () => this.downloadSetCards(index + 1)
        });
      });
    }
  }

  render() {
    const card = cards[this.state.currentCardIndex];
    return (
      <section>
        <ul
          id="card"
          ref={this.setCardRef}
          className="set-board spaced-cards fit-3"
        >
          <SetCard {...card} />
        </ul>
        <div>
          <button
            onClick={() =>
              this.setState({
                currentCardIndex: this.state.currentCardIndex - 1
              })
            }
          >
            Previous ard
          </button>
          <button onClick={() => this.downloadSetCards()}>
            Download cards
          </button>
          <button
            onClick={() =>
              this.setState({
                currentCardIndex: this.state.currentCardIndex + 1
              })
            }
          >
            Next Card
          </button>
        </div>
      </section>
    );
  }
}

export default App;
