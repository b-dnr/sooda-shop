import {  
    FETCH_ORDER, 
    FETCH_ORDER_FAILED, 
    FETCH_ORDER_SUCCESS,
    ADD_NEW_ORDER,
    DELETE_ORDER,
} from './constants'

import Axios from 'axios';
import { url } from '../../helpers/url';

export const fetchOrder = ()=>(dispatch)=>{
    dispatch({
        type: FETCH_ORDER
    });

    Axios.get(url+'/orders')
        .then(({data})=>{
            console.log(data)
            dispatch({
                type:FETCH_ORDER_SUCCESS,
                payload: data
            })
        })
        .catch((e)=>{
            dispatch({
                type: FETCH_ORDER_FAILED,
                payload: e
            })
        })
}

export const addNewOrder = (newOrder)=>(
    {
        type: ADD_NEW_ORDER,
        payload: newOrder
    }
)

export const deleteOrder = (id)=>(
    {
        type:DELETE_ORDER,
        payload: id
    }
)
