import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col  } from 'reactstrap';
import { url } from '../../helpers/url';


function Profile() {
    const [data, setData] = useState([])


    useEffect(() => {
        Axios.get(url + '/orders')
            .then((resp) => {
                const { data } = resp
                setData(data)
            })
    }, [])

    return (
        < >
            
            <Card style={{
            marginTop: '100px'
            }}>
            <h4 className="text-center mt-3">Ваши заказы</h4>
                <CardBody className='d-flex justify-content-center' >
                    <Col md={10}>
                        <Card>
                            <CardBody className='d-flex'>
                                {data.map(item => (
                                    <div 
                                        style={{
                                            background:"#f4f4f4", 
                                            margin: '15px',
                                            border: '1px solid #f4f4f4',
                                            borderRadius: '2%',
                                            padding: '20px'
                                        }} 
                                    >
                                        <h6>Имя заказчика: {item.name}</h6>
                                        <h6>Фамилия заказчика: {item.surname}</h6>
                                        <h6>Электронная почта: {item.email}</h6>
                                        <h6>Номер телефона: {item.phone}</h6>
                                        <h6>Адрес: {item.address}</h6>
                                        <h6>Сумма к оплате: ${item.total}</h6>
                                        <hr/>
                                        {item.orderProducts?.map(product => (
                                            <div>
                                                <h5>{product?.title}</h5>
                                                <img
                                                    src={product?.image}
                                                    alt={product.title}
                                                    style={{ width: '150px', height: '120px' }} 
                                                />
                                                <h5>Цена: ${product?.price}</h5>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </CardBody>
                        </Card>
                    </Col>
                </CardBody>
            </Card>
        </>
    )
}

// const mapStateToProps = (state) => {
//     const { data, loading, err } = state.OrderReducer;
//     return { data, loading, err };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchOrder: () => dispatch(fetchOrder())
//     }
// }
export default Profile
