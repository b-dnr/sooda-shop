import React from 'react'
import { Button } from 'reactstrap'
import CartSvg from '../../assets/icons/cart.svg'
import {addItemToCart, removeItemFromCart} from '../../redux/actions'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../cart/Cart.css'
function Cart(props) {

    const history = useHistory();
    return (
        <Button onClick={()=>history.replace('/order')} className="mr-3 cartBtn">
            <img width="20" height="20" alt="cart" src={CartSvg}/>
            {!!props.cartItems.length && (
                <div className="cartBtn__count">{props.cartItems.length}</div>
            )}
        </Button>
    )
}

const mapStateToProps = state => state.CartReducer;


export default connect(mapStateToProps, {addItemToCart, removeItemFromCart})(Cart)
