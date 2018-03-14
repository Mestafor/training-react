import { normalizedComments } from '../components/data';
import {  } from '../../AC/constants';
// import moment from 'moment';

const commentsMap = normalizedComments.reduce((acc: any, comment: {id:string, user: string, text:string}) => {
    acc[comment.id] = comment;
    return acc;
}, {})

export default (commentsState = commentsMap, action: any) => {
    switch (action.type) {
        
    }

    return commentsState;
}