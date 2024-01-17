import React from "react";
import Sublifecycle from "./Sublifecycle";

export default class lifecycle extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       makanan : "Bakso",
       data : {},
       tampilanHalamanSub: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data : json
        })
      })
  }
  
  ubahMakanan(value) {
    this.setState({
      makanan : value
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>

        {this.state.tampilanHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

        <button onClick={() => this.setState({tampilanHalamanSub: !this.state.tampilanHalamanSub})}>tampilannHalaman Sub</button>
      </div>
    )
  }
}