import React from 'react'

export default class EyesOnMe extends React.Component {

  blurLog = () => {
    console.log('Hey! Eyes on me!')
  }

  focusLog = () => {
    console.log('Good!')
  }

  render(){
    return(
    <button onBlur={this.blurLog} onFocus={this.focusLog}></button>
    )
  }
}

// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
