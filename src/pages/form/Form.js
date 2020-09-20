import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { url } from '../../helpers/url'
import Axios from 'axios';
import { addNewProduct } from '../../redux/actions'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Form(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [sellerName, setSellerName] = useState("");
    const [sellerPhone, setSellerPhone] = useState("");

    const history = useHistory();
    
    function addNewProduct() {
        
        const data = {
            id: Date.now(),
            title,
            price,
            description,
            image,
            sellerName,
            sellerPhone
        }
        if(title !== '' && price !== '') {
            (async function (){
                await Axios.post(url+ '/posts', data)
                props.addNewProduct(data)
                setTitle('')
                setPrice('')
                setDescription('')
                setImage('')
                setSellerName('')
                setSellerPhone('')
            }());
        }
        history.push('/')
    }

    return (
            <Container >
                <Row
                className="justify-content-center align-items-center">
                    <Col md={8} style={{marginTop:'170px', marginBottom:'140px'}}>
                        <Card>
                            <CardBody >
                                <form onSubmit={(event)=> addNewProduct(event)}>
                                    <h5 
                                    className="text-center"
                                    >Заполните поля для добавления товара</h5>
                                    <div className="form-group col-md-12 mt-4    
                                    d-flex flex-column">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="Название товара"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="number"
                                            placeholder="Цена"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="Описание товара"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="URL фото"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="Имя и фамилия"
                                            value={sellerName}
                                            onChange={(e) => setSellerName(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="number"
                                            placeholder="Контактный номер телефона"
                                            value={sellerPhone}
                                            onChange={(e) => setSellerPhone(e.target.value)}
                                        />
                                        <button className="btn btn-primary w-100"
                                            type="submit"
                                            // onClick={()=>history.replace('/')}
                                            >
                                            Опубликовать товар
                                        </button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default connect(null, { addNewProduct })(Form)
