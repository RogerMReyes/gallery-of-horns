import React from 'react';
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


class Header extends React.Component {
  
  updateSearch = (event) => {
    event.preventDefault();
    this.props.handleSearch(event.target.value);
  }

  updateFilter = (event) =>{
    event.preventDefault();
    this.props.handleFilter(event.target.value);
  }

  render() {
    return (
      <>
        <Navbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '35px',
            paddingRight: '20px'
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
            <Form.Select
              name='select' 
              onChange={this.updateFilter}
            >
              <option value='0'>All Horns</option>
              <option value='1'>1 Horn</option>
              <option value='2'>2 Horns</option>
              <option value='3'>3 Horns</option>
              <option value='100'>100 Horns</option>
            </Form.Select>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default Header;