import { normalizedComments } from '../components/data';
import { ADD_COMMENT } from '../../AC/constants';
// import moment from 'moment';

const commentsMap = normalizedComments.reduce((acc: any, comment: {id:string, user: string, text:string}) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentsState = commentsMap, action: any) => {
    switch (action.type) {
        case ADD_COMMENT: {
            commentsState[action.payload.generatedId] = action.payload.comment;
            return  Object.assign({}, commentsState);
        }
    }

    return commentsState;
}