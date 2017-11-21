import React, { Component } from 'react';
import {Media, Image, Level, Field, Control, Textarea, Button} from 'reactbulma'

class TweetBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            charRemaining: 140
        }
    }

    onTextChanged(text) {
        this.setState({
            text: text,
            charRemaining: 140 - text.length
        })
    }

    clearTextBox(){
        this.setState({
            text : "",
            charRemaining: 140
        })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Media style = {checkboxStyle}>
                    <Media.Left>
                        <Image is='64x64' src='https://i.pinimg.com/564x/07/80/bc/0780bcf9edf3b84959fa6d51031686ef.jpg' />
                    </Media.Left>
                    <Media.Content>
                        <Field>
                        <Control>
                            <Textarea placeholder = {this.props.hint}
                                    value = {this.state.text}
                                    onChange = {(e) => this.onTextChanged(e.target.value)}/>
                        </Control>
                        </Field>
                        <Level>
                        <Level.Left>
                            <Level.Item>
                                {this.state.charRemaining}
                            </Level.Item>
                        </Level.Left>
                        <Level.Right>
                            <Level.Item>
                            <Button primary onClick={() => {this.clearTextBox(), this.props.onTweet(this.state.text)}}
                                    disabled={this.state.charRemaining < 0 || this.state.charRemaining === 140}>
                                    Tweet
                                    </Button>
                            </Level.Item>
                        </Level.Right>
                        </Level>
                    </Media.Content>
                </Media>
            </div>
        );
    }
}

const checkboxStyle = {
    width: '50%'
}

export default TweetBox;