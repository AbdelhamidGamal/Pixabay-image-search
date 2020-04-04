import React, { Component } from 'react';
import Nav from './Nav';
import Container from '@material-ui/core/Container';
import Search from './Search';
import ListImages from './ListImages';

class App extends Component {
  state = {
    images: [],
  };

  handleSearch = (query, num) => {
    const key = '15881428-d83fc1a1c0a43654b9e865f8f';

    fetch(
      `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&per_page=${num}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ images: data.hits }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fixed>
        <Nav />
        <Search handleSearch={this.handleSearch} />
        <ListImages images={this.state.images} />
      </Container>
    );
  }
}

export default App;
