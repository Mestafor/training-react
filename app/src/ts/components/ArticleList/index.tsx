import React from 'react';
import { Article } from '../Article/index';
import accordion from '../../decorators/accordion';

import { connect } from 'react-redux';

import store from '../../store/index';

import { setCurrentDate } from '../../../AC/index';
import currentDate from '../../reducer/currentDate';

import {filterArticleSelector} from '../../selectors/index';

interface IArticleList {
    articles: any[];
    openAccordion: Function;
    currentId: any;
    handleFilter: any;
}

const ArticleListOrigin = (props: IArticleList) => {
    console.log(props.articles);
    const articles = props.articles && props.articles.map((article: any, index: number) => {
        return <Article
            key={article.id}
            article={article}
            isOpen={article.id === props.currentId}
            toggleOpen={props.openAccordion(article.id)}
        />;
    });
    return (<>
        <button onClick={handleFilterReset(props)}>Show All</button>
        {...articles}
    </>);
};

function handleFilterReset(props: any) {
    return () => {
        console.log('==================================')
        console.log(props.currentDate);
        // props.filterArticleByDate(props.currentDate);
        props.setCurrentDate(null);
        console.log('==================================')
    }
}

export const ArticleList = connect((state: any) => {
    return filterArticleSelector(state);
}, { setCurrentDate })((accordion(ArticleListOrigin) as any));