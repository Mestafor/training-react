import {articles} from '../components/data';
import {DELETE_ARTICLE} from '../../AC/constants';

export default (articlesState = articles, action:any) => {
    switch(action.type) {
        case DELETE_ARTICLE: return articlesState.filter(article => article.id !== action.payload.id)
    }

    return articlesState;
}