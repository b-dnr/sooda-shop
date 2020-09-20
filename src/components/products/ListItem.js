import React, { useState } from 'react';
import { Card, CardBody, ButtonGroup, Button, Modal } from 'reactstrap';
import styles from './Products.module.css';
import { connect } from 'react-redux';
import {
    fetchData, deleteProduct, editProduct,
    addItemToCart, removeItemFromCart
} from '../../redux/actions'
import Axios from 'axios';
import { url } from '../../helpers/url'
import CartSvg from '../../assets/icons/cart.svg'
import EditSvg from '../../assets/icons/edit.svg'
import DeleteSvg from '../../assets/icons/delete.svg'
import MoreSvg from '../../assets/icons/more.svg'
import RemoveSvg from '../../assets/icons/remove.svg'
import { useHistory } from 'react-router-dom';



function ListItem(props) {
    // CRUD
    const [title, setTitle] = useState(props.item.title);
    const [price, setPrice] = useState(props.item.price);
    const [description, setDescription] = useState(props.item.description);
    const [image, setImage] = useState(props.item.image);
    const [sellerName, setSellerName] = useState(props.item.sellerName);
    const [sellerPhone, setSellerPhone] = useState(props.item.sellerPhone);
    


    const { item } = props

    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.id === item.id);
    }

    const handleCartClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    const handleRemove = (e, id) => {
        e.stopPropagation();
        props.removeItemFromCart(id)
    }

    function delData(id) {
        async function delProduct(id) {
            await Axios.delete(url + '/posts/' + id)
            props.deleteProduct(id)
            Axios.get(url + '/posts')
                .then(({ data }) => {
                    props.fetchData(data)
                })
        }
        delProduct(id)
    }
    function editData(id, e) {
        e.preventDefault()
        const data = {
            title,
            price,
            description,
            image,
            sellerName,
            sellerPhone
        }
        setIsOpen("")
        Axios.patch(url + '/posts/' + id, data)
            .then((res) => {
                props.editProduct(res.data)
            })
        Axios.get(url + '/posts')
            .then(({ data }) => {
                props.fetchData(data)
            })
    }
    return (
        <>
            <Card className={styles.card}>
                <CardBody>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} alt={item.title} src={item.image} />
                    </div>
                    <h5>{item.title}</h5>
                    <p> $ {item.price}, 00</p>
                    <ButtonGroup className='w-100'>
                        <Button
                            className={styles.detailBtn}
                            onClick={() => history.replace("/products/" + item.id)}
                        >
                            <img width="20" height="20" alt="cart" src={MoreSvg}></img>
                        </Button>

                        <Modal isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                    <form onSubmit={(event) => editData(item.id, event)}>
                                        <div className="form-group">
                                            <h5 className="mb-4"
                                            >Редактирование свойств товара</h5>
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
                                                placeholder="Подробное описание"
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
                                            <ButtonGroup className={styles.btn}>
                                                <button className="btn bg-primary w-100" type="submit">
                                                    Сохранить
                                            </button>
                                                <button className="btn btn-secondary w-100"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Отмена
                                            </button>
                                            </ButtonGroup>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Modal>
                        {isInCart(item, props.cartItems) ? (
                            <Button
                                style={{backgroundColor: "#f4f4f4"}}
                                onClick={(e) => handleRemove(e, item.id)}
                            >
                                <img width="20" height="20" alt="cart" src={RemoveSvg}></img>
                            </Button>
                        ) : (
                                <Button
                                    onClick={(e) => handleCartClick(e, item)}
                                    style={{backgroundColor: '#323232'}}>
                                    <img
                                        className="ml-1"
                                        width="20"
                                        height="20"
                                        alt="cart"
                                        src={CartSvg}
                                    />
                                </Button>
                            )}
                        <Button
                            className={styles.editBtn}
                            onClick={() => setIsOpen(true)}
                        >
                            <img width="20" height="20" alt="cart" src={EditSvg}></img>
                        </Button>
                        <Button
                            onClick={(e) => delData(item.id, e)}
                            className={styles.deleteBtn}
                        >
                            <img width="20" height="20" alt="cart" src={DeleteSvg}></img>
                        </Button>
                    </ButtonGroup>
                </CardBody>
            </Card>
        </>
    )
}

const mapStateToProps = state => state.CartReducer


export default connect(mapStateToProps, {
    fetchData,
    deleteProduct,
    editProduct,
    addItemToCart,
    removeItemFromCart
})(ListItem)
