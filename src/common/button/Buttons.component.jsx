import React from 'react';
import { Button } from 'reactstrap';

class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            in_ : this.props.in_
        }
    }
    render(){
        return (
            <Button color = {this.props.color} value = {this.props.label} size={this.props.size} className='w-25' onClick = {this.props.handleClick} on>{this.props.label}</Button>
        )
    }
    
}

export default ButtonComponent;