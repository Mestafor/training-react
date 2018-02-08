import React from 'react';

export class Form extends React.Component {
    state = {
        username: ''
    }

    render() {
        return <>
            <label htmlFor="">
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>{this.state.username} 
            </label>
        </>
    }

    handleUserChange = (e:any) => {
        this.setState({
          username: e.currentTarget.value
        })
      }
}