import React, { Component } from 'react'
import Content from './Content';
import Sidebar from './Sidebar'
export default class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Content />
      </React.Fragment>
    )
  }
}
