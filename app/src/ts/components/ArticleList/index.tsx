import React from 'react';
import { Article } from '../Article/index';
import accordion from '../../decorators/accordion';

import { connect } from 'react-redux';
import { deleteArticle } from '../../../AC/index';

interface IArticleList {
    articles: any[];
    openAccordion: Function;
    currentId: any;
}

const ArticleListOrigin = (props: IArticleList) => {
    const articles = props.articles.map((article: any, index: number) => {
        return <Article key={article.id}
            article={article}
            isOpen={article.id === props.currentId}
            toggleOpen={props.openAccordion(article.id)} />;
    });
    return (<>
        {...articles}
        </>);
};

export const ArticleList = connect((state:any) => ({
    articles: state.articles
}))(accordion(ArticleListOrigin));