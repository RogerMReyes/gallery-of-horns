import React from 'react';
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


class Header extends React.Component {
  updateSearch = (event) => {
    this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <>
        <Navbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
          }}
        >
          <h1>
            Gallery of Horns!
          </h1>
          <Form>
            <Form.Label>
              <Form.Control
                type="text"
                placeholder='Search by Title...'
                onKeyUp={this.updateSearch}
              />
            </Form.Label>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default Header;