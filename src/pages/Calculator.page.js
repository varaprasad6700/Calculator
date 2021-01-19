import React from 'react'
import { Container, FormGroup, ButtonGroup } from 'reactstrap';
import Button from '../common/button'
import TextField from '../common/TextField'

class CalculatorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in_: '',
            out_: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        const sym = event.target.value
        console.log("button",this.state,this.props)
        switch(sym){
            case 'C':
                this.setState({
                    in_ : ''
                })
                break
            case '=':
                const expr = this.state.in_
                const out = eval(expr)
                this.setState({
                    in_ : out
                })
                break
            case 'π':
                let exper1 = this.state.in_
                exper1 = exper1 + '3.14'
                this.setState({
                    in_ : exper1
                })
                break
            default:
                let exper = this.state.in_
                exper = exper + sym
                this.setState({
                    in_ : exper
                })
                break
        }
    }
    render() {
        return (
            <Container className="col-md-5 col-xs-8 rounded-lg shadow border border-light">
                <FormGroup>
                    <TextField in_ = {this.state.in_}></TextField>
                </FormGroup>
                <FormGroup>
                    <ButtonGroup className = 'w-100'>
                        <Button  color = 'danger' label = 'C' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'primary' label = '(' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'primary' label = ')' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'secondary' label = 'π' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                    </ButtonGroup>
                    <ButtonGroup className = 'w-100'>
                        <Button  color = 'primary' label = '7' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'primary' label = '8' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'primary' label = '9' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button  color = 'secondary' label = '/' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                    </ButtonGroup>
                    <ButtonGroup className = 'w-100'>
                        <Button color = 'primary' label = '4' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'primary' label = '5' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'primary' label = '6' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'secondary' label = '*' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                    </ButtonGroup>
                    <ButtonGroup className = 'w-100'>
                        <Button color = 'primary' label = '1' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'primary' label = '2' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'primary' label = '3' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'secondary' label = '-' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                    </ButtonGroup>
                    <ButtonGroup className = 'w-100'>
                        <Button color = 'secondary' label = '.' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'primary' label = '0' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'success' label = '=' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                        <Button color = 'secondary' label = '+' in_ = {this.state.in_} handleClick = {this.handleClick}></Button>
                    </ButtonGroup>
                </FormGroup>
            </Container>
        );
    }

}

export default CalculatorPage;