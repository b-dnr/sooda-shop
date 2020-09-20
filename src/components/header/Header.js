import React, { useState, useEffect } from 'react'
import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form, Input
} from 'reactstrap';
import { Nav, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { url } from '../../helpers/url';
import './Header.css'
import Cart from '../../components/cart/Cart';
import LogoPng from '../../assets/img/logo.png'


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Search
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [input, setInput] = useState("");

    useEffect(() => {
        Axios.get(url + '/posts')
            .then((resp) => {
                const { data } = resp
                setProducts(data)
                if (input.length > 0) {
                    let result = products.filter((item) => {
                        return item.title.toLowerCase().match(input)
                    })
                    setFilteredProducts(result)
                }
            })
    }, [input])
    const handleChange = (e) => {
        e.preventDefault(
            setInput(e.target.value)
        )
    };

    const handleGetDetails = (data) => {
        setInput('')
        history.replace("/products/" + data.id)
    }

    return (
        <>
            <Navbar 
            collapseOnSelect 
            expand="md " 
            className="navbar pl-5  fixed-top ">
                <Navbar.Brand href="/">
                    <img 
                        src={LogoPng}
                        alt="sooda"
                        style={{width: '220px', height: '150px'}}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav " navbar >
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-primary">
                                Каталог
                             </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="dropTownItem">
                                    <h6>Аксессуары</h6>
                                 </DropdownItem>
                                <DropdownItem className="dropTownItem" >
                                    <h6>Интерьер</h6>
                                 </DropdownItem>
                                <DropdownItem className="dropTownItem">
                                    <h6>Одежда</h6>
                                 </DropdownItem>
                                <DropdownItem className="dropTownItem">
                                    <h6>Сувениры</h6>
                                </DropdownItem>
                                <DropdownItem className="dropTownItem" divider />
                                <DropdownItem className="dropTownItem">
                                    Закрыть
                                 </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink 
                            href="/form"
                            className="text-primary ml-5"
                            >Добавить товар</NavLink>
                        </NavItem>
                    </Nav>
                    <Form>
                        <div className="form-grp mr-3">
                            <Input
                                className="search-input"
                                type="text"
                                placeholder="Search..."
                                onChange={handleChange}
                                value={input}
                            />
                            <ul className="searchList">
                                {filteredProducts.map((item, id) => {
                                    return (
                                        input !== "" ? (
                                            <li key={id}
                                                onClick={() => handleGetDetails(item)}>
                                                {item.title} 
                                                <img
                                                    className="searchListImage ml-5"
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </li>
                                        ) : null
                                    )
                                })}
                            </ul>
                        </div>
                    </Form>
                    <Cart/>
                    <NavLink href="/profile">Мой кабинет</NavLink> 
                    <NavLink href="/auth/logout">Выйти</NavLink>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}

export default Header
