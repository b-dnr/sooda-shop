import {  
    FETCH_DATA, 
    FETCH_DATA_FAILED, 
    FETCH_DATA_SUCCESS,
    ADD_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT
} from './constants'

import Axios from 'axios';
import { url } from '../../helpers/url';

export const fetchData = ()=>(dispatch)=>{
    dispatch({
        type: FETCH_DATA
    });

    Axios.get(url+'/posts')
        .then(({data})=>{
            dispatch({
                type:FETCH_DATA_SUCCESS,
                payload: data
            })
        })
        .catch((e)=>{
            dispatch({
                type: FETCH_DATA_FAILED,
                payload: e
            })
        })
}

export const addNewProduct = (newProduct)=>(
    {
        type: ADD_NEW_PRODUCT,
        payload: newProduct
    }
)

export const deleteProduct = (id)=>(
    {
        type:DELETE_PRODUCT,
        payload: id
    }
)

export const editProduct = (data)=>(
    {
        type: EDIT_PRODUCT,
        payload: data
    }
)