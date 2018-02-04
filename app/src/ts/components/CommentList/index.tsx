import React from 'react';
import { Comment } from '../Comment/index';

interface ICommentList {
    comments: any[] | undefined
}

export class CommentList extends React.Component<ICommentList> {

    render() {
        const props = this.props;
        if (!props.comments) return '';
        return <ul>
            {props.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </ul>
    }
} 