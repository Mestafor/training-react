import React from 'react';
import { Comment } from '../Comment/index';
import toggleOpen from '../../decorators/toggleOpen';
import CommentForm from './CommentForm';

interface ICommentList {
    isOpen: boolean;
    comments: any[];
    toggleOpen: any;
}

// export class CommentList extends React.Component<ICommentList> {

//     render() {
//         const props = this.props;
//         if (!props.comments) return '';
//         return <ul>
//             {props.comments.map(comment => (
//                 <Comment key={comment.id} comment={comment} />
//             ))}
//         </ul>
//     }
// } 

const CommentListOrigin = (props: ICommentList) => {
    if (!props.comments) return '';
    let comment = <>
        <ul>
            {props.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
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

    // return <ul>
    //     {props.comments.map(comment => (
    //         <Comment key={comment.id} comment={comment} />
    //     ))}
    // </ul>
};

export const CommentList = toggleOpen(CommentListOrigin);