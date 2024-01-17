import React from 'react'

export default class Sublifecycle extends React.Component {

 componenWillUnmount() {
  this.this.props.ubahMakanan("sate")
}



  render() {
    return (
      <div>
        <h1>Component Sub lifecycle</h1>
      </div>
    )
  }
}
