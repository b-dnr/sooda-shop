import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ButtonGroup, Button, Row, Col, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { url } from '../../helpers/url';
import { addItemToCart, removeItemFromCart } from '../../redux/actions';
import CartSvg from '../../assets/icons/cart.svg';
import RemoveSvg from '../../assets/icons/remove.svg'


function ProductDetail(props) {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.id === item.id);
    }

    useEffect(() => {
        setLoading(true)
        Axios.get(url + '/posts/' + params.id)
            .then(({ data }) => {

                setData(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [params.id])

    if (loading) return (<h1>Loading...</h1>)

    return (
        <div>
            {data ? (
                <Card style={{marginTop: '100px', }}>
                    <CardBody>
                        <Row >
                            <Col md={3} >
                                <img
                                    style={{width: '400px'}}
                                    alt={data.title}
                                    src={data.image}
                                />
                            </Col>
                            <Col md={9}>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <h5>Цена: {data.price} $</h5>
                                <p>Имя автора: {data.sellerName}</p>
                                <p>Номер телефона: {data.sellerPhone}</p>
                                <ButtonGroup>
                                    {isInCart(data, props.cartItems) ? (
                                        <Button
                                            style={{backgroundColor: '#f4f4f4', border: '1px solid black '}}
                                            onClick={() => props.removeItemFromCart(data.id)}
                                        >
                                            <img
                                                width="20"
                                                height="20"
                                                alt="cart"
                                                src={RemoveSvg}
                                            />
                                        </Button>
                                    ) : (
                                            <Button
                                                className="d-flex align-items-center"
                                                onClick={() => props.addItemToCart(data)}
                                                // color="dark"
                                                style={{backgroundColor: '#323232'}}
                                            >
                                                <img
                                                    
                                                    width="20"
                                                    height="20"
                                                    alt="cart"
                                                    src={CartSvg}
                                                />
                                            </Button>
                                        )}

                                </ButtonGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ) : (
                    <h4>
                        Error 404: Product {params.id} is not defined
                    </h4>
                )}
        </div>
    )
}

const mapStateToProps = state => state.CartReducer;



export default connect(
    mapStateToProps,
    {
        addItemToCart,
        removeItemFromCart
    }
)(ProductDetail)
