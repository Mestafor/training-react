import React from 'react';
import {Article} from '../Article/index';

interface IArticleList {
    articles: any[]
}

export const ArticleList = (props:IArticleList) => {
    const articles = props.articles.map((article:any, index:number) => {
        return <Article key={article.id} article={article} isOpen={index===0} />;
    });
    return (<>
    {...articles}
    </>);
};