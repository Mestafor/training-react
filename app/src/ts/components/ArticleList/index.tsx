import React from 'react';
import { Article } from '../Article/index';
import accordion from '../../decorators/accordion';

import { connect } from 'react-redux';

import store from '../../store/index';

import { filterArticleByData } from '../../../AC/index';

interface IArticleList {
    articles: any[];
    openAccordion: Function;
    currentId: any;
    handleFilter: any;
}

const ArticleListOrigin = (props: IArticleList) => {
    const articles = props.articles.map((article: any, index: number) => {
        return <Article 
                key={article.id}
                article={article}
                isOpen={article.id === props.currentId}
                toggleOpen={props.openAccordion(article.id)} 
            />;
    });
    return (<>
        <button onClick = {handleFilter(props)}>Filter by data</button>
        {...articles}
        </>);
};

function handleFilter(props:any) {
    return () => {
        console.log('==================================')
        console.log(props.currentDate);
        props.filterArticleByData(props.currentDate);
        console.log('==================================')
    }
}

export const ArticleList = connect((state:any) => ({
    articles: state.articles,
    currentDate: state.currentDate
}), {filterArticleByData})((accordion(ArticleListOrigin) as any));