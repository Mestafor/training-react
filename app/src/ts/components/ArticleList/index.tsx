import React from 'react';
import { Article } from '../Article/index';
import accordion from '../../decorators/accordion';

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

export const ArticleList = accordion(ArticleListOrigin);