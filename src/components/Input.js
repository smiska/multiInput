import React, { Component } from 'react'
import { inputStyles } from './inputStyles'


export default class Input extends Component {

    constructor (props) {
        super(props)
        this.state = {
            inputvalue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
      }
    
    handleChange (e) {
        this.setState({
            inputvalue: e.target.value
        })
    }

    onKeyPress (e) {
        this.props.onSubmit(e)
    }

    render() {
        return (
            <label className="form-elem">
                test attribute:
                <span>
                    <input 
                        style={inputStyles} type="text" 
                        value={this.state.inputvalue} 
                        onChange={this.handleChange} 
                        onKeyPress={
                            !this.props.controlValue
                                ? null
                                : this.onKeyPress
                        }
                    />
                    <i className="fal fa-times"></i>
                </span>
          </label>
        )
    }
}