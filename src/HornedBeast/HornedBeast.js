import React from 'react';
import '../HornedBeast/HornedBeast.css'
import Col from 'react-bootstrap/Col'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: '',
      enhanceText: 'smallText'
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + '❤️'
    });
  }

  titleClicked = () => {
    if(this.state.enhanceText === 'smallText'){
      this.setState({
        enhanceText: 'largeText'
      })
    }
    else {
      this.setState({
        enhanceText: 'smallText'
      })
    }
  }

  render() {
    return (
      <Col>
        <h2
          onClick={this.titleClicked}
        >
          {this.props.title}
        </h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handleClick}
        />
        <p
          className={this.state.enhanceText}
        >
          {this.props.description}
        </p>
        <p>
          {this.state.timesClicked}
        </p>
      </Col>
    )
  }
}

export default HornedBeast;