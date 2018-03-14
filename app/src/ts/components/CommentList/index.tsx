import React from 'react';
import { Comment } from '../Comment/index';
import toggleOpen from '../../decorators/toggleOpen';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';

import { commentsSelector } from '../../selectors/index';

interface ICommentList {
    isOpen: boolean;
    comments: any[];
    toggleOpen: any;
}

const CommentListOrigin = (props: ICommentList) => {
    if (!props.comments) return '';
    let comment = <>
        <ul>
            {Object.keys(props.comments).map((key: any, index) => (
                <Comment key={key} comment={props.comments[key]} />
            ))}
        </ul>
        <CommentForm />
    </>;
    return (
        <>
            <button onClick={props.toggleOpen}>{props.isOpen ? 'Close' : 'Open'}</button>
            {props.isOpen ? comment : ''}
        </>
    );
};

export const CommentList = connect((state: any) => {
    return commentsSelector(state)
}, null)(toggleOpen(CommentListOrigin) as any);