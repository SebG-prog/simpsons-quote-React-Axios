import React from 'react';
import './App.css';
import DisplayQuote from "./components/DisplayQuote";
import axios from 'axios'

class App extends React.Component {

  state = {
    quote: {},
    isLoaded: false
  }

  getQuote = () => {
    this.setState({ isLoaded: false })
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => { this.setState({ quote: res.data[0], isLoaded: true }) })
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getQuote}>Get Simpsons quote</button>
        {!this.state.isLoaded ? <div>Loading...</div> : <DisplayQuote quote={this.state.quote} />}
      </div>
    );
  }
}

export default App;
