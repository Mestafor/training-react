import React from 'react';
import { Article } from '../Article/index';
import accordion from '../../decorators/accordion';

import { connect } from 'react-redux';

import store from '../../store/index';

import { filterArticleByDate } from '../../../AC/index';
import currentDate from '../../reducer/currentDate';

import moment from 'moment';

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
        <button onClick={handleFilter(props)}>Filter by data</button>
        {...articles}
    </>);
};

function handleFilter(props: any) {
    return () => {
        console.log('==================================')
        console.log(props.currentDate);
        // props.filterArticleByDate(props.currentDate);
        props.filterArticleByDate();
        console.log('==================================')
    }
}

export const ArticleList = connect((state: any) => {

    return {
        articles: state.articles.filter((article: any) => {
            return moment(article.date)._d.toDateString() === state.currentDate._d.toDateString()
        }),
        currentDate: state.currentDate
    }
}, { filterArticleByDate })((accordion(ArticleListOrigin) as any));