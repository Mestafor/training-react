import React from 'react';

interface IComment {
    comment: {
        user: string;
        text: string;
    }
}

export const Comment = (props: IComment) => (
    <li>
        <h3>{props.comment.user}</h3>
        <p>{props.comment.text}</p>
    </li>
);
