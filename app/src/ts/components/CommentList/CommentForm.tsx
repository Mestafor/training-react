import React from 'react';

const errorStyle = {
    color: 'red'
}

export default class CommentForm extends React.Component {

    static nameErrorMessage = '(name length < 5 || naem length > 15)';
    static textErrorMessage = '(text length < 20 || text length > 50)';

    state = {
        nameErrorStatus: false,
        textErrorStatus: false
    }

    render() {
        const nameError = this.state.nameErrorStatus;
        const textError = this.state.textErrorStatus;
        return <form>
            <label>
            User name:
            <input style={nameError ? errorStyle : {}} type="text" ref="name" name="name" onChange={this.onChangeName} />
            <br/>
            {nameError ? CommentForm.nameErrorMessage : ''}
            </label>
            <br/>
            <textarea style={textError ? errorStyle : {}} name="text" onChange={this.onChangeText} /><br/>
            {this.state.textErrorStatus ? CommentForm.textErrorMessage : ''}
        </form>
    }

    onChangeName = (e:any) => {
        const value = e.currentTarget.value;
        (value.length < 5 || value.length > 15) ? this.setState({ nameErrorStatus: true}) : this.setState({ nameErrorStatus: false });  
    }

    onChangeText = (e: any) => {
        const value = e.currentTarget.value;
        (value.length < 20 || value.length > 50) ? this.setState({textErrorStatus: true}) : this.setState({ textErrorStatus: false }); 
    }
}
