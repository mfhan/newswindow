import React from 'react'
import '../App.css';

class Form extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    value: ''
  }
}

  // handleChange = (e) => {
  //   console.log("this is handleChange", e.target.value)
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  render(){
   console.log('this.props.searchInput', this.props.searchInput)

    return(
      <form onSubmit={(e)=>this.props.searchInput(e, this.props.value)}>
        <input
          type = 'text'
          placeholder = 'Type a Topic'
          onChange = {this.props.keyChange}
          value = {this.props.value}
        />
        <input id="button" type="submit" value="Compare the News!"/>
      </form>
   )
 }
}

export default Form
