import React from 'react';
import Fact from './Fact.jsx';
import axios from 'axios';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
FacebookShareButton,
GooglePlusShareButton,
LinkedinShareButton,
TwitterShareButton,
TelegramShareButton,
WhatsappShareButton,
PinterestShareButton,
VKShareButton,
OKShareButton,
RedditShareButton,
EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const RedditIcon = generateShareIcon('reddit');

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
    const shareUrl = 'http://catfact.life';
    return (
      <div>
        <div className="content">
          <h1>Welcome to Cat Facts!</h1>
          <h2>Did you know?</h2>
          <Fact fact={this.state.catFact}/>
          <div id="center">
            <button onClick={this.getRandomFact}>New Fact</button>
          </div>
        </div>
        <div id="footer">
          <div id="center">
            <h3>Share this amazing fact with your friends!</h3>
          </div>
          <div id="center">
            <FacebookShareButton className="Demo__some-network"
              url={shareUrl}
              quote={this.state.catFact}
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <p>     </p>
            <TwitterShareButton className="Demo__some-network"
              url={shareUrl}
              title={this.state.catFact}
              className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
            </TwitterShareButton>
          <RedditShareButton className="Demo__some-network Demo__some-network__share-button"
            url={shareUrl}
            title={this.state.catFact}>
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
