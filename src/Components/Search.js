import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
  state = {
    query: '',
    num: 20,
  };

  searchForThat = (e) => {
    e.preventDefault();
    const { query, num } = this.state;
    this.props.handleSearch(query, num);
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div style={{ marginTop: '1rem' }}>
        <form noValidate autoComplete='off'>
          <TextField
            id='query'
            label='Please Enter A Search Term!'
            style={{ margin: 8 }}
            placeholder='What Do You Wanna Search For ??'
            fullWidth
            margin='normal'
            name='query'
            value={this.state.query}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              style={{ margin: 8 }}
              variant='outlined'
              name='num'
              type='number'
              id='num'
              label='How Many Images?'
              value={this.state.num}
              onChange={this.handleChange}
            />
            <Button
              variant='contained'
              color='primary'
              onClick={this.searchForThat}
            >
              Search!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
