import React from 'react';
import Fact from './Fact.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catFact: ''
    };

    this.getRandomFact = this.getRandomFact.bind(this);
  }

  getRandomFact(){
    axios.get('/getFact')
    .then(response => {
      console.log('this is the response', response);
      console.log('this is the fact', response.data.data.fact);
      this.setState({
        catFact: response.data.data.fact
      });
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  componentWillMount() {
    axios.get('/getFact')
    .then(response => {
      this.setState({
        catFact: response.data.data.fact
      });
    })
    .catch(function(error) {
      console.log(error);
    })
  }


  render() {
    return (
      <div>
        <h1>Welcome to Cat Facts!</h1>
        <h2>Did you know?</h2>
        <Fact fact={this.state.catFact}/>
        <button onClick={this.getRandomFact}>New Fact</button>
      </div>
    );
  }
}

export default App;
