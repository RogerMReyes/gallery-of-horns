import React from 'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <img
            className="img-fluid"
            src={this.props.img}
            alt={this.props.title}
          />
          <p>
            {this.props.description}
          </p>
        </Modal.Body>
      </Modal.Dialog>
    )
  }
}

export default SelectedBeast