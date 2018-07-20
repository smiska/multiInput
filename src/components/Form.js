import React, { Component } from 'react'
import Input from './Input'
import './Form.css'


export default class Form extends Component {

    constructor (props) {
        super(props)
        this.state = {
            numOfInputs: 1
        }
        this.onEnterPressed = this.onEnterPressed.bind(this)
    }
    
    onEnterPressed(e) {
        if(e.key === 'Enter') { 
            const currentState = this.state.numOfInputs
            this.setState({
                numOfInputs: currentState + 1
            })
    
            e.preventDefault()
        }
    }

    render() {
        const inputsToRender = []

        for (let index = 0; index <= this.state.numOfInputs; index++) {
            if (index !== this.state.numOfInputs) {
                inputsToRender.push(<Input key={index} />)
            } else {
                inputsToRender.push(
                    <Input 
                        key={index} 
                        controlValue='lastInput' 
                        onSubmit={this.onEnterPressed}
                    />
                )
            } 
        }

        return (
            <form 
                style={{
                    margin: '100px auto',
                    width: '400px',
                }}
            >
                {inputsToRender}
            </form>
        )
    } 
}