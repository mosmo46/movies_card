import * as actionsTypes from "../types"


const ShowsReducer =(state , action)=>{
    switch (action.type) {
        case actionsTypes.SET_LOADING:
            return{
                ...state,
                loading:true
            }
           case actionsTypes.SEARCH_SHOW:
               return{
                   ...state,
                   shows:action.payload,
                   loading:false
               }
               case actionsTypes.SET_SINGLE_SHOW:
                   return{
                    ...state,
                    singleShow:action.payload,
                    loading:false,
                   }         
                   case actionsTypes.CLEAR_SINGLE_SHOW:
                       return{...state,
                    singleShow:{},
                    }            
        default: 
            return state;
    }
}

export default ShowsReducer;