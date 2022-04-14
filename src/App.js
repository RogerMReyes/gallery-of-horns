import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer';
import animalData from './data.json'
import SelectedBeast from './SelectedBeast'
import './App.css';
import { Modal } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      img: '',
      description: '',

      useSearch: false,
      fuzzyArr: [],
      searchValue: ''
    };
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  }

  showModalHandler = (title, img, description) => {
    this.setState({
      showModal: true,
      title: title,
      img: img,
      description: description
    });
  }

  handleSearch = (search) => {
    if(search === ''){
      this.setState({
        useSearch: false
      });
    }
    else {
      console.log(search);
      let tempArr = animalData.filter(animal =>{
        let tempAnimal = animal.title.toLocaleLowerCase();
        return tempAnimal.includes(search.toLocaleLowerCase());
      })
      this.setState({
        useSearch: true,
        searchValue: search,
        fuzzyArr: tempArr
      });
    }
    console.log(this.state)
  }
  


  render() {
    return (
      <>
        <Header 
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
        />
        <Main
          animalData={this.state.useSearch ? this.state.fuzzyArr : animalData}
          showModalHandler={this.showModalHandler}
        />
        <Modal
          show={this.state.showModal}
          onHide={this.hideModalHandler}
        >
          <SelectedBeast
            title={this.state.title}
            img={this.state.img}
            description={this.state.description}
          />
        </Modal>

        <Footer />
      </>
    )
  }
}

export default App;