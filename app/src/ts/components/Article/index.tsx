import React from 'react';
import toggleOpen from '../../decorators/toggleOpen';

import { CommentList } from '../CommentList/index';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './article.scss';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');


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

    shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    render() {
        console.log('update');
        const props = this.props;
        return <article>
            <h1 /*style={props.isOpen ? style : {'cursor': 'pointer'}}*/ onClick={props.toggleOpen}>{props.article.title}</h1>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="article"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                {props.isOpen ? (
                    <div>
                        <p>{props.article.text}</p>
                        <CommentList comments={props.article.comments} />
                    </div>
                ) : ''}
            </ReactCSSTransitionGroup>
        </article>
    }
}

export const Article = ArticleOriginal;