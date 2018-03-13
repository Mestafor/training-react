import {SET_DATE} from '../../AC/constants'
import moment from 'moment';

export default (currentDate:any = null, action:any) => {
    switch(action.type) {
        case SET_DATE: return action.payload.date
    }
    
    return currentDate;
};