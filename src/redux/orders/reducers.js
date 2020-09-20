import { FETCH_ORDER, 
    FETCH_ORDER_SUCCESS, 
    FETCH_ORDER_FAILED,
    ADD_NEW_ORDER,
    DELETE_ORDER,
} from "./constants";


const INIT_STATE  = {
    orders: [], 
    loading: false,
    err: null,
    data: []
}

const OrderReducer = (state = INIT_STATE, action)=>{
    switch (action.type) {
        case FETCH_ORDER:
            return {...state, loading: true};
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                err: null,
                data: action.payload
            }
        case FETCH_ORDER_FAILED:
            return{
                ...state,
                loading: false,
                err: action.payload
            }
        case ADD_NEW_ORDER:
            return {
                ...state, products: [...state.products, action.payload]
            }
        case DELETE_ORDER:
            return {
                ...state, products: state.products.filter(
                    item=> item.id === action.payload.id ? 
                    action.payload : item
                )
            }
        default:
            return state;
    }
}

export default OrderReducer;