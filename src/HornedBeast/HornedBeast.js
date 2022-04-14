import React from 'react';
import '../HornedBeast/HornedBeast.css'
import Col from 'react-bootstrap/Col'
import { Card, Button } from 'react-bootstrap';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  handleImgClicked = () => {
    this.props.showModalHandler(this.props.title, this.props.imageUrl, this.props.description);
  }

  render() {
    return (
      <Col
        style={{ marginTop: '20px' }}
      >
        <Card
          style={{
            width: '100%',
            height: '100%',
            padding: '10px',
            backgroundColor: 'beige',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Card.Title 
            style={{
              fontSize: '1.5em',
              fontWeight: '800'
            }}
          >
            {this.props.title}
          </Card.Title>
          <Card.Img
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.handleImgClicked}
          />
          <Card.Text
            className={this.state.enhanceText}
          >
            {this.props.description}
          </Card.Text>
          <Card.Footer
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'azure',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Text>
              {this.state.timesClicked} ❤️ favorites!
            </Card.Text>
            <Button
              sticky="bottom"
              onClick={this.handleClick}
            >
              Click to Like!
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;