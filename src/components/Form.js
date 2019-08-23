import React from 'react'


class Form extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    value: ''
  }
}

  handleClick = (e) =>{
    e.preventDefault()
    console.log("Search term submitted", e)
    //we need to lift state to the CSA component
    //below line delivers the info to the parent app
    this.props.onClick(this.state.value)
    this.setState({value: ''})
  }

  handleChange = (e) => {
    console.log("this is handleChange", e.target.value)
    this.setState({
      value: e.target.value
    })
  }


 render(){
   return(
     <form action="">
        <input
        type = 'text'
        placeholder = 'Search and Compare!'
        onChange = {this.handleChange}
        value = {this.state.value}
        />
         <button
         onClick={this.handleClick}
         >Submit</button>
      </form>
   )
 }
 }

export default Form
