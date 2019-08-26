import React from 'react'
import '../App.css';

class Form extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    value: ''
  }
}


  handleChange = (e) => {
    console.log("this is handleChange", e.target.value)
    this.setState({
      value: e.target.value
    })
  }


 render(){
   // console.log('this.props.searchInput', this.props.searchInput)
   return(
     <form onSubmit={(e)=>this.props.searchInput(e, this.state.value)}>
        <input
        type = 'text'
        placeholder = 'Search and Compare!'
        onChange = {this.handleChange}
        value = {this.state.value}
        />
         <button type='submit'>Submit</button>
      </form>
   )
 }
 }

export default Form
