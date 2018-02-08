import React from 'react';
import toggleOpen from '../../decorators/toggleOpen';

import {CommentList} from '../CommentList/index';

interface IArticle {
    isOpen: boolean;
    article: {
        title: string;
        text: string;
        comments: any[];
        id: any;
    };
    toggleOpen: any;
}

const style = {
    'fontSize': '3rem',
    'color': '#8f34ff',
    'textShadow': 'rgb(0, 0, 0) 3px 2px',
    'cursor': 'pointer'
}

// const ArticleOriginal = (props:IArticle) => (
//     <article>
//         <h1 style={props.isOpen ? style : {'cursor': 'pointer'}} onClick={props.toggleOpen}>{props.article.title}</h1>
//         {props.isOpen ? (
//             <>
//             <p>{props.article.text}</p>
//             <CommentList comments={props.article.comments}/>
//             </>
//         ) : ''}        
//     </article>
// );

class ArticleOriginal extends React.Component<IArticle> {

    shouldComponentUpdate(nextProps:any, nextState:any) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    render() {
        console.log('update');
        const props = this.props;
        return <article>
        <h1 style={props.isOpen ? style : {'cursor': 'pointer'}} onClick={props.toggleOpen}>{props.article.title}</h1>
        {props.isOpen ? (
            <>
            <p>{props.article.text}</p>
            <CommentList comments={props.article.comments}/>
            </>
        ) : ''}        
    </article>
    }
}

export const Article = ArticleOriginal;