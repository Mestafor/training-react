import {INCREMENT, DECREMENT} from '../../AC/constants'

export default (count:any = 0, action:any) => {
    switch(action.type) {
        case INCREMENT: return count + 1
        case DECREMENT: return count - 1
    }
    
    return count;
};