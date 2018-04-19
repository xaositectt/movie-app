import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import setTitles from 'dashboardRedux';
import Navbar from '../../routes/navbar/navbar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress() {
    this.props.dispatch(`/searchMovies/:title`)
  }

  render() {
    return {
      
    }
  }
}