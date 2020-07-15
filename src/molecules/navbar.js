import React, { Component } from "react";
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  data = [
    {
      key: 'car',
      value: 'car parts',
    },
    {
      key: 'wheels',
      value: 'car wheels',
    },
    {
      key: 'tyres',
      value: 'car tyres',
    },
    {
      key: 'accessories',
      value: 'car accessories',
    },
    
  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="Wanna find something? Try like this 'car parts'"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}

