import React from 'react'
import { Input } from 'reactstrap';

class TextFieldComponent extends React.Component{
    render(){
        return(
            <div>
                {console.log("render called")}
                <Input readOnly value = { this.props.in_ } />
            </div>
            
        )
    }
    
}

export default TextFieldComponent;