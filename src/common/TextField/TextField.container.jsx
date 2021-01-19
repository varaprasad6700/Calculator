import React from 'react'
import TextFieldComponent from './TextField.component'

class TextFieldContainer extends React.Component{
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            in_ : this.props.in_
        }
    }
    render(){
        return(
            <div>
                {console.log("textfield",this.state,this.props)}
                <TextFieldComponent in_ = {this.props.in_}></TextFieldComponent>
            </div>
            
        )
    }
}

export default TextFieldContainer