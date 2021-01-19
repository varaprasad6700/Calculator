import React from 'react'
import ButtonComponent from './Buttons.component'
//import { Button } from 'reactstrap'

class ButtonContainer extends React.Component{
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            in_ : this.props.in_
        }
    }
    render(){
        return (
            //<Button color = {this.props.color} value = {this.props.label} size={this.props.size} className='w-25' onClick = {this.props.handleClick} >{this.props.label}</Button>
            <ButtonComponent color = {this.props.color} label = {this.props.label} size={this.props.size} in_ = {this.state.in_} handleClick = {this.props.handleClick}></ButtonComponent>
        )
    }
}

export default ButtonContainer;