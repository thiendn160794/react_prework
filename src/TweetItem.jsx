import React, { Component } from 'react';
import { Box, Media, Image, Content, Icon, Delete } from 'reactbulma'
import TimeAgo from 'react-timeago'

class TweetItem extends Component {
    render() {
        console.log("render tweetItem")
        var content;
        if (this.props.tweet.text === ""){
            content = 
            <Media>
                <Media.Left>
                <Image is='48x48' src="https://i.pinimg.com/564x/07/80/bc/0780bcf9edf3b84959fa6d51031686ef.jpg" />
                </Media.Left>
                <Media.Content>
                    <Content>
                        <p>
                            <strong>Thien Dang</strong><small>@thiendn</small> <br width = '50%'/> <small>{React.createElement(TimeAgo, {date: this.props.tweet.quoteMessage.time})}</small> 
                        
                            <br/>
                                {this.props.tweet.quoteMessage.text}
                            <br/>
                        </p>
                    </Content>
                </Media.Content>
          </Media>
        }else{
            content = this.props.tweet.text;
        }
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Box style = {tweetItemStyle}>
                    <Media >
                        <Media.Left style = {{flex : '0.5'}}>
                            <Image is='64x64' src="https://i.pinimg.com/564x/07/80/bc/0780bcf9edf3b84959fa6d51031686ef.jpg" alt="Image"/>
                        </Media.Left>
                        <Media.Content style = {{flex : '9'}}>
                            <Content>
                                <p style = {{wordBreak : 'break-all'}}>
                                    <strong>Thien Dang</strong> <small>@thiendn</small> <br width = '50%'/> <small>{React.createElement(TimeAgo, {date: this.props.tweet.time})}</small> 
                                <br/>
                                {content}
                                </p>
                            </Content>
                            <small> <a onClick={() => this.props.handleLike(this.props.tweet.id)} > {this.props.tweet.liked ? 'Unlike': 'Like'}</a></small>
                            <Icon>
                                <i className="fa fa-home"/>
                            </Icon>
                            {this.props.tweet.quoteMessage == null ? (
                                <small> <a onClick={() => this.props.handleRetweet(this.props.tweet.id)} > Re-tweet </a></small>
                            ) : null}
                        </Media.Content>
                        <Media.Right style = {{flex : '0.5'}}>
                            <Delete medium onClick={() => this.props.handleDelete(this.props.tweet.id)}/>
                        </Media.Right>
                    </Media>
                </Box>
                <br/>
            </div>
        );
    }
}
const tweetItemStyle = {
    width: '75%'
}
export default TweetItem;