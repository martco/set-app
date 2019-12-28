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

  componentDidMount() {
    saveFilesToFolder({
      files: [
        {
          filename: "hello.txt",
          data: "Hello World"
        }
      ]
    })
  }

  async downloadSetCards(index = 0) {
    let generatedImages = []
    if (index < cards.length) {
      this.setState({ currentCardIndex: index }, async () => {
        c2i({
          canvas: await h2c(this.setCardRef.current),
          filename: `${index + 1}.jpeg`,
          cb: (generatedImage) => this.downloadSetCards(index + 1)
        });
      });
    }

    saveFilesToFolder(generatedImages);
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
          <button onClick={() => this.downloadSetCards()}>
            Download cards
          </button>
        </div>
      </section>
    );
  }
}

export default App;
