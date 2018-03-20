import {SET_DATE} from '../../AC/constants'
import moment from 'moment';

export default (currentDate:any = null, action:any) => {
    console.log('currentDate----', action);
    switch(action.type) {
        case SET_DATE: return action.payload.date
    }
    
    return currentDate;
};