import React from "react";
import SearchBox from "../components/SearchBox";
import ZwischenDurch from "../components/ZwischenDurch";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: "",
      quote: "",
      option: "trivia",
      searchBoxEnter: false,
      inputBlocked: false
    };
  }

  handleKeyPress = (event) => {
    this.setState({inputBlocked: true});
    this.setState({searchBoxEnter: true})
    setTimeout(() =>{
      this.setState({searchBoxEnter: false})
      this.setState({inputBlocked: false})
    }, 2000)
    if (event.length >= 1){
      this.setState({ number: event }, () => {
        this.quoteRequest();
      });
    } 
  };

  handleOptionChange = (event) => {
    this.setState({inputBlocked: true})
    this.setState({searchBoxEnter: true})
    setTimeout(() => {
      this.setState({inputBlocked:false});
      this.setState({searchBoxEnter: false});
    }, 2000)
    this.setState({ option: event.target.value }, () => {
      this.quoteRequest();
    });
  };

  changeBack = () => {
    this.setState({ searchBoxEnter: false})
  }

  quoteRequest = () => {
    if (Number.isInteger(Number(this.state.number)) && this.state.number >= 1) {
      fetch(`http://numbersapi.com/${this.state.number}/${this.state.option}`)
        .then((resp) => resp.text())
        .then((data) => this.setState({ quote: data }))
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <div className="main">
        <section id={this.state.searchBoxEnter ? "clicked" : ""} className="header">
          <div className="quote">Numbers weave wonders into existence</div>
          <SearchBox inputBlockedHandler={this.state.inputBlocked} searchChange={this.handleKeyPress} />
          <select disabled={this.state.inputBlocked ? true : false} id="dropdown" onChange={this.handleOptionChange} value={this.state.option}>
            <option value="trivia">Trivia</option>
            <option value="year">Year</option>
            <option value="date">Date</option>
            <option value="math">Math</option>
          </select>
        </section>
        <ZwischenDurch searchBoxEnter={this.state.searchBoxEnter} enteredNumber={this.state.number} enteredQuote={this.state.quote} />
      </div>
    );
  }
}

export default App;
