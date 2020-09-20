import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import Toaster from '../toaster/Toaster';
import styles from '../order/Order.css'
import Axios from 'axios';
import { url } from '../../helpers/url';
import { addNewOrder,clearCart } from '../../redux/actions'


function Order(props) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");


    const [alert, setAlert] = useState(false);

    function addNewOrder() {
        const cartItems  = JSON.parse(localStorage.getItem('cart'));
        const total = cartItems.reduce((a, b) => a + parseFloat(b.price), 0)
        const data = {
            id: Date.now(),
            orderProducts: cartItems,
            total,
            name,
            surname,
            email,
            address,
            phone
        }
        if(name !== '' && phone !== '') {
            (async function (){
                await Axios.post(url+ '/orders', data)
                props.addNewOrder(data)
                setName('')
                setSurname('')
                setEmail('')
                setAddress('')
                setPhone('')
            }());
        }
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 5000)
        props.clearCart()
    }

    return (
        <Container 
        className="d-flex"
        style={{marginLeft: '200px', marginTop: '100px'}}
        >
            <Toaster isOpen={alert}>
                Благодарим Вас за Ваш заказ! Мы с Вами свяжемся.
            </Toaster>
            <Card className='mr-2 mt-5 mb-5'>
                <CardBody 
                    style={{
                        width: '450px', 
                        display:'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <h4 className="text-center">Моя корзина:</h4>
                    <ol className="mt-3">
                        {props.cartItems.map((item) => (
                            <li>
                                <h5>{item.title}</h5>
                                <div className={styles.imageContainer}>
                                    <img
                                        alt={item.title}
                                        className={styles.image}
                                        style={{ width: '200px' }}
                                        src={item.image}
                                    />
                                </div>
                                <p className='mt-1'>Цена: ${item.price} ,00 </p>
                            </li>
                        ))}
                    </ol>
                        <h5 className="text-primary">Итого: {props.cartItems.reduce((a, b) =>
                            a + parseFloat(b.price), 0)} $
                        </h5>
                </CardBody>
            </Card>
            <Card className='mt-5 mb-5' >
                <CardBody style={{width: '450px'}}>
                    <Row>
                        <Col md={12} >
                            <Form 
                            className="">
                                <h4 className="text-center">Заполните поля для оформления заказа</h4>
                                <Row className="mt-4">
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                placeholder="Имя"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                placeholder="Фамилия"
                                                value={surname}
                                                onChange={(e) => setSurname(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input
                                                type="email"
                                                placeholder="Адрес электронной почты"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                placeholder="Фактический адрес"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input
                                                type="number"
                                                placeholder="Номер телефона"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button 
                                    type="submit"
                                    style={{
                                        width: '100%', 
                                        background: ' #323232', 
                                        marginBottom:'10px'
                                    }}
                                    onClick={addNewOrder} 
                                >
                                    Заказать
                                </Button>
                            </Form>
                            
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}

const mapStateToProps = state => state.CartReducer

export default connect(mapStateToProps, { addNewOrder,clearCart })(Order)





