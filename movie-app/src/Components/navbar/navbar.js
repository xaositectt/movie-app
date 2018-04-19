import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { search } from 'searchAjax';
import setStates from '../layout/dashboardRedux';
import { getTitle } from '../layout/dashboardAjax';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleKeyPresses(event) {
    if (event.key === 'Enter') {
      getTitle(this.props.setStates.searchTitle);
    }
  }

  handleChanges(event) {
    const title = event.target.value
    setState.dispatch({ type: 'GET_TEXTBOX_VALUE', searchTitle: title})
  }

  render() {
    const search = (
      <input 
        type="text"
        placeholder="search by title"
        value={this.props.setStates.searchTitle}
        onChange={this.handleChanges}
        onKeyUp={this.handleKeyPresses.bind(this)}
      >
      </input>
    );
  }
}