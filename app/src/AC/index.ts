import {INCREMENT, DECREMENT, DELETE_ARTICLE, FILTER_ARTICLE_BY_DATA, SET_DATE} from './constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function deleteArticle(id:any) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
}

export function filterArticleByDate(date:any) {
    return {
        type: FILTER_ARTICLE_BY_DATA,
        payload: {
            date
        }
    }
}

export function setCurrentDate(date:any) {
    return {
        type: SET_DATE,
        payload: {
            date
        }
    }
}
