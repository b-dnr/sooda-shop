import React, { useState, useEffect } from 'react'
import { Container, Input, Button, ButtonGroup, Label, Row, Col, Card, CardBody } from 'reactstrap'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { regUser } from '../../redux/actions';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('')
    const history = useHistory();
    const handleSumbit = (e) => {
        e.preventDefault();
        if(password !== repeatPassword){
            props.setErr('Password does not match')
            return;
        }
        props.regUser({ email, password }, history);
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
                                    <h2>Регистрация</h2>
                                    <hr/>
                                    <h5>Легко и быстро!</h5>
                                    {props?.err && props?.err?.response?.data?.message && (
                                        <h4 className='text-danger'>
                                            Error: {props.err.response.data?.message
                                            }
                                        </h4>
                                    )}
                                    <Label htmlFor='email' className="mt-3">
                                        Адрес электронной почты:
                                    </Label>
                                    
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="example@exapmle.com"
                                        
                                    />
                                    <Label htmlFor='password' className="mt-3">
                                        Пароль:
                                    </Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        patter="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    />
                                    <Label htmlFor='repeat_password' className="mt-3">
                                        Повторите пароль:
                                    </Label>
                                    <Input
                                        id='repeat_password'
                                        name='repeat_password'
                                        value={repeatPassword}
                                        type="password"
                                        onChange={(e) =>setRepeatPassword(e.target.value)}
                                    />
                                    <ButtonGroup className=' w-100 mt-3'>
                                        <Button style={{
                                            'backgroundColor': '#6CB3F5',
                                            'color': 'black',
                                            'border': '1px solid #6CB3F5'
                                        }}
                                            type='submit'
                                            >Регистрация
                                        </Button>
                                        <Button type='reset'>Отмена</Button>
                                    </ButtonGroup>
                                </form>
                                <p className="text-center mt-3">У Вас уже есть аккаунт? {" "}
                                    <Link to="/auth/login"
                                    style={{textDecoration: 'none'}}
                                    >Вход</Link>
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
        regUser: ({ email, password }, history) => {
            dispatch(regUser(
                { email, password },
                history
            )
            )
        },
        setErr: (message)=>dispatch({
            type: "REGISTER_USER_FAILED",
            payload: {response:{data:{message}}}
        }),
        clearError: ()=>dispatch({
            type: 'CLEAR_ERROR'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
