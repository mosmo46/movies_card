import * as actionsTypes from '../types';


const alertsReducer = (state, action) =>{
 
    switch (action.type) {
        case actionsTypes.SET_ALERT:
            
            return action.payload;
    
            case actionsTypes.REMOVE_ALERT:
                return null;
        default:
            return state;
    }
}


export default alertsReducer;