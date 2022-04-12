import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast';
import AnimalData from '../Main/data.json';
import '../Main/Main.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            {AnimalData.map((animal) =>
              <HornedBeast
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
                key={animal._id}
              />)}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;
