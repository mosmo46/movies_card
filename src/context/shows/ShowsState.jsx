import { useReducer } from 'react'

import ShowContext from './showsContext'

import ShowsReducer from './showsReducer'
import axios from 'axios'
import * as actionsTypes from '../types';


const ShowsState = (props) => {

    const initialState = {
        shows: [],
        singleShow: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ShowsReducer, initialState)



    const searchShow = async (searchTerm) => {

        dispatch({ type: actionsTypes.SET_LOADING })

        const { data } = await axios.get(
            `http://api.tvmaze.com/search/shows?q=${searchTerm}`);

            
        dispatch({ type: actionsTypes.SEARCH_SHOW, payload: data })
    }


    const getSingleShow = async (id) => {

        dispatch({ type: actionsTypes.SET_LOADING })

        const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);

        console.log(data);

        dispatch({
            type: actionsTypes.SET_SINGLE_SHOW,
            payload: data
        })
    };

    const clearSingleShow = async () => {
        dispatch({ type: actionsTypes.CLEAR_SINGLE_SHOW })
    }
    return (
        <ShowContext.Provider
            value={{
                shows: state.shows,
                singleShow: state.singleShow,
                loading: state.loading,
                searchShow,
                getSingleShow,
                clearSingleShow
            }}
        >
            {props.children}
        </ShowContext.Provider>
    )
}

export default ShowsState;
