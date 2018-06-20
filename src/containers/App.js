import React, { Component } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import PropTypes from 'prop-types';
import { itemsFetchData } from '../actions/items';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchData('./sample-data.json');
  }

  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);