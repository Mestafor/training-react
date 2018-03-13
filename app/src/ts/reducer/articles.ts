import { articles, normalizedArticles } from '../components/data';
import { DELETE_ARTICLE, FILTER_ARTICLE_BY_DATA } from '../../AC/constants';
// import moment from 'moment';

export default (articlesState = normalizedArticles, action: any) => {
    switch (action.type) {
        case DELETE_ARTICLE: return articlesState.filter(article => article.id !== action.payload.id);
        case FILTER_ARTICLE_BY_DATA:
            return articlesState;
                // .filter(article => {
                //     return moment(article.date)._d.toDateString() === action.payload.date._d.toDateString()
                // });
    }

    return articlesState;
}