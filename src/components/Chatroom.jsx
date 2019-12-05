const now = new Date().getTime();
const username = ['user', now].join('-');

const styles = {
  card: {
    maxWidth: 345,
    margin: '0 auto', /* Added */
    float: 'none', /* Added */
    marginbottom: '10px' /* Added */
  },
  openCard:{
    maxWidth: 200
  },
  openMedia: {
    height: 80,
  },
  media: {
    objectFit: 'cover',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Message extends Component{

  render () {
      return ( 
        <div > { this.props.uuid }: { this.props.text } 
        </div>
      );
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
        publishKey: 'pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf',
        subscribeKey: 'sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a',
        uuid: username
    });

    this.state = {
      messages: [],
      chatInput: '' 
    };
    this.pubnub.init(this);
  }

  sendChat = () => {
    if (this.state.chatInput) {
        this.pubnub.publish({
            message: {
              text: this.state.chatInput,
              uuid: username
            },
            channel: 'chatting'
        });
        this.setState({ chatInput: '' })
    }

  }

  setChatInput = (event) => {
    this.setState({ chatInput: event.target.value })
  }

  componentDidMount() {
    this.pubnub.subscribe({
        channels: ['chatting'],
        withPresence: true
    });

    this.pubnub.getMessage('chatting', (msg) => {
          this.pubnub.hereNow(
            {
                channels: ["chatting"],
                includeUUIDs: true,
                includeState: true
            },
            (status, response) => {
                console.log(status);
                console.log(response);
            }
        );
        const {text, uuid} = msg.message
        let messages = this.state.messages;
        messages.push(
          <Message key={ this.state.messages.length } uuid={ uuid } text={ text }/>
        );
        this.setState({
            messages: messages
        });
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.sendChat();
    }
  }
  componentWillUnmount() {
    this.pubnub.unsubscribe({
        channels: ['chatting']
    });
  }

  render(){
    const { classes } = this.props;
    return(
      <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Messages
            </Typography>
              <div className={classes.root}>
                <List component="nav">
                  <ListItem>
                  <Typography component="div">
                    { this.state.messages }
                  </Typography>
                  </ListItem>
                </List>
              </div>
          </CardContent>
          <CardActions>
            <Input
              placeholder="Enter a message"
              value={this.state.chatInput}
              className={classes.input}
              onKeyDown={this.handleKeyPress}
              onChange={this.setChatInput}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Button size="small" color="primary">
              Github
            </Button>
            <Button size="small" color="primary">
              Exit
            </Button>
          </CardActions>
        </Card>
      );
    }
}

const ChatComponent = withStyles(styles)(App);