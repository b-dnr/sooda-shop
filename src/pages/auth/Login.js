import React, { useState, useEffect } from 'react'
import { Container, Input, Button, ButtonGroup, Label, Row, Col, Card, CardBody } from 'reactstrap'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSumbit = (e) => {
        e.preventDefault();
        props.loginUser({ email, password }, history);
    }
    const {clearError} = props;
    useEffect(()=>{
        clearError()
    }, [clearError])

    if(localStorage.getItem('token'))  {
        return <Redirect to='/' />
    }

    return (
        <div style={{backgroundColor: '#f4f4f4'}}>
            <Container>
                <Row
                    style={{height:'100vh'}}
                    className='justify-content-center align-items-center'>
                    <Col md={6}>
                        <Card className="shadow">
                            <CardBody>
                                <form onSubmit={handleSumbit}>
                                    <h2>Добро пожаловать! </h2>
                                    {props?.err && props?.err?.response?.data?.message && (
                                        <h4 className='text-danger'>
                                            Ошибка: {props.err.response.data.message}
                                        </h4>
                                    )}
                                    <Label htmlFor='email' className="mt-3">
                                        Введите адрес электронной почты:
                                    </Label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="example@exapmle.com"
                                    />
                                    <Label htmlFor='password' className="mt-3">
                                        Введите пароль:
                                    </Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        
                                    />
                                    <ButtonGroup className=' w-100 mt-3'>
                                        <Button style={{
                                            'backgroundColor': '#6CB3F5',
                                            'color': 'black',
                                            'border': '1px solid #6CB3F5'
                                        }}
                                            type='submit'
                                        >Вход
                                    </Button>
                                        <Button type='reset'>Отмена</Button>
                                    </ButtonGroup>
                                </form>
                                <p className="text-center mt-3">Нет аккаунта? {" "}
                                    <Link to="/auth/register"
                                    style={{textDecoration: 'none'}}
                                    >Создай!</Link>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    const { isAuth, loading, err } = state.AuthReducer;
    return { isAuth, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: ({ email, password }, history) => {
            dispatch(loginUser(
                { email, password },
                history
            )
            )
        },
        clearError: ()=>dispatch({
            type: 'CLEAR_ERROR'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
