import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => { }

export default connect(mapStateToProps, mapDispatchToProps)(Page)
