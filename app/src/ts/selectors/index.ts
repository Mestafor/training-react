import moment from 'moment';
import { createSelector } from 'reselect';

const currentDateGetter = (state: any) => state.currentDate;
const articlesGetter = (state: any) => state.articles;

export const filterArticleSelector = createSelector(articlesGetter, currentDateGetter, (articles: any, currentDate: any) => {
    console.log('filterArticleSelector');
    console.log(articles, currentDate);
    return {
        articles: articles.filter((article: any) => {
            return currentDate ? moment(article.date)._d.toDateString() === currentDate._d.toDateString() : article;
        }),
        currentDate: currentDate
    }
});


const commentsGetter = (state:any) => state.comments;

export const commentsSelector = createSelector(commentsGetter, (comments: any) => {
    return {
        comments
    }
});