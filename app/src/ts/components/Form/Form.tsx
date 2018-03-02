import React from 'react';
import InlineDatePicker from './DatePicker';

export class Form extends React.Component {
    state = {
        username: ''
    }

    render() {
        return <>
            <label htmlFor="">
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>{this.state.username} 
            </label>
            <InlineDatePicker />
        </>
    }

    handleUserChange = (e:any) => {
        this.setState({
          username: e.currentTarget.value
        })
      }
}