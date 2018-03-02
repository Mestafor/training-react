import {articles} from '../components/data';
import {DELETE_ARTICLE, FILTER_ARTICLE_BY_DATA} from '../../AC/constants';
import moment from 'moment';

export default (articlesState = articles, action:any) => {
    switch(action.type) {
        case DELETE_ARTICLE: return articlesState.filter(article => article.id !== action.payload.id)
        case FILTER_ARTICLE_BY_DATA: 
            console.log(action.payload.date._d.toDateString());
            return articlesState.filter(article => {
                console.log(moment(article.date)._d.toDateString());
                return moment(article.date)._d.toDateString() === action.payload.date._d.toDateString()
            })
    }

    return articlesState;
}