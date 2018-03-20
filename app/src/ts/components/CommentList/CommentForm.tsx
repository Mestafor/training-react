import React from 'react';

import {connect} from 'react-redux';
import {addComment} from '../../../AC/index';

const errorStyle = {
    color: 'red'
}

interface ICommentForm {
    addComment: Function
}

class CommentForm extends React.Component<ICommentForm> {

    static nameErrorMessage = '(name length < 5 || naem length > 15)';
    static textErrorMessage = '(text length < 20 || text length > 50)';

    state = {
        nameErrorStatus: true,
        textErrorStatus: true
    }

    render() {
        const nameError = this.state.nameErrorStatus;
        const textError = this.state.textErrorStatus;
        return <form onSubmit={this.handlerSubmit}>
            <label>
            User name:
            <input style={nameError ? errorStyle : {}} type="text" ref="name" name="user" onChange={this.onChangeName} />
            <br/>
            {nameError ? CommentForm.nameErrorMessage : ''}
            </label>
            <br/>
            <textarea style={textError ? errorStyle : {}} name="text" onChange={this.onChangeText} /><br/>
            {this.state.textErrorStatus ? CommentForm.textErrorMessage : ''}
            <br/>
            <button type="submit">Add</button>
        </form>
    }

    handlerSubmit = (e:any) => {
        e.preventDefault();

        if(this.state.nameErrorStatus || this.state.textErrorStatus) {
            return false;
        }

        const target = e.currentTarget;

        const result = Array.from(target).reduce( (obj:any,item:any) => {
            item.name && (obj[item.name] = item.value);
            return obj;
        }, {});

        console.log(result);

        this.props.addComment(result);
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

export default connect<any, any, any>(()=>({}), {addComment})(CommentForm);
