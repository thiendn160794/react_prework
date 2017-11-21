import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import TweetItem from './TweetItem';
import './App.css';

class App extends Component {
  id = 1;
  constructor(props){
    super(props);
    this.state = {
      listTweets: [
        { id : -1,
          text : "This status has been here for a very long time!", 
          liked : true, 
          time: 'Jul 16, 1994'}
      ],
      id : 0
    }
  }

  render() {
    console.log("render App.js")
    console.log(this.state.listTweets)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Native Prework</h1>
        </header>
        <br/><br/>
        <div>
          <TweetBox hint = "What's on your mind?"
            onTweet = {this.onTweet.bind(this)}
          />
        </div>
        <br/><br/><br/><br/>
        <div>
          {
            this.state.listTweets.map(tweet =>
              <TweetItem tweet = {tweet}
              handleLike = {this.handleLike.bind(this)}
              handleDelete = {this.handleDelete.bind(this)}
              handleRetweet = {this.handleRetweet.bind(this)}/> 
            )
          }
        </div>
      </div>
    );
  }

  onTweet(tweetText){
    let currentTime = new Date();
    let tweetObj = {
      id: this.state.id,
      text: tweetText,
      liked: false,
      time: currentTime.toString()
    }
    let temp = this.state.listTweets;
    temp.unshift(tweetObj);
    this.setState({
      listTweets: temp,
      id: this.state.id + 1
    });
  }

  handleLike(tweetId) {
    let tweets = this.state.listTweets.map( (t) => {
      if (t.id === tweetId) {
        console.log("change id: " + t.id + t.liked.toString())
        return {
          id: t.id,
          text: t.text,
          liked: !t.liked,
          time: t.time,
          quoteMessage : t.quoteMessage
        }
      }
      console.log("not change id: " + t.id)
      return t;
    });

    this.setState({
      listTweets : tweets,
      id: this.state.id
    })
  }

  handleRetweet(tweetId) {
    let tweets = this.state.listTweets;
    let beingQuocTweet;
    tweets.forEach(element => {
      if(element.id === tweetId){
        beingQuocTweet = {
          text : element.text,
          time : element.time
        }
      }
    });
    let currentTime = new Date();
    let tweetObj = {
      id: this.state.id,
      text: "",
      liked: false,
      time: currentTime.toString(),
      quoteMessage: beingQuocTweet
    }
    tweets.unshift(tweetObj);
    this.setState({
      listTweets: tweets,
      id: this.state.id + 1
    });
  }

  handleDelete(tweetId){
    let tweets = this.state.listTweets;
    tweets.forEach(element => {
      if(element.id === tweetId){
        var index = tweets.indexOf(element)
        tweets.splice(index, 1);
      }
    });
    this.setState({
      listTweets : tweets,
      id: this.state.id
    })
  }

}
export default App;
