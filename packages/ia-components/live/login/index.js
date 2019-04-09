import React, { Component } from 'react'

export default class IAUXExampleComponent extends Component {
  static displayName = "IAUXExampleComponent"
  render () {
    const { children } = this.props;
    return (
      <div className="example-react-component">
        <h5>Greetings from the Archive's IAUX repo.</h5>
        {
          children &&
          <div>
            <p>Here are the component's children:</p>
            <p>This is monil Bhavsar</p>
            { children }
          </div>
        }
      </div>
    )
  }
}