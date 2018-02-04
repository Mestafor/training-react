import React from 'react';

import {CommentList} from '../CommentList/index';

interface IArticle {
    article: {
        title: string;
        text: string;
        comments: any[];
    }
}

export const Article = (props:IArticle) => (
    <article>
        <h1>{props.article.title}</h1>
        <p>{props.article.text}</p>
        <CommentList comments={props.article.comments}/>
    </article>
);