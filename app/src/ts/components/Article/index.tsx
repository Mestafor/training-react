import React from 'react';
import toggleOpen from '../../decorators/toggleOpen';

import {CommentList} from '../CommentList/index';

interface IArticle {
    isOpen: boolean;
    article: {
        title: string;
        text: string;
        comments: any[];
    };
    toggleOpen: any;
}

const ArticleOriginal = (props:IArticle) => (
    <article>
        <h1 onClick={props.toggleOpen}>{props.article.title}</h1>
        {props.isOpen ? (
            <>
            <p>{props.article.text}</p>
            <CommentList comments={props.article.comments}/>
            </>
        ) : ''}        
    </article>
);

export const Article = toggleOpen(ArticleOriginal);