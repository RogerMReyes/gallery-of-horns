import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import '../Main/Main.css';
import Row from 'react-bootstrap/Row'

class Main extends React.Component {

  render() {
    let beastElem = this.props.animalData.map((animal, idx) => {
      return (
        <HornedBeast
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
          key={idx}
          showModalHandler={this.props.showModalHandler}
        />
      )
    });

    return (
      <main>
        <Row 
          xs= {1} md={4} lg={5}
          style={{margin: '10px 20px'}}
        >
          {beastElem}
        </Row>
      </main>
    )
  }
}

export default Main;
